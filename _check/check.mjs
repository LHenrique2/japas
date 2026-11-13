// Scanner estático — Japa's House Bistrô
// Rodar: node _check/check.mjs
//
// Heurísticas:
//  - XSS por TAINT: só interessa dado controlável pelo usuário chegando a um sink de HTML.
//    O scanner resolve a "origem" de cada interpolação e exige esc() no caminho.
//  - Só conta como duplicado de ID o que realmente coexiste no DOM (não ramos alternativos).
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => readFileSync(join(ROOT, f), 'utf8');

const htmlFiles = readdirSync(ROOT).filter((f) => f.endsWith('.html'));
const js = read('app.js');
const htmls = Object.fromEntries(htmlFiles.map((f) => [f, read(f)]));
const allHtml = htmlFiles.map((f) => htmls[f]).join('\n');

const findings = [];
const add = (sev, area, file, msg) => findings.push({ sev, area, file, msg });
const lineOf = (text, idx) => text.slice(0, idx).split('\n').length;

// ════════════════════════════════════════════════════════════
// 1. XSS por taint
// ════════════════════════════════════════════════════════════
// Origens: campos que o usuário/admin digita e que voltam como string.
const TAINT = [
  // pedido do cliente
  { re: /\border\.(customer|name|phone|address|payment|items|notes|changeFor|deliveryFeeLabel)\b/, label: 'pedido do cliente' },
  // item do carrinho (nome do prato vem do cardápio, editável pelo admin)
  { re: /\bitem\.(name|desc|badge|img)\b/, label: 'item do carrinho' },
  // prato do cardápio (editável pelo painel admin → localStorage)
  { re: /\bdish\.(name|desc|badge|img|category)\b/, label: 'prato do cardápio' },
  // zona de entrega (nome editável pelo admin)
  { re: /\bzone\.(name|fee)\b/, label: 'zona de entrega' },
  // valores lidos direto do storage
  { re: /\bs\.(dishData|adminOrders|deliveryZones)\b/, label: 'localStorage' }
];

function tainted(expr) {
  for (const t of TAINT) if (t.re.test(expr)) return t.label;
  return null;
}

// Decide se a expressão é segura apesar de conter uma origem tainted.
// Seguro = valor já escapado (esc(...)), coerção numérica, ou a origem aparece
// só como condição de ternário cujos ramos foram removidos junto com esc().
function isSafeExpr(expr, taintRe) {
  let s = expr;
  s = s.replace(/esc\s*\([^()]*\)/g, 'ESC');                                                // remove esc(...)
  s = s.replace(/\(?\s*Number\s*\([^()]*\)\s*(\|\|\s*0)?\s*\)?\s*\.toFixed\s*\(\s*2\s*\)/g, 'NUM'); // Number(x)||0).toFixed(2)
  s = s.replace(/\bparseFloat\s*\([^()]*\)/g, 'NUM');
  if (!taintRe.test(s)) return true;                                                        // não sobrou nada tainted
  const cond = s.match(/^\s*\(?\s*([A-Za-z_$][\w.$]*)\s*\)?\s*\?/);                         // X ? a : b
  if (cond && taintRe.test(cond[1])) return true;                                           // origem só como condição
  return false;
}

// Extrai as interpolações do template literal MAIS EXTERNO de um statement,
// respeitando templates aninhados.
function outerInterpolations(stmt) {
  const out = [];
  let i = 0;
  // acha a primeira crase que abre o template
  while (i < stmt.length && stmt[i] !== '`') i++;
  if (i >= stmt.length) return out;
  let depth = 0;
  for (i++; i < stmt.length; i++) {
    const c = stmt[i];
    if (c === '\\') { i++; continue; }
    if (c === '$' && stmt[i + 1] === '{') {
      // captura a expressão (equilibra chaves, ignorando strings internas)
      let j = i + 2, braces = 1, expr = '';
      while (j < stmt.length && braces > 0) {
        if (stmt[j] === '{') braces++;
        else if (stmt[j] === '}') { braces--; if (braces === 0) break; }
        expr += stmt[j]; j++;
      }
      out.push(expr);
      i = j;
      continue;
    }
    if (c === '`') {
      // fim do template externo OU início de um aninhado
      if (depth === 0) return out;
    }
  }
  return out;
}

const SANK_RE = /(?:innerHTML|outerHTML)\s*=\s*/g;
for (const [file, text] of [['app.js', js], ...htmlFiles.map((f) => [f, htmls[f]])]) {
  let m;
  while ((m = SANK_RE.exec(text))) {
    const start = m.index;
    const win = text.slice(start, start + 4000);
    const end = win.indexOf(';');
    const stmt = end > 0 ? win.slice(0, end) : win;
    const interps = outerInterpolations(stmt);
    const risks = [];
    for (const expr of interps) {
      const taint = TAINT.find((t) => t.re.test(expr));
      if (!taint) continue;
      if (isSafeExpr(expr, taint.re)) continue;
      risks.push(`${taint.label}: \${${expr.trim().slice(0, 70)}}`);
    }
    if (risks.length) {
      add('XSS', 'taint-to-html-sink', file,
        `linha ${lineOf(text, start)} — ${risks.length} origem não escapada → ${risks.slice(0, 3).join(' | ').slice(0, 190)}`);
    }
  }
}

// ════════════════════════════════════════════════════════════
// 2. IDs órfãos (JS pede um id que não existe no HTML)
// ════════════════════════════════════════════════════════════
const htmlIds = new Set([...allHtml.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
const jsIds = new Set([...js.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)].map((x) => x[1]));
// IDs que o próprio app.js cria via innerHTML/createElement (ex.: modal da mesa)
const jsCreatedIds = new Set([
    ...[...js.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]),
    ...[...js.matchAll(/\.id\s*=\s*['"]([^'"]+)['"]/g)].map((x) => x[1])
]);
const createdDynamically = new Set(['activeDishModal', 'orderToast', 'toast']);
const orphanIds = [...jsIds].filter((id) => !htmlIds.has(id) && !jsCreatedIds.has(id) && !createdDynamically.has(id));
if (orphanIds.length) add('WARN', 'orphan-id', 'app.js', `${orphanIds.length} id(s) sem correspondente no HTML: ${orphanIds.join(', ')}`);

// ════════════════════════════════════════════════════════════
// 3. IDs duplicados — só conta se coexistem no MESMO bloco vivo
//    (o bloco <script type="text/plain"> é legado desativado: ignorado)
// ════════════════════════════════════════════════════════════
for (const [file, text] of Object.entries(htmls)) {
  // remove blocos legacy desativados antes de contar
  const live = text.replace(/<script[^>]*type="text\/plain"[^>]*>[\s\S]*?<\/script>/gi, '');
  const seen = new Map();
  for (const mm of live.matchAll(/\sid="([^"]+)"/g)) seen.set(mm[1], (seen.get(mm[1]) || 0) + 1);
  for (const [id, n] of seen) if (n > 1) add('WARN', 'duplicate-id', file, `id="${id}" aparece ${n}x no HTML vivo`);
}

// ════════════════════════════════════════════════════════════
// 4. Credenciais hardcoded
// ════════════════════════════════════════════════════════════
for (const mm of js.matchAll(/pass\s*===?\s*['"]([^'"]{1,40})['"]/gi)) {
  add('P0', 'hardcoded-credential', 'app.js', `senha comparada no código: "${mm[1]}" (linha ${lineOf(js, mm.index)})`);
}
for (const mm of js.matchAll(/DEFAULT_PASS\s*=\s*['"]([^'"]{1,40})['"]/gi)) {
  add('P0', 'hardcoded-credential', 'app.js', `senha padrão: "${mm[1]}" (linha ${lineOf(js, mm.index)})`);
}

// ════════════════════════════════════════════════════════════
// 5. Pedido do cliente realmente sai do navegador?
// ════════════════════════════════════════════════════════════
const ci = js.indexOf('function handleCheckout');
if (ci >= 0) {
  const body = js.slice(ci, js.indexOf('\n        function ', ci + 10));
  if (/const msg\s*=/.test(body) && !/window\.open|fetch\(|wa\.me/.test(body)) {
    add('P0', 'order-never-sent', 'app.js',
      'handleCheckout() monta a mensagem de WhatsApp mas nunca a envia — o pedido fica só no localStorage do cliente');
  }
  if (/localStorage/.test(js.slice(js.indexOf('function addNewOrderToAdmin'), js.indexOf('function updateOrderBadges')))) {
    add('P0', 'order-storage-scope', 'app.js',
      'addNewOrderToAdmin() grava o pedido no localStorage de QUEM comprou — o painel do restaurante lê outro navegador');
  }
}

// ════════════════════════════════════════════════════════════
// 6. Sincronização entre abas/navegadores
// ════════════════════════════════════════════════════════════
if (!/addEventListener\(\s*['"]storage['"]/.test(js)) {
  add('WARN', 'no-cross-tab-sync', 'app.js',
    'nenhum listener do evento "storage" → preço/ Cardápio editados no painel não chegam a outras abas nem a outros clientes');
}

// ════════════════════════════════════════════════════════════
// 7. Código morto
// ════════════════════════════════════════════════════════════
const defined = [...new Set([...js.matchAll(/function\s+(\w+)\s*\(/g)].map((x) => x[1]))];
const dead = defined.filter((fn) => {
  const inJs = [...js.matchAll(new RegExp(`\\b${fn}\\s*\\(`, 'g'))].length;
  const inHtml = [...allHtml.matchAll(new RegExp(`["'\\s]${fn}\\s*\\(`, 'g'))].length;
  // passada como callback (map/filter/forEach/setInterval/onclick=) conta como uso
  const comoCallback = [...js.matchAll(new RegExp(`[,\\(\\s]${fn}\\b(?![\\w$])`, 'g'))].length;
  return inJs <= 1 && inHtml === 0 && comoCallback === 0;
});
if (dead.length) add('INFO', 'dead-code', 'app.js', `${dead.length} função(ões) nunca chamada(s): ${dead.join(', ')}`);

const stubs = [...js.matchAll(/function\s+(\w+)\s*\([^)]*\)\s*\{\s*\}/g)];
for (const mm of stubs) add('INFO', 'empty-stub', 'app.js', `função vazia (resto de refactor): ${mm[1]}() — linha ${lineOf(js, mm.index)}`);

// bloco legado desativado
for (const [file, text] of Object.entries(htmls)) {
  for (const mm of text.matchAll(/<script[^>]*type="text\/plain"[^>]*>([\s\S]*?)<\/script>/gi)) {
    const kb = Math.round(mm[1].length / 1024);
    const pct = Math.round((mm[1].length / text.length) * 100);
    const fns = [...mm[1].matchAll(/function\s+(\w+)\s*\(/g)].map((x) => x[1]);
    add('WARN', 'legacy-block', file,
      `bloco legado desativado (type="text/plain"): ${kb} KB / ${pct}% do arquivo, ${fns.length} funções mortas`);
  }
}

// ════════════════════════════════════════════════════════════
// 8. Persistência
// ════════════════════════════════════════════════════════════
for (const mm of js.matchAll(/localStorage\.(setItem|getItem)\(\s*['"]([^'"]+)['"]/g)) {
  add('INFO', 'localstorage', 'app.js', `${mm[1]}("${mm[2]}") — linha ${lineOf(js, mm.index)}`);
}

// ════════════════════════════════════════════════════════════
// 9. Acessibilidade
// ════════════════════════════════════════════════════════════
for (const [file, text] of Object.entries(htmls)) {
  const live = text.replace(/<script[^>]*type="text\/plain"[^>]*>[\s\S]*?<\/script>/gi, '');
  const noAlt = [...live.matchAll(/<img\b[^>]*>/g)].filter((x) => !/\balt=/.test(x[0]));
  if (noAlt.length) add('WARN', 'a11y-img-alt', file, `${noAlt.length} <img> sem atributo alt`);
  // Só acusa páginas que TÊM modal (container fixo em tela cheia ou id terminado em Modal)
  const temModal = /id="[^"]*[Mm]odal[^"]*"/.test(live) || /class="[^"]*fixed[^"]*inset-0/.test(live);
  if (temModal && !/role="dialog"|aria-modal/.test(live)) add('INFO', 'a11y-modal', file, 'modais sem role="dialog"/aria-modal');
}
if (/requestAnimationFrame\(drawSakura\)/.test(js) && !/prefers-reduced-motion/.test(js.slice(js.indexOf('function initSakura'), js.indexOf('function renderMenuTabs')))) {
  add('WARN', 'a11y-motion', 'app.js', 'canvas de sakura roda em requestAnimationFrame sem respeitar prefers-reduced-motion (a roleta 3D respeita)');
}

// ════════════════════════════════════════════════════════════
// 10. Dependências externas
// ════════════════════════════════════════════════════════════
const ext = new Set();
for (const text of [js, ...Object.values(htmls)]) {
  for (const mm of text.matchAll(/https?:\/\/([a-z0-9.-]+)\//gi)) ext.add(mm[1]);
}
add('INFO', 'external-deps', '-', `hosts externos: ${[...ext].join(', ')}`);

// ════════════════════════════════════════════════════════════
// 11. Pendências reais (TODO/FIXME de verdade)
// ════════════════════════════════════════════════════════════
for (const [file, text] of [['app.js', js], ...htmlFiles.map((f) => [f, htmls[f]])]) {
  for (const mm of text.matchAll(/\b(TODO|FIXME|HACK|XXX)\b[:\s]+(.{0,70})/g)) {
    add('INFO', 'todo', file, `${mm[1]} — "${mm[2].trim()}" (linha ${lineOf(text, mm.index)})`);
  }
}

// ════════════════════════════════════════════════════════════
// Relatório
// ════════════════════════════════════════════════════════════
const SEV = { P0: '🔴 P0', XSS: '🔴 P0', WARN: '🟡 WARN', INFO: '⚪ INFO' };
console.log('\n═══ SCAN ESTÁTICO — Japa\'s House Bistrô ═══\n');
for (const sev of ['P0', 'XSS', 'WARN', 'INFO']) {
  const list = findings.filter((f) => f.sev === sev);
  if (!list.length) continue;
  console.log(`\n${SEV[sev]}  (${list.length})`);
  const byArea = {};
  for (const f of list) (byArea[f.area] ||= []).push(f);
  for (const [area, items] of Object.entries(byArea)) {
    console.log(`\n  ▸ ${area}`);
    for (const it of items) console.log(`     ${it.file}: ${it.msg}`);
  }
}
console.log(`\n${'═'.repeat(46)}\nTotal: ${findings.length} achado(s)\n`);

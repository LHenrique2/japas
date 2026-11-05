// Mede duplicação entre o JS inline dos HTMLs e o app.js
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => readFileSync(join(ROOT, f), 'utf8');
const appjs = read('app.js');

// normaliza: remove comentários, espaços, indentação
const norm = (s) =>
  s
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\s+/g, ' ')
    .trim();

// extrai blocos <script> sem src
function inlineBlocks(html) {
  const out = [];
  const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) out.push({ body: m[1], start: m.index });
  return out;
}

const appFns = new Set([...appjs.matchAll(/function\s+(\w+)\s*\(/g)].map((x) => x[1]));

for (const file of readdirSync(ROOT).filter((f) => f.endsWith('.html'))) {
  const html = read(file);
  const blocks = inlineBlocks(html);
  console.log(`\n${'═'.repeat(60)}\n${file}  —  ${html.length} bytes, ${blocks.length} bloco(s) <script> inline\n`);

  blocks.forEach((b, i) => {
    const size = b.body.length;
    const line = html.slice(0, b.start).split('\n').length;
    const fns = [...b.body.matchAll(/function\s+(\w+)\s*\(/g)].map((x) => x[1]);
    const dupFns = fns.filter((f) => appFns.has(f));
    const pct = fns.length ? Math.round((dupFns.length / fns.length) * 100) : 0;

    console.log(`  bloco #${i + 1}  linha ~${line}  ${size} bytes  ${b.body.split('\n').length} linhas`);
    console.log(`    funções: ${fns.length}  |  duplicadas no app.js: ${dupFns.length} (${pct}%)`);
    if (dupFns.length) console.log(`    → ${dupFns.join(', ')}`);

    // block-level duplicate check
    const n = norm(b.body);
    if (n.length > 200 && norm(appjs).includes(n.slice(0, 400))) {
      console.log(`    ⚠ o início deste bloco é byte-a-byte igual ao app.js`);
    }
    if (n.length > 200 && norm(appjs).includes(n.slice(-400))) {
      console.log(`    ⚠ o FIM deste bloco é byte-a-byte igual ao app.js`);
    }
  });
}

// duplicação entre os dois HTMLs
const h1 = norm(read('index.html'));
const h2 = norm(read('cardapio.html'));
const fns1 = new Set([...read('index.html').matchAll(/function\s+(\w+)\s*\(/g)].map((x) => x[1]));
const fns2 = new Set([...read('cardapio.html').matchAll(/function\s+(\w+)\s*\(/g)].map((x) => x[1]));
const shared = [...fns1].filter((f) => fns2.has(f));
console.log(`\n${'═'.repeat(60)}\nindex.html ∩ cardapio.html → ${shared.length} função(ões) com o MESMO nome:`);
console.log(`  ${shared.join(', ')}\n`);

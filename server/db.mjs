// ============================================================================
// JAPA'S HOUSE BISTRÔ — Camada de banco de dados (SQLite via better-sqlite3)
// ----------------------------------------------------------------------------
// Cria o schema, popula os dados iniciais (seed) e exporta a conexão `db`.
// O seed do cardápio lê o array `dishData` do próprio app.js do projeto, então
// o primeiro "npm start" migra automaticamente os ~82 pratos existentes.
// ============================================================================

import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const DB_PATH = process.env.DB_PATH
  ? path.resolve(ROOT, process.env.DB_PATH)
  : path.join(__dirname, 'data', 'japa.sqlite');

// Garante o diretório do banco
const dir = path.dirname(DB_PATH);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

export const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// ── Schema ─────────────────────────────────────────────────────────────────
db.exec(`
CREATE TABLE IF NOT EXISTS admin_users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT UNIQUE NOT NULL DEFAULT 'admin',
  password_hash TEXT NOT NULL,
  created_at    TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS menu_items (
  id         INTEGER PRIMARY KEY,
  name       TEXT NOT NULL,
  category   TEXT NOT NULL,
  price      REAL NOT NULL,
  badge      TEXT DEFAULT '',
  img        TEXT DEFAULT '',
  desc       TEXT DEFAULT '',
  sort_order INTEGER DEFAULT 0,
  available  INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS orders (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT,
  customer            TEXT DEFAULT '',
  phone               TEXT DEFAULT '',
  address             TEXT DEFAULT '',
  district            TEXT DEFAULT '',
  complement          TEXT DEFAULT '',
  payment             TEXT DEFAULT '',
  items               TEXT DEFAULT '',
  items_json          TEXT DEFAULT '[]',
  subtotal            REAL DEFAULT 0,
  delivery_fee        REAL DEFAULT 0,
  delivery_fee_label  TEXT DEFAULT '',
  total               REAL DEFAULT 0,
  notes               TEXT DEFAULT '',
  change_for          TEXT DEFAULT '',
  status              TEXT DEFAULT 'Pendente',
  source              TEXT DEFAULT 'site',
  created_at          TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS delivery_zones (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  fee        REAL DEFAULT 0,
  sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS config (
  key   TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE IF NOT EXISTS store_status (
  id         INTEGER PRIMARY KEY CHECK (id = 1),
  status      TEXT DEFAULT 'auto',
  updated_at  TEXT DEFAULT (datetime('now'))
);

-- Mesas do salão (comandas em mesa)
CREATE TABLE IF NOT EXISTS tables (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT NOT NULL,
  seats      INTEGER DEFAULT 4,
  code       TEXT NOT NULL UNIQUE,
  active     INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Comandas abertas em mesa (viram pedido ao serem fechadas)
CREATE TABLE IF NOT EXISTS commands (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  table_id   INTEGER NOT NULL,
  status     TEXT DEFAULT 'Aberta',
  items_json TEXT DEFAULT '[]',
  subtotal   REAL DEFAULT 0,
  total      REAL DEFAULT 0,
  customer   TEXT DEFAULT '',
  phone      TEXT DEFAULT '',
  notes      TEXT DEFAULT '',
  opened_at  TEXT DEFAULT (datetime('now')),
  closed_at  TEXT,
  order_id   INTEGER,
  FOREIGN KEY(table_id) REFERENCES tables(id)
);

-- Variações do cardápio com preço próprio (Temaki Customizado).
-- Ficam fora do menu público, mas o servidor usa esta tabela para precificar
-- o pedido quando o cliente monta o temaki no site.
CREATE TABLE IF NOT EXISTS menu_variations (
  name       TEXT PRIMARY KEY,
  price      REAL NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
`);

// ── Migrações leves (colunas novas em tabelas que já existem) ───────────────
function garantirColuna(tabela, coluna, tipo) {
    const existe = db.prepare(`PRAGMA table_info(${tabela})`).all().some(c => c.name === coluna);
    if (!existe) db.exec(`ALTER TABLE ${tabela} ADD COLUMN ${coluna} ${tipo}`);
}
garantirColuna('orders', 'table_id', 'INTEGER DEFAULT NULL');
garantirColuna('orders', 'order_source', "TEXT DEFAULT 'site'");
garantirColuna('commands', 'waiter_called', 'INTEGER DEFAULT 0');
garantirColuna('commands', 'waiter_called_at', 'TEXT');

// ── Seed do cardápio a partir do app.js ────────────────────────────────────
// Lê o array `dishData` do front e importa os pratos. É uma migração one-time:
// só roda quando a tabela está vazia. Os dados vêm do próprio projeto (não há
// input externo), então o uso de Function() aqui é seguro.
function seedMenuIfEmpty() {
  const count = db.prepare('SELECT COUNT(*) AS c FROM menu_items').get().c;
  if (count > 0) return;

  let dishes = [];
  try {
    const appPath = path.join(ROOT, 'app.js');
    if (!fs.existsSync(appPath)) return;
    const src = fs.readFileSync(appPath, 'utf8');
    const match = src.match(/let\s+dishData\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) return;
    // Converte o literal de array do JS em objeto real (dados do próprio projeto)
    dishes = new Function('return ' + match[1])();
    if (!Array.isArray(dishes)) dishes = [];
  } catch {
    dishes = [];
  }

  if (!dishes.length) {
    console.warn('⚠️  Seed do cardápio: não consegui ler dishData do app.js. O painel admin pode cadastrar os itens manualmente.');
    return;
  }

  const insert = db.prepare(
    `INSERT OR REPLACE INTO menu_items (id, name, category, price, badge, img, desc, sort_order)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  );
  const tx = db.transaction((rows) => {
    rows.forEach((d, i) => insert.run(
      Number(d.id) || (i + 1),
      d.name, d.category,
      Number(d.price) || 0,
      d.badge || '', d.img || '', d.desc || '',
      i
    ));
  });
  tx(dishes);
  console.log(`✅ Seed do cardápio: ${dishes.length} itens importados do app.js.`);
}

// ── Config do site lida do config.js (fonte única de verdade) ──────────────
// O config.js é um arquivo de navegador (window.JAPA = {...}). Aqui a gente
// extrai o objeto de configuración para o servidor usar a MESMA fonte do front
// (horário, telefone, endereço, regras de entrega) sem duplicar valores.
function lerConfigDoSite() {
    try {
        const cfgPath = path.join(ROOT, 'config.js');
        if (!fs.existsSync(cfgPath)) return null;
        const src = fs.readFileSync(cfgPath, 'utf8');

        const inicio = src.indexOf('window.JAPA');
        if (inicio < 0) return null;
        const abre = src.indexOf('{', inicio);
        if (abre < 0) return null;

        // Percorre o objeto contando chaves, ignorando strings e comentários
        let nivel = 0;
        let fim = -1;
        let emString = null;
        for (let i = abre; i < src.length; i++) {
            const c = src[i];
            const anterior = i > 0 ? src[i - 1] : '';
            if (emString) {
                if (c === emString && anterior !== '\\') emString = null;
                continue;
            }
            if (c === '"' || c === "'" || c === '`') { emString = c; continue; }
            if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
            if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2); if (i < 0) break; i++; continue; }
            if (c === '{') nivel++;
            else if (c === '}') {
                nivel--;
                if (nivel === 0) { fim = i + 1; break; }
            }
        }
        if (fim < 0) return null;

        // Dados do próprio projeto (sem input externo): avaliar o literal é seguro
        const cfg = new Function('return (' + src.slice(abre, fim) + ')')();
        if (!cfg || typeof cfg !== 'object') return null;

        // Senhas nunca entram no banco pelo config.js
        if (cfg.admin && typeof cfg.admin === 'object') delete cfg.admin.passwords;
        return cfg;
    } catch (e) {
        console.warn('⚠️  Não consegui ler o config.js:', e.message);
        return null;
    }
}

// ── Seed de admin, config e status da loja ─────────────────────────────────
function gerarSenhaAleatoria(tam = 16) {
    const alfabeto = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
    const simbolos = '!@#$%&*?';
    const chars = [...alfabeto];
    for (let i = chars.length - 1; i > 0; i--) {
        const j = crypto.randomInt(i + 1);
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join('') + simbolos[crypto.randomInt(simbolos.length)];
}

function seedDefaults() {
  // Admin do painel: a senha vem do ADMIN_PASSWORD (variável de ambiente).
  //
  // O servidor SEMPRE sobe — nunca sai com erro por falta de variável, para
  // não travar a publicação. Mas também nunca existe senha conhecida:
  //   • com ADMIN_PASSWORD  → usa a senha que você escolheu;
  //   • sem ADMIN_PASSWORD em produção → gera uma senha forte e mostra no log;
  //   • sem ADMIN_PASSWORD em desenvolvimento → '1234' (com aviso).
  const adminCount = db.prepare('SELECT COUNT(*) AS c FROM admin_users').get().c;
  if (adminCount === 0) {
    const production = process.env.NODE_ENV === 'production';
    const senhaAdmin = String(process.env.ADMIN_PASSWORD || '').trim();

    if (senhaAdmin && senhaAdmin.length < 4) {
      console.error('❌ ADMIN_PASSWORD precisa de pelo menos 4 caracteres.');
      process.exit(1);
    }

    let senha = senhaAdmin;
    let aviso = '';
    if (!senha) {
      if (production) {
        senha = gerarSenhaAleatoria();
        aviso = 'senha gerada automaticamente';
      } else {
        senha = '1234';
        aviso = "senha padrão '1234' (apenas para desenvolvimento)";
      }
    }

    const hash = bcrypt.hashSync(senha, 10);
    db.prepare('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)').run('admin', hash);

    if (senhaAdmin) {
      console.log("✅ Seed admin: usuário 'admin' criado com a senha do ADMIN_PASSWORD.");
    } else if (production) {
      console.warn('⚠️  ADMIN_PASSWORD não definido — o servidor sobe mesmo assim, com uma senha gerada agora:');
      console.warn('   👤 usuário: admin');
      console.warn('   🔑 senha:  ' + senha);
      console.warn('   Defina ADMIN_PASSWORD no painel do Render para a senha não mudar a cada reinício.');
    } else {
      console.warn("⚠️  ADMIN_PASSWORD não definido: admin criado com a senha padrão '1234' (apenas em desenvolvimento).");
    }
  }

  // Config do site: lida do config.js (FONTE ÚNICA) — o servidor não repete
  // telefone/endereço/horário em código. Só o que o painel usa fica no banco.
  const cfgCount = db.prepare('SELECT COUNT(*) AS c FROM config').get().c;
  if (cfgCount === 0) {
    const cfg = lerConfigDoSite();
    const defaults = cfg || {
      business: {
        name: "Japa's House Bistrô",
        legalName: "Japa's House Bistrô",
        slogan: 'Gastronomia interativa no coração da Vila Velha',
        phone: '5524998833667',
        phoneDisplay: '(24) 99883-3667',
        address: {
          street: 'R. Pres. Vargas, 294',
          district: 'Vila Velha',
          city: 'Rio Claro',
          state: 'RJ',
          zip: '27460-000',
          country: 'BR'
        },
        mapsUrl: 'https://maps.google.com/?cid=17033034131856278365',
        reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJb7ee3363ce239c_5dc3654c4c7e61ec',
        instagram: 'https://instagram.com/japashousebistro',
        instagramHandle: '@japashousebistro',
        facebook: '', ifood: '', deliveryApp: '',
        priceRange: '$$',
        hours: [
          { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '11:30', closes: '14:30' },
          { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '19:00', closes: '22:30' },
          { days: ['Friday', 'Saturday'], opens: '11:30', closes: '14:30' },
          { days: ['Friday', 'Saturday'], opens: '19:00', closes: '23:00' },
          { days: ['Sunday'], opens: '12:00', closes: '15:00' }
        ],
        hoursText: [
          'Ter - Qui: 11:30–14:30 | 19:00–22:30',
          'Sex - Sáb: 11:30–14:30 | 19:00–23:00',
          'Domingo: 12:00–15:00',
          'Segunda-feira: Fechado'
        ]
      },
      delivery: {
        minOrder: 30.00,
        freeDeliveryOver: 80.00,
        excludedDistricts: [],
        note: 'Entregamos na Vila Velha e região. Pedido mínimo de R$ 30,00. Frete grátis acima de R$ 80,00.'
      },
      site: {
        url: 'https://japashousebistro.com.br',
        lang: 'pt-BR',
        locale: 'pt_BR',
        themeColor: '#090B10'
      },
      whatsapp: {
        greeting: "Olá! Vim pelo site do Japa's House e gostaria de:"
      },
      admin: {
        maxAttempts: 5,
        lockoutMinutes: 10
      }
    };
    const ins = db.prepare('INSERT OR REPLACE INTO config (key, value) VALUES (?, ?)');
    for (const [k, v] of Object.entries(defaults)) ins.run(k, JSON.stringify(v));
    console.log(cfg
      ? '✅ Seed config: valores lidos do config.js (fonte única).'
      : '✅ Seed config: valores padrão carregados (config.js não pôde ser lido).');
  }

  // Status da loja (auto = segue horário)
  db.prepare('INSERT OR IGNORE INTO store_status (id, status) VALUES (1, ?)').run('auto');

  // Mesas padrão do salão (o gerente renomeia/remove pelo painel)
  const mesasCount = db.prepare('SELECT COUNT(*) AS c FROM tables').get().c;
  if (mesasCount === 0) {
    const ins = db.prepare('INSERT INTO tables (name, seats, code, sort_order) VALUES (?, ?, ?, ?)');
    const alfabeto = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem I, O, 0 e 1 (evita confusão)
    const gerarCodigo = () => {
      let c = '';
      for (let i = 0; i < 4; i++) c += alfabeto[Math.floor(Math.random() * alfabeto.length)];
      return c;
    };
    const mesas = [
      ['Mesa 1', 4], ['Mesa 2', 4], ['Mesa 3', 4], ['Mesa 4', 6],
      ['Mesa 5', 6], ['Mesa 6', 8], ['Varanda', 6], ['Balcão do Bar', 3]
    ];
    mesas.forEach(([nome, lugares], i) => {
      let codigo = gerarCodigo();
      while (db.prepare('SELECT 1 FROM tables WHERE code = ?').get(codigo)) codigo = gerarCodigo();
      ins.run(nome, lugares, codigo, i);
    });
    console.log('✅ Seed mesas: ' + mesas.length + ' mesas criadas (códigos exibidos no painel).');
  }

  // Bairros de entrega: vêm do config.js (FONTE ÚNICA). Assim eles voltam
  // sozinhos se o banco for recriado (ex.: disco efêmero do Render) e o
  // gerente pode editar a taxa pelo painel em tempo de uso.
  const zonasCount = db.prepare('SELECT COUNT(*) AS c FROM delivery_zones').get().c;
  if (zonasCount === 0) {
    const cfgZonas = lerConfigDoSite();
    const zonas = (cfgZonas && cfgZonas.delivery && Array.isArray(cfgZonas.delivery.zones))
      ? cfgZonas.delivery.zones : [];
    let criadas = 0;
    const insZona = db.prepare('INSERT INTO delivery_zones (id, name, fee, sort_order) VALUES (?, ?, ?, ?)');
    zonas.forEach((z, i) => {
      const nome = String((z && z.name) || '').trim();
      if (!nome) return;
      insZona.run('zseed' + Date.now().toString(36) + i, nome, Math.max(0, Number(z.fee) || 0), i);
      criadas++;
    });
    if (criadas) console.log('✅ Seed opções de entrega: ' + criadas + ' opção(ões) do config.js.');
  }

  // Variações com preço próprio: Temaki Customizado (proteína + estilo).
  // O preço fica no servidor — o site nunca decide quanto custa.
  const variacoes = [
    ['Salmão Fresco', 28], ['Camarão Empanado', 32], ['Shimeji na Manteiga', 26],
    ['Tradicional Cru', 0], ['Flambado no Maçarico', 3], ['Hot Empanado', 5]
  ];
  const proteinas = variacoes.slice(0, 3);
  const estilos = variacoes.slice(3);
  const insVar = db.prepare('INSERT OR IGNORE INTO menu_variations (name, price) VALUES (?, ?)');
  proteinas.forEach(([p, precoP]) => {
    estilos.forEach(([e, precoE]) => {
      insVar.run(`Temaki Customizado (${p} - ${e})`, Number(precoP) + Number(precoE));
    });
  });
}

export function seedAll() {
  seedMenuIfEmpty();
  seedDefaults();
}

export default db;

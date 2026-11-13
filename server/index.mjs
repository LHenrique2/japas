// ============================================================================
// JAPA'S HOUSE BISTRÔ — Servidor (Express + SQLite)
// ----------------------------------------------------------------------------
// Inicializa o banco (seed), registra as rotas da API e serve o front estático
// (HTML/CSS/JS/imagens) da raiz do projeto.
// ============================================================================

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import { seedAll } from './db.mjs';
import authRoutes from './routes/auth.mjs';
import menuRoutes from './routes/menu.mjs';
import ordersRoutes from './routes/orders.mjs';
import zonesRoutes from './routes/zones.mjs';
import configRoutes from './routes/config.mjs';
import tablesRoutes from './routes/tables.mjs';
import commandsRoutes from './routes/commands.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// Avisa se o JWT_SECRET ainda é o fallback inseguro
if (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'troque-este-segredo-em-producao') {
  console.warn('⚠️  JWT_SECRET não configurado no .env — usando fallback inseguro. Ajuste antes de publicar!');
}

// Cria/_atualiza os dados iniciais do banco
seedAll();

const app = express();

// CORS: em produção restringe à origem configurada em CORS_ORIGIN; em dev aceita qualquer uma.
const corsOrigin = process.env.CORS_ORIGIN || '';
app.use(cors(corsOrigin
  ? { origin: corsOrigin, optionsSuccessStatus: 200 }
  : {}
));

app.use(express.json({ limit: '1mb' }));

// Pequeno log de requisições da API (ajuda no diagnóstico)
app.use('/api', (req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// ── API ────────────────────────────────────────────────────────────────────
app.use('/api/admin', authRoutes);     // /api/admin/login, /api/admin/change-password
app.use('/api/menu', menuRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/zones', zonesRoutes);
app.use('/api/config', configRoutes);  // /api/config, /api/config/store-status
app.use('/api/tables', tablesRoutes);  // /api/tables (mesas do salão)
app.use('/api/commands', commandsRoutes); // /api/commands (comandas em mesa)

// ── Front estático (somente o que é público) ────────────────────────────────
// ATENÇÃO: servir a raiz inteira do projeto exporia o .env, o banco SQLite
// (server/data/) e o código do backend para qualquer visitante. Por isso o
// front só é servido a partir de uma lista de caminhos públicos.
const PUBLIC_PATHS = new Set([
    '/', '/index.html', '/index',
    '/cardapio', '/cardapio.html',
    '/imprimir', '/imprimir.html',
    '/privacidade', '/privacidade.html',
    '/404', '/404.html',
    '/app.js', '/styles.css', '/config.js', '/favicon.svg',
    '/robots.txt', '/sitemap.xml', '/site.webmanifest'
]);

app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    const caminho = req.path.replace(/\/+$/, '') || '/';
    if (PUBLIC_PATHS.has(caminho) || caminho.startsWith('/imagens/')) return next();
    return res.status(404).sendFile(path.join(ROOT, '404.html'));
});

app.get('/', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));

app.use(express.static(ROOT, { extensions: ['html'], index: false, dotfiles: 'ignore' }));

// Fallback amigável para rotas desconhecidas
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Rota não encontrada.' });
  }
  res.status(404).sendFile(path.join(ROOT, '404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🍱 Japa's House Bistrô — backend no ar em http://localhost:${PORT}`);
  console.log(`   API:  http://localhost:${PORT}/api/menu`);
  console.log(`   Site: http://localhost:${PORT}/`);
  console.log(`   Banco: ${path.relative(ROOT, process.env.DB_PATH ? path.resolve(ROOT, process.env.DB_PATH) : path.join(__dirname, 'data', 'japa.sqlite'))}\n`);
});

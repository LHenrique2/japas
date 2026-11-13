// ============================================================================
// Rota: /api/config — dados do restaurante, regras de entrega e status da loja
// ============================================================================

import { Router } from 'express';
import { db } from '../db.mjs';
import { authMiddleware } from '../auth.mjs';

const router = Router();
const EDITABLE_KEYS = ['business', 'delivery', 'site', 'whatsapp', 'admin'];

function getConfig() {
  const rows = db.prepare('SELECT key, value FROM config').all();
  const cfg = {};
  for (const r of rows) {
    try { cfg[r.key] = JSON.parse(r.value); }
    catch { cfg[r.key] = r.value; }
  }
  return cfg;
}

// Público — configuração visível ao site (NÃO inclui senhas, que estão em admin_users)
router.get('/', (req, res) => {
  res.json(getConfig());
});

// Admin — atualiza uma seção inteira (business, delivery, site, whatsapp, admin)
router.put('/:key', authMiddleware, (req, res) => {
  const key = req.params.key;
  if (!EDITABLE_KEYS.includes(key)) {
    return res.status(400).json({ error: 'Chave de configuração inválida.' });
  }
  db.prepare('INSERT OR REPLACE INTO config (key, value) VALUES (?, ?)').run(key, JSON.stringify(req.body));
  res.json({ ok: true });
});

// ── Status da loja (pausa manual do painel cozinha) ────────────────────────
// Público — qualquer um pode ver (o site precisa saber se está aberto)
router.get('/store-status', (req, res) => {
  const row = db.prepare('SELECT status FROM store_status WHERE id = 1').get();
  res.json({ status: row?.status || 'auto' });
});

// Admin — define 'auto' | 'aberto' | 'fechado'
router.put('/store-status', authMiddleware, (req, res) => {
  const status = req.body?.status;
  if (!['auto', 'aberto', 'fechado'].includes(status)) {
    return res.status(400).json({ error: 'Status inválido.' });
  }
  db.prepare("UPDATE store_status SET status = ?, updated_at = datetime('now') WHERE id = 1").run(status);
  res.json({ ok: true });
});

export default router;

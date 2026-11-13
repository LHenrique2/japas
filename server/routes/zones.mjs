// ============================================================================
// Rota: /api/zones — bairros e taxas de entrega (público leitura; admin CRUD)
// ============================================================================

import { Router } from 'express';
import { db } from '../db.mjs';
import { authMiddleware } from '../auth.mjs';

const router = Router();

function rowToZone(r) {
  return { id: r.id, name: r.name, fee: Number(r.fee) };
}

// Público — lista de bairros atendidos
router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM delivery_zones ORDER BY sort_order, name').all();
  res.json(rows.map(rowToZone));
});

// Admin — cadastra bairro
router.post('/', authMiddleware, (req, res) => {
  const { name, fee } = req.body || {};
  const cleanName = String(name || '').trim();
  if (!cleanName) return res.status(400).json({ error: 'Informe o nome do bairro.' });
  const existing = db.prepare('SELECT id FROM delivery_zones WHERE lower(name) = lower(?)').get(cleanName);
  if (existing) return res.status(409).json({ error: 'Este bairro já está cadastrado.' });

  const id = 'z' + Date.now() + Math.floor(Math.random() * 1000);
  db.prepare('INSERT INTO delivery_zones (id, name, fee) VALUES (?, ?, ?)').run(
    id, cleanName, Math.max(0, Number(fee) || 0)
  );
  res.json({ id });
});

// Admin — atualiza nome/taxa
router.put('/:id', authMiddleware, (req, res) => {
  const id = req.params.id;
  const existing = db.prepare('SELECT id FROM delivery_zones WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Bairro não encontrado.' });
  const { name, fee } = req.body || {};
  db.prepare(
    `UPDATE delivery_zones SET
       name = COALESCE(?, name),
       fee  = COALESCE(?, fee)
     WHERE id = ?`
  ).run(
    name == null ? null : String(name).trim(),
    fee == null ? null : Math.max(0, Number(fee) || 0),
    id
  );
  res.json({ ok: true });
});

// Admin — remove bairro
router.delete('/:id', authMiddleware, (req, res) => {
  db.prepare('DELETE FROM delivery_zones WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

export default router;

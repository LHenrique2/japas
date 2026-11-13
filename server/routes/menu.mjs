// ============================================================================
// Rota: /api/menu  — cardápio (público leitura; admin CRUD)
// ============================================================================

import { Router } from 'express';
import { db } from '../db.mjs';
import { authMiddleware } from '../auth.mjs';

const router = Router();

function rowToDish(r) {
  return {
    id: r.id,
    name: r.name,
    category: r.category,
    price: Number(r.price),
    badge: r.badge,
    img: r.img,
    desc: r.desc,
    available: !!r.available
  };
}

// Público — somente itens disponíveis, ordenados
router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM menu_items WHERE available = 1 ORDER BY sort_order, id').all();
  res.json(rows.map(rowToDish));
});

// Admin — todos os itens (inclui indisponíveis)
router.get('/all', authMiddleware, (req, res) => {
  const rows = db.prepare('SELECT * FROM menu_items ORDER BY sort_order, id').all();
  res.json(rows.map(rowToDish));
});

// Admin — criar item (id automático = maior id + 1)
router.post('/', authMiddleware, (req, res) => {
  const { name, category, price, badge, img, desc } = req.body || {};
  if (!name || !category || price == null) {
    return res.status(400).json({ error: 'Nome, categoria e preço são obrigatórios.' });
  }
  const id = db.prepare('SELECT COALESCE(MAX(id), 0) + 1 AS next FROM menu_items').get().next;
  db.prepare(
    `INSERT INTO menu_items (id, name, category, price, badge, img, desc)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(id, String(name), String(category), Number(price), badge || '', img || '', desc || '');
  res.json({ id });
});

// Admin — atualizar campos parciais de um item
router.put('/:id', authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT id FROM menu_items WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Item não encontrado.' });
  const { name, category, price, badge, img, desc } = req.body || {};
  db.prepare(
    `UPDATE menu_items SET
       name     = COALESCE(?, name),
       category = COALESCE(?, category),
       price    = COALESCE(?, price),
       badge    = COALESCE(?, badge),
       img      = COALESCE(?, img),
       desc     = COALESCE(?, desc)
     WHERE id = ?`
  ).run(
    name ?? null, category ?? null,
    price == null ? null : Number(price),
    badge ?? null, img ?? null, desc ?? null,
    id
  );
  res.json({ ok: true });
});

// Admin — excluir item
router.delete('/:id', authMiddleware, (req, res) => {
  db.prepare('DELETE FROM menu_items WHERE id = ?').run(Number(req.params.id));
  res.json({ ok: true });
});

export default router;

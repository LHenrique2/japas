// ============================================================================
// JAPA'S HOUSE BISTRÔ — Rota: /api/tables — mesas do salão
// ----------------------------------------------------------------------------
// O cliente NÃO precisa de login para ver a lista de mesas (só id/nome/lugares).
// O código da mesa (4 letras) é o que dá direito de mexer na comanda — sem ele
// ninguém adiciona itens a uma mesa que não é dele.
// ============================================================================

import { Router } from 'express';
import { db } from '../db.mjs';
import { authMiddleware } from '../auth.mjs';
import { gerarCodigoMesa } from '../precos.mjs';

const router = Router();

function listarMesas(incluirInativas = false) {
    const sql = incluirInativas
        ? 'SELECT id, name, seats, code, active, sort_order FROM tables ORDER BY sort_order, id'
        : 'SELECT id, name, seats FROM tables WHERE active = 1 ORDER BY sort_order, id';
    return db.prepare(sql).all().map(t => ({
        id: t.id,
        name: t.name,
        seats: t.seats,
        ...(incluirInativas ? { code: t.code, active: !!t.active } : {})
    }));
}

// Público — mesas ativas (sem código)
router.get('/', (req, res) => {
    res.json(listarMesas(false));
});

// Admin — todas as mesas, com código e estado
router.get('/admin', authMiddleware, (req, res) => {
    res.json(listarMesas(true));
});

// Admin — cria uma mesa
router.post('/', authMiddleware, (req, res) => {
    const name = String(req.body?.name || '').trim();
    if (name.length < 2) return res.status(400).json({ error: 'Informe o nome da mesa.' });

    const seats = Math.max(1, Math.min(30, Number(req.body?.seats) || 4));
    let codigo = gerarCodigoMesa();
    while (db.prepare('SELECT 1 FROM tables WHERE code = ?').get(codigo)) codigo = gerarCodigoMesa();

    const ultimo = db.prepare('SELECT COALESCE(MAX(sort_order), -1) AS m FROM tables').get().m;
    const info = db.prepare('INSERT INTO tables (name, seats, code, sort_order) VALUES (?, ?, ?, ?)')
        .run(name, seats, codigo, ultimo + 1);

    res.json({ id: info.lastInsertRowid, name, seats, code: codigo, active: true });
});

// Admin — edita a mesa (nome, lugares, ativa/desativa, novo código)
router.patch('/:id', authMiddleware, (req, res) => {
    const id = Number(req.params.id);
    const mesa = db.prepare('SELECT * FROM tables WHERE id = ?').get(id);
    if (!mesa) return res.status(404).json({ error: 'Mesa não encontrada.' });

    const name = req.body?.name !== undefined ? String(req.body.name).trim() : mesa.name;
    if (name.length < 2) return res.status(400).json({ error: 'Informe o nome da mesa.' });
    const seats = req.body?.seats !== undefined
        ? Math.max(1, Math.min(30, Number(req.body.seats) || 4))
        : mesa.seats;
    const active = req.body?.active !== undefined ? (req.body.active ? 1 : 0) : mesa.active;

    let codigo = mesa.code;
    // novoCodigo: true gera um código aleatório; uma string usa o código pedido
    if (req.body?.novoCodigo === true || (typeof req.body?.novoCodigo === 'string' && req.body.novoCodigo.length)) {
        if (req.body.novoCodigo === true) {
            codigo = gerarCodigoMesa();
            while (db.prepare('SELECT 1 FROM tables WHERE code = ? AND id <> ?').get(codigo, id)) {
                codigo = gerarCodigoMesa();
            }
        } else {
            codigo = String(req.body.novoCodigo).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
            if (codigo.length < 3) return res.status(400).json({ error: 'O código precisa ter ao menos 3 caracteres.' });
            const outro = db.prepare('SELECT 1 FROM tables WHERE code = ? AND id <> ?').get(codigo, id);
            if (outro) return res.status(409).json({ error: 'Já existe uma mesa com esse código.' });
        }
    }

    db.prepare('UPDATE tables SET name = ?, seats = ?, active = ?, code = ? WHERE id = ?')
        .run(name, seats, active, codigo, id);

    res.json({ ok: true, id, name, seats, active: !!active, code: codigo });
});

// Admin — remove a mesa (só se não houver comanda aberta)
router.delete('/:id', authMiddleware, (req, res) => {
    const id = Number(req.params.id);
    const aberta = db.prepare("SELECT COUNT(*) AS c FROM commands WHERE table_id = ? AND status = 'Aberta'").get(id).c;
    if (aberta > 0) {
        return res.status(409).json({ error: 'Feche a comanda aberta desta mesa antes de removê-la.' });
    }
    const r = db.prepare('DELETE FROM tables WHERE id = ?').run(id);
    if (r.changes === 0) return res.status(404).json({ error: 'Mesa não encontrada.' });
    res.json({ ok: true });
});

export default router;

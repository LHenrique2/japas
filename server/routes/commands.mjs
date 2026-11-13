// ============================================================================
// JAPA'S HOUSE BISTRÔ — Rota: /api/commands — comandas em mesa
// ----------------------------------------------------------------------------
// Fluxo: o cliente abre a mesa (código), envia os itens, a cozinha vê a
// comanda aberta por mesa, marca o que saiu e fecha a conta (vira pedido).
// ============================================================================

import { Router } from 'express';
import { db } from '../db.mjs';
import { authMiddleware } from '../auth.mjs';
import { rateLimit } from '../ratelimit.mjs';
import { recalcularValores } from '../precos.mjs';

const router = Router();

// Itens enviados à mesa. Folgado de propósito: todas as mesas do salão
// compartilham o mesmo IP público, e cada item é um POST.
const limiteComanda = rateLimit({
    max: 120,
    janelaMs: 10 * 60 * 1000,
    prefixo: 'comanda',
    mensagem: 'Muitos itens enviados. Aguarde um instante.'
});

// Acha a mesa e confere o código informado pelo cliente
function mesaComCodigo(tableId, codigo) {
    const mesa = db.prepare('SELECT * FROM tables WHERE id = ?').get(Number(tableId));
    if (!mesa) return { erro: 'Mesa não encontrada.' };
    const informado = String(codigo || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!informado || informado !== mesa.code) {
        return { erro: 'Código da mesa inválido.' };
    }
    return { mesa };
}

function comandaParaMesa(tableId) {
    return db.prepare("SELECT * FROM commands WHERE table_id = ? AND status = 'Aberta' ORDER BY id DESC LIMIT 1")
        .get(Number(tableId));
}

function comandaParaJson(c) {
    if (!c) return null;
    let itens = [];
    try { itens = JSON.parse(c.items_json || '[]'); } catch { itens = []; }
    const mesa = db.prepare('SELECT id, name FROM tables WHERE id = ?').get(c.table_id);
    return {
        id: c.id,
        tableId: c.table_id,
        tableName: mesa?.name || `Mesa ${c.table_id}`,
        status: c.status,
        items: itens,
        subtotal: Number(c.subtotal),
        total: Number(c.total),
        customer: c.customer,
        phone: c.phone,
        notes: c.notes,
        openedAt: c.opened_at,
        closedAt: c.closed_at,
        orderId: c.order_id,
        waiterCalled: !!c.waiter_called,
        waiterCalledAt: c.waiter_called_at
    };
}

// Soma só os itens que NÃO foram cancelados — o cancelado sai do total
// mas continua registrado (histórico da comanda).
function totalDosItens(itens) {
    return itens.reduce((s, i) => {
        if (i.status === 'Cancelado') return s;
        return s + (Number(i.preco) || 0) * (Number(i.qtd) || 0);
    }, 0);
}

// ── Cliente da mesa ─────────────────────────────────────────────────────────

// Comanda aberta da mesa (precisa do código)
router.get('/table/:id', (req, res) => {
    const { mesa, erro } = mesaComCodigo(req.params.id, req.query.codigo);
    if (erro) return res.status(403).json({ error: erro });
    const comanda = comandaParaMesa(mesa.id);
    res.json({ mesa: { id: mesa.id, name: mesa.name, seats: mesa.seats }, comanda: comandaParaJson(comanda) });
});

// Envia itens para a mesa (cria a comanda se ainda não existir)
router.post('/table/:id', limiteComanda, (req, res) => {
    const { mesa, erro } = mesaComCodigo(req.params.id, req.body?.codigo);
    if (erro) return res.status(403).json({ error: erro });

    const calc = recalcularValores(req.body?.itens || req.body?.items, '');
    if (!calc.linhas.length) return res.status(400).json({ error: 'Nenhum item válido na comanda.' });
    if (calc.desconhecidos.length) {
        return res.status(400).json({ error: `Item fora do cardápio: ${calc.desconhecidos.join(', ')}.` });
    }

    let comanda = comandaParaMesa(mesa.id);
    let itens = [];
    if (comanda) {
        try { itens = JSON.parse(comanda.items_json || '[]'); } catch { itens = []; }
    }

    // Soma com o que já estava na mesa (mesmo item+obs vira uma linha só)
    for (const linha of calc.linhas) {
        const existente = itens.find(i => i.nome === linha.nome && (i.obs || '') === linha.obs && i.status !== 'Cancelado');
        if (existente) existente.qtd += linha.qtd;
        else itens.push({ ...linha, status: 'Pendente' });
    }

    const subtotal = totalDosItens(itens);
    const total = subtotal;
    const customer = String(req.body?.customer || '').trim();
    const phone = String(req.body?.phone || '').replace(/\D/g, '');

    if (comanda) {
        db.prepare(`UPDATE commands SET items_json = ?, subtotal = ?, total = ?,
                    customer = COALESCE(NULLIF(?, ''), customer),
                    phone = COALESCE(NULLIF(?, ''), phone),
                    notes = COALESCE(NULLIF(?, ''), notes)
                    WHERE id = ?`).run(
            JSON.stringify(itens), subtotal, total, customer, phone, String(req.body?.notes || '').trim(), comanda.id
        );
        // Relê a linha para responder com a comanda já atualizada
        comanda = db.prepare('SELECT * FROM commands WHERE id = ?').get(comanda.id);
    } else {
        const info = db.prepare(`INSERT INTO commands (table_id, items_json, subtotal, total, customer, phone, notes)
                                 VALUES (?, ?, ?, ?, ?, ?, ?)`)
            .run(mesa.id, JSON.stringify(itens), subtotal, total, customer, phone, String(req.body?.notes || '').trim());
        comanda = db.prepare('SELECT * FROM commands WHERE id = ?').get(info.lastInsertRowid);
    }

    res.json({ ok: true, comanda: comandaParaJson(comanda) });
});

// Chamar o garçom: a mesa pede atendimento (precisa do código da mesa)
router.post('/table/:id/garcom', limiteComanda, (req, res) => {
    const { mesa, erro } = mesaComCodigo(req.params.id, req.body?.codigo);
    if (erro) return res.status(403).json({ error: erro });

    let comanda = comandaParaMesa(mesa.id);
    if (!comanda) {
        // Ainda não há pedido na mesa: abre a comanda só para registrar o chamado
        const info = db.prepare('INSERT INTO commands (table_id, items_json, subtotal, total, customer, phone, notes) VALUES (?, ?, 0, 0, ?, ?, ?)')
            .run(mesa.id, '[]', String(req.body?.customer || '').trim(), String(req.body?.phone || '').replace(/\D/g, ''), '');
        comanda = db.prepare('SELECT * FROM commands WHERE id = ?').get(info.lastInsertRowid);
    }

    db.prepare("UPDATE commands SET waiter_called = 1, waiter_called_at = datetime('now') WHERE id = ?")
        .run(comanda.id);

    const atualizado = db.prepare('SELECT * FROM commands WHERE id = ?').get(comanda.id);
    res.json({ ok: true, comanda: comandaParaJson(atualizado) });
});

// Remove um item da comanda (cliente). Só funciona enquanto o item está
// "Pendente" — ou seja, antes de a cozinha começar a prepare. Depois disso
// o cancelamento é do garçom, para não sumir comida já feita.
router.delete('/table/:id/itens/:indice', (req, res) => {
    const { mesa, erro } = mesaComCodigo(req.params.id, req.body?.codigo || req.query.codigo);
    if (erro) return res.status(403).json({ error: erro });

    const comanda = comandaParaMesa(mesa.id);
    if (!comanda) return res.status(404).json({ error: 'Nenhuma comanda aberta nesta mesa.' });

    let itens = [];
    try { itens = JSON.parse(comanda.items_json || '[]'); } catch { itens = []; }

    const indice = Number(req.params.indice);
    const alvo = itens[indice];
    if (!alvo) return res.status(404).json({ error: 'Item não encontrado na comanda.' });

    if (alvo.status && alvo.status !== 'Pendente') {
        return res.status(409).json({
            error: 'Este item já foi para a cozinha. Chame o garçom para cancelar.'
        });
    }

    itens.splice(indice, 1);
    const subtotal = totalDosItens(itens);
    db.prepare('UPDATE commands SET items_json = ?, subtotal = ?, total = ? WHERE id = ?')
        .run(JSON.stringify(itens), subtotal, subtotal, comanda.id);

    const atualizado = db.prepare('SELECT * FROM commands WHERE id = ?').get(comanda.id);
    res.json({ ok: true, removido: alvo.nome, comanda: comandaParaJson(atualizado) });
});

// ── Cozinha / gerente ───────────────────────────────────────────────────────

// Comandas abertas (todas as mesas)
router.get('/open', authMiddleware, (req, res) => {
    const linhas = db.prepare("SELECT * FROM commands WHERE status = 'Aberta' ORDER BY opened_at").all();
    res.json(linhas.map(comandaParaJson));
});

// Atualiza a comanda (status da comanda ou status de cada item)
router.patch('/:id', authMiddleware, (req, res) => {
    const id = Number(req.params.id);
    const comanda = db.prepare('SELECT * FROM commands WHERE id = ?').get(id);
    if (!comanda) return res.status(404).json({ error: 'Comanda não encontrada.' });

    if (req.body?.status) {
        const novo = String(req.body.status);
        if (!['Aberta', 'Fechada', 'Cancelada'].includes(novo)) {
            return res.status(400).json({ error: 'Status inválido.' });
        }
        db.prepare("UPDATE commands SET status = ?, closed_at = CASE WHEN ? <> 'Aberta' THEN datetime('now') ELSE closed_at END WHERE id = ?")
            .run(novo, novo, id);
    }

    // O garçom atendeu o chamado da mesa
    if (req.body?.garcomAtendido) {
        db.prepare("UPDATE commands SET waiter_called = 0, waiter_called_at = NULL WHERE id = ?").run(id);
    }

    if (Array.isArray(req.body?.itens)) {
        let itens = [];
        try { itens = JSON.parse(comanda.items_json || '[]'); } catch { itens = []; }
        req.body.itens.forEach(atual => {
            const alvo = itens[Number(atual.indice)];
            if (!alvo) return;
            if (atual.status && ['Pendente', 'Em Preparo', 'Pronto', 'Cancelado'].includes(atual.status)) {
                alvo.status = atual.status;
            }
            if (atual.qtd !== undefined) {
                alvo.qtd = Math.max(0, Math.min(50, Number(atual.qtd) || 0));
            }
        });
        itens = itens.filter(i => Number(i.qtd) > 0);
        // Cancelado sai do total, mas continua na comanda (histórico)
        const subtotal = totalDosItens(itens);
        db.prepare('UPDATE commands SET items_json = ?, subtotal = ?, total = ? WHERE id = ?')
            .run(JSON.stringify(itens), subtotal, subtotal, id);
    }

    const atualizado = db.prepare('SELECT * FROM commands WHERE id = ?').get(id);
    res.json({ ok: true, comanda: comandaParaJson(atualizado) });
});

// Fecha a conta: vira pedido (entra no painel de pedidos e na impressão)
router.post('/:id/close', authMiddleware, (req, res) => {
    const id = Number(req.params.id);
    const comanda = db.prepare('SELECT * FROM commands WHERE id = ?').get(id);
    if (!comanda) return res.status(404).json({ error: 'Comanda não encontrada.' });
    if (comanda.status !== 'Aberta') return res.status(409).json({ error: 'Esta comanda já foi fechada.' });

    let itens = [];
    try { itens = JSON.parse(comanda.items_json || '[]'); } catch { itens = []; }
    // Itens cancelados não viram pedido
    const itensValidos = itens.filter(i => i.status !== 'Cancelado');
    if (!itensValidos.length) {
        // Comanda só com chamado de garçom (sem pedidos): cancela em vez de virar pedido
        db.prepare("UPDATE commands SET status = 'Cancelada', closed_at = datetime('now'), waiter_called = 0 WHERE id = ?").run(id);
        return res.json({ ok: true, cancelada: true, comanda: comandaParaJson(db.prepare('SELECT * FROM commands WHERE id = ?').get(id)) });
    }

    const itemsText = itensValidos.map(i => `${i.qtd}x ${i.nome} — R$ ${((Number(i.preco) || 0) * (Number(i.qtd) || 0)).toFixed(2)}`).join('\n');
    const cancelados = itens.filter(i => i.status === 'Cancelado');
    const mesa = db.prepare('SELECT name FROM tables WHERE id = ?').get(comanda.table_id);
    const total = totalDosItens(itens);

    // Itens cancelados ficam anotados no pedido (para o fechamento não fechar em cima)
    const notas = [comanda.notes || ''];
    if (cancelados.length) {
        notas.push('Cancelado pela cozinha: ' +
            cancelados.map(i => `${i.qtd}x ${i.nome}`).join(', '));
    }

    const info = db.prepare(`INSERT INTO orders
      (customer, phone, address, district, complement, payment,
       items, items_json, subtotal, delivery_fee, delivery_fee_label,
       total, notes, change_for, status, source, table_id)
     VALUES (?, ?, ?, ?, '', ?, ?, ?, ?, 0, 'Balcão', ?, ?, '', 'Concluído', 'mesa', ?)`)
        .run(
            comanda.customer || (mesa?.name || 'Mesa'),
            comanda.phone || '',
            mesa?.name || `Mesa ${comanda.table_id}`,
            mesa?.name || `Mesa ${comanda.table_id}`,
            String(req.body?.payment || 'Dinheiro'),
            itemsText,
            JSON.stringify(itensValidos),
            total, total,
            notas.filter(Boolean).join(' | '),
            comanda.table_id
        );

    db.prepare("UPDATE commands SET status = 'Fechada', closed_at = datetime('now'), order_id = ? WHERE id = ?")
        .run(info.lastInsertRowid, id);

    res.json({ ok: true, orderId: info.lastInsertRowid, comanda: comandaParaJson(db.prepare('SELECT * FROM commands WHERE id = ?').get(id)) });
});

export default router;

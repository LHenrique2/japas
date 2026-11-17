// ============================================================================
// Rota: /api/orders — pedidos (público cria; admin lista/atualiza)
// ============================================================================

import { Router } from 'express';
import { db } from '../db.mjs';
import { authMiddleware } from '../auth.mjs';
import { rateLimit } from '../ratelimit.mjs';
import { recalcularValores } from '../precos.mjs';

const router = Router();
const VALID_STATUS = ['Pendente', 'Em Preparo', 'A Caminho', 'Concluído', 'Cancelado'];

// Spam: no máximo 30 pedidos por IP a cada 10 minutos.
// Atenção: num restaurante todos os clientes chegam pelo MESMO IP público,
// então um limite muito baixo barraria a casa inteira num fim de semana
// movimentado. 30/10min = 3 pedidos por minuto, folgado para o salão e
// suficiente para estourar um robô de spam.
const limitePedido = rateLimit({
    max: 30,
    janelaMs: 10 * 60 * 1000,
    prefixo: 'pedido',
    mensagem: 'Muitos pedidos seguidos deste aparelho. Aguarde um instante.'
});

function rowToOrder(r) {
  // O front espera um campo "time" no formato HH:MM (igual ao localStorage atual).
  // created_at vem como UTC "YYYY-MM-DD HH:MM:SS"; convertemos para hora local SP.
  let time = '';
  try {
    if (r.created_at) {
      const d = new Date(r.created_at.replace(' ', 'T') + 'Z');
      time = d.toLocaleTimeString('pt-BR', {
        hour: '2-digit', minute: '2-digit',
        timeZone: 'America/Sao_Paulo'
      });
    }
  } catch { /* mantém vazio */ }

  return {
    id: r.id,
    customer: r.customer,
    phone: r.phone,
    address: r.address,
    district: r.district,
    complement: r.complement,
    payment: r.payment,
    items: r.items,
    deliveryFee: Number(r.delivery_fee),
    deliveryFeeLabel: r.delivery_fee_label,
    total: Number(r.total),
    notes: r.notes,
    changeFor: r.change_for,
    status: r.status,
    source: r.source,
    tableId: r.table_id ?? null,
    time
  };
}

// Público — cria um novo pedido que chega do checkout do site
router.post('/', limitePedido, (req, res) => {
  const b = req.body || {};
  const itensEnviados = b.cartItems || b.itens || b.items;
  if (!itensEnviados && !b.itemsText) {
    return res.status(400).json({ error: 'Pedido vazio.' });
  }

  // Validação mínima dos dados do cliente
  const nome = String(b.customer || '').trim();
  const telefone = String(b.phone || '').replace(/\D/g, '');
  if (nome.length < 2) return res.status(400).json({ error: 'Informe seu nome.' });
  if (telefone.length < 8) return res.status(400).json({ error: 'Informe um WhatsApp válido.' });

  // Preço e taxa SEMPRE recalculados aqui (o cliente não escolhe o valor)
  const calc = recalcularValores(itensEnviados, b.district);
  if (!calc.linhas.length) {
    return res.status(400).json({ error: 'Nenhum item válido no pedido.' });
  }
  // A opção de entrega precisa existir na lista cadastrada pelo gerente.
  // Sem isso, o cliente poderia digitar qualquer taxa (ou nenhuma).
  if (calc.opcaoInvalida) {
    return res.status(400).json({
      error: 'Escolha uma opção de entrega válida (retirada no local ou delivery).'
    });
  }
  if (calc.desconhecidos.length) {
    return res.status(400).json({ error: `Item fora do cardápio: ${calc.desconhecidos.join(', ')}.` });
  }

  const itemsText = calc.linhas
    .map(l => `${l.qtd}x ${l.nome} — R$ ${(l.preco * l.qtd).toFixed(2)}`)
    .join('\n');

  const info = db.prepare(
    `INSERT INTO orders
      (customer, phone, address, district, complement, payment,
       items, items_json, subtotal, delivery_fee, delivery_fee_label,
       total, notes, change_for, status, source, table_id)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pendente', ?, ?)`
  ).run(
    nome, telefone, b.address || '', b.district || '', b.complement || '', b.payment || '',
    itemsText,
    JSON.stringify(calc.linhas),
    calc.subtotal, calc.taxa, calc.rotuloTaxa,
    calc.total, b.notes || '', b.changeFor || '',
    b.source || 'site',
    b.tableId ? Number(b.tableId) : null
  );

  res.json({
    id: info.lastInsertRowid,
    status: 'Pendente',
    total: calc.total,
    deliveryFee: calc.taxa,
    deliveryFeeLabel: calc.rotuloTaxa
  });
});

// Admin — lista pedidos (mais recentes primeiro)
router.get('/', authMiddleware, (req, res) => {
  const rows = db.prepare('SELECT * FROM orders ORDER BY id DESC LIMIT 500').all();
  res.json(rows.map(rowToOrder));
});

// Admin — muda o status de um pedido
router.patch('/:id/status', authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const status = req.body?.status;
  if (!VALID_STATUS.includes(status)) {
    return res.status(400).json({ error: 'Status inválido.' });
  }
  const result = db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id);
  if (result.changes === 0) return res.status(404).json({ error: 'Pedido não encontrado.' });
  const atualizado = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
  res.json({ ok: true, order: rowToOrder(atualizado) });
});

// Admin — atualiza o telefone do cliente (quando o gerente cadastra na hora)
router.patch('/:id/phone', authMiddleware, (req, res) => {
  db.prepare('UPDATE orders SET phone = ? WHERE id = ?').run(
    req.body?.phone || '', Number(req.params.id)
  );
  res.json({ ok: true });
});

// Admin — remove pedidos concluídos/cancelados
router.delete('/completed', authMiddleware, (req, res) => {
  db.prepare("DELETE FROM orders WHERE status IN ('Concluído', 'Cancelado')").run();
  res.json({ ok: true });
});

export default router;

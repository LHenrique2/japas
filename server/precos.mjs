// ============================================================================
// JAPA'S HOUSE BISTRÔ — Cálculo de preços (fonte única)
// ----------------------------------------------------------------------------
// O valor do pedido é SEMPRE recalculado no servidor a partir do cardápio
// (menu_items) e das zonas de entrega (delivery_zones). O cliente manda os
// itens, mas não decide quanto custa.
// ============================================================================

import { db } from './db.mjs';

/**
 * Recalcula itens, subtotal, taxa e total de um pedido/comanda.
 * @param {Array} cartItems itens enviados pelo front: [{ nome|name, qtd|qty, obs }]
 * @param {string} district  bairro (para achar a taxa de entrega)
 * @returns {{linhas:Array, subtotal:number, taxa:number, rotuloTaxa:string, total:number, desconhecidos:Array}}
 */
export function recalcularValores(cartItems, district) {
    const itens = Array.isArray(cartItems) ? cartItems : [];
    let subtotal = 0;
    const linhas = [];
    const desconhecidos = [];

    for (const item of itens) {
        const nome = String(item?.nome || item?.name || '').trim();
        const qtd = Math.max(1, Math.min(50, Number(item?.qtd || item?.qty || 1) || 1));
        if (!nome) continue;

        // Preço SEMPRE no servidor: cardápio ou variação (temaki customizado)
        const prato = db.prepare('SELECT name, price FROM menu_items WHERE name = ?').get(nome);
        const variacao = prato
            ? null
            : db.prepare('SELECT name, price FROM menu_variations WHERE name = ?').get(nome);
        const preco = Number(prato?.price ?? variacao?.price ?? 0);

        if (!prato && !variacao) {
            desconhecidos.push(nome);
            console.warn(`⚠️  Item fora do cardápio: "${nome}" — preço 0.`);
        }

        subtotal += preco * qtd;
        linhas.push({
            nome,
            qtd,
            preco,
            obs: String(item?.obs || item?.notes || '').trim()
        });
    }

    // Taxa de entrega: só a que estiver cadastrada para o bairro
    let taxa = 0;
    let rotuloTaxa = 'A combinar';
    const bairro = String(district || '').trim();
    if (bairro) {
        const zona = db.prepare('SELECT name, fee FROM delivery_zones WHERE name = ?').get(bairro);
        if (zona) {
            taxa = Number(zona.fee) || 0;
            rotuloTaxa = taxa === 0 ? 'GRÁTIS' : `R$ ${taxa.toFixed(2)}`;
        }
    }

    return { linhas, subtotal, taxa, rotuloTaxa, total: subtotal + taxa, desconhecidos };
}

/** Gera um código curto e legível para a mesa (sem I, O, 0 e 1). */
export function gerarCodigoMesa() {
    const alfabeto = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let codigo = '';
    for (let i = 0; i < 4; i++) codigo += alfabeto[Math.floor(Math.random() * alfabeto.length)];
    return codigo;
}

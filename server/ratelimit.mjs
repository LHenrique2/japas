// ============================================================================
// JAPA'S HOUSE BISTRÔ — Limitador de requisições (em memória)
// ----------------------------------------------------------------------------
// Protege rotas públicas (login, criação de pedido) contra ataque de força
// bruta e spam. É simples e local: reiniciar o servidor zera os contadores,
// o que é aceitável para uma aplicação de porte pequeno.
// ============================================================================

const buckets = new Map();

// Limpa os contadores velhos a cada 10 minutos para não vazar memória
setInterval(() => {
    const agora = Date.now();
    for (const [chave, b] of buckets) {
        if (b.reiniciaEm <= agora) buckets.delete(chave);
    }
}, 10 * 60 * 1000).unref?.();

function ipDe(req) {
    const fwd = req.headers['x-forwarded-for'];
    if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim();
    return req.socket?.remoteAddress || 'desconhecido';
}

/**
 * Cria um middleware de limite.
 * @param {object} opcoes
 * @param {number} opcoes.max       máximo de requisições na janela
 * @param {number} opcoes.janelaMs  duração da janela em ms
 * @param {string} opcoes.mensagem  texto da resposta quando estoura
 * @param {string} opcoes.prefixo   namespace da chave (evita colisão entre rotas)
 * @param {function} [opcoes.chaveExtra] função extra para compor a chave
 */
export function rateLimit({ max, janelaMs, mensagem, prefixo = 'rl', chaveExtra }) {
    return function (req, res, next) {
        const extra = typeof chaveExtra === 'function' ? chaveExtra(req) : '';
        const chave = `${prefixo}:${ipDe(req)}:${extra}`;
        const agora = Date.now();
        let b = buckets.get(chave);

        if (!b || b.reiniciaEm <= agora) {
            b = { contagem: 0, reiniciaEm: agora + janelaMs };
            buckets.set(chave, b);
        }
        b.contagem++;

        const restantes = Math.max(0, max - b.contagem);
        res.setHeader('X-RateLimit-Limit', String(max));
        res.setHeader('X-RateLimit-Remaining', String(restantes));

        if (b.contagem > max) {
            const esperaSeg = Math.ceil((b.reiniciaEm - agora) / 1000);
            res.setHeader('Retry-After', String(esperaSeg));
            return res.status(429).json({ error: mensagem, tenteNovamenteEmSegundos: esperaSeg });
        }
        next();
    };
}

// Situação atual de uma chave (usada nos logs do painel)
export function statusLimite(prefixo, extra = '') {
    const agora = Date.now();
    const entradas = [...buckets.entries()]
        .filter(([k, b]) => k.startsWith(prefixo + ':') && b.reiniciaEm > agora)
        .map(([k, b]) => ({ chave: k, contagem: b.contagem, expiraEmSegundos: Math.ceil((b.reiniciaEm - agora) / 1000) }));
    return { total: entradas.length, entradas: extra ? entradas.filter(e => e.chave.endsWith(extra)) : entradas };
}

// ============================================================================
// Rota: /api/admin — login e troca de senha do gerente
// ============================================================================

import { Router } from 'express';
import { tryLogin, changePassword, authMiddleware } from '../auth.mjs';
import { rateLimit } from '../ratelimit.mjs';

const router = Router();

// Força bruta: no máximo 8 tentativas de senha por IP a cada 15 minutos.
// (o bloqueio do navegador é só conforto — quem chama a API direto passa por aqui)
const limiteLogin = rateLimit({
    max: 8,
    janelaMs: 15 * 60 * 1000,
    prefixo: 'login',
    mensagem: 'Muitas tentativas de acesso. Aguarde alguns minutos e tente de novo.'
});

// Login: valida senha (hash no banco) e devolve um JWT.
router.post('/login', limiteLogin, (req, res) => {
  const { username, password } = req.body || {};
  const token = tryLogin(username, password);
  if (!token) return res.status(401).json({ error: 'Senha incorreta.' });
  res.json({ token });
});

// Troca de senha: exige o token (admin logado) e a senha atual.
router.post('/change-password', authMiddleware, (req, res) => {
  const ok = changePassword(req.user?.username, req.body?.oldPassword, req.body?.newPassword);
  if (!ok) return res.status(400).json({ error: 'Senha atual incorreta ou nova inválida (mín. 4 caracteres).' });
  res.json({ ok: true });
});

export default router;

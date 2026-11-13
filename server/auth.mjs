// ============================================================================
// JAPA'S HOUSE BISTRÔ — Autenticação (bcrypt + JWT)
// ============================================================================

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from './db.mjs';

const JWT_SECRET = process.env.JWT_SECRET || 'troque-este-segredo-em-producao';
const TOKEN_EXPIRY = '12h';

// Tenta autenticar {username, password} contra o banco. Devolve um JWT ou null.
export function tryLogin(username, password) {
  const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username || 'admin');
  if (!user) return null;
  if (!bcrypt.compareSync(password || '', user.password_hash)) return null;
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

// Middleware: exige um JWT válido no header Authorization: Bearer <token>
export function authMiddleware(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Token ausente. Faça login novamente.' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado. Faça login novamente.' });
  }
}

// Troca a senha do admin (usado pelo painel). Nova senha precisa de >= 4 chars.
export function changePassword(username, oldPass, newPass) {
  const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username || 'admin');
  if (!user) return false;
  if (!bcrypt.compareSync(oldPass || '', user.password_hash)) return false;
  if (!newPass || String(newPass).length < 4) return false;
  const hash = bcrypt.hashSync(String(newPass), 10);
  db.prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?').run(hash, user.id);
  return true;
}

# Japa's House Bistrô — Rio Claro/RJ

Site e sistema de pedidos do **Japa's House Bistrô** (Rio Claro/RJ): cardápio digital,
pedidos por WhatsApp, comandas em mesas e painel de cozinha.

**Demonstração online (GitHub Pages):** https://lhenrique2.github.io/japas/

---

## O que o sistema faz

### Para o cliente
- **Cardápio digital** com 82 itens, busca por prato/ingrediente, categorias e ficha de cada prato.
- **Pedido por WhatsApp**: carrinho, cálculo do total e envio com a mensagem pronta.
- **Comanda na mesa**: o cliente abre a comanda pelo link da mesa (código de 4 letras),
  adiciona itens e chama o garçom com um botão.
- **Desistência sem drama**: o cliente remove um item errado enquanto a cozinha não começou
  (com opção de *Desfazer* por 10 segundos). Depois disso, só o garçom cancela.

### Para o restaurante
- **Painel do gerente e da cozinha** com os pedidos chegando em tempo real (atualização a cada 15s),
  mudança de status e impressão de comanda.
- **Comandas de mesa** abertas, com o status de cada item, e o **botão "Chamar o garçom"**.
- **Mesas cadastradas** com código próprio, prontas para QR Code na mesa.
- **Cancelamento de item pela cozinha** que sai do total mas continua registrado no histórico
  (nada é apagado).

---

## Como rodar localmente

```bash
npm install
cp .env.example .env      # ajuste o JWT_SECRET e o ADMIN_PASSWORD
node server/index.mjs      # http://localhost:3000
```

O banco é **SQLite** e é criado sozinho em `server/data/`. Para gerar um segredo forte:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

### Acesso ao painel do gerente

Usuário: `admin` · Senha: a que estiver em `ADMIN_PASSWORD` no `.env`.

- O servidor **sempre sobe** — nunca trava a publicação por falta de variável.
- Com `ADMIN_PASSWORD` definida: o admin é criado com essa senha.
- Sem ela, em produção: o servidor gera uma **senha forte** e mostra no log
  ("🔑 senha: ..."). Definir a variável deixa a senha fixa entre reinícios.
- Em desenvolvimento, sem a variável, o admin nasce com a senha `1234`.
  Troque pelo botão "Senha" do painel.

### Estrutura

| Caminho | O que é |
|---|---|
| `index.html`, `cardapio.html` | Páginas do site |
| `app.js` | Cardápio, carrinho, comandas, painel (front-end) |
| `config.js` | Dados do negócio: horário, endereço, telefone |
| `server/` | Backend (Express + SQLite): pedidos, comandas, mesas, admin |
| `imagens/` | Fotos do bistrô (`roleta-*`) e dos pratos (`pratos/`) |
| `_check/` | Scan estático de qualidade do código |

### Publicação

- **Front-end (demonstração):** GitHub Pages, direto da branch `main`.
- **Sistema completo:** o backend Node precisa de um host com disco persistente
  (Render, Railway, Hostinger) — o GitHub Pages serve apenas a parte visual.

---

## Observações

- As fotos dos pratos em `imagens/pratos/` são **imagens de demonstração**;
  as fotos reais do bistrô entram no lugar mantendo o mesmo nome de arquivo.
- Se alguma foto não carregar, o site mostra o aviso "FOTO EM BREVE" — nunca um espaço vazio.
- O `.env`, o banco de dados e `node_modules/` ficam fora do Git por segurança.

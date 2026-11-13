/* ============================================================================
 * JAPA'S HOUSE BISTRÔ — CONFIGURAÇÃO CENTRAL
 * ============================================================================
 * Este arquivo é a FONTE ÚNICA DE VERDADE do site. Tudo que o restaurante
 * precisar trocar (telefone, endereço, Instagram, senha do painel, regras de
 * entrega, endereço do site) mora AQUI.
 *
 * Carregado antes do app.js nas duas páginas.
 *
 * ⚠️  ITENS MARCADOS COM "EDITAR" PRECISAM DA ATENÇÃO DO RESTAURANTE.
 * ========================================================================== */

window.JAPA = {

  /* ---------------------------------------------------------------- *
   * DADOS DO RESTAURANTE
   * ---------------------------------------------------------------- */
  business: {
    name: "Japa's House Bistrô",
    legalName: "Japa's House Bistrô",
    slogan: 'Gastronomia interativa no coração da Vila Velha',

    // WhatsApp em formato E.164, só dígitos com código do país
    phone: '5524998833667',
    phoneDisplay: '(24) 99883-3667',

    address: {
      street: 'R. Pres. Vargas, 294',
      district: 'Vila Velha',
      city: 'Rio Claro',
      state: 'RJ',
      zip: '27460-000',
      country: 'BR'
    },

    mapsUrl: 'https://maps.google.com/?cid=17033034131856278365',
    // Link de avaliação no Google (placeid derivado do cid do Maps)
    reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJb7ee3363ce239c_5dc3654c4c7e61ec',

    // ── EDITAR: descobrir o @real no Instagram ──────────────────────
    instagram: 'https://instagram.com/japashousebistro',
    instagramHandle: '@japashousebistro',
    // ── EDITAR: preencher se existir (facebook, twitter/x, ifood) ───
    facebook: '',
    ifood: '',
    deliveryApp: '',

    priceRange: '$$',

    // Horários no formato aberto do Google (schema.org)
    // 0 = domingo ... 6 = sábado
    hours: [
      { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '11:30', closes: '14:30' },
      { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '19:00', closes: '22:30' },
      { days: ['Friday', 'Saturday'], opens: '11:30', closes: '14:30' },
      { days: ['Friday', 'Saturday'], opens: '19:00', closes: '23:00' },
      { days: ['Sunday'], opens: '12:00', closes: '15:00' }
    ],
    // texto simples exibido no rodapé
    hoursText: [
      'Ter - Qui: 11:30–14:30 | 19:00–22:30',
      'Sex - Sáb: 11:30–14:30 | 19:00–23:00',
      'Domingo: 12:00–15:00',
      'Segunda-feira: Fechado'
    ]
  },

  /* ---------------------------------------------------------------- *
   * REGRAS DE ENTREGA
   * ---------------------------------------------------------------- */
  delivery: {
    // valor mínimo para o carrinho ser liberado (0 = sem mínimo)
    minOrder: 30.00,
    // acima deste valor o frete fica grátis (0 = sem frete grátis automático)
    freeDeliveryOver: 80.00,
    // bairros sem entrega (vazio = todos)
    excludedDistricts: [],
    // frase exibida no rodapé do carrinho
    note: 'Entregamos na Vila Velha e região. Pedido mínimo de R$ 30,00. Frete grátis acima de R$ 80,00.'
  },

  /* ---------------------------------------------------------------- *
   * PAINEL ADMIN / COZINHA
   * ---------------------------------------------------------------- */
  admin: {
    /* A senha do gerente NÃO fica aqui. A autenticação é feita pelo servidor
     * (bcrypt + JWT no banco). Antes existia uma lista de senhas em texto
     * puro neste arquivo — isso expunha a senha no código-fonte da página,
     * então foi removido. Para trocar a senha, use o botão "Senha" no painel. */

    // trava por força bruta
    maxAttempts: 5,
    lockoutMinutes: 10
  },

  /* ---------------------------------------------------------------- *
   * SITE
   * ---------------------------------------------------------------- */
  site: {
    /* ⚠️ EDITAR — domínio real onde o site está publicado.
     * Usado em canonical, Open Graph, sitemap.xml e no JSON-LD. */
    url: 'https://japashousebistro.com.br',
    lang: 'pt-BR',
    locale: 'pt_BR',
    themeColor: '#090B10'
  },

  /* ---------------------------------------------------------------- *
   * ANALYTICS (opt-in por consentimento — LGPD)
   * ---------------------------------------------------------------- */
  analytics: {
    // Google Analytics 4 — cole o ID (G-XXXXXXXXXX) para ativar
    ga4: null,
    // Plausible (cookieless, mais simples de privacy policy) — domínio
    plausibleDomain: null,
    // Consentimento padrão quando ainda não respondeu: true = aceita,
    // false = espera o clique. Recomendado: false.
    defaultConsent: false
  },

  /* ---------------------------------------------------------------- *
   * BACKEND (API) — pedidos, comandas, mesas e painel
   * ---------------------------------------------------------------- */
  api: {
    /* Endereço do backend que guarda pedidos, comandas e mesas.
     *
     * Vazio = mesma origem do site (site e backend no mesmo endereço).
     * Preencha com a URL completa quando o site estiver em outro lugar
     * (ex.: site no GitHub Pages e backend no Render):
     *     apiBase: 'https://japas-house.onrender.com'
     *
     * Sem isso, o site ainda funciona: os pedidos seguem pelo WhatsApp e o
     * cardápio fica salvo no próprio navegador do cliente. */
    apiBase: ''
  },

  /* ---------------------------------------------------------------- *
   * MENSAGEM PADRÃO DE BOAS-VINDAS NO WHATSAPP
   * ---------------------------------------------------------------- */
  whatsapp: {
    greeting: 'Olá! Vim pelo site do Japa\'s House e gostaria de:'
  }
};

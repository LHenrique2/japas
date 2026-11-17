let dishData = [
    // ── APERITIVOS ──
    {
        id: 1,
        name: 'Harumaki de Camarão',
        category: 'aperitivos',
        price: 10.00,
        badge: 'Aperitivo',
        img: 'imagens/pratos/prato-harumaki-de-camarao.jpg',
        desc: 'Massa finíssima, recheada com camarão, cream cheese e cebolinha.'
    },
    {
        id: 2,
        name: 'Harumaki de Salmão',
        category: 'aperitivos',
        price: 10.00,
        badge: 'Aperitivo',
        img: 'imagens/pratos/prato-harumaki-de-salmao.jpg',
        desc: 'Massa finíssima, recheada com salmão, cream cheese e cebolinha.'
    },
    {
        id: 3,
        name: 'Robata de Camarão',
        category: 'aperitivos',
        price: 20.00,
        badge: 'Grelhado',
        img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80',
        desc: 'Suculentos camarões no espetinho grelhados.'
    },
    {
        id: 4,
        name: 'Sunomono de Kani',
        category: 'aperitivos',
        price: 22.00,
        badge: 'Salada',
        img: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?auto=format&fit=crop&w=800&q=80',
        desc: 'Salada de pepino japonês no molho agridoce, com kani e gergelim.'
    },
    {
        id: 5,
        name: 'Sunomono de Salmão',
        category: 'aperitivos',
        price: 25.00,
        badge: 'Salada',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
        desc: 'Salada de pepino japonês no molho agridoce, com salmão e gergelim.'
    },
    {
        id: 6,
        name: 'Sunomono Misto (Kani e Salmão)',
        category: 'aperitivos',
        price: 25.00,
        badge: 'Salada',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        desc: 'Salada de pepino japonês no molho agridoce, com kani, salmão e gergelim.'
    },
    // ── TEMAKIS ──
    {
        id: 7,
        name: 'Temaki Camarão',
        category: 'temaki',
        price: 32.00,
        badge: 'Temaki',
        img: 'imagens/pratos/prato-temaki-camarao.jpg',
        desc: 'Arroz japonês, camarão e cream cheese.'
    },
    {
        id: 8,
        name: 'Temaki Hot Camarão',
        category: 'temaki',
        price: 34.00,
        badge: 'Hot',
        img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, camarão e cream cheese, empanado e frito.'
    },
    {
        id: 9,
        name: 'Temaki Hot Misto (Camarão/Salmão)',
        category: 'temaki',
        price: 34.00,
        badge: 'Hot',
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, camarão, salmão e cream cheese, empanado e frito.'
    },
    {
        id: 10,
        name: 'Temaki Hot Philadelphia',
        category: 'temaki',
        price: 34.00,
        badge: 'Hot',
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, salmão e cream cheese, empanado e frito.'
    },
    {
        id: 11,
        name: 'Temaki Misto (Camarão/Salmão)',
        category: 'temaki',
        price: 32.00,
        badge: 'Temaki',
        img: 'imagens/pratos/prato-temaki-camarao.jpg',
        desc: 'Arroz japonês, cream cheese, camarão e salmão.'
    },
    {
        id: 12,
        name: 'Temaki Peixe Branco',
        category: 'temaki',
        price: 30.00,
        badge: 'Temaki',
        img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, filé de linguado e cream cheese.'
    },
    {
        id: 13,
        name: 'Temaki Peixe Branco (Azeite/Alho)',
        category: 'temaki',
        price: 32.00,
        badge: 'Especial',
        img: 'imagens/pratos/prato-temaki-peixe-branco.jpg',
        desc: 'Arroz japonês, filé de linguado, cream cheese e alho frito no azeite.'
    },
    {
        id: 14,
        name: 'Temaki Philadelphia',
        category: 'temaki',
        price: 32.00,
        badge: 'Clássico',
        img: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, salmão e cream cheese.'
    },
    {
        id: 15,
        name: 'Temaki Salmão',
        category: 'temaki',
        price: 32.00,
        badge: 'Clássico',
        img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês e salmão fresco.'
    },
    // ── MAKIMONOS ──
    {
        id: 16,
        name: 'Makimono Camarão',
        category: 'makimono',
        price: 28.00,
        badge: 'Makimono',
        img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, alga, camarão, cream cheese, cebolinha e gergelim.'
    },
    {
        id: 17,
        name: 'Makimono Hot Camarão',
        category: 'makimono',
        price: 30.00,
        badge: 'Hot',
        img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, alga, camarão, cream cheese, cebolinha e gergelim (empanado e frito).'
    },
    {
        id: 18,
        name: 'Makimono Hot Philadelphia',
        category: 'makimono',
        price: 30.00,
        badge: 'Hot',
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, alga, salmão, cream cheese, cebolinha e gergelim (empanado e frito).'
    },
    {
        id: 19,
        name: 'Makimono Philadelphia',
        category: 'makimono',
        price: 28.00,
        badge: 'Clássico',
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, alga, salmão, cream cheese, cebolinha e gergelim.'
    },
    {
        id: 20,
        name: 'Makimono Salmão',
        category: 'makimono',
        price: 28.00,
        badge: 'Clássico',
        img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, alga, salmão, cebolinha e gergelim.'
    },
    {
        id: 21,
        name: 'Makimono Uramaki Camarão',
        category: 'makimono',
        price: 32.00,
        badge: 'Uramaki',
        img: 'imagens/pratos/prato-ultra-ebi-maki.jpg',
        desc: 'Arroz japonês, alga, camarão, cream cheese, cebolinha e gergelim.'
    },
    {
        id: 22,
        name: 'Makimono Uramaki Philadelphia',
        category: 'makimono',
        price: 32.00,
        badge: 'Uramaki',
        img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=800&q=80',
        desc: 'Arroz japonês, alga, salmão, cream cheese, cebolinha e gergelim.'
    },
    // ── SUSHIS ──
    {
        id: 23,
        name: 'Sushi de Camarão',
        category: 'sushi',
        price: 10.00,
        badge: 'Sushi',
        img: 'imagens/pratos/prato-sushi-de-camarao.jpg',
        desc: 'Camarão sobre arroz japonês temperado.'
    },
    {
        id: 24,
        name: 'Sushi de Salmão',
        category: 'sushi',
        price: 10.00,
        badge: 'Sushi',
        img: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?auto=format&fit=crop&w=800&q=80',
        desc: 'Fatia de salmão sobre arroz japonês temperado.'
    },
    {
        id: 25,
        name: 'Sushi Peixe Branco (Alho no Azeite)',
        category: 'sushi',
        price: 8.00,
        badge: 'Especial',
        img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé de linguado sobre arroz, com alho frito no azeite.'
    },
    // ── PORÇÕES & PETISCOS ──
    {
        id: 26,
        name: 'Porção Batata Cheddar & Bacon',
        category: 'porcoes',
        price: 38.00,
        badge: 'Petisco',
        img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
        desc: 'Batatas palito douradas e crocantes, cobertas com cheddar cremoso e bastante bacon artesanal crocante.'
    },
    // ── BURGERS ──
    {
        id: 27,
        name: 'Burger Bistrô Artesanal 180g',
        category: 'burgers',
        price: 36.90,
        badge: 'Gastrobar',
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
        desc: 'Blend bovino da casa 180g grelhado no fogo, queijo cheddar derretido, bacon, maionese especial no pão brioche macio.'
    },
    // ── COMBINADOS ──
    {
        id: 28,
        name: 'Combinado House Salmão Premium',
        category: 'sushi',
        price: 89.90,
        badge: 'Mais Pedido',
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        desc: '24 peças selecionadas: Sashimis de salmão, Joes flambados com geleia de pimenta, Uramakis e Hot Rolls crocantes.'
    },
    {
        id: 29,
        name: 'Joe Flambado com Geleia de Pimenta',
        category: 'sushi',
        price: 28.00,
        badge: 'Destaque',
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        desc: '6 unidades de lâminas de salmão envoltas em cream cheese, maçaricados e finalizados com geleia de pimenta artesanal.'
    },
    // ── DRINKS ──
    {
        id: 30,
        name: 'Drink Gin Tônica Lichia & Morango',
        category: 'drinks',
        price: 26.90,
        badge: 'Cocktail',
        img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
        desc: 'Gin artesanal premium, água tônica, xarope natural de lichia, pedaços de morango fresco e um toque de alecrim.'
    },
    // ── SASHIMIS (porção com 5 peças) ──
    {
        id: 31,
        name: 'Sashimi de Carpaccio de Salmão',
        category: 'sashimi',
        price: 25.00,
        badge: 'Sashimi',
        img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=80',
        desc: 'Finíssimas fatias de salmão, com sal, pimenta do reino, azeite e alcaparras. (Porção com 5 peças)'
    },
    {
        id: 32,
        name: 'Sashimi de Salmão',
        category: 'sashimi',
        price: 22.00,
        badge: 'Sashimi',
        img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80',
        desc: 'Fatias de salmão fresco. (Porção com 5 peças)'
    },
    {
        id: 33,
        name: 'Sashimi Peixe Branco',
        category: 'sashimi',
        price: 20.00,
        badge: 'Sashimi',
        img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=800&q=80',
        desc: 'Fatias de filé de linguado com limão. (Porção com 5 peças)'
    },
    {
        id: 34,
        name: 'Sashimi Peixe Branco (Alho no Azeite)',
        category: 'sashimi',
        price: 22.00,
        badge: 'Especial',
        img: 'imagens/pratos/prato-sashimi-peixe-branco.jpg',
        desc: 'Fatias de filé de linguado, com limão e alho frito no azeite. (Porção com 5 peças)'
    },
    {
        id: 35,
        name: 'Sashimi Salmão Selado',
        category: 'sashimi',
        price: 24.00,
        badge: 'Maçarico',
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        desc: 'Fatias de salmão selados no maçarico. (Porção com 5 peças)'
    },
    // ── SALMÃO LIGHT (porção com 5 peças) ──
    {
        id: 36,
        name: 'Ebi Fry Lemon',
        category: 'light',
        price: 25.00,
        badge: 'Light',
        img: 'imagens/pratos/prato-ebi-fry-lemon.jpg',
        desc: 'Camarão empanado, fatia de limão e cream cheese envolto por salmão.'
    },
    {
        id: 37,
        name: 'Salmão Light',
        category: 'light',
        price: 22.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?auto=format&fit=crop&w=800&q=80',
        desc: 'Bolinha de arroz envolto por salmão. Cream cheese, cebolinha e gergelim por cima.'
    },
    {
        id: 38,
        name: 'Salmão Light Abacaxi',
        category: 'light',
        price: 22.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
        desc: 'Bolinha de arroz envolto por salmão. Cream cheese e abacaxi por cima.'
    },
    {
        id: 39,
        name: 'Salmão Light Camarão',
        category: 'light',
        price: 22.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        desc: 'Pasta de salmão com cream cheese e cebolinha, envolto por salmão e camarão por cima.'
    },
    {
        id: 40,
        name: 'Salmão Light Camarão Hot',
        category: 'light',
        price: 25.00,
        badge: 'Hot',
        img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
        desc: 'Pasta de salmão com cream cheese e cebolinha, envolto por salmão. Camarão empanado por cima.'
    },
    {
        id: 41,
        name: 'Salmão Light Maracujá',
        category: 'light',
        price: 22.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        desc: 'Bolinha de arroz envolto por salmão. Cream cheese e maracujá por cima.'
    },
    {
        id: 42,
        name: 'Salmão Light Pepper',
        category: 'light',
        price: 22.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        desc: 'Bolinha de arroz envolto por salmão. Cream cheese e geleia de pimenta e gergelim por cima.'
    },
    {
        id: 43,
        name: 'Ultra Ebi Maki',
        category: 'light',
        price: 25.00,
        badge: 'Especial',
        img: 'imagens/pratos/prato-ultra-ebi-maki.jpg',
        desc: 'Makimono camarão envolto por salmão, finalizado com molho teriyaki, cebolinha e gergelim.'
    },
    // ── COMBINADOS ──
    {
        id: 44,
        name: 'Combinado 10 Peças',
        category: 'combinados',
        price: 31.50,
        badge: 'Promoção',
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        desc: '4 makimono philadelphia, 2 sashimi de salmão, 2 salmão light, 1 sushi de camarão, 1 sushi de salmão. De R$ 35,00 por R$ 31,50.'
    },
    {
        id: 45,
        name: 'Combinado 20 Peças',
        category: 'combinados',
        price: 58.50,
        badge: 'Promoção',
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        desc: '4 philadelphia, 4 ebimaki, 3 sashimi salmão, 3 salmão selado, 4 s. light, 1 sushi camarão, 1 sushi salmão. De R$ 65,00 por R$ 58,50.'
    },
    {
        id: 46,
        name: 'Combinado 30 Peças',
        category: 'combinados',
        price: 85.50,
        badge: 'Promoção',
        img: 'imagens/pratos/prato-combinado-30-pecas.jpg',
        desc: '4 phil, 4 ebimaki, 6 sashimi salmão, 4 salmão selado, 4 s. light, 2 sushi camarão, 2 sushi salmão, 1 sushi. De R$ 95,00 por R$ 85,50.'
    },
    {
        id: 47,
        name: 'Combinado 40 Peças',
        category: 'combinados',
        price: 112.50,
        badge: 'Promoção',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
        desc: '4 makimono philadelphia, 4 makimono camarão, 8 sashimi de salmão, 5 sashimi de salmão. De R$ 125,00 por R$ 112,50.'
    },
    {
        id: 48,
        name: 'Combinado 50 Peças',
        category: 'combinados',
        price: 139.50,
        badge: 'Promoção',
        img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80',
        desc: '4 makimono philadelphia, 4 makimono camarão, 10 sashimi de salmão, 5 sashimi de salmão. De R$ 155,00 por R$ 139,50.'
    },
    {
        id: 49,
        name: 'Combinado 100 Peças',
        category: 'combinados',
        price: 265.50,
        badge: 'Família',
        img: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?auto=format&fit=crop&w=800&q=80',
        desc: '16 makimono philadelphia, 16 makimono camarão, 15 sashimi de salmão, 10 sashimi de salmão. De R$ 295,00 por R$ 265,50.'
    },
    // ── COMBINADOS LIGHT ──
    {
        id: 50,
        name: 'Combinado 15 Peças Light',
        category: 'combinados',
        price: 60.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        desc: '3 sashimi de salmão, 2 salmão light, 2 s.l abacaxi, 2 s.l maracujá, 2 s.l pepper, 2 s.l camarão, 2 ebi fry.'
    },
    {
        id: 51,
        name: 'Combinado 25 Peças Light',
        category: 'combinados',
        price: 95.00,
        badge: 'Light',
        img: 'imagens/pratos/prato-combinado-25-pecas-light.jpg',
        desc: '5 sashimi de salmão, 3 salmão light, 3 s.l abacaxi, 3 s.l maracujá, 3 s.l pepper, 4 s.l camarão, 4 ebi fry.'
    },
    {
        id: 52,
        name: 'Combinado 35 Peças Light',
        category: 'combinados',
        price: 130.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        desc: '10 sashimi de salmão, 4 salmão light, 4 s.l abacaxi, 4 s.l maracujá, 4 s.l pepper, 4 s.l camarão, 5 ebi fry.'
    },
    {
        id: 53,
        name: 'Combinado 50 Peças Light',
        category: 'combinados',
        price: 180.00,
        badge: 'Light',
        img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        desc: '15 sashimi de salmão, 5 salmão light, 5 s.l abacaxi, 5 s.l maracujá, 5 s.l pepper, 5 s.l camarão, 5 ebi fry.'
    },
    // ── CARNES ──
    {
        id: 54,
        name: 'Entrecote ao Funghi com Purê de Batatas',
        category: 'carnes',
        price: 84.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote grelhado no molho de cogumelos funghi com purê de batatas.'
    },
    {
        id: 55,
        name: 'Entrecote ao Molho de 3 Queijos',
        category: 'carnes',
        price: 79.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote grelhado ao molho de 3 queijos (batata frita).'
    },
    {
        id: 56,
        name: 'Entrecote com Arroz a Piamontese',
        category: 'carnes',
        price: 79.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote com arroz a piamontese.'
    },
    {
        id: 57,
        name: 'Entrecote com Linguine na Manteiga de Bacon',
        category: 'carnes',
        price: 79.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote com linguine na manteiga de bacon.'
    },
    {
        id: 58,
        name: 'Entrecote com Risoto de Alho Poró',
        category: 'carnes',
        price: 79.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote com risoto de alho poró.'
    },
    {
        id: 59,
        name: 'Entrecote com Risoto de Limão Siciliano',
        category: 'carnes',
        price: 79.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote com risoto de limão siciliano.'
    },
    {
        id: 60,
        name: 'Entrecote Grelhado com Salada da Casa',
        category: 'carnes',
        price: 74.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote grelhado com salada da casa (alface, tomate seco, azeitonas pretas, molho cítrico).'
    },
    {
        id: 61,
        name: 'Entrecote Grelhado Completo',
        category: 'carnes',
        price: 79.00,
        badge: 'Carnes',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
        desc: 'Entrecote grelhado, com arroz, fritas, farofa e vinagrete.'
    },
    {
        id: 62,
        name: 'Mignon Crosta de Amêndoas Risoto Damasco',
        category: 'carnes',
        price: 89.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon no molho de vinho tinto em crosta de amêndoas e risoto de damasco e queijo brie.'
    },
    {
        id: 63,
        name: 'Mignon Grelhado com Linguine a La Fonduta',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
        desc: 'Mignon grelhado com linguine a la fonduta e farofinha panco.'
    },
    {
        id: 64,
        name: 'Mignon Grelhado com Linguine Manteiga e Bacon',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
        desc: 'Mignon grelhado com linguine na manteiga de bacon.'
    },
    {
        id: 65,
        name: 'Mignon Grelhado com Salada da Casa',
        category: 'carnes',
        price: 79.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        desc: 'Mignon grelhado com salada da casa (alface, tomate seco, azeitonas pretas, molho cítrico, croutons, parmesão ralado).'
    },
    {
        id: 66,
        name: 'Mignon Grelhado Completo',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon grelhado, com arroz, fritas, farofa e vinagrete.'
    },
    {
        id: 67,
        name: 'Mignon Molho Demi Glace Risoto de Pistache',
        category: 'carnes',
        price: 89.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
        desc: 'Mignon no molho demi-glace com risoto de pistache.'
    },
    {
        id: 68,
        name: 'Mignon Molho Gorgonzola e Arroz a Piamontese',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon no molho gorgonzola, com arroz a piamontese.'
    },
    {
        id: 69,
        name: 'Mignon Molho Gorgonzola e Linguine Alho e Óleo',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        desc: 'Mignon grelhado com molho gorgonzola e linguine alho e óleo.'
    },
    {
        id: 70,
        name: 'Mignon Molho Gorgonzola e Risoto de Alho Poró',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon no molho gorgonzola e risoto de alho poró.'
    },
    {
        id: 71,
        name: 'Mignon Molho Gorgonzola Risoto Gorgonzola',
        category: 'carnes',
        price: 89.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon no molho gorgonzola e risoto de gorgonzola e nozes.'
    },
    {
        id: 72,
        name: 'Mignon Molho Gorgonzola Risoto Limão Siciliano',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon no molho gorgonzola e risoto de limão siciliano.'
    },
    {
        id: 73,
        name: 'Mignon Molho Madeira e Arroz a Piamontese',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon no molho madeira e arroz a piamontese.'
    },
    {
        id: 74,
        name: 'Mignon Molho Madeira e Risoto Alho Poró',
        category: 'carnes',
        price: 84.00,
        badge: 'Mignon',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Filé mignon no molho madeira com risoto de alho poró.'
    },
    {
        id: 75,
        name: 'Picanha com Arroz a Piamontese',
        category: 'carnes',
        price: 84.00,
        badge: 'Picanha',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
        desc: 'Picanha grelhada com arroz a piamontese.'
    },
    {
        id: 76,
        name: 'Picanha com Linguine na Manteiga de Bacon',
        category: 'carnes',
        price: 84.00,
        badge: 'Picanha',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
        desc: 'Picanha grelhada com linguine na manteiga de bacon.'
    },
    {
        id: 77,
        name: 'Picanha com Risoto de Alho Poró',
        category: 'carnes',
        price: 84.00,
        badge: 'Picanha',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        desc: 'Picanha grelhada com risoto de alho poró.'
    },
    {
        id: 78,
        name: 'Picanha com Risoto de Limão Siciliano',
        category: 'carnes',
        price: 84.00,
        badge: 'Picanha',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Picanha grelhada com risoto de limão siciliano.'
    },
    {
        id: 79,
        name: 'Picanha Grelhada com Salada da Casa',
        category: 'carnes',
        price: 79.00,
        badge: 'Picanha',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
        desc: 'Picanha grelhada com salada da casa (alface, tomate seco, azeitonas pretas, molho cítrico).'
    },
    {
        id: 80,
        name: 'Picanha Grelhada Completa',
        category: 'carnes',
        price: 84.00,
        badge: 'Picanha',
        img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80',
        desc: 'Picanha grelhada, com arroz, fritas, farofa e vinagrete.'
    },
    {
        id: 81,
        name: 'Strogonoff de Mignon',
        category: 'carnes',
        price: 79.00,
        badge: 'Especial',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        desc: 'Strogonoff de filé mignon (arroz e fritas).'
    },
    {
        id: 82,
        name: 'Tournedo Mignon com Risoto Cebola Caramelizada',
        category: 'carnes',
        price: 89.00,
        badge: 'Especial',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        desc: 'Tournedo de mignon com risoto de cebolas caramelizadas, brie e amêndoas crocantes.'
    }
];

// Global State for Admin Orders Ledger
let adminOrders = [
    {
        id: 101,
        customer: 'Cliente Exemplo (Demo)',
        items: '1x Combinado House Salmão Premium',
        deliveryFee: 0,
        deliveryFeeLabel: 'A combinar',
        total: 89.90,
        status: 'Pendente',
        time: '19:42'
    }
];

let currentCategoryFilter = 'todos';
let menuSearchQuery = '';
// Categorias do cardápio público — abas estilo caderno japonês
const menuCategories = [
    { id: 'todos', name: 'TODOS', short: 'Todos', kanji: '一覧' },
    { id: 'aperitivos', name: 'APERITIVOS', short: 'Aperitivos', kanji: '前菜' },
    { id: 'temaki', name: 'TEMAKI', short: 'Temakis', kanji: '手巻き' },
    { id: 'makimono', name: 'MAKIMONO', short: 'Makimonos', kanji: '巻き' },
    { id: 'sashimi', name: 'SASHIMI', short: 'Sashimis', kanji: '刺身' },
    { id: 'light', name: 'SALMÃO LIGHT', short: 'S. Light', kanji: 'サーモン' },
    { id: 'sushi', name: 'SUSHIS', short: 'Sushis', kanji: '寿司' },
    { id: 'combinados', name: 'COMBINADOS', short: 'Combinados', kanji: '盛り合わせ' },
    { id: 'carnes', name: 'CARNES', short: 'Carnes', kanji: '肉料理' },
    { id: 'porcoes', name: 'PORÇÕES', short: 'Porções', kanji: '盛り' },
    { id: 'burgers', name: 'BURGERS', short: 'Burgers', kanji: 'バーガー' },
    { id: 'drinks', name: 'DRINKS', short: 'Drinks', kanji: '飲み物' }
];
let currentAdminCategoryFilter = 'todos';
let isAutoSpinning = true;
let autoSpinInterval = null;
let currentAngle = 0;
let isAdminLoggedIn = false;
let adminFailedAttempts = 0;     // tentativas de login falhas (trava de força bruta)
let adminLockoutUntil = 0;       // timestamp até o qual o acesso fica bloqueado

let selectedProteinaPrice = 28.00;
let selectedProteinaName = 'Salmão Fresco';
let selectedEstiloPrice = 0.00;
let selectedEstiloName = 'Tradicional Cru';

// ===== ESTADO DO CARRINHO E PERSISTÊNCIA =====
let cart = [];
let orderSeq = 100;
let deliveryZones = []; // [{ id, name, fee }] — bairros e suas taxas de entrega
let autoPrintOnPrep = false; // imprime a comanda automaticamente ao entrar em Preparo
const STORAGE_KEY = 'japa_house_bistr_rio_claro_v1';

// ── Configuração central (config.js) com fallback para os valores padrão ──
// O config.js é carregado antes do app.js e define window.JAPA.
// Qualquer chave ausente cai no valor padrão hardcoded, mantendo o site funcional.
const CFG = (typeof window !== 'undefined' && window.JAPA) ? window.JAPA : {};
const WA_PHONE = (CFG.business && CFG.business.phone) || '5524998833667';

// Base da API: vazio = mesma origem. Definida em config.js (api.apiBase)
// para o caso de o site estar em um endereço e o backend em outro.
const API_BASE = String((CFG.api && CFG.api.apiBase) || '').replace(/\/+$/, '');
function apiUrl(caminho) { return API_BASE + caminho; }

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            dishData: dishData,
            adminOrders: adminOrders,
            orderSeq: orderSeq,
            deliveryZones: deliveryZones,
            autoPrintOnPrep: autoPrintOnPrep,
            cart: cart
        }));
    } catch (e) { /* localStorage indisponível (modo privado) */ }
}

// Produtos padrão do código — usados como fallback quando o storage está desatualizado
const DEFAULT_DISH_DATA = dishData.map(d => Object.assign({}, d));

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const s = JSON.parse(raw);
        // Só restaura dishData do storage se tiver pelo menos tantos produtos quanto o código
        // Isso evita que um storage antigo sobrescreva o cardápio atualizado
        if (Array.isArray(s.dishData) && s.dishData.length >= DEFAULT_DISH_DATA.length) {
            dishData = s.dishData;
            // As fotos vêm sempre do código (o painel não edita imagens):
            // assim trocar a foto de um prato no app.js já vale para quem já visitou o site
            const fotoPadrao = new Map(DEFAULT_DISH_DATA.map(d => [d.id, d.img]));
            dishData.forEach(d => { const foto = fotoPadrao.get(d.id); if (foto) d.img = foto; });
        } else {
            // Storage desatualizado: mantém os produtos do código, descarta os salvos
            dishData = DEFAULT_DISH_DATA.map(d => Object.assign({}, d));
        }
        if (Array.isArray(s.adminOrders)) adminOrders = s.adminOrders;
        if (typeof s.orderSeq === 'number') orderSeq = s.orderSeq;
        if (Array.isArray(s.deliveryZones)) deliveryZones = s.deliveryZones;
        if (typeof s.autoPrintOnPrep === 'boolean') autoPrintOnPrep = s.autoPrintOnPrep;
        if (Array.isArray(s.cart)) cart = s.cart;
        // Persiste imediatamente com os dados corretos
        saveState();
    } catch (e) { /* estado corrompido: mantém padrão */ }
}

// Escapa HTML para evitar XSS ao renderizar dados de usuário
function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

// Recalcula o cardápio público (abas + lista) após alterações no painel
function refreshPublicMenu() {
    renderMenuTabs();
    renderMenuList();
    saveState();
}

// Alterna o destaque dos botões de filtro sem usar o `event` global
function setActiveFilter(selector, activeBtn, activeClasses, inactiveClasses) {
    document.querySelectorAll(selector).forEach(btn => {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
    });
    if (activeBtn) {
        activeBtn.classList.remove(...inactiveClasses);
        activeBtn.classList.add(...activeClasses);
    }
}
function initSakura() {
    const canvas = document.getElementById('sakuraCanvas');
    if (!canvas) return;
    // Acessibilidade: não anima pétalas para quem pediu redução de movimento
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const petals = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 6 + 4,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * 360
    }));

    function drawSakura() {
        ctx.clearRect(0, 0, width, height);
        petals.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = `rgba(225, 29, 72, ${p.opacity})`;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += 0.5;

            if (p.y > height) {
                p.y = -10;
                p.x = Math.random() * width;
            }
            if (p.x > width) p.x = 0;
            if (p.x < 0) p.x = width;
        });
        requestAnimationFrame(drawSakura);
    }
    drawSakura();
}

// ===== CARDÁPIO PÚBLICO — estilo caderno japonês (abas + lista) =====
// Abas de categoria — rótulos curtos, todos visíveis de uma vez
function renderMenuTabs() {
    const nav = document.getElementById('tabsNav');
    if (!nav) return;
    nav.innerHTML = menuCategories.map(c => {
        const active = currentCategoryFilter === c.id ? ' active' : '';
        return `<button type="button" class="tab-btn${active}" onclick="filterCategory('${c.id}')">${esc(c.short || c.name)}</button>`;
    }).join('');
}

// Rodapé: total de itens e indicador de páginas (8 itens por "página")
function updateMenuFooter(totalItems) {
    const counter = document.getElementById('itemCounter');
    if (counter) counter.textContent = `${totalItems} ITENS`;

    const pages = Math.max(1, Math.ceil(totalItems / 8));
    const dots = document.getElementById('pageDots');
    if (dots) {
        dots.innerHTML = Array.from({ length: pages }, (_, i) =>
            `<div class="page-dot${i === 0 ? ' active' : ''}"></div>`
        ).join('');
    }
    const text = document.getElementById('pageText');
    if (text) text.textContent = `PÁG. 1/${pages}`;
}

// Renderiza a lista: busca (global) tem prioridade sobre a categoria ativa
function renderMenuList() {
    const list = document.getElementById('menuList');
    if (!list) return;

    const query = normalizeText(menuSearchQuery);
    let items;
    let title;

    if (query) {
        items = dishData.filter(d =>
            normalizeText(d.name).includes(query) ||
            normalizeText(d.desc).includes(query) ||
            normalizeText(d.badge || d.category || '').includes(query)
        );
        title = `<div class="category-title">BUSCA: "${esc(menuSearchQuery.trim())}" <span>検索 • ${items.length} ${items.length === 1 ? 'item' : 'itens'}</span></div>`;
    } else {
        const cat = menuCategories.find(c => c.id === currentCategoryFilter) || menuCategories[0];
        items = (currentCategoryFilter === 'todos')
            ? [...dishData]
            : dishData.filter(d => d.category === currentCategoryFilter);
        title = `<div class="category-title">${esc(cat.name)} <span>${esc(cat.kanji)} • ${items.length} itens</span></div>`;
    }

    if (items.length === 0) {
        list.innerHTML = title + `<div class="menu-empty">Nada encontrado para "${esc(menuSearchQuery.trim())}".</div>`;
    } else {
        list.innerHTML = title + items.map(dish => {
            const safePrice = Number(dish.price) || 0;
            return `
                        <div class="item-row" role="button" tabindex="0"
                             aria-label="Ver detalhes de ${esc(dish.name)}"
                             onclick="openDishModal(${dish.id})"
                             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDishModal(${dish.id})}">
                            <div class="item-thumb"><img src="${esc(dish.img)}" alt="${esc(dish.name)}" loading="lazy" onerror="this.onerror=null;this.src='imagens/placeholder-prato.svg'"></div>
                            <div class="item-info">
                                <div class="item-name">${esc(dish.name)}</div>
                                <div class="item-sub">${esc(dish.desc)}</div>
                            </div>
                            <div class="item-price">R$ ${safePrice.toFixed(2).replace('.', ',')}</div>
                        </div>
                    `;
        }).join('');
        list.scrollTop = 0;
    }

    updateMenuFooter(items.length);
}

// Toast de confirmação (ex: "adicionado à comanda")
let toastTimer = null;
function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}



function filterCategory(category) {
    currentCategoryFilter = category;
    // Clicar numa aba limpa a busca para mostrar a categoria inteira
    if (menuSearchQuery) clearMenuSearch(false);
    renderMenuTabs();
    renderMenuList();
}

// ===== BUSCA DO CARDÁPIO =====
// Normaliza acentos/caixa para "camarao" encontrar "Camarão"
function normalizeText(value) {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function onMenuSearch(value) {
    menuSearchQuery = String(value || '');
    const clearBtn = document.getElementById('menuSearchClear');
    if (clearBtn) clearBtn.hidden = !menuSearchQuery;
    renderMenuList();
}

function clearMenuSearch(rerender = true) {
    menuSearchQuery = '';
    const input = document.getElementById('menuSearchInput');
    if (input) input.value = '';
    const clearBtn = document.getElementById('menuSearchClear');
    if (clearBtn) clearBtn.hidden = true;
    if (rerender) renderMenuList();
}

// ===== ARRASTAR AS ABAS COM O MOUSE (drag-to-scroll) =====
// Usa pointer events: arrasto com mouse, toque usa o scroll nativo
function initTabsDrag() {
    const nav = document.getElementById('tabsNav');
    if (!nav) return;

    let isDown = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;

    nav.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        isDown = true;
        moved = false;
        startX = e.clientX;
        startScroll = nav.scrollLeft;
        nav.classList.add('dragging');
    });

    window.addEventListener('pointermove', e => {
        if (!isDown) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true; // foi arrasto, não clique
        if (moved) {
            e.preventDefault();
            nav.scrollLeft = startScroll - dx;
        }
    });

    const endDrag = () => {
        if (!isDown) return;
        isDown = false;
        nav.classList.remove('dragging');
    };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    // Se houve arrasto, cancela o clique do mouse que vem em seguida
    // (cliques de teclado têm detail=0 e nunca são bloqueados)
    nav.addEventListener('click', e => {
        if (moved && e.detail > 0) {
            e.preventDefault();
            e.stopPropagation();
        }
        moved = false;
    }, true);
}

// ── Trava de força bruta no login admin (persistida à parte do estado principal) ──
const ADMIN_LOCKOUT_KEY = 'japa_admin_lockout';
function saveAdminLockout() {
    try { localStorage.setItem(ADMIN_LOCKOUT_KEY, JSON.stringify({ attempts: adminFailedAttempts, until: adminLockoutUntil })); } catch (e) { /* storage indisponível */ }
}
function loadAdminLockout() {
    try {
        const raw = localStorage.getItem(ADMIN_LOCKOUT_KEY);
        if (!raw) return;
        const s = JSON.parse(raw);
        if (typeof s.attempts === 'number') adminFailedAttempts = s.attempts;
        if (typeof s.until === 'number') adminLockoutUntil = s.until;
        // Libera automaticamente se a trava já expirou
        if (adminLockoutUntil && Date.now() >= adminLockoutUntil) {
            adminFailedAttempts = 0;
            adminLockoutUntil = 0;
            saveAdminLockout();
        }
    } catch (e) { /* estado corrompido: mantém padrão */ }
}

function checkAdminAccess() {
    const errEl = document.getElementById('loginErrorMsg');
    if (Date.now() < adminLockoutUntil) {
        const mins = Math.ceil((adminLockoutUntil - Date.now()) / 60000);
        document.getElementById('adminLoginModal').classList.remove('hidden');
        if (errEl) { errEl.textContent = `Acesso temporariamente bloqueado. Aguarde ${mins} min.`; errEl.classList.remove('hidden'); }
        return;
    }
    if (isAdminLoggedIn) {
        openKitchenPanel();
    } else {
        document.getElementById('adminLoginModal').classList.remove('hidden');
        if (errEl) errEl.classList.add('hidden');
    }
}

function closeAdminLoginModal() {
    document.getElementById('adminLoginModal').classList.add('hidden');
    const errEl = document.getElementById('loginErrorMsg');
    if (errEl) errEl.classList.add('hidden');
}

// Token JWT guardado em memória durante a sessão
let adminToken = null;

function handleAdminLogin(e) {
    e.preventDefault();
    const errEl = document.getElementById('loginErrorMsg');
    const btnEl = document.getElementById('adminLoginBtn');

    if (Date.now() < adminLockoutUntil) {
        const mins = Math.ceil((adminLockoutUntil - Date.now()) / 60000);
        if (errEl) { errEl.textContent = `Acesso bloqueado. Aguarde ${mins} min.`; errEl.classList.remove('hidden'); }
        return;
    }

    const pass = document.getElementById('adminPasswordInput').value;
    if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Verificando...'; }
    if (errEl) errEl.classList.add('hidden');

    fetch(apiUrl('/api/admin/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'admin', password: pass })
    })
        .then(r => r.json().then(data => ({ ok: r.ok, data })))
        .then(({ ok, data }) => {
            if (ok && data.token) {
                adminToken = data.token;
                isAdminLoggedIn = true;
                adminFailedAttempts = 0;
                adminLockoutUntil = 0;
                saveAdminLockout();
                closeAdminLoginModal();
                document.getElementById('adminPasswordInput').value = '';
                openKitchenPanel();
                // O servidor passa a ser a fonte da verdade dos pedidos
                sincronizarPedidos();
                atualizarComandasCozinha();
                // ...e do cardápio e dos bairros editados pelo gerente
                apiCarregarCardapio();
                apiCarregarZonas();
            } else {
                adminToken = null;
                adminFailedAttempts += 1;
                const adminCfg = CFG.admin || {};
                const maxAttempts = (typeof adminCfg.maxAttempts === 'number') ? adminCfg.maxAttempts : 5;
                const lockoutMinutes = (typeof adminCfg.lockoutMinutes === 'number') ? adminCfg.lockoutMinutes : 10;
                if (adminFailedAttempts >= maxAttempts) {
                    adminLockoutUntil = Date.now() + lockoutMinutes * 60000;
                    saveAdminLockout();
                    if (errEl) { errEl.textContent = `Muitas tentativas. Aguarde ${lockoutMinutes} min.`; errEl.classList.remove('hidden'); }
                } else {
                    if (errEl) { errEl.textContent = `Senha incorreta! Tentativa ${adminFailedAttempts}/${maxAttempts}.`; errEl.classList.remove('hidden'); }
                }
            }
        })
        .catch(() => {
            if (errEl) { errEl.textContent = 'Erro ao conectar ao servidor. Tente novamente.'; errEl.classList.remove('hidden'); }
        })
        .finally(() => {
            if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Acessar Gestão'; }
        });
}

function closeAdminPanelModal() {
    document.getElementById('adminPanelModal').classList.add('hidden');
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    adminToken = null;
    closeAdminPanelModal();
}

// ── Troca de senha ──────────────────────────────────────────────────────
function openChangePasswordModal() {
    const modal = document.getElementById('changePasswordModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.getElementById('cpOldPass').value = '';
        document.getElementById('cpNewPass').value = '';
        document.getElementById('cpConfPass').value = '';
        document.getElementById('cpMsg').textContent = '';
        document.getElementById('cpMsg').className = 'text-xs mt-2 hidden text-center';
    }
}

function closeChangePasswordModal() {
    const modal = document.getElementById('changePasswordModal');
    if (modal) modal.classList.add('hidden');
}

function handleChangePassword(e) {
    e.preventDefault();
    const msgEl = document.getElementById('cpMsg');
    const btnEl = document.getElementById('cpSubmitBtn');
    const oldPass = document.getElementById('cpOldPass').value;
    const newPass = document.getElementById('cpNewPass').value;
    const confPass = document.getElementById('cpConfPass').value;

    if (newPass.length < 4) {
        msgEl.textContent = 'A nova senha deve ter pelo menos 4 caracteres.';
        msgEl.className = 'text-xs mt-2 text-rose-400 font-semibold text-center';
        return;
    }
    if (newPass !== confPass) {
        msgEl.textContent = 'A nova senha e a confirmação não coincidem.';
        msgEl.className = 'text-xs mt-2 text-rose-400 font-semibold text-center';
        return;
    }

    if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Salvando...'; }

    fetch(apiUrl('/api/admin/change-password'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({ oldPassword: oldPass, newPassword: newPass })
    })
        .then(r => r.json().then(data => ({ ok: r.ok, data })))
        .then(({ ok, data }) => {
            if (ok) {
                msgEl.textContent = 'Senha alterada com sucesso! Use a nova senha no próximo acesso.';
                msgEl.className = 'text-xs mt-2 text-emerald-400 font-semibold text-center';
                setTimeout(closeChangePasswordModal, 2000);
            } else {
                msgEl.textContent = data.error || 'Erro ao trocar a senha.';
                msgEl.className = 'text-xs mt-2 text-rose-400 font-semibold text-center';
            }
        })
        .catch(() => {
            msgEl.textContent = 'Erro de conexão. Tente novamente.';
            msgEl.className = 'text-xs mt-2 text-rose-400 font-semibold text-center';
        })
        .finally(() => {
            if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Salvar Nova Senha'; }
        });
}

function switchAdminTab(tab) {
    const tabs = {
        cardapio: { btn: 'adminTabCardapio', content: 'adminTabContentCardapio' },
        pedidos: { btn: 'adminTabPedidos', content: 'adminTabContentPedidos' },
        entrega: { btn: 'adminTabEntrega', content: 'adminTabContentEntrega' }
    };

    Object.keys(tabs).forEach(key => {
        const btn = document.getElementById(tabs[key].btn);
        const content = document.getElementById(tabs[key].content);
        if (!btn || !content) return;

        const active = key === tab;
        const base = 'px-5 py-3 border-b-2 font-bold text-xs uppercase tracking-wider flex items-center gap-2 whitespace-nowrap';
        btn.className = (active
            ? base + ' border-japa-red text-white'
            : base + ' border-transparent text-slate-400 hover:text-white') + (key === 'pedidos' ? ' relative' : '');
        content.classList.toggle('hidden', !active);
    });

    if (tab === 'pedidos') renderAdminOrders();
    if (tab === 'entrega') renderAdminZones();
}

// ═══════════════════════════════════════════════════════════════════════
//  PAINEL ↔ SERVIDOR — o banco passa a ser a fonte da verdade
// ═══════════════════════════════════════════════════════════════════════
//  O painel do gerente e o da cozinha passam a ler de GET /api/orders e a
//  gravar as mudanças com PATCH. O localStorage continua como cache, para
//  o site abrir mesmo sem o servidor no ar.

function apiCabecalhoAuth() {
    return adminToken ? { 'Authorization': 'Bearer ' + adminToken } : {};
}

// ═══════════════════════════════════════════════════════════════════════
//  CARDÁPIO E BAIRROS ↔ SERVIDOR
// ═══════════════════════════════════════════════════════════════════════
//  O que o gerente edita no painel (bairros, taxas, produtos, preços) é
//  gravado no servidor. Antes isso ficava só no navegador de quem editou:
//  o outro aparelho não via, o cliente não via e tudo se perdia no
//  primeiro reinício do servidor. Agora o servidor é a fonte da verdade e
//  o localStorage continua só como cache (o site abre mesmo sem API).

// Avisa quando a alteração ficou só neste navegador (API fora do ar)
function avisoSalvoSoAqui(oque, erro) {
    const detalhe = (erro && erro.message) ? ' (' + erro.message + ')' : '';
    showToast(oque + ' salvo só neste navegador — não foi para o servidor' + detalhe);
}

async function apiCarregarZonas() {
    try {
        const r = await fetch(apiUrl('/api/zones'));
        if (!r.ok) return false;
        const lista = await r.json();
        if (!Array.isArray(lista)) return false;
        deliveryZones = lista.map(z => ({
            id: z.id,
            name: z.name,
            fee: Number(z.fee) || 0
        }));
        saveState();
        renderAdminZones();
        renderKitchenZones();
        renderDistrictField();
        updateCartTotals();
        return true;
    } catch (e) { return false; }
}

async function apiCarregarCardapio() {
    try {
        const r = await fetch(apiUrl('/api/menu'));
        if (!r.ok) return false;
        const itens = await r.json();
        if (!Array.isArray(itens) || !itens.length) return false;
        dishData = itens.map(d => Object.assign({}, d, { price: Number(d.price) || 0 }));
        saveState();
        renderMenuTabs();
        renderMenuList();
        if (isAdminLoggedIn) renderAdminProducts();
        return true;
    } catch (e) { return false; }
}

async function apiCriarZona(zona) {
    try {
        const r = await fetch(apiUrl('/api/zones'), {
            method: 'POST',
            headers: Object.assign({ 'Content-Type': 'application/json' }, apiCabecalhoAuth()),
            body: JSON.stringify({ name: zona.name, fee: zona.fee })
        });
        if (!r.ok) {
            const d = await r.json().catch(() => ({}));
            throw new Error(d.error || ('HTTP ' + r.status));
        }
        const d = await r.json();
        if (d && d.id) { zona.id = d.id; saveState(); }
        return true;
    } catch (e) {
        avisoSalvoSoAqui('Bairro', e);
        return false;
    }
}

async function apiAtualizarZona(id, campos) {
    try {
        const r = await fetch(apiUrl('/api/zones/' + encodeURIComponent(id)), {
            method: 'PUT',
            headers: Object.assign({ 'Content-Type': 'application/json' }, apiCabecalhoAuth()),
            body: JSON.stringify(campos)
        });
        if (!r.ok) {
            const d = await r.json().catch(() => ({}));
            throw new Error(d.error || ('HTTP ' + r.status));
        }
        return true;
    } catch (e) {
        avisoSalvoSoAqui('Bairro', e);
        return false;
    }
}

async function apiExcluirZona(id) {
    try {
        const r = await fetch(apiUrl('/api/zones/' + encodeURIComponent(id)), {
            method: 'DELETE',
            headers: apiCabecalhoAuth()
        });
        if (!r.ok) {
            const d = await r.json().catch(() => ({}));
            throw new Error(d.error || ('HTTP ' + r.status));
        }
        return true;
    } catch (e) {
        avisoSalvoSoAqui('Bairro', e);
        return false;
    }
}

async function apiSalvarProduto(produto, ehNovo) {
    try {
        const corpo = {
            name: produto.name,
            category: produto.category,
            price: produto.price,
            badge: produto.badge,
            img: produto.img,
            desc: produto.desc
        };
        const r = ehNovo
            ? await fetch(apiUrl('/api/menu'), {
                method: 'POST',
                headers: Object.assign({ 'Content-Type': 'application/json' }, apiCabecalhoAuth()),
                body: JSON.stringify(corpo)
            })
            : await fetch(apiUrl('/api/menu/' + produto.id), {
                method: 'PUT',
                headers: Object.assign({ 'Content-Type': 'application/json' }, apiCabecalhoAuth()),
                body: JSON.stringify(corpo)
            });
        if (!r.ok) {
            const d = await r.json().catch(() => ({}));
            throw new Error(d.error || ('HTTP ' + r.status));
        }
        const d = await r.json().catch(() => ({}));
        if (ehNovo && d && d.id) { produto.id = d.id; saveState(); }
        return true;
    } catch (e) {
        avisoSalvoSoAqui('Produto', e);
        return false;
    }
}

async function apiAtualizarProduto(id, campos) {
    try {
        const r = await fetch(apiUrl('/api/menu/' + id), {
            method: 'PUT',
            headers: Object.assign({ 'Content-Type': 'application/json' }, apiCabecalhoAuth()),
            body: JSON.stringify(campos)
        });
        if (!r.ok) {
            const d = await r.json().catch(() => ({}));
            throw new Error(d.error || ('HTTP ' + r.status));
        }
        return true;
    } catch (e) {
        avisoSalvoSoAqui('Produto', e);
        return false;
    }
}

async function apiExcluirProduto(id) {
    try {
        const r = await fetch(apiUrl('/api/menu/' + id), {
            method: 'DELETE',
            headers: apiCabecalhoAuth()
        });
        if (!r.ok) {
            const d = await r.json().catch(() => ({}));
            throw new Error(d.error || ('HTTP ' + r.status));
        }
        return true;
    } catch (e) {
        avisoSalvoSoAqui('Produto', e);
        return false;
    }
}

function sessaoPainelExpirada() {
    adminToken = null;
    isAdminLoggedIn = false;
    showToast('Sua sessão do painel expirou. Entre novamente.');
}

function normalizarPedidoServidor(o) {
    return {
        id: o.id,
        customer: o.customer || '',
        phone: o.phone || '',
        address: o.address || '',
        payment: o.payment || '',
        items: o.items || '',
        deliveryFee: Number(o.deliveryFee) || 0,
        deliveryFeeLabel: o.deliveryFeeLabel || 'A combinar',
        total: Number(o.total) || 0,
        notes: o.notes || '',
        changeFor: o.changeFor || '',
        status: o.status || 'Pendente',
        source: o.source || 'site',
        tableId: (o.tableId === undefined || o.tableId === null) ? null : o.tableId,
        time: o.time || ''
    };
}

// Carrega os pedidos do servidor (null = servidor fora do ar / sem token)
async function apiCarregarPedidos() {
    if (!adminToken) return null;
    try {
        const r = await fetch(apiUrl('/api/orders'), { headers: apiCabecalhoAuth() });
        if (r.status === 401) { sessaoPainelExpirada(); return null; }
        if (!r.ok) return null;
        const lista = await r.json();
        return Array.isArray(lista) ? lista.map(normalizarPedidoServidor) : null;
    } catch (e) { return null; }
}

// Troca a lista local pela do servidor e redesenha os painéis
async function sincronizarPedidos() {
    const lista = await apiCarregarPedidos();
    if (!lista) return false;
    adminOrders = lista;
    saveState();
    updateOrderBadges();
    if (isAdminLoggedIn) renderAdminOrders();
    refreshKitchenOrders();
    updateKitchenStats();
    return true;
}

async function apiAtualizarStatusPedido(id, status) {
    if (!adminToken) return false;
    try {
        const r = await fetch(apiUrl('/api/orders/') + id + '/status', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({ status })
        });
        if (r.status === 401) { sessaoPainelExpirada(); return false; }
        return r.ok;
    } catch (e) { return false; }
}

async function apiLimparPedidosConcluidos() {
    if (!adminToken) return false;
    try {
        const r = await fetch(apiUrl('/api/orders/completed'), { method: 'DELETE', headers: apiCabecalhoAuth() });
        return r.ok;
    } catch (e) { return false; }
}

// ═══════════════════════════════════════════════════════════════════════
//  COMANDAS EM MESA
// ═══════════════════════════════════════════════════════════════════════
//  O cliente escolhe a mesa, digita o código de 4 letras que está na mesa e
//  envia os itens direto para a cozinha. Sem o código, ninguém mexe na
//  comanda de outra mesa.

let mesaEstado = { mesaId: null, nome: '', codigo: '', comanda: null };
let mesasDoSalao = [];
let mesaTimerId = null;

function garantirModalMesa() {
    if (document.getElementById('mesaModal')) return;
    const div = document.createElement('div');
    div.id = 'mesaModal';
    div.setAttribute('role', 'dialog');
    div.setAttribute('aria-modal', 'true');
    div.setAttribute('aria-label', 'Comanda da mesa');
    div.className = 'fixed inset-0 bg-black/85 backdrop-blur-md z-[70] hidden items-center justify-center p-4';
    div.innerHTML = `
        <div class="absolute inset-0" onclick="fecharComandaMesa()"></div>
        <div class="relative bg-japa-dark border border-slate-700/80 max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div class="p-5 border-b border-slate-800 flex items-center justify-between bg-japa-card/80 gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-xl bg-japa-red/15 border border-japa-red/30 text-japa-red flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-chair"></i>
                    </div>
                    <div class="min-w-0">
                        <h3 class="font-cinzel text-lg font-extrabold text-white truncate">Comanda da Mesa</h3>
                        <p class="text-[11px] text-slate-400 truncate">Peça na mesa e acompanhe sem fila.</p>
                    </div>
                </div>
                <button onclick="fecharComandaMesa()" class="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all shrink-0" aria-label="Fechar comanda da mesa">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div id="mesaConteudo" class="p-5 overflow-y-auto custom-scroll flex-1"></div>
            <div id="mesaDesfazerBarra" class="hidden border-t border-slate-800 bg-slate-900/90 px-4 py-3"></div>
        </div>`;
    document.body.appendChild(div);
}

function abrirComandaMesa() {
    mesaEtapaEscolha();
    mostrarModalMesa();
    carregarMesasDoSalao();
}

function mostrarModalMesa() {
    garantirModalMesa();
    const modal = document.getElementById('mesaModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    pararTimerMesa();
    mesaTimerId = setInterval(carregarComandaMesa, 20000);
}

function fecharComandaMesa() {
    const modal = document.getElementById('mesaModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    document.body.style.overflow = '';
    pararTimerMesa();
}

function pararTimerMesa() {
    if (mesaTimerId) { clearInterval(mesaTimerId); mesaTimerId = null; }
}

async function carregarMesasDoSalao() {
    try {
        const r = await fetch(apiUrl('/api/tables'));
        if (!r.ok) return;
        const lista = await r.json();
        mesasDoSalao = Array.isArray(lista) ? lista : [];
    } catch (e) { mesasDoSalao = []; }
    mesaAtualizarListaMesas();
}

// ── Etapa 1: escolher a mesa ────────────────────────────────────────────
function mesaEtapaEscolha() {
    mesaEstado.mesaId = null;
    mesaEstado.codigo = '';
    mesaEstado.comanda = null;
    if (mesaDesfazer && mesaDesfazer.timer) clearTimeout(mesaDesfazer.timer);
    mesaDesfazer = null;
    const barraDesfazer = document.getElementById('mesaDesfazerBarra');
    if (barraDesfazer) { barraDesfazer.classList.add('hidden'); barraDesfazer.innerHTML = ''; }
    const cont = document.getElementById('mesaConteudo');
    if (!cont) return;
    cont.innerHTML = `
        <div class="space-y-5">
            <p class="text-xs text-slate-400 leading-relaxed">
                Escolha a sua mesa e digite o <span class="text-white font-bold">código de 4 letras</span> que está na mesa.
                Só quem tiver o código consegue pedir para ela — assim a comanda não vai parar na mesa errada.
            </p>
            <div>
                <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Mesas do salão</h4>
                <div id="mesaLista" class="grid grid-cols-2 sm:grid-cols-4 gap-2"></div>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
                <label for="mesaCodigoInput" class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Código da mesa</label>
                <div class="flex gap-2">
                    <input id="mesaCodigoInput" type="text" maxlength="4" autocomplete="off" inputmode="latin"
                        onkeyup="if (event.key === 'Enter') abrirComandaDaMesa();"
                        oninput="this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '')"
                        placeholder="ABCD"
                        class="flex-1 min-w-0 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-center text-xl font-black tracking-[0.35em] uppercase text-white placeholder:text-slate-600 focus:border-japa-red focus:outline-none">
                    <button onclick="abrirComandaDaMesa()" class="px-5 rounded-xl bg-gradient-to-r from-japa-crimson to-japa-red hover:from-japa-red hover:to-pink-600 text-white font-bold text-xs uppercase tracking-wider transition-all">
                        Abrir
                    </button>
                </div>
                <p id="mesaErro" class="hidden text-xs text-rose-400 font-semibold"></p>
            </div>
        </div>`;
    mesaAtualizarListaMesas();
}

function mesaAtualizarListaMesas() {
    const lista = document.getElementById('mesaLista');
    if (!lista) return;
    if (!mesasDoSalao.length) {
        lista.innerHTML = `<p class="text-[11px] text-slate-500 col-span-full">Carregando mesas...</p>`;
        return;
    }
    lista.innerHTML = mesasDoSalao.map(m => {
        const ativo = mesaEstado.mesaId === m.id;
        return `
            <button type="button" onclick="selecionarMesa(${m.id})"
                class="px-3 py-2.5 rounded-xl border text-left transition-all ${ativo
                    ? 'bg-japa-red/20 border-japa-red text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-japa-red/60 hover:text-white'}">
                <span class="block text-xs font-bold">${esc(m.name)}</span>
                <span class="block text-[10px] text-slate-500">${esc(m.seats)} lugares</span>
            </button>`;
    }).join('');
}

function selecionarMesa(id) {
    mesaEstado.mesaId = id;
    const m = mesasDoSalao.find(x => x.id === id);
    mesaEstado.nome = m ? m.name : '';
    mesaAtualizarListaMesas();
    const input = document.getElementById('mesaCodigoInput');
    if (input) input.focus();
}

// ── Etapa 2: a comanda da mesa ──────────────────────────────────────────
function mesaEtapaComanda() {
    const cont = document.getElementById('mesaConteudo');
    if (!cont) return;
    cont.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-5">
            <div class="space-y-3">
                <div class="flex items-center justify-between gap-2">
                    <h4 class="font-bold text-white text-sm">Na mesa agora</h4>
                    <button onclick="mesaEtapaEscolha()" class="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-wider">
                        Trocar mesa
                    </button>
                </div>
                <div id="mesaItens" class="space-y-2"></div>
                <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total</span>
                        <span id="mesaTotal" class="text-xl font-black text-japa-gold">R$ 0,00</span>
                    </div>
                    <button id="btnChamarGarcom" type="button" onclick="chamarGarcomMesa()"
                        class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40">
                        <i class="fa-solid fa-bell"></i> <span id="btnChamarGarcomTexto">Chamar o garçom</span>
                    </button>
                    <p id="mesaChamarAviso" class="hidden text-[11px] text-amber-300 font-semibold text-center leading-relaxed">
                        <i class="fa-solid fa-bell text-amber-400 mr-1"></i>Chamamos o garçom para a sua mesa. Ele já vem até aí.
                    </p>
                </div>
                <p class="text-[11px] text-slate-500 leading-relaxed">
                    <i class="fa-solid fa-circle-info text-slate-400 mr-1"></i>
                    O pedido já vai direto para a cozinha. Para pagar, chame o garçom no balcão.
                </p>
            </div>
            <div class="space-y-3">
                <h4 class="font-bold text-white text-sm">Adicionar ao pedido</h4>
                <input id="mesaBusca" type="text" oninput="mesaAtualizarPratos()" placeholder="Buscar prato..."
                    class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-japa-red focus:outline-none">
                <div id="mesaPratos" class="space-y-1.5 max-h-[340px] overflow-y-auto custom-scroll pr-1"></div>
            </div>
        </div>`;
    mesaAtualizarItens();
    mesaAtualizarPratos();
}

function mesaAtualizarItens() {
    const alvo = document.getElementById('mesaItens');
    const totalEl = document.getElementById('mesaTotal');
    if (!alvo) return;
    const comanda = mesaEstado.comanda;
    const itens = (comanda && Array.isArray(comanda.items)) ? comanda.items : [];

    if (!itens.length) {
        alvo.innerHTML = `<div class="text-center py-8 text-[11px] text-slate-500 border border-dashed border-slate-800 rounded-2xl">
            Nada pedido ainda. Escolha um prato ao lado para começar.
        </div>`;
    } else {
        alvo.innerHTML = itens.map((i, idx) => {
            const st = i.status || 'Pendente';
            const cancelado = st === 'Cancelado';
            const cls = cancelado ? 'bg-slate-700/40 text-slate-400 border-slate-700'
                : st === 'Pronto' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : st === 'Em Preparo' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/30';
            const emoji = cancelado ? '🚫' : st === 'Pronto' ? '✅' : st === 'Em Preparo' ? '👨‍🍳' : '⏳';
            // Enquanto o item está "Pendente" o cliente tira ele mesmo.
            // Depois que a cozinha começou, o cancelamento é do garçom.
            const podeRemover = !cancelado && st === 'Pendente';
            const acao = podeRemover
                ? `<button type="button" onclick="removerItemMesa(${idx})" title="Remover este item"
                       class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 flex items-center justify-center transition-all shrink-0">
                       <i class="fa-solid fa-xmark text-xs"></i>
                   </button>`
                : `<span title="${cancelado ? 'Item cancelado' : 'Já foi para a cozinha — chame o garçom para cancelar'}"
                       class="w-7 h-7 rounded-lg bg-slate-800/60 text-slate-600 flex items-center justify-center shrink-0">
                       <i class="fa-solid fa-lock text-[10px]"></i>
                   </span>`;
            return `
            <div class="flex items-center justify-between gap-3 bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2 ${cancelado ? 'opacity-60' : ''}">
                <div class="min-w-0 ${cancelado ? 'line-through' : ''}">
                    <span class="text-xs font-bold text-white">${esc(i.qtd)}x ${esc(i.nome)}</span>
                    ${i.obs ? `<span class="block text-[10px] text-slate-400">${esc(i.obs)}</span>` : ''}
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${cls}">${emoji} ${esc(st)}</span>
                    ${acao}
                </div>
            </div>`;
        }).join('');
    }

    const total = comanda ? Number(comanda.total) || 0 : 0;
    if (totalEl) totalEl.textContent = 'R$ ' + total.toFixed(2);
    atualizarBotaoGarcom();
}

// O botão de chamar o garçom fica travado enquanto o chamado não for atendido
function atualizarBotaoGarcom() {
    const btn = document.getElementById('btnChamarGarcom');
    const texto = document.getElementById('btnChamarGarcomTexto');
    const aviso = document.getElementById('mesaChamarAviso');
    const chamou = !!(mesaEstado.comanda && mesaEstado.comanda.waiterCalled);

    if (btn) {
        btn.disabled = chamou;
        btn.classList.toggle('opacity-60', chamou);
        btn.classList.toggle('cursor-not-allowed', chamou);
    }
    if (texto) texto.textContent = chamou ? 'Garçom já foi chamado' : 'Chamar o garçom';
    if (aviso) aviso.classList.toggle('hidden', !chamou);
}

// O cliente remove um item que ainda está "Pendente" (a cozinha não começou).
// Sem dialogo nativo: o item some na hora e aparece um "Desfazer" por 6 segundos.
let mesaDesfazer = null;

async function removerItemMesa(indice) {
    if (mesaEstado.mesaId === null || !mesaEstado.codigo) return;
    const item = (mesaEstado.comanda && Array.isArray(mesaEstado.comanda.items))
        ? mesaEstado.comanda.items[indice] : null;
    if (!item) return;
    const guardado = { nome: item.nome, obs: item.obs || '', qtd: Number(item.qtd) || 1 };

    try {
        const r = await fetch(apiUrl('/api/commands/table/') + mesaEstado.mesaId + '/itens/' + indice, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo: mesaEstado.codigo })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível remover o item.'); return; }
        mesaEstado.comanda = d.comanda || mesaEstado.comanda;
        mesaAtualizarItens();
        mostrarDesfazerMesa(guardado);
    } catch (e) {
        showToast('Sem conexão com o servidor. Tente de novo.');
    }
}

// Aviso de "Desfazer" (some sozinho depois de 6 segundos)
function mostrarDesfazerMesa(item) {
    const barra = document.getElementById('mesaDesfazerBarra');
    if (!barra) return;
    barra.innerHTML = `
        <div class="flex items-center justify-between gap-3">
            <span class="text-xs text-slate-300 min-w-0 truncate">Removido: <b class="text-white">${esc(item.nome)}</b></span>
            <button type="button" onclick="desfazerRemocaoMesa()"
                class="px-3 py-1.5 rounded-lg bg-japa-red hover:bg-rose-600 text-white font-bold text-[10px] uppercase tracking-wider shrink-0">
                Desfazer
            </button>
        </div>`;
    barra.classList.remove('hidden');
    if (mesaDesfazer && mesaDesfazer.timer) clearTimeout(mesaDesfazer.timer);
    mesaDesfazer = {
        item,
        timer: setTimeout(() => {
            const b = document.getElementById('mesaDesfazerBarra');
            if (b) b.classList.add('hidden');
            mesaDesfazer = null;
        }, 10000)
    };
}

// Devolve o item removido para a comanda
async function desfazerRemocaoMesa() {
    if (!mesaDesfazer) return;
    const guardado = mesaDesfazer.item;
    if (mesaDesfazer.timer) clearTimeout(mesaDesfazer.timer);
    mesaDesfazer = null;
    const barra = document.getElementById('mesaDesfazerBarra');
    if (barra) { barra.classList.add('hidden'); barra.innerHTML = ''; }

    try {
        const r = await fetch(apiUrl('/api/commands/table/') + mesaEstado.mesaId, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                codigo: mesaEstado.codigo,
                itens: [{ nome: guardado.nome, qtd: guardado.qtd, obs: guardado.obs }]
            })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível devolver o item.'); return; }
        mesaEstado.comanda = d.comanda || mesaEstado.comanda;
        mesaAtualizarItens();
        showToast(guardado.nome + ' voltou para a comanda.');
    } catch (e) {
        showToast('Sem conexão com o servidor.');
    }
}

async function chamarGarcomMesa() {
    if (mesaEstado.mesaId === null || !mesaEstado.codigo) return;
    try {
        const r = await fetch(apiUrl('/api/commands/table/') + mesaEstado.mesaId + '/garcom', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo: mesaEstado.codigo })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível chamar o garçom.'); return; }
        mesaEstado.comanda = d.comanda || mesaEstado.comanda;
        mesaAtualizarItens();
        showToast('Garçom chamado! Ele já vem até a mesa.');
    } catch (e) {
        showToast('Sem conexão com o servidor. Tente de novo.');
    }
}

function mesaAtualizarPratos() {
    const alvo = document.getElementById('mesaPratos');
    if (!alvo) return;
    const busca = String((document.getElementById('mesaBusca') || {}).value || '').toLowerCase().trim();
    const pratos = dishData.filter(d => !busca || String(d.name || '').toLowerCase().includes(busca));
    if (!pratos.length) {
        alvo.innerHTML = `<p class="text-[11px] text-slate-500 text-center py-6">Nenhum prato encontrado.</p>`;
        return;
    }
    alvo.innerHTML = pratos.map(d => `
        <button type="button" onclick="adicionarPratoMesa('${esc(d.name).replace(/'/g, "\\'")}')"
            class="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-japa-red/60 transition-all text-left">
            <span class="text-xs font-semibold text-slate-200 truncate">${esc(d.name)}</span>
            <span class="text-[11px] font-black text-japa-gold shrink-0">R$ ${(Number(d.price) || 0).toFixed(2)}</span>
        </button>`).join('');
}

async function abrirComandaDaMesa() {
    const erro = document.getElementById('mesaErro');
    const input = document.getElementById('mesaCodigoInput');
    const codigo = String((input && input.value) || mesaEstado.codigo || '').toUpperCase().replace(/[^A-Z0-9]/g, '');

    if (mesaEstado.mesaId === null) {
        if (erro) { erro.textContent = 'Escolha uma mesa primeiro.'; erro.classList.remove('hidden'); }
        return;
    }
    if (codigo.length < 4) {
        if (erro) { erro.textContent = 'O código da mesa tem 4 caracteres.'; erro.classList.remove('hidden'); }
        return;
    }

    try {
        const r = await fetch(apiUrl('/api/commands/table/') + mesaEstado.mesaId + '?codigo=' + encodeURIComponent(codigo));
        const d = await r.json().catch(() => ({}));
        if (!r.ok) {
            const mensagem = d.error || 'Código inválido.';
            if (erro) { erro.textContent = mensagem; erro.classList.remove('hidden'); return; }
            // Sem campo de erro na tela: mostra o aviso no lugar do conteúdo
            const cont = document.getElementById('mesaConteudo');
            if (cont) {
                cont.innerHTML = `
                    <div class="text-center py-10 space-y-4">
                        <div class="text-3xl">🔒</div>
                        <p class="text-sm font-bold text-white">${esc(mensagem)}</p>
                        <p class="text-xs text-slate-400">Confira o código de 4 letras que está na mesa.</p>
                        <button type="button" onclick="mesaEtapaEscolha()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-japa-crimson to-japa-red text-white font-bold text-xs uppercase tracking-wider">
                            Escolher outra mesa
                        </button>
                    </div>`;
            }
            return;
        }
        mesaEstado.codigo = codigo;
        mesaEstado.comanda = d.comanda || null;
        if (d.mesa && d.mesa.name) mesaEstado.nome = d.mesa.name;
        mesaEtapaComanda();
    } catch (e) {
        if (erro) { erro.textContent = 'Não consegui falar com o servidor. Tente de novo.'; erro.classList.remove('hidden'); }
    }
}

async function carregarComandaMesa() {
    if (mesaEstado.mesaId === null || !mesaEstado.codigo) return;
    try {
        const r = await fetch(apiUrl('/api/commands/table/') + mesaEstado.mesaId + '?codigo=' + encodeURIComponent(mesaEstado.codigo));
        if (!r.ok) return;
        const d = await r.json();
        mesaEstado.comanda = d.comanda || null;
        mesaAtualizarItens();
    } catch (e) { /* sem conexão: mantém o que já está na tela */ }
}

async function adicionarPratoMesa(nome) {
    if (mesaEstado.mesaId === null || !mesaEstado.codigo) return;
    try {
        const r = await fetch(apiUrl('/api/commands/table/') + mesaEstado.mesaId, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo: mesaEstado.codigo, itens: [{ nome: nome, qtd: 1 }] })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível enviar o item.'); return; }
        mesaEstado.comanda = d.comanda || mesaEstado.comanda;
        mesaAtualizarItens();
        showToast(nome + ' foi para a cozinha.');
    } catch (e) {
        showToast('Sem conexão com o servidor. Tente de novo.');
    }
}

// Link direto: ?mesa=3&codigo=ABCD abre a comanda já na mesa
function abrirMesaPeloLink() {
    try {
        const params = new URLSearchParams(window.location.search);
        const mesa = params.get('mesa');
        const codigo = params.get('codigo');
        if (!mesa) return;
        mesaEstado.mesaId = Number(mesa);
        mesaEstado.codigo = String(codigo || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        mostrarModalMesa();
        carregarMesasDoSalao().then(() => {
            const m = mesasDoSalao.find(x => x.id === mesaEstado.mesaId);
            if (m) mesaEstado.nome = m.name;
            if (mesaEstado.codigo.length === 4) abrirComandaDaMesa();
        });
    } catch (e) { /* link inválido: segue normal */ }
}

// ═══════════════════════════════════════════════════════════════════════
//  COMANDAS DE MESA — visão da cozinha e do gerente
// ═══════════════════════════════════════════════════════════════════════

let comandasAbertas = [];
let mesasAdmin = [];

async function apiCarregarComandas() {
    if (!adminToken) return null;
    try {
        const r = await fetch(apiUrl('/api/commands/open'), { headers: apiCabecalhoAuth() });
        if (r.status === 401) { sessaoPainelExpirada(); return null; }
        if (!r.ok) return null;
        const lista = await r.json();
        return Array.isArray(lista) ? lista : [];
    } catch (e) { return null; }
}

async function atualizarComandasCozinha() {
    const lista = await apiCarregarComandas();
    if (lista === null) return;
    const antes = comandasAbertas.filter(c => c.waiterCalled).map(c => c.id);
    comandasAbertas = lista;
    const temNovoChamado = comandasAbertas.some(c => c.waiterCalled && !antes.includes(c.id));
    renderComandasCozinha();
    // Alerta sonoro quando alguém chama o garçom
    if (temNovoChamado && kitchenAlertSound) playKitchenAlertSound();
}

function garantirBlocoComandasCozinha() {
    if (document.getElementById('kitchenComandasList')) return;
    const aba = document.getElementById('kitchenTabCozinha');
    if (!aba) return;
    const bloco = document.createElement('div');
    bloco.className = 'bg-[#111318] border border-slate-800 rounded-2xl p-5 space-y-4';
    bloco.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-lg">🪑</span>
                    <h2 class="font-bold text-white text-base">Comandas de Mesa</h2>
                    <span id="kitchenComandasBadge" class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-japa-gold/20 text-japa-gold border border-japa-gold/30">0</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-0.5">Pedidos feitos nas mesas do salão. Marque o que saiu e feche a conta quando o cliente pedir.</p>
            </div>
            <button onclick="atualizarComandasCozinha()" class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-all">
                <i class="fa-solid fa-rotate-right text-xs"></i> Atualizar
            </button>
        </div>
        <div id="kitchenComandasList" class="space-y-3"></div>`;
    aba.insertBefore(bloco, aba.firstChild);
}

function renderComandasCozinha() {
    garantirBlocoComandasCozinha();
    const alvo = document.getElementById('kitchenComandasList');
    if (!alvo) return;
    const badge = document.getElementById('kitchenComandasBadge');
    if (badge) badge.textContent = String(comandasAbertas.length);

    if (!comandasAbertas.length) {
        alvo.innerHTML = `<div class="text-center py-6 text-[11px] text-slate-500">Nenhuma comanda de mesa aberta no momento.</div>`;
        return;
    }

    alvo.innerHTML = comandasAbertas.map(c => {
        const itens = (Array.isArray(c.items) ? c.items : []).map((i, idx) => {
            const st = i.status || 'Pendente';
            const cancelado = st === 'Cancelado';
            const cls = cancelado ? 'bg-slate-700/40 text-slate-400 border-slate-700'
                : st === 'Pronto' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : st === 'Em Preparo' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/30';
            return `
                <div class="flex items-center justify-between gap-3 bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2">
                    <div class="min-w-0 ${cancelado ? 'line-through' : ''}">
                        <span class="text-xs font-bold text-white">${esc(i.qtd)}x ${esc(i.nome)}</span>
                        ${i.obs ? `<span class="block text-[10px] text-slate-400">${esc(i.obs)}</span>` : ''}
                    </div>
                    <select onchange="atualizarItemComanda(${c.id}, ${idx}, this.value)"
                        class="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-[10px] font-bold text-slate-200 focus:border-japa-red">
                        <option value="Pendente" ${st === 'Pendente' ? 'selected' : ''}>Pendente</option>
                        <option value="Em Preparo" ${st === 'Em Preparo' ? 'selected' : ''}>Em Preparo</option>
                        <option value="Pronto" ${st === 'Pronto' ? 'selected' : ''}>Pronto</option>
                        <option value="Cancelado" ${st === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                    </select>
                </div>`;
        }).join('');

        return `
            <div class="bg-slate-900/60 border ${c.waiterCalled ? 'border-amber-500/50 bg-amber-500/5' : 'border-slate-800'} rounded-2xl p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="flex items-center gap-2 flex-wrap min-w-0">
                        <span class="text-xs font-extrabold text-japa-gold">${esc(c.tableName || ('Mesa ' + c.tableId))}</span>
                        <span class="text-[10px] text-slate-500 truncate">${esc(c.customer || 'Sem nome')}</span>
                        ${c.notes ? `<span class="text-[10px] text-amber-300/80 truncate">📝 ${esc(c.notes)}</span>` : ''}
                        ${c.waiterCalled ? `
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                                🔔 Chamou o garçom
                            </span>` : ''}
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${c.waiterCalled ? `
                            <button onclick="atenderChamadaGarcom(${c.id})"
                                class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider transition-all">
                                Já atendi
                            </button>` : ''}
                        <span class="text-sm font-black text-japa-gold">R$ ${(Number(c.total) || 0).toFixed(2)}</span>
                        <button onclick="fecharComandaDaMesa(${c.id})"
                            class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-wider transition-all">
                            Fechar conta
                        </button>
                    </div>
                </div>
                <div class="space-y-1.5">${itens || '<p class="text-[11px] text-slate-500">Nenhum item pedido ainda.</p>'}</div>
            </div>`;
    }).join('');
}

// O garçom atendeu: limpa o aviso da mesa
async function atenderChamadaGarcom(comandaId) {
    if (!adminToken) return;
    try {
        const r = await fetch(apiUrl('/api/commands/') + comandaId, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({ garcomAtendido: true })
        });
        if (r.status === 401) { sessaoPainelExpirada(); return; }
        const d = await r.json().catch(() => ({}));
        if (d && d.comanda) {
            const i = comandasAbertas.findIndex(c => c.id === comandaId);
            if (i >= 0) comandasAbertas[i] = d.comanda;
            renderComandasCozinha();
        }
    } catch (e) { /* mantém a tela como está */ }
}

async function atualizarItemComanda(comandaId, indice, status) {
    if (!adminToken) return;
    try {
        const r = await fetch(apiUrl('/api/commands/') + comandaId, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({ itens: [{ indice: indice, status: status }] })
        });
        if (r.status === 401) { sessaoPainelExpirada(); return; }
        const d = await r.json().catch(() => ({}));
        if (d && d.comanda) {
            const i = comandasAbertas.findIndex(c => c.id === comandaId);
            if (i >= 0) comandasAbertas[i] = d.comanda;
            renderComandasCozinha();
        }
    } catch (e) { /* mantém a tela como está */ }
}

async function fecharComandaDaMesa(comandaId) {
    if (!confirm('Fechar a conta desta mesa? O pedido entra no painel de pedidos.')) return;
    try {
        const r = await fetch(apiUrl('/api/commands/') + comandaId + '/close', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({})
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível fechar a comanda.'); return; }
        showToast('Conta fechada. O pedido entrou na central.');
        await atualizarComandasCozinha();
        await sincronizarPedidos();
    } catch (e) {
        showToast('Sem conexão com o servidor.');
    }
}

// ═══════════════════════════════════════════════════════════════════════
//  MESAS DO SALÃO — aba do painel do gerente
// ═══════════════════════════════════════════════════════════════════════

async function apiCarregarMesasAdmin() {
    if (!adminToken) return null;
    try {
        const r = await fetch(apiUrl('/api/tables/admin'), { headers: apiCabecalhoAuth() });
        if (r.status === 401) { sessaoPainelExpirada(); return null; }
        if (!r.ok) return null;
        const lista = await r.json();
        return Array.isArray(lista) ? lista : [];
    } catch (e) { return null; }
}

async function renderMesasAdmin() {
    const lista = await apiCarregarMesasAdmin();
    if (lista === null) return;
    mesasAdmin = lista;
    const alvo = document.getElementById('adminMesasList');
    if (!alvo) return;

    if (!mesasAdmin.length) {
        alvo.innerHTML = `<div class="p-8 text-center text-slate-500 text-xs">Nenhuma mesa cadastrada.</div>`;
        return;
    }

    alvo.innerHTML = mesasAdmin.map(m => `
        <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-japa-gold/10 border border-japa-gold/30 text-japa-gold flex items-center justify-center font-black text-sm shrink-0">
                    ${esc(m.code)}
                </div>
                <div class="min-w-0">
                    <input id="mesaNome_${m.id}" value="${esc(m.name)}" onblur="salvarMesaAdmin(${m.id})"
                        class="bg-transparent border-b border-transparent hover:border-slate-700 focus:border-japa-red focus:outline-none text-sm font-bold text-white w-full">
                    <span class="text-[10px] text-slate-500">${esc(m.seats)} lugares · ${m.active ? 'ativa' : 'inativa'}</span>
                </div>
            </div>
            <div class="flex items-center gap-2 flex-wrap">
                <button onclick="alternarMesaAdmin(${m.id}, ${m.active ? 0 : 1})"
                    class="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${m.active
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'}">
                    ${m.active ? 'Ativa' : 'Inativa'}
                </button>
                <button onclick="novoCodigoMesaAdmin(${m.id})"
                    class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold uppercase tracking-wider transition-all">
                    Novo código
                </button>
                <button onclick="excluirMesaAdmin(${m.id})"
                    class="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-[10px] font-bold uppercase tracking-wider transition-all">
                    Remover
                </button>
            </div>
        </div>`).join('');
}

async function salvarMesaAdmin(id) {
    const input = document.getElementById('mesaNome_' + id);
    if (!input) return;
    const nome = String(input.value || '').trim();
    if (nome.length < 2) return;
    try {
        await fetch(apiUrl('/api/tables/') + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({ name: nome })
        });
        showToast('Mesa atualizada.');
        renderMesasAdmin();
    } catch (e) { /* sem conexão */ }
}

async function alternarMesaAdmin(id, ativo) {
    try {
        const r = await fetch(apiUrl('/api/tables/') + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({ active: !!ativo })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível alterar a mesa.'); return; }
        renderMesasAdmin();
    } catch (e) { /* sem conexão */ }
}

async function novoCodigoMesaAdmin(id) {
    if (!confirm('Gerar um novo código para esta mesa? Quem já tinha o código antigo precisa usar o novo.')) return;
    try {
        const r = await fetch(apiUrl('/api/tables/') + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({ novoCodigo: true })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível gerar o código.'); return; }
        showToast('Novo código: ' + (d.code || ''));
        renderMesasAdmin();
    } catch (e) { /* sem conexão */ }
}

async function excluirMesaAdmin(id) {
    if (!confirm('Remover esta mesa do salão?')) return;
    try {
        const r = await fetch(apiUrl('/api/tables/') + id, {
            method: 'DELETE',
            headers: apiCabecalhoAuth()
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível remover a mesa.'); return; }
        showToast('Mesa removida.');
        renderMesasAdmin();
    } catch (e) { /* sem conexão */ }
}

async function criarMesaAdmin() {
    const nome = String((document.getElementById('novaMesaNome') || {}).value || '').trim();
    const lugares = Number((document.getElementById('novaMesaLugares') || {}).value) || 4;
    if (nome.length < 2) { showToast('Dê um nome para a mesa.'); return; }
    try {
        const r = await fetch(apiUrl('/api/tables'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...apiCabecalhoAuth() },
            body: JSON.stringify({ name: nome, seats: lugares })
        });
        const d = await r.json().catch(() => ({}));
        if (!r.ok) { showToast(d.error || 'Não foi possível criar a mesa.'); return; }
        const input = document.getElementById('novaMesaNome');
        if (input) input.value = '';
        showToast('Mesa criada. Código: ' + (d.code || ''));
        renderMesasAdmin();
    } catch (e) { /* sem conexão */ }
}

// ===== TAXAS DE ENTREGA POR BAIRRO (ADMIN) =====
function renderAdminZones() {
    const list = document.getElementById('adminZonesList');
    const badge = document.getElementById('tabZonesBadge');
    if (badge) {
        badge.innerText = deliveryZones.length;
        badge.classList.toggle('hidden', deliveryZones.length === 0);
    }
    if (!list) return;

    if (deliveryZones.length === 0) {
        list.innerHTML = `<div class="p-8 text-center text-slate-500 text-xs border border-dashed border-slate-800 rounded-2xl">
                    <i class="fa-solid fa-map-location-dot text-2xl text-slate-700 mb-2 block"></i>
                    Nenhum bairro cadastrado ainda. Use o formulário acima para adicionar o primeiro.
                </div>`;
        return;
    }

    list.innerHTML = deliveryZones.map(zone => `
                <div class="bg-japa-card p-3.5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div class="flex-1 min-w-0">
                        <label class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Bairro</label>
                        <input type="text" value="${esc(zone.name)}" onchange="updateZoneName('${zone.id}', this.value)" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-japa-red focus:outline-none">
                    </div>
                    <div class="w-full sm:w-36">
                        <label class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Taxa (R$)</label>
                        <div class="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 focus-within:border-japa-red">
                            <span class="text-xs font-bold text-japa-gold">R$</span>
                            <input type="number" step="0.50" min="0" value="${(Number(zone.fee) || 0).toFixed(2)}" onchange="updateZoneFee('${zone.id}', this.value)" class="w-full bg-transparent text-xs font-bold text-japa-gold focus:outline-none">
                        </div>
                    </div>
                    <div class="flex sm:flex-col gap-2 sm:pt-4">
                        <button onclick="removeZone('${zone.id}')" class="flex-1 px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900 text-rose-300 text-xs font-bold transition-all" title="Excluir bairro">
                            <i class="fa-solid fa-trash-can mr-1"></i> Excluir
                        </button>
                    </div>
                </div>
            `).join('');
}

function addDeliveryZone() {
    if (!isAdminLoggedIn) return;
    const nameEl = document.getElementById('newZoneName');
    const feeEl = document.getElementById('newZoneFee');
    const name = (nameEl ? nameEl.value : '').trim();
    const fee = parseFloat(feeEl ? feeEl.value : '');

    if (!name) { alert('Informe o nome do bairro.'); return; }
    if (isNaN(fee) || fee < 0) { alert('Informe o valor da taxa de entrega deste bairro.'); return; }
    if (deliveryZones.some(z => z.name.toLowerCase() === name.toLowerCase())) {
        alert('Este bairro já está cadastrado.');
        return;
    }

    deliveryZones.push({
        id: 'z' + Date.now() + Math.floor(Math.random() * 1000),
        name: name,
        fee: Math.round(fee * 100) / 100
    });
    saveState();

    if (nameEl) nameEl.value = '';
    if (feeEl) feeEl.value = '';

    renderAdminZones();
    renderDistrictField();
    updateCartTotals();

    // Grava no servidor (fonte da verdade) — o ID definitivo vem de lá
    apiCriarZona(deliveryZones[deliveryZones.length - 1]);
}

function updateZoneFee(id, value) {
    if (!isAdminLoggedIn) return;
    const zone = deliveryZones.find(z => z.id === id);
    if (!zone) return;
    zone.fee = Math.max(0, Math.round((parseFloat(value) || 0) * 100) / 100);
    saveState();
    renderDistrictField();
    updateCartTotals();
    apiAtualizarZona(id, { fee: zone.fee });
}

function updateZoneName(id, value) {
    if (!isAdminLoggedIn) return;
    const zone = deliveryZones.find(z => z.id === id);
    if (!zone) return;
    const newName = value.trim();
    if (!newName) { renderAdminZones(); return; }
    zone.name = newName;
    saveState();
    renderAdminZones();
    renderDistrictField();
    apiAtualizarZona(id, { name: newName });
}

function removeZone(id) {
    if (!isAdminLoggedIn) return;
    const zone = deliveryZones.find(z => z.id === id);
    if (!zone) return;
    if (!confirm(`Remover "${zone.name}" da lista de bairros atendidos?`)) return;
    deliveryZones = deliveryZones.filter(z => z.id !== id);
    saveState();
    renderAdminZones();
    renderDistrictField();
    updateCartTotals();
    apiExcluirZona(id);
}

function addNewOrderToAdmin(items, total, customer = {}) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // ID sequencial único (sem colisões)
    orderSeq = adminOrders.reduce((max, o) => Math.max(max, Number(o.id) || 0), orderSeq) + 1;

    const newOrder = {
        id: orderSeq,
        customer: customer.name || 'Pedido via Site WhatsApp',
        phone: customer.phone || '',
        address: customer.address || '',
        payment: customer.payment || '',
        items: items,
        deliveryFee: (typeof customer.deliveryFee === 'number') ? customer.deliveryFee : 0,
        deliveryFeeLabel: customer.deliveryFeeLabel || '',
        total: Math.round((Number(total) || 0) * 100) / 100,
        notes: customer.notes || '',
        changeFor: customer.changeFor || '',
        status: 'Pendente',
        time: timeStr
    };
    adminOrders.unshift(newOrder);
    saveState();
    updateOrderBadges();
    if (isAdminLoggedIn) renderAdminOrders();
}

function updateOrderBadges() {
    const pendingCount = adminOrders.filter(o => o.status === 'Pendente').length;
    const badgeNav = document.getElementById('pendingOrdersBadge');
    const badgeTab = document.getElementById('tabPendingBadge');

    if (pendingCount > 0) {
        if (badgeNav) { badgeNav.innerText = pendingCount; badgeNav.classList.remove('hidden'); }
        if (badgeTab) { badgeTab.innerText = pendingCount; badgeTab.classList.remove('hidden'); }
    } else {
        if (badgeNav) badgeNav.classList.add('hidden');
        if (badgeTab) badgeTab.classList.add('hidden');
    }
}
function renderAdminOrders() {
    const list = document.getElementById('adminOrdersList');
    if (!list) return;

    if (adminOrders.length === 0) {
        list.innerHTML = `<div class="p-8 text-center text-slate-500 text-xs">Nenhum pedido registrado até o momento.</div>`;
        return;
    }

    list.innerHTML = adminOrders.map(order => `
                <div class="bg-japa-card p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="text-xs font-black text-japa-gold">#${esc(order.id)}</span>
                            <span class="text-[11px] font-bold text-slate-300">${esc(order.customer)}</span>
                            <span class="text-[10px] text-slate-500">(${esc(order.time)})</span>
                        </div>
                        <p class="text-xs text-white font-semibold">${esc(order.items)}</p>
                        ${order.address ? `<p class="text-[11px] text-slate-400 mt-1">📍 ${esc(order.address)}</p>` : ''}
                        <p class="text-[11px] text-slate-400 mt-1">
                            ${order.phone ? `📱 ${esc(order.phone)} · ` : ''}
                            ${order.payment ? `💳 ${esc(order.payment)} · ` : ''}
                            Taxa: ${esc(orderFeeLabel(order))} | Total: <span class="font-bold text-japa-gold">R$ ${(Number(order.total) || 0).toFixed(2)}</span>
                        </p>
                        ${order.notes ? `<p class="text-[11px] text-slate-400 mt-1">📝 ${esc(order.notes)}</p>` : ''}
                    </div>

                    <div class="flex items-center gap-2">
                        <select onchange="updateOrderStatus(${order.id}, this.value)" class="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-200 focus:outline-none">
                            <option value="Pendente" ${order.status === 'Pendente' ? 'selected' : ''}>⏳ Pendente</option>
                            <option value="Em Preparo" ${order.status === 'Em Preparo' ? 'selected' : ''}>👨‍🍳 Em Preparo</option>
                            <option value="A Caminho" ${order.status === 'A Caminho' ? 'selected' : ''}>🛵 A Caminho</option>
                            <option value="Concluído" ${order.status === 'Concluído' ? 'selected' : ''}>✅ Concluído</option>
                        </select>
                        <button onclick="printOrder(${order.id})" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all" title="Imprimir pedido">
                            <i class="fa-solid fa-print"></i>
                        </button>
                        <button onclick="sendOrderWhatsAppUpdate(${order.id})" class="p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white text-xs font-bold transition-all" title="Notificar via WhatsApp">
                            <i class="fa-brands fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            `).join('');
    updateOrderBadges();
}

function updateOrderStatus(id, newStatus) {
    const order = adminOrders.find(o => o.id === id);
    if (!order) return;

    const previous = order.status;
    order.status = newStatus;
    saveState();
    renderAdminOrders();

    // Grava no servidor (fonte da verdade) e re sincroniza a lista
    if (adminToken) {
        apiAtualizarStatusPedido(id, newStatus).then(ok => {
            if (ok) sincronizarPedidos();
        });
    }

    // Dispara a mensagem automática ao cliente quando o pedido muda de status
    if (previous === newStatus) return;
    if (newStatus === 'Em Preparo') {
        sendStatusWhatsApp(order, 'preparo');
        if (autoPrintOnPrep) printOrder(order.id); // opção do gerente
    }
    if (newStatus === 'A Caminho') sendStatusWhatsApp(order, 'caminho');
}

function toggleAutoPrint(enabled) {
    autoPrintOnPrep = !!enabled;
    saveState();
}

// Mensagens automáticas de status (confirmação de recebimento e saída para entrega)
function sendStatusWhatsApp(order, kind) {
    if (!order) return false;

    let phone = normalizeWaPhone(order.phone);
    if (!phone) {
        const input = prompt(`Pedido #${order.id} — digite o WhatsApp do cliente com DDD (ex: 24999999999):`);
        if (!input) return false;
        phone = normalizeWaPhone(input);
        if (!phone) return false;
        order.phone = input.trim();
        saveState();
        if (isAdminLoggedIn) renderAdminOrders();
    }

    const rawName = String(order.customer || '').trim();
    const firstName = (!rawName || rawName.indexOf('Pedido via Site') === 0) ? 'cliente' : rawName.split(' ')[0];
    const items = String(order.items || '');
    const total = (Number(order.total) || 0).toFixed(2);
    const address = order.address || '';
    const payment = order.payment || '';

    let msg;
    if (kind === 'preparo') {
        msg = `🍱 *JAPA'S HOUSE BISTRÔ* 🍱\n\n` +
            `Olá, ${firstName}! ✅ *Recebemos o seu pedido #${order.id}*\n\n` +
            `👨‍🍳 Ele já está em *preparo* pela nossa equipe.\n\n` +
            `📋 *Itens:* ${items}\n` +
            `💰 *Total:* R$ ${total}` +
            (address ? `\n📍 *Entrega:* ${address}` : '') +
            `\n\nObrigado pela preferência!`;
    } else {
        msg = `🍱 *JAPA'S HOUSE BISTRÔ* 🍱\n\n` +
            `🛵 *Seu pedido saiu para entrega!*\n\n` +
            `Olá, ${firstName}, o pedido *#${order.id}* está *a caminho* até você. 🚀\n\n` +
            (address ? `📍 *Endereço:* ${address}\n` : '') +
            (payment ? `💳 *Pagamento:* ${payment}\n` : '') +
            `💰 *Total:* R$ ${total}\n\n` +
            `Qualquer coisa, é só responder por aqui. Bom apetite!`;
    }

    window.open(`https://wa.me/55${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    return true;
}

// Abre a comanda do pedido em uma janela pronta para impressão
function printOrder(id) {
    const order = adminOrders.find(o => o.id === id);
    if (!order) return;

    const win = window.open('', '_blank', 'width=480,height=780');
    if (!win) {
        alert('Não foi possível abrir a janela de impressão.\nLibere os pop-ups deste site e tente novamente.');
        return;
    }

    const fee = Number(order.deliveryFee) || 0;
    const total = Number(order.total) || 0;
    const subtotal = Math.max(0, Math.round((total - fee) * 100) / 100);
    const feeLabel = orderFeeLabel(order);
    const changeFor = order.changeFor ? (Number(order.changeFor) || 0).toFixed(2) : '';
    const now = new Date();
    const stamp = `${now.toLocaleDateString('pt-BR')} às ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const itemRows = String(order.items || '')
        .split('•')
        .map(s => s.trim())
        .filter(Boolean)
        .map(p => {
            const m = p.match(/^(\d+)x\s*(.*)$/);
            const qty = m ? m[1] : '1';
            const name = m ? m[2] : p;
            return `<tr><td class="qty">${esc(qty)}x</td><td>${esc(name)}</td></tr>`;
        })
        .join('');

    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Pedido #${esc(order.id)} — Japa's House Bistrô</title>
<style>
    @page { margin: 8mm; }
    * { box-sizing: border-box; }
    body { font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #111; width: 76mm; margin: 0 auto; padding: 4px 0; line-height: 1.45; }
    h1 { font-size: 17px; margin: 0 0 2px; text-align: center; letter-spacing: 1px; }
    .sub { text-align: center; font-size: 11px; margin-bottom: 6px; }
    .center { text-align: center; }
    .rule { border-top: 1px dashed #333; margin: 8px 0; }
    .big { font-size: 24px; font-weight: bold; text-align: center; letter-spacing: 3px; margin: 4px 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 4px; }
    td { padding: 2px 0; vertical-align: top; }
    .r { text-align: right; white-space: nowrap; }
    .qty { width: 34px; font-weight: bold; }
    .total-row td { font-size: 17px; font-weight: bold; border-top: 1px solid #333; padding-top: 6px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: .5px; color: #444; }
    .status { display: inline-block; border: 2px solid #111; padding: 3px 10px; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
    .foot { text-align: center; font-size: 10px; color: #555; margin-top: 10px; }
    .notes { background: #f1f1f1; padding: 6px; font-size: 12px; margin-top: 6px; }
    @media print { body { width: auto; } }
</style>
</head>
<body>
    <h1>JAPA'S HOUSE BISTRÔ</h1>
    <div class="sub">R. Pres. Vargas, 294 — Vila Velha, Rio Claro/RJ<br>(24) 99883-3667</div>
    <div class="rule"></div>

    <div class="big">#${esc(order.id)}</div>
    <div class="center"><span class="status">${esc(order.status)}</span></div>
    <div class="center label" style="margin-top:6px">Emitido em ${stamp}</div>

    <div class="rule"></div>

    <table>
        <tr><td class="label">Cliente</td><td class="r">${esc(order.customer)}</td></tr>
        <tr><td class="label">WhatsApp</td><td class="r">${esc(order.phone || '—')}</td></tr>
        <tr><td class="label">Pedido às</td><td class="r">${esc(order.time)}</td></tr>
    </table>

    ${order.address ? `<div style="margin-top:8px"><div class="label">Endereço de entrega</div><div>${esc(order.address)}</div></div>` : ''}

    <div class="rule"></div>
    <div class="label">Itens do pedido</div>
    <table>${itemRows}</table>

    <table style="margin-top:8px">
        <tr><td>Subtotal</td><td class="r">R$ ${subtotal.toFixed(2)}</td></tr>
        <tr><td>Taxa de entrega</td><td class="r">${esc(feeLabel)}</td></tr>
        <tr class="total-row"><td>TOTAL</td><td class="r">R$ ${total.toFixed(2)}</td></tr>
    </table>

    <div style="margin-top:8px"><span class="label">Pagamento:</span> <b>${esc(order.payment || '—')}</b>${changeFor ? ` — troco para R$ ${esc(changeFor)}` : ''}</div>

    ${order.notes ? `<div class="notes"><span class="label">Observações</span><br>${esc(order.notes)}</div>` : ''}

    <div class="rule"></div>
    <div class="foot">Documento sem valor fiscal — obrigado pela preferência!<br>Japa's House Bistrô — Gastrobar</div>
</body>
</html>`;

    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => { try { win.print(); } catch (e) { /* usuário fecha manualmente */ } }, 400);
}

// Normaliza telefone para o formato do wa.me (remove tudo que não é número e o prefixo 55)
function normalizeWaPhone(phone) {
    let digits = String(phone || '').replace(/\D/g, '');
    if (digits.length > 11 && digits.startsWith('55')) digits = digits.slice(2);
    return digits;
}

function sendOrderWhatsAppUpdate(id) {
    const order = adminOrders.find(o => o.id === id);
    if (!order) return;

    let phone = order.phone;
    if (!phone) phone = prompt('Digite o telefone do cliente para enviar a atualização (com DDD):') || '';
    phone = normalizeWaPhone(phone);
    if (!phone) return;

    const msg = `🍱 *JAPA'S HOUSE BISTRÔ* 🍱\n\nAtualização do seu Pedido *#${order.id}*:\nStatus Atual: *${order.status.toUpperCase()}*\n\n📋 Items: ${order.items}\nTotal: R$ ${(Number(order.total) || 0).toFixed(2)}\n\nObrigado por escolher o Japa's House Bistrô!`;
    window.open(`https://wa.me/55${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function clearCompletedOrders() {
    adminOrders = adminOrders.filter(o => o.status !== 'Concluído');
    renderAdminOrders();
    // Apaga também no servidor
    if (adminToken) {
        apiLimparPedidosConcluidos().then(ok => { if (ok) sincronizarPedidos(); });
    }
}
function filterAdminCategory(category, btn) {
    currentAdminCategoryFilter = category;
    setActiveFilter('.admin-cat-btn', btn, ['bg-japa-red', 'text-white'], ['bg-slate-800', 'text-slate-300']);
    renderAdminProducts();
}

function searchAdminProducts() {
    renderAdminProducts();
}

function sendQuickWhatsAppConfirmation() {
    const customerPhone = prompt('Digite o número do WhatsApp do cliente com DDD (ex: 24999999999):');
    if (!customerPhone) return;
    const waPhone = normalizeWaPhone(customerPhone);
    if (!waPhone) return;

    const orderDetails = prompt('Digite o resumo do pedido a confirmar:', '1x Combinado House Salmão Premium');
    if (!orderDetails) return;

    const msg = `🍱 *JAPA'S HOUSE BISTRÔ* 🍱\n\nOlá! Seu pedido foi *CONFIRMADO* e já está em preparo pela nossa equipe!\n\n📋 *Resumo:* ${orderDetails}\n🛵 *Taxa de Entrega:* conforme o bairro\n\nObrigado pela preferência!`;
    window.open(`https://wa.me/55${waPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function renderAdminProducts() {
    if (!isAdminLoggedIn) return;

    const grid = document.getElementById('adminProductsGrid');
    if (!grid) return;

    const searchQuery = (document.getElementById('adminSearchInput')?.value || '').toLowerCase();

    const itemsToRender = dishData.filter(dish => {
        const matchesCat = (currentAdminCategoryFilter === 'todos') || (dish.category === currentAdminCategoryFilter);
        const matchesSearch = dish.name.toLowerCase().includes(searchQuery) || dish.desc.toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
    });

    if (itemsToRender.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-12 text-center text-slate-500 text-xs font-medium">Nenhum produto encontrado.</div>`;
        return;
    }

    grid.innerHTML = itemsToRender.map(dish => `
                <div class="bg-japa-card/90 rounded-3xl border border-slate-800 p-4 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all duration-300 shadow-xl">
                    <div>
                        <div class="relative h-28 rounded-2xl overflow-hidden mb-3 bg-slate-950 group">
                            <img src="${esc(dish.img)}" alt="${esc(dish.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='imagens/placeholder-prato.svg'">
                            <span class="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-japa-red text-white">
                                ${esc(dish.badge || dish.category)}
                            </span>
                        </div>
                        <h4 class="text-sm font-bold text-white truncate mb-2">${esc(dish.name)}</h4>
                        <div class="space-y-2">
                            <div>
                                <label class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">URL da Imagem:</label>
                                <input type="url" value="${esc(dish.img)}" onchange="updateProductImgDirect(${dish.id}, this.value)" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1 text-slate-300 text-[11px] focus:border-japa-red focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Descrição:</label>
                                <textarea onchange="updateProductDescDirect(${dish.id}, this.value)" rows="2" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-slate-300 text-[11px] leading-relaxed focus:border-japa-red focus:outline-none transition-all resize-none">${esc(dish.desc)}</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                        <div>
                            <label class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Preço (R$)</label>
                            <div class="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1 focus-within:border-japa-red">
                                <span class="text-xs font-bold text-japa-gold">R$</span>
                                <input type="number" step="0.50" value="${(Number(dish.price) || 0).toFixed(2)}" onchange="updateProductPriceDirect(${dish.id}, this.value)" class="w-16 bg-transparent text-xs font-bold text-white focus:outline-none">
                            </div>
                        </div>
                        <div class="flex items-center gap-1.5 pt-3">
                            <button onclick="editProduct(${dish.id})" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs" title="Editar Completo">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="deleteProduct(${dish.id})" class="p-2 rounded-xl bg-rose-950/60 hover:bg-rose-900 text-rose-300 text-xs" title="Excluir Item">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
}

function updateProductPriceDirect(id, newPrice) {
    if (!isAdminLoggedIn) return;
    const dish = dishData.find(d => d.id === id);
    if (dish) {
        dish.price = parseFloat(newPrice) || dish.price;
        refreshPublicMenu();
        apiAtualizarProduto(id, { price: dish.price });
    }
}

function updateProductDescDirect(id, newDesc) {
    if (!isAdminLoggedIn) return;
    const dish = dishData.find(d => d.id === id);
    if (dish) {
        dish.desc = newDesc.trim();
        refreshPublicMenu();
        apiAtualizarProduto(id, { desc: dish.desc });
    }
}

function updateProductImgDirect(id, newImg) {
    if (!isAdminLoggedIn) return;
    const dish = dishData.find(d => d.id === id);
    if (dish && newImg.trim()) {
        dish.img = newImg.trim();
        refreshPublicMenu();
        renderAdminProducts();
        apiAtualizarProduto(id, { img: dish.img });
    }
}

function openProductFormModal(id = null) {
    const modal = document.getElementById('productFormModal');
    const title = document.getElementById('formModalTitle');
    const form = document.getElementById('productForm');

    if (id) {
        const dish = dishData.find(d => d.id === id);
        if (!dish) return;
        title.innerText = 'Editar Produto';
        document.getElementById('formProductId').value = dish.id;
        document.getElementById('formProductName').value = dish.name;
        document.getElementById('formProductPrice').value = dish.price;
        document.getElementById('formProductCategory').value = dish.category;
        document.getElementById('formProductBadge').value = dish.badge || '';
        document.getElementById('formProductImg').value = dish.img;
        document.getElementById('formProductDesc').value = dish.desc;
    } else {
        title.innerText = 'Cadastrar Novo Produto';
        form.reset();
        document.getElementById('formProductId').value = '';
    }

    modal.classList.remove('hidden');
}

function closeProductFormModal() {
    document.getElementById('productFormModal').classList.add('hidden');
}

function handleProductFormSubmit(e) {
    e.preventDefault();
    if (!isAdminLoggedIn) return;

    const id = document.getElementById('formProductId').value;
    const name = document.getElementById('formProductName').value;
    const price = parseFloat(document.getElementById('formProductPrice').value);
    const category = document.getElementById('formProductCategory').value;
    const badge = document.getElementById('formProductBadge').value;
    const img = document.getElementById('formProductImg').value || 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80';
    const desc = document.getElementById('formProductDesc').value;

    if (id) {
        const dish = dishData.find(d => d.id === parseInt(id));
        if (dish) {
            dish.name = name;
            dish.price = price;
            dish.category = category;
            dish.badge = badge;
            dish.img = img;
            dish.desc = desc;
            apiSalvarProduto(dish, false);
        }
    } else {
        const newId = dishData.length ? Math.max(...dishData.map(d => d.id)) + 1 : 1;
        const novo = { id: newId, name, price, category, badge, img, desc };
        dishData.push(novo);
        apiSalvarProduto(novo, true);
    }

    refreshPublicMenu();
    renderAdminProducts();
    closeProductFormModal();
}

function editProduct(id) {
    openProductFormModal(id);
}

function deleteProduct(id) {
    if (!isAdminLoggedIn) return;
    if (confirm('Tem certeza que deseja excluir este produto do cardápio?')) {
        dishData = dishData.filter(d => d.id !== id);
        cart = cart.filter(c => c.key !== 'dish-' + id);
        updateCartBadge();
        refreshPublicMenu();
        renderAdminProducts();
        apiExcluirProduto(id);
    }
}

function selectTemakiOption(type, optionKey, price) {
    if (type === 'proteina') {
        selectedProteinaPrice = price;
        selectedProteinaName = optionKey === 'salmao' ? 'Salmão Fresco' : (optionKey === 'camarao' ? 'Camarão Empanado' : 'Shimeji na Manteiga');
    } else if (type === 'estilo') {
        selectedEstiloPrice = price;
        selectedEstiloName = optionKey === 'cru' ? 'Tradicional Cru' : (optionKey === 'flambado' ? 'Flambado no Maçarico' : 'Hot Empanado');
    }

    // Página inicial não tem o customizador de temaki: só atualiza o resumo se existir
    const sumProteina = document.getElementById('summaryProteina');
    const sumEstilo = document.getElementById('summaryEstilo');
    const sumTotal = document.getElementById('summaryTotal');
    const subtotal = (Number(selectedProteinaPrice) || 0) + (Number(selectedEstiloPrice) || 0);
    if (sumProteina) sumProteina.innerText = selectedProteinaName;
    if (sumEstilo) sumEstilo.innerText = selectedEstiloName;
    if (sumTotal) sumTotal.innerText = `R$ ${subtotal.toFixed(2)}`;
}

function orderCustomTemaki() {
    // Pedido somente pelo site: o temaki vai para o carrinho e o cliente
    // finaliza lá (vai para o painel do gerente e para a cozinha).
    addTemakiToCart();
    showToast('Temaki customizado adicionado ao carrinho!');
    openCart();
}

function openDishModal(id) {
    const dish = dishData.find(d => d.id === id);
    if (!dish) return;

    // Evita modais duplicados
    const existing = document.getElementById('activeDishModal');
    if (existing) existing.remove();

    const safePrice = Number(dish.price) || 0;

    const modal = document.createElement('div');
    modal.id = 'activeDishModal';
    modal.className = 'modal show';
    modal.innerHTML = `
                <div class="modal-content">
                    <button class="close-btn" onclick="document.getElementById('activeDishModal').remove()" aria-label="Fechar">&times;</button>
                    <div class="modal-img"><img src="${esc(dish.img)}" alt="${esc(dish.name)}" onerror="this.onerror=null;this.src='imagens/placeholder-prato.svg'"></div>
                    <h3 class="modal-title">${esc(dish.name)}</h3>
                    <div class="modal-kanji">${esc(dish.badge || dish.category)}</div>
                    <div class="modal-pieces">Entrega: conforme o bairro (no carrinho)</div>
                    <p class="modal-desc">${esc(dish.desc)}</p>
                    <div class="modal-price">R$ ${safePrice.toFixed(2).replace('.', ',')}</div>
                    <button class="add-btn" onclick="addDishToCart(${dish.id})">ADICIONAR À COMANDA</button>
                    <button class="add-btn-alt" onclick="submitDishOrder(${dish.id})">pedir agora pelo site</button>
                </div>
            `;
    // Fecha ao clicar fora do card
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.body.appendChild(modal);
}

function submitDishOrder(id) {
    const dish = dishData.find(d => d.id === id);
    if (!dish) return;

    // Pedido somente pelo site: vai para o carrinho e o cliente finaliza lá
    addToCart({ key: 'dish-' + dish.id, name: dish.name, price: Number(dish.price) || 0 });

    const activeModal = document.getElementById('activeDishModal');
    if (activeModal) activeModal.remove();
    showToast(`${dish.name} adicionado à comanda!`);
    openCart();
}

function handleReservationSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const people = document.getElementById('resPeople').value;

    if (!date) return;

    // Segunda-feira: fechado
    const chosenDate = new Date(date + 'T12:00:00');
    if (chosenDate.getDay() === 1) {
        alert('Segunda-feira estamos fechados. Por favor, escolha outro dia para sua reserva.');
        return;
    }

    const [year, month, day] = date.split('-');
    const dateBR = `${day}/${month}/${year}`;

    const msg = `Olá! Gostaria de reservar uma mesa no Japa's House Bistrô:\n- Nome: ${name}\n- Telefone: ${phone}\n- Data: ${dateBR}\n- Horário: ${time}\n- Pessoas: ${people}`;
    window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== CARRINHO DE COMPRAS =====
function cartSubtotal() {
    return cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.qty) || 0)), 0);
}

function cartCount() {
    return cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const count = cartCount();
    badge.innerText = count;
    badge.classList.toggle('hidden', count === 0);
}

function addToCart(item) {
    const existing = cart.find(c => c.key === item.key);
    if (existing) {
        existing.qty = (Number(existing.qty) || 0) + 1;
    } else {
        cart.push({ key: item.key, name: item.name, price: Number(item.price) || 0, qty: 1 });
    }
    saveState();
    updateCartBadge();
    openCart();
}

function addDishToCart(id) {
    const dish = dishData.find(d => d.id === id);
    if (!dish) return;
    addToCart({ key: 'dish-' + dish.id, name: dish.name, price: Number(dish.price) || 0 });
    const activeModal = document.getElementById('activeDishModal');
    if (activeModal) activeModal.remove();
    showToast(`${dish.name} adicionado à comanda!`);
}

function addTemakiToCart() {
    const price = (Number(selectedProteinaPrice) || 0) + (Number(selectedEstiloPrice) || 0);
    addToCart({
        key: 'temaki-' + selectedProteinaName + '-' + selectedEstiloName,
        name: `Temaki Customizado (${selectedProteinaName} - ${selectedEstiloName})`,
        price: price
    });
}

function changeCartQty(index, delta) {
    const item = cart[index];
    if (!item) return;
    item.qty = (Number(item.qty) || 0) + delta;
    if (item.qty <= 0) cart.splice(index, 1);
    saveState();
    updateCartBadge();
    renderCart();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    saveState();
    updateCartBadge();
    renderCart();
}
function renderCart() {
    const list = document.getElementById('cartItemsList');
    if (!list) return;

    if (cart.length === 0) {
        list.innerHTML = `
                    <div class="py-8 text-center">
                        <i class="fa-solid fa-basket-shopping text-3xl text-slate-700 mb-3 block"></i>
                        <p class="text-xs text-slate-500 font-semibold">Seu carrinho está vazio.</p>
                        <p class="text-[11px] text-slate-600 mt-1">Toque nos pratos do Cardápio 3D para adicionar.</p>
                    </div>`;
    } else {
        list.innerHTML = cart.map((item, idx) => `
                    <div class="flex items-center gap-3 bg-japa-card p-3 rounded-2xl border border-slate-800">
                        <div class="flex-1 min-w-0">
                            <p class="text-xs font-bold text-white leading-snug">${esc(item.name)}</p>
                            <p class="text-[11px] text-japa-gold font-bold mt-1">R$ ${(Number(item.price) || 0).toFixed(2)} / un.</p>
                        </div>
                        <div class="flex items-center gap-1.5 shrink-0">
                            <button type="button" onclick="changeCartQty(${idx}, -1)" aria-label="Diminuir quantidade" class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-black text-xs transition-colors">−</button>
                            <span class="w-6 text-center text-xs font-black text-white">${Number(item.qty) || 0}</span>
                            <button type="button" onclick="changeCartQty(${idx}, 1)" aria-label="Aumentar quantidade" class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-black text-xs transition-colors">+</button>
                        </div>
                        <button type="button" onclick="removeCartItem(${idx})" aria-label="Remover item" class="w-7 h-7 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 text-xs transition-colors shrink-0">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                `).join('');
    }
    updateCartTotals();
}

// Renderiza o campo "Bairro" do carrinho a partir das zonas cadastradas pelo admin
function renderDistrictField() {
    const box = document.getElementById('districtField');
    if (!box) return;

    const current = document.getElementById('cartDistrict');
    const previous = current ? current.value : '';
    const label = '<label class="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">Bairro *</label>';
    const inputClass = 'w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:border-japa-red focus:outline-none';

    // Sem zonas cadastradas: campo de texto livre (entrega fica a combinar)
    if (deliveryZones.length === 0) {
        const value = (previous && previous !== '__outro__') ? previous : '';
        box.innerHTML = label +
            `<input type="text" id="cartDistrict" required value="${esc(value)}" placeholder="Vila Velha" class="${inputClass}" oninput="updateCartTotals()">`;
        return;
    }

    const otherSelected = previous === '__outro__';
    const placeholderSelected = (!previous || (!otherSelected && !deliveryZones.some(z => z.name === previous))) ? ' selected' : '';

    const options = deliveryZones.map(zone => {
        const fee = Number(zone.fee) || 0;
        const feeLabel = fee === 0 ? 'GRÁTIS' : `R$ ${fee.toFixed(2)}`;
        const selected = previous === zone.name ? ' selected' : '';
        return `<option value="${esc(zone.name)}" data-fee="${fee}"${selected}>${esc(zone.name)} — ${feeLabel}</option>`;
    }).join('');

    box.innerHTML = label + `
                <select id="cartDistrict" required class="${inputClass}" onchange="onDistrictChange()">
                    <option value="" disabled${placeholderSelected}>Selecione seu bairro</option>
                    ${options}
                    <option value="__outro__"${otherSelected ? ' selected' : ''}>Outro bairro — entrega a combinar</option>
                </select>
                <input type="text" id="cartDistrictOther" class="${inputClass} mt-2${otherSelected ? '' : ' hidden'}" placeholder="Digite o nome do bairro" ${otherSelected ? 'required' : ''} oninput="updateCartTotals()">`;

    onDistrictChange();
}

function onDistrictChange() {
    const sel = document.getElementById('cartDistrict');
    const other = document.getElementById('cartDistrictOther');
    if (sel && other) {
        const isOther = sel.value === '__outro__';
        other.classList.toggle('hidden', !isOther);
        other.required = isOther;
        if (!isOther) other.value = '';
    }
    updateCartTotals();
}

function getDistrictValue() {
    const sel = document.getElementById('cartDistrict');
    if (!sel) return '';
    if (sel.value === '__outro__') {
        const other = document.getElementById('cartDistrictOther');
        return other ? other.value.trim() : '';
    }
    return sel.value;
}

// Sem taxa padrão: só valem as taxas cadastradas por bairro
function getCartFeeInfo() {
    const sel = document.getElementById('cartDistrict');
    if (sel && sel.tagName === 'SELECT' && sel.value && sel.value !== '__outro__') {
        const opt = sel.options[sel.selectedIndex];
        const fee = parseFloat(opt ? opt.getAttribute('data-fee') : NaN);
        if (!isNaN(fee)) {
            const value = Math.max(0, fee);
            return { fee: value, label: value === 0 ? 'GRÁTIS' : `R$ ${value.toFixed(2)}` };
        }
    }
    return { fee: 0, label: 'A combinar' };
}

// Rótulo da taxa exibido no painel do gerente e na comanda
function orderFeeLabel(order) {
    if (order && order.deliveryFeeLabel) return order.deliveryFeeLabel;
    const fee = Number(order && order.deliveryFee) || 0;
    return fee === 0 ? 'GRÁTIS' : `R$ ${fee.toFixed(2)}`;
}

function updateCartTotals() {
    const subtotal = cartSubtotal();
    const feeInfo = getCartFeeInfo();
    const fee = feeInfo.fee;
    const isEmpty = cart.length === 0;
    const subEl = document.getElementById('cartSubtotal');
    const feeEl = document.getElementById('cartFeeValue');
    const feeInfoEl = document.getElementById('cartFeeInfo');
    const totEl = document.getElementById('cartTotal');
    const hintEl = document.getElementById('cartEmptyHint');
    const btnEl = document.getElementById('cartCheckoutBtn');

    const sel = document.getElementById('cartDistrict');
    const zoneName = (sel && sel.tagName === 'SELECT' && sel.value && sel.value !== '__outro__') ? sel.value : '';

    if (subEl) subEl.innerText = `R$ ${subtotal.toFixed(2)}`;
    if (feeEl) feeEl.innerText = feeInfo.label;
    if (feeInfoEl) feeInfoEl.innerText = zoneName ? `${feeInfo.label} · ${zoneName}` : feeInfo.label;
    if (totEl) totEl.innerText = `R$ ${(subtotal + fee).toFixed(2)}`;
    if (hintEl) hintEl.classList.toggle('hidden', !isEmpty);
    if (btnEl) btnEl.disabled = isEmpty || !pedidosLiberados();
}

// ═══════════════════════════════════════════════════
//  STATUS DE PEDIDOS — abre/fecha o dia e avisa o cliente
//
//  De onde vem o status:
//   1) Botão do painel cozinha (LOJA FECHADA / ABRIR LOJA):
//      grava uma pausa manual que vale até o fim do dia.
//   2) Fora da pausa manual, segue o horário publicado no site
//      (Ter a Dom; segunda-feira fechado).
//
//  ⚠ A pausa manual fica salva no navegador (localStorage):
//    vale para os pedidos feitos NAQUELE aparelho. O horário
//    de funcionamento vale para todos os visitantes do site.
// ═══════════════════════════════════════════════════
const STATUS_PEDIDOS_KEY = 'japa_status_pedidos';

// Status da loja vindo do servidor (fonte da verdade global).
// null = ainda não sabemos (site offline/sem API) → usamos a pausa local.
let statusLojaServidor = null;

// 0=Dom 1=Seg 2=Ter 3=Qua 4=Qui 5=Sex 6=Sáb — igual ao exibido na seção de contato
// Construído a partir de config.js (business.hours); fallback hardcoded se o config faltar.
const _DIA_POR_NOME = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
const _HORARIO_PADRAO = {
    0: [['12:00', '15:00']],
    1: [],
    2: [['11:30', '14:30'], ['19:00', '22:30']],
    3: [['11:30', '14:30'], ['19:00', '22:30']],
    4: [['11:30', '14:30'], ['19:00', '22:30']],
    5: [['11:30', '14:30'], ['19:00', '23:00']],
    6: [['11:30', '14:30'], ['19:00', '23:00']]
};
const HORARIOS_PEDIDOS = (() => {
    const horasCfg = CFG.business && Array.isArray(CFG.business.hours) ? CFG.business.hours : null;
    if (!horasCfg) return _HORARIO_PADRAO;
    const mapa = {};
    for (const faixa of horasCfg) {
        for (const dia of (faixa.days || [])) {
            const n = _DIA_POR_NOME[dia];
            if (n === undefined) continue;
            (mapa[n] = mapa[n] || []).push([faixa.opens, faixa.closes]);
        }
    }
    return Object.keys(mapa).length ? mapa : _HORARIO_PADRAO;
})();
const NOMES_DIA = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

function minutosDoDia(d) { return d.getHours() * 60 + d.getMinutes(); }
function hhmmParaMinutos(txt) { const p = String(txt).split(':'); return (Number(p[0]) || 0) * 60 + (Number(p[1]) || 0); }
function hojeISO() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

// Pausa manual do dia (botão do painel cozinha). Expira no dia seguinte.
function lerStatusManualPedidos() {
    try {
        const bruto = localStorage.getItem(STATUS_PEDIDOS_KEY);
        if (!bruto) return 'auto';
        const s = JSON.parse(bruto);
        if (!s || s.data !== hojeISO()) return 'auto';
        return (s.status === 'aberto' || s.status === 'fechado') ? s.status : 'auto';
    } catch (e) { return 'auto'; }
}
function salvarStatusManualPedidos(status) {
    try { localStorage.setItem(STATUS_PEDIDOS_KEY, JSON.stringify({ status: status, data: hojeISO() })); } catch (e) { /* localStorage indisponível */ }
}
function limparStatusManualPedidos() {
    try { localStorage.removeItem(STATUS_PEDIDOS_KEY); } catch (e) { /* localStorage indisponível */ }
}

// Quando os pedidos abrem de novo
function proximaAberturaTexto(base) {
    const hoje = new Date(base.getFullYear(), base.getMonth(), base.getDate());
    const min = minutosDoDia(base);
    for (let i = 0; i < 8; i++) {
        const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i);
        const faixas = HORARIOS_PEDIDOS[d.getDay()] || [];
        for (const f of faixas) {
            if (i === 0 && hhmmParaMinutos(f[0]) <= min) continue;
            const quando = i === 0 ? 'hoje às ' + f[0]
                : (i === 1 ? 'amanhã às ' + f[0] : NOMES_DIA[d.getDay()] + ' às ' + f[0]);
            return 'Nossos pedidos abrem ' + quando + '.';
        }
    }
    return 'Confira nosso horário de funcionamento.';
}

// Situação atual dos pedidos
// Prioridade: servidor (vale para todo mundo) → pausa local (aparelho sem API) → horário
function statusPedidos() {
    const servidor = statusLojaServidor;
    const manual = (servidor === null) ? lerStatusManualPedidos() : servidor;
    if (manual === 'fechado') {
        return { aberto: false, manual: true, texto: 'O gerente pausou os pedidos por enquanto — chame a gente no WhatsApp que a gente te atende.' };
    }
    if (manual === 'aberto') {
        return { aberto: true, manual: true, texto: '' };
    }
    const agora = new Date();
    const faixas = HORARIOS_PEDIDOS[agora.getDay()] || [];
    const min = minutosDoDia(agora);
    const dentro = faixas.some(f => min >= hhmmParaMinutos(f[0]) && min < hhmmParaMinutos(f[1]));
    if (dentro) return { aberto: true, manual: false, texto: '' };
    return { aberto: false, manual: false, texto: proximaAberturaTexto(agora) };
}
function pedidosLiberados() { return statusPedidos().aberto; }

// Status manual efetivo (destaca os botões do painel cozinha)
function statusLojaManual() {
    if (statusLojaServidor) return statusLojaServidor;
    return lerStatusManualPedidos();
}

// Busca o status da loja no servidor — é o que faz a pausa valer para TODOS os clientes
function _apiGetStoreStatus() {
    return fetch(apiUrl('/api/config/store-status'), { headers: { 'Accept': 'application/json' } })
        .then(r => (r.ok ? r.json() : null))
        .then(data => {
            if (!data) return;
            const novo = (data.status === 'aberto' || data.status === 'fechado') ? data.status : 'auto';
            if (novo === statusLojaServidor) return;
            statusLojaServidor = novo;
            aplicarAvisoPedidos();
            atualizarBotoesLoja();
        })
        .catch(() => { /* sem API: segue com a pausa local */ });
}

// Atualiza o aviso do topo, o carrinho e o botão de finalizar
function aplicarAvisoPedidos() {
    const st = statusPedidos();

    const aviso = document.getElementById('avisoFechadoPedidos');
    const texto = document.getElementById('avisoFechadoPedidosTexto');
    const zap = document.getElementById('avisoFechadoPedidosZap');
    if (aviso) {
        aviso.classList.toggle('hidden', st.aberto);
        if (!st.aberto) {
            if (texto) texto.textContent = st.texto;
            if (zap) {
                zap.href = 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(
                    "Olá! Vi no site que o Japa's House está fechado para pedidos agora. Podemos falar?"
                );
            }
        }
    }

    // Carrinho: avisa e trava o botão de pedido
    const hint = document.getElementById('cartFechadoHint');
    const btn = document.getElementById('cartCheckoutBtn');
    const rotulo = document.getElementById('cartCheckoutBtnTexto');
    const icone = btn ? btn.querySelector('i') : null;
    if (hint) {
        hint.classList.toggle('hidden', st.aberto);
        if (!st.aberto) hint.textContent = st.texto;
    }
    if (btn) {
        btn.disabled = !st.aberto || cart.length === 0;
        if (icone) icone.className = st.aberto ? 'fa-solid fa-bag-shopping text-base' : 'fa-solid fa-lock text-base';
        if (rotulo) rotulo.textContent = st.aberto ? 'Fazer Pedido' : 'Fechado para pedidos';
    }
}

function openCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;
    renderCart();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function toggleChangeField() {
    const pay = document.getElementById('cartPayment');
    const wrap = document.getElementById('cartChangeWrap');
    if (!pay || !wrap) return;
    wrap.classList.toggle('hidden', pay.value !== 'Dinheiro');
}

function handleCheckout(e) {
    e.preventDefault();

    // Bloqueio de pedidos fora do horário (ou com a loja pausada no painel)
    const stPedidos = statusPedidos();
    if (!stPedidos.aberto) {
        showToast(stPedidos.texto || 'Estamos fechados para pedidos no momento.');
        return;
    }

    if (cart.length === 0) {
        alert('Adicione pelo menos um item ao carrinho antes de finalizar.');
        return;
    }

    const name = document.getElementById('cartName').value.trim();
    const phone = document.getElementById('cartPhone').value.trim();
    const address = document.getElementById('cartAddress').value.trim();
    const district = getDistrictValue();
    const complement = document.getElementById('cartComplement').value.trim();
    const payment = document.getElementById('cartPayment').value;
    const changeFor = document.getElementById('cartChangeFor').value.trim();
    const notes = document.getElementById('cartNotes').value.trim();
    const feeInfo = getCartFeeInfo();
    const fee = feeInfo.fee;
    const subtotal = cartSubtotal();
    const total = subtotal + fee;

    const fullAddress = `${address} - ${district}${complement ? ' - ' + complement : ''}`;

    const itemsList = cart.map(item =>
        `${item.qty}x ${item.name} — R$ ${((Number(item.price) || 0) * (Number(item.qty) || 0)).toFixed(2)}`
    ).join('\n');

    // ── Pedido SOMENTE pelo site ──────────────────────────────────────────
    // O pedido vai direto para o painel do gerente e para a cozinha.
    // Se o servidor não responder, o cliente recebe o aviso e o carrinho
    // continua intacto para tentar de novo — nada se perde.
    const btn = document.getElementById('cartCheckoutBtn');
    const btnTexto = document.getElementById('cartCheckoutBtnTexto');
    const estadoBotao = btnTexto ? btnTexto.innerText : '';
    if (btn) btn.disabled = true;
    if (btnTexto) btnTexto.innerText = 'Enviando...';

    fetch(apiUrl('/api/orders'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            customer: name,
            phone: phone,
            address: fullAddress,
            district: district,
            complement: complement,
            payment: payment,
            changeFor: changeFor,
            notes: notes,
            cartItems: cart.map(i => ({ nome: i.name, qtd: i.qty, obs: i.obs || '' }))
        })
    })
        .then(r => r.json().then(data => ({ ok: r.ok, data })))
        .then(({ ok, data }) => {
            if (!ok) {
                const msg = (data && data.error) ? data.error : 'Não foi possível enviar o pedido.';
                showToast(msg + ' Seu carrinho continua salvo — tente novamente em instantes.');
                return;
            }

            // Pedido gravado no servidor: aparece no painel do gerente e da cozinha
            if (window._kitchenOrderHook) window._kitchenOrderHook(itemsList.replace(/\n/g, '  •  '), total, { name, phone });

            showOrderConfirmation();

            // Só agora limpa o carrinho (o pedido foi registrado com sucesso)
            cart = [];
            saveState();
            updateCartBadge();

            const form = document.getElementById('checkoutForm');
            if (form) form.reset();
            toggleChangeField();
            renderDistrictField();
            renderCart();
            closeCart();
        })
        .catch(() => {
            showToast('Sem conexão com o servidor — seu pedido não foi enviado. Tente novamente em instantes.');
        })
        .finally(() => {
            if (btn) btn.disabled = (cart.length === 0);
            if (btnTexto) btnTexto.innerText = estadoBotao || 'Fazer Pedido';
        });
}

// ===== MENU MOBILE =====
function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    const icon = document.getElementById('mobileNavIcon');
    const trigger = icon ? icon.closest('button') : null;
    if (!nav) return;
    const isHidden = nav.classList.toggle('hidden');
    if (icon) icon.className = isHidden ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
    if (trigger) trigger.setAttribute('aria-expanded', String(!isHidden));
}

function closeMobileNav() {
    const nav = document.getElementById('mobileNav');
    const icon = document.getElementById('mobileNavIcon');
    if (nav) nav.classList.add('hidden');
    if (icon) icon.className = 'fa-solid fa-bars';
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    loadAdminLockout();

    // Sincroniza o estado entre abas do mesmo navegador
    window.addEventListener('storage', (ev) => {
        if (ev.key === STORAGE_KEY) {
            loadState();
            updateCartBadge();
            renderCart();
            if (isAdminLoggedIn) { refreshKitchenOrders(); renderAdminOrders(); renderAdminZones(); }
            aplicarAvisoPedidos();
        } else if (ev.key === ADMIN_LOCKOUT_KEY) {
            loadAdminLockout();
        }
    });

    initSakura();
    renderMenuTabs();
    renderMenuList();
    initTabsDrag();
    updateOrderBadges();

    // Servidor = fonte da verdade do cardápio e dos bairros de entrega.
    // Se a API não responder (ex.: demo no GitHub Pages), o site segue com o
    // que está no código e no cache do navegador.
    apiCarregarCardapio();
    apiCarregarZonas();

    // Roleta 3D (seção de navegação do index — não existe no cardapio.html)
    initRoleta3D();

    // Status de pedidos: aviso no topo, carrinho travado e painel cozinha
    _apiGetStoreStatus();
    storeIsOpen = statusPedidos().aberto;
    atualizarBotoesLoja();
    aplicarAvisoPedidos();
    setInterval(() => {
        _apiGetStoreStatus();     // busca a pausa global no servidor
        aplicarAvisoPedidos();    // revisa a cada minuto (abre/fecha sozinho no horário)
    }, 60000);
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) { _apiGetStoreStatus(); aplicarAvisoPedidos(); }
    });

    // Comanda em mesa: cria o modal e abre direto pelo link ?mesa=N&codigo=ABCD
    garantirModalMesa();
    abrirMesaPeloLink();

    // Indicador de páginas do cardápio acompanha o scroll da lista
    const menuList = document.getElementById('menuList');
    if (menuList) {
        menuList.addEventListener('scroll', () => {
            const pages = document.querySelectorAll('#pageDots .page-dot').length || 1;
            const range = menuList.scrollHeight - menuList.clientHeight;
            const ratio = range > 0 ? menuList.scrollTop / range : 0;
            const current = Math.min(pages, Math.floor(ratio * pages) + 1);
            document.querySelectorAll('#pageDots .page-dot').forEach((d, i) => {
                d.classList.toggle('active', i === current - 1);
            });
            const text = document.getElementById('pageText');
            if (text) text.textContent = `PÁG. ${current}/${pages}`;
        });
    }

    selectTemakiOption('proteina', 'salmao', 28.00);

    updateCartBadge();
    renderDistrictField();
    renderCart();
    renderAdminZones();

    const autoPrint = document.getElementById('autoPrintCheckbox');
    if (autoPrint) autoPrint.checked = autoPrintOnPrep;

    // Reservas: não permite escolher data no passado
    const resDate = document.getElementById('resDate');
    if (resDate) resDate.min = new Date().toISOString().split('T')[0];
});

// ESC fecha todos os modais abertos
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeCart();
    closeMobileNav();
    closeAdminLoginModal();
    closeAdminPanelModal();
    closeProductFormModal();
    closeKitchenPanel();
    const dishModal = document.getElementById('activeDishModal');
    if (dishModal) dishModal.remove();
});

function showOrderConfirmation() {
    const old = document.getElementById('orderToast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.id = 'orderToast';
    toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-[70] flex items-center gap-3 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-emerald-900/50 font-bold text-sm';
    toast.innerHTML = `
                <i class="fa-solid fa-circle-check text-xl"></i>
                <div>
                    <div class="font-extrabold">Pedido realizado com sucesso!</div>
                    <div class="text-xs font-normal text-emerald-100 mt-0.5">Seu pedido foi registrado e será preparado em breve.</div>
                </div>
            `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// ═══════════════════════════════════════════════════
//  PAINEL COZINHA / BALCÃO — lógica completa
// ═══════════════════════════════════════════════════

let storeIsOpen = false;
let kitchenOrderFilter = 'todos';
let kitchenCategoryFilter = 'todos';
let kitchenAlertSound = true;
let kitchenAutoPrint = false;
let kitchenTurnStart = null; // Date object: início do turno atual
let kitchenTimerId = null;   // atualização automática do painel

// Abre o Painel Cozinha (requer login)
function openKitchenPanel() {
    const panel = document.getElementById('kitchenPanelModal');
    if (!panel) return;
    panel.classList.remove('hidden');
    panel.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (!kitchenTurnStart) kitchenTurnStart = new Date();
    switchKitchenTab('cozinha');
    refreshKitchenOrders();
    updateKitchenStats();
    renderKitchenZones();
    garantirBlocoComandasCozinha();
    atualizarComandasCozinha();
    sincronizarPedidos();
    iniciarTimerCozinha();
}

// Atualização automática do painel (pedidos + comandas de mesa)
function iniciarTimerCozinha() {
    if (kitchenTimerId) return;
    kitchenTimerId = setInterval(() => {
        const panel = document.getElementById('kitchenPanelModal');
        if (!panel || panel.classList.contains('hidden')) return;
        sincronizarPedidos();
        atualizarComandasCozinha();
    }, 15000);
}

function pararTimerCozinha() {
    if (kitchenTimerId) { clearInterval(kitchenTimerId); kitchenTimerId = null; }
}

function closeKitchenPanel() {
    const panel = document.getElementById('kitchenPanelModal');
    if (!panel) return;
    panel.classList.add('hidden');
    panel.classList.remove('flex');
    document.body.style.overflow = '';
    pararTimerCozinha();
}

function logoutKitchen() {
    isAdminLoggedIn = false;
    storeIsOpen = false;
    kitchenTurnStart = null;
    pararTimerCozinha();
    closeKitchenPanel();
}

// ── Tab switching ──
function switchKitchenTab(tab) {
    const tabs = ['cozinha', 'cardapio', 'entrega', 'mesas', 'fechamento'];
    tabs.forEach(t => {
        const btn = document.getElementById(`kitchenTab${t.charAt(0).toUpperCase() + t.slice(1)}Btn`);
        const content = t === 'cozinha'
            ? document.getElementById('kitchenTabCozinha')
            : document.getElementById(`kitchenTab${t.charAt(0).toUpperCase() + t.slice(1)}Content`);

        const isActive = t === tab;
        if (btn) {
            btn.classList.toggle('bg-japa-red', isActive);
            btn.classList.toggle('text-white', isActive);
            btn.classList.toggle('text-slate-300', !isActive);
            btn.classList.toggle('bg-transparent', !isActive);
        }
        if (content) content.classList.toggle('hidden', !isActive);
    });

    if (tab === 'cardapio') renderKitchenProducts();
    if (tab === 'entrega') renderKitchenZones();
    if (tab === 'mesas') renderMesasAdmin();
    if (tab === 'fechamento') updateKitchenStats(); // recalcula ao abrir o fechamento
}

// ── Store open/close ──
function setStoreOpen(open) {
    storeIsOpen = open;
    salvarStatusManualPedidos(open ? 'aberto' : 'fechado');
    if (open && !kitchenTurnStart) kitchenTurnStart = new Date();
    atualizarBotoesLoja();
    updateKitchenStats();
    aplicarAvisoPedidos();
    // Sincroniza com o backend
    _apiSetStoreStatus(open ? 'aberto' : 'fechado');
}

// Volta a seguir o horário de funcionamento (cancela a pausa manual)
function setStoreAuto() {
    limparStatusManualPedidos();
    storeIsOpen = statusPedidos().aberto;
    atualizarBotoesLoja();
    updateKitchenStats();
    aplicarAvisoPedidos();
    // Sincroniza com o backend
    _apiSetStoreStatus('auto');
}

// Envia o status da loja para a API (best-effort: erros silenciosos)
function _apiSetStoreStatus(status) {
    if (!adminToken) return;
    // reflete na hora na tela; o servidor confirma em seguida
    statusLojaServidor = status;
    fetch(apiUrl('/api/config/store-status'), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({ status })
    }).catch(() => { /* falha silenciosa — localStorage já garantiu o estado local */ });
}

// Destaca o botão correspondente ao estado atual da loja
function atualizarBotoesLoja() {
    const btnFechada = document.getElementById('btnLojaFechada');
    const btnAberta = document.getElementById('btnLojaAberta');
    const btnHorario = document.getElementById('btnLojaHorario');

    if (storeIsOpen) {
        if (btnFechada) { btnFechada.className = 'px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all bg-rose-900/30 text-rose-500 border border-rose-900/40 hover:bg-rose-700 hover:text-white shadow-md'; }
        if (btnAberta) { btnAberta.className = 'px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all bg-emerald-600 text-white border border-emerald-500 shadow-md'; }
    } else {
        if (btnFechada) { btnFechada.className = 'px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all bg-rose-700 text-white border border-rose-600 shadow-md'; }
        if (btnAberta) { btnAberta.className = 'px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all bg-emerald-700/40 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-700 hover:text-white shadow-md'; }
    }

    if (btnHorario) {
        const noHorario = statusLojaManual() === 'auto';
        btnHorario.className = 'px-3 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all shadow-md ' + (noHorario
            ? 'bg-slate-700 text-white border border-slate-600'
            : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white');
    }
}

// ── Date / turn stamp ──
function updateKitchenDateStamp() {
    const el = document.getElementById('kitchenDateStamp');
    if (!el) return;
    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR');
    const turnStr = kitchenTurnStart
        ? `${String(kitchenTurnStart.getHours()).padStart(2, '0')}:${String(kitchenTurnStart.getMinutes()).padStart(2, '0')}`
        : '--:--';
    el.textContent = `${dateStr} (Turno iniciado às ${turnStr})`;
}

// ── Daily stats ──
function updateKitchenStats() {
    updateKitchenDateStamp();

    // Only count today's concluded orders (not cancelled)
    const todayStr = new Date().toLocaleDateString('pt-BR');
    const todayOrders = adminOrders.filter(o =>
        o.status !== 'Cancelado' && o.status !== 'Cancelado pelo cliente'
    );

    let total = 0, cartao = 0, pix = 0, dinheiro = 0, delivery = 0;
    todayOrders.forEach(o => {
        const v = Number(o.total) || 0;
        total += v;
        const pay = String(o.payment || '').toLowerCase();
        if (pay.includes('cart')) cartao += v;
        else if (pay.includes('pix')) pix += v;
        else if (pay.includes('dinhe')) dinheiro += v;

        // A receber do delivery = fee pendente (não concluído ainda)
        if (o.status !== 'Concluído') delivery += (Number(o.deliveryFee) || 0);
    });

    const fmt = v => `R$ ${v.toFixed(2)}`;
    const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setEl('statVendasTotais', fmt(total));
    setEl('statCartao', fmt(cartao));
    setEl('statPix', fmt(pix));
    setEl('statDinheiro', fmt(dinheiro));
    setEl('statDelivery', fmt(delivery));

    const countEl = document.getElementById('kitchenOrderCountBadge');
    if (countEl) countEl.textContent = `${todayOrders.length} pedido${todayOrders.length !== 1 ? 's' : ''} hoje`;
}

// ── Order filter / render ──
function filterKitchenOrders(status, btn) {
    kitchenOrderFilter = status;
    document.querySelectorAll('.kitchen-order-filter').forEach(b => {
        b.classList.remove('bg-japa-red', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-300');
    });
    if (btn) {
        btn.classList.add('bg-japa-red', 'text-white');
        btn.classList.remove('bg-slate-800', 'text-slate-300');
    }
    refreshKitchenOrders();
}

function refreshKitchenOrders() {
    updateKitchenStats();
    updateKitchenFilterCounts();

    const list = document.getElementById('kitchenOrdersList');
    if (!list) return;

    let orders = [...adminOrders];
    if (kitchenOrderFilter !== 'todos') {
        // Map friendly labels to stored status values
        const statusMap = {
            'Pendente': 'Pendente',
            'Em Preparo': 'Em Preparo',
            'A Caminho': 'A Caminho',
            'Concluído': 'Concluído',
            'Cancelado': 'Cancelado'
        };
        const target = statusMap[kitchenOrderFilter] || kitchenOrderFilter;
        orders = orders.filter(o => o.status === target);
    }

    if (orders.length === 0) {
        list.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-16 text-center">
                        <div class="text-5xl mb-4 opacity-30">🍽️</div>
                        <h3 class="text-slate-300 font-bold text-sm">Nenhum pedido recebido no momento</h3>
                        <p class="text-[11px] text-slate-500 mt-2 max-w-xs leading-relaxed">
                            Quando um cliente enviar um pedido no site, ele aparecerá aqui com alerta sonoro e impressão imediata.
                        </p>
                    </div>`;
        return;
    }

    list.innerHTML = orders.map(order => {
        const statusColors = {
            'Pendente': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
            'Em Preparo': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            'A Caminho': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
            'Concluído': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
            'Cancelado': 'bg-rose-500/20 text-rose-300 border-rose-500/30'
        };
        const statusEmoji = {
            'Pendente': '⏳', 'Em Preparo': '👨‍🍳', 'A Caminho': '🛵', 'Concluído': '✅', 'Cancelado': '❌'
        };
        const sc = statusColors[order.status] || 'bg-slate-700/40 text-slate-300 border-slate-700';
        const se = statusEmoji[order.status] || '📋';
        const fee = Number(order.deliveryFee) || 0;
        const total = Number(order.total) || 0;
        const subtotal = Math.max(0, total - fee);

        return `
                <div class="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 transition-all">
                    <div class="flex flex-wrap items-start justify-between gap-3">
                        <!-- Left: order info -->
                        <div class="flex-1 min-w-0 space-y-1.5">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="text-xs font-extrabold text-japa-gold">#${esc(order.id)}</span>
                                <span class="text-xs font-bold text-white">${esc(order.customer)}</span>
                                <span class="text-[10px] text-slate-500">${esc(order.time)}</span>
                                <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${sc}">${se} ${esc(order.status)}</span>
                            </div>
                            <p class="text-xs text-slate-300 font-semibold leading-snug">${esc(order.items)}</p>
                            ${order.address ? `<p class="text-[11px] text-slate-500">📍 ${esc(order.address)}</p>` : ''}
                            <div class="flex flex-wrap gap-3 text-[11px] text-slate-400 mt-1">
                                ${order.phone ? `<span>📱 ${esc(order.phone)}</span>` : ''}
                                ${order.payment ? `<span>💳 ${esc(order.payment)}</span>` : ''}
                                <span>Taxa: <span class="font-bold text-slate-200">${esc(orderFeeLabel(order))}</span></span>
                                <span>Total: <span class="font-extrabold text-japa-gold">R$ ${total.toFixed(2)}</span></span>
                            </div>
                            ${order.notes ? `<p class="text-[11px] text-amber-300/80 mt-1">📝 ${esc(order.notes)}</p>` : ''}
                        </div>

                        <!-- Right: controls -->
                        <div class="flex items-center gap-2 shrink-0 flex-wrap">
                            <select onchange="updateKitchenOrderStatus(${order.id}, this.value)"
                                class="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-200 focus:outline-none focus:border-japa-red">
                                <option value="Pendente"   ${order.status === 'Pendente' ? 'selected' : ''}>⏳ Pendente</option>
                                <option value="Em Preparo" ${order.status === 'Em Preparo' ? 'selected' : ''}>👨‍🍳 Em Preparo</option>
                                <option value="A Caminho"  ${order.status === 'A Caminho' ? 'selected' : ''}>🛵 A Caminho</option>
                                <option value="Concluído"  ${order.status === 'Concluído' ? 'selected' : ''}>✅ Concluído</option>
                                <option value="Cancelado"  ${order.status === 'Cancelado' ? 'selected' : ''}>❌ Cancelado</option>
                            </select>
                            <button onclick="printOrder(${order.id})"
                                class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-all" title="Imprimir comanda">
                                <i class="fa-solid fa-print"></i>
                            </button>
                            <button onclick="sendOrderWhatsAppUpdate(${order.id})"
                                class="p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white text-xs transition-all" title="Notificar cliente">
                                <i class="fa-brands fa-whatsapp"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
    }).join('');
}

function updateKitchenOrderStatus(id, newStatus) {
    const order = adminOrders.find(o => o.id === id);
    if (!order) return;
    const previous = order.status;
    order.status = newStatus;
    saveState();
    refreshKitchenOrders();
    renderAdminOrders();
    updateOrderBadges();

    // Grava no servidor (fonte da verdade) e re sincroniza a lista
    if (adminToken) {
        apiAtualizarStatusPedido(id, newStatus).then(ok => {
            if (ok) sincronizarPedidos();
        });
    }

    if (previous === newStatus) return;
    if (newStatus === 'Em Preparo') {
        sendStatusWhatsApp(order, 'preparo');
        if (kitchenAutoPrint || autoPrintOnPrep) printOrder(order.id);
    }
    if (newStatus === 'A Caminho') sendStatusWhatsApp(order, 'caminho');
}

// Atualiza o painel inteiro: pedidos do site + comandas de mesa
function atualizarPainelCozinha() {
    sincronizarPedidos();
    atualizarComandasCozinha();
}

function updateKitchenFilterCounts() {
    const counts = {
        todos: adminOrders.length,
        'Pendente': adminOrders.filter(o => o.status === 'Pendente').length,
        'Em Preparo': adminOrders.filter(o => o.status === 'Em Preparo').length,
        'A Caminho': adminOrders.filter(o => o.status === 'A Caminho').length,
        'Concluído': adminOrders.filter(o => o.status === 'Concluído').length,
        'Cancelado': adminOrders.filter(o => o.status === 'Cancelado').length
    };
    const labels = ['todos', 'Pendente', 'Em Preparo', 'A Caminho', 'Concluído', 'Cancelado'];
    const display = ['Todos', 'Novos', 'Em Preparo', 'Em Entrega', 'Concluídos', 'Cancelados'];

    document.querySelectorAll('.kitchen-order-filter').forEach((btn, i) => {
        const key = labels[i];
        if (key !== undefined) {
            btn.textContent = `${display[i]} (${counts[key] ?? 0})`;
        }
    });
}

// ── Kitchen sound / auto-print toggles ──
function toggleKitchenSound(val) { kitchenAlertSound = !!val; }
function toggleKitchenAutoPrint(val) { kitchenAutoPrint = !!val; autoPrintOnPrep = !!val; saveState(); }

// ── Kitchen products (same grid as admin, but inside kitchen panel) ──
function renderKitchenProducts() {
    if (!isAdminLoggedIn) return;
    const grid = document.getElementById('kitchenProductsGrid');
    if (!grid) return;

    const q = (document.getElementById('kitchenSearchInput')?.value || '').toLowerCase();
    const items = dishData.filter(d => {
        const matchCat = kitchenCategoryFilter === 'todos' || d.category === kitchenCategoryFilter;
        const matchQ = d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q);
        return matchCat && matchQ;
    });

    if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-12 text-center text-slate-500 text-xs">Nenhum produto encontrado.</div>`;
        return;
    }

    grid.innerHTML = items.map(dish => `
                <div class="bg-slate-950 rounded-2xl border border-slate-800 p-4 flex flex-col gap-3 hover:border-slate-700 transition-all">
                    <div class="relative h-28 rounded-xl overflow-hidden bg-slate-900">
                        <img src="${esc(dish.img)}" alt="${esc(dish.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='imagens/placeholder-prato.svg'">
                        <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-japa-red text-white">${esc(dish.badge || dish.category)}</span>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-white truncate">${esc(dish.name)}</p>
                        <p class="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">${esc(dish.desc)}</p>
                    </div>
                    <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
                        <div class="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1 focus-within:border-japa-red">
                            <span class="text-xs font-bold text-japa-gold">R$</span>
                            <input type="number" step="0.50" value="${(Number(dish.price) || 0).toFixed(2)}"
                                onchange="updateProductPriceDirect(${dish.id}, this.value)"
                                class="w-14 bg-transparent text-xs font-bold text-white focus:outline-none">
                        </div>
                        <div class="flex gap-1.5">
                            <button onclick="editProduct(${dish.id})" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs" title="Editar">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="deleteProduct(${dish.id}); renderKitchenProducts();" class="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 text-xs" title="Excluir">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
}

function filterKitchenCategory(cat, btn) {
    kitchenCategoryFilter = cat;
    document.querySelectorAll('.kitchen-cat-btn').forEach(b => {
        b.classList.remove('bg-japa-red', 'text-white');
        b.classList.add('bg-slate-800', 'text-slate-300');
    });
    if (btn) { btn.classList.add('bg-japa-red', 'text-white'); btn.classList.remove('bg-slate-800', 'text-slate-300'); }
    renderKitchenProducts();
}

// ── Kitchen delivery zones (mirrors admin tab) ──
function renderKitchenZones() {
    const list = document.getElementById('kitchenZonesList');
    if (!list) return;

    if (deliveryZones.length === 0) {
        list.innerHTML = `<div class="p-8 text-center text-slate-500 text-xs border border-dashed border-slate-800 rounded-2xl">
                    <i class="fa-solid fa-map-location-dot text-2xl text-slate-700 mb-2 block"></i>
                    Nenhum bairro cadastrado ainda.
                </div>`;
        return;
    }

    list.innerHTML = deliveryZones.map(zone => `
                <div class="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div class="flex-1 min-w-0">
                        <label class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Bairro</label>
                        <input type="text" value="${esc(zone.name)}" onchange="updateZoneName('${zone.id}', this.value)"
                            class="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-japa-red focus:outline-none">
                    </div>
                    <div class="w-full sm:w-36">
                        <label class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Taxa (R$)</label>
                        <div class="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 focus-within:border-japa-red">
                            <span class="text-xs font-bold text-japa-gold">R$</span>
                            <input type="number" step="0.50" min="0" value="${(Number(zone.fee) || 0).toFixed(2)}"
                                onchange="updateZoneFee('${zone.id}', this.value)"
                                class="w-full bg-transparent text-xs font-bold text-japa-gold focus:outline-none">
                        </div>
                    </div>
                    <div class="flex sm:flex-col gap-2 sm:pt-4">
                        <button onclick="removeZone('${zone.id}'); renderKitchenZones();"
                            class="flex-1 px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900 text-rose-300 text-xs font-bold transition-all">
                            <i class="fa-solid fa-trash-can mr-1"></i> Excluir
                        </button>
                    </div>
                </div>
            `).join('');
}

function addKitchenDeliveryZone() {
    // Reuse the existing addDeliveryZone but read from kitchen inputs
    const nameEl = document.getElementById('kitchenNewZoneName');
    const feeEl = document.getElementById('kitchenNewZoneFee');
    const name = (nameEl ? nameEl.value : '').trim();
    const fee = parseFloat(feeEl ? feeEl.value : '');

    if (!name) { alert('Informe o nome do bairro.'); return; }
    if (isNaN(fee) || fee < 0) { alert('Informe o valor da taxa de entrega deste bairro.'); return; }
    if (deliveryZones.some(z => z.name.toLowerCase() === name.toLowerCase())) {
        alert('Este bairro já está cadastrado.');
        return;
    }

    deliveryZones.push({
        id: 'z' + Date.now() + Math.floor(Math.random() * 1000),
        name,
        fee: Math.round(fee * 100) / 100
    });
    saveState();
    if (nameEl) nameEl.value = '';
    if (feeEl) feeEl.value = '';
    renderKitchenZones();
    renderAdminZones();
    renderDistrictField();
    updateCartTotals();

    // Grava no servidor (fonte da verdade)
    apiCriarZona(deliveryZones[deliveryZones.length - 1]);
}

function playKitchenAlertSound() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.setValueAtTime(660, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) { /* AudioContext indisponível */ }
}

// Hook: when a new order is added, refresh kitchen panel if open
// Wraps the original addNewOrderToAdmin to also notify the kitchen panel
const _origAddNewOrder = addNewOrderToAdmin;
window._kitchenOrderHook = function (items, total, customer) {
    const panel = document.getElementById('kitchenPanelModal');
    if (panel && !panel.classList.contains('hidden')) {
        setTimeout(() => {
            refreshKitchenOrders();
            if (kitchenAlertSound) playKitchenAlertSound();
        }, 100);
    }
};

// Patch addNewOrderToAdmin to also fire the kitchen hook
const __origAdd = addNewOrderToAdmin;
addNewOrderToAdmin = function (items, total, customer) {
    __origAdd(items, total, customer);
    window._kitchenOrderHook(items, total, customer);
};

// ═══════════════════════════════════════════════════
//  ROLETA DE FOTOS — carrossel 3D com foco central
//  Seção #roleta-3d do index.html
//
//  Modelo: o cartão do centro aparece grande e plano; os
//  cartões dos lados aparecem inclinados, menores e
//  escurecidos, como uma vitrine em perspectiva.
//
//  ▸ PARA COLOCAR MAIS FOTOS:
//    jogue os arquivos na pasta "imagens" do projeto com
//    os nomes roleta-1.jpg, roleta-2.jpg, roleta-3.jpg ...
//    em sequência, sem pular número.
//    Aceita .jpg, .jpeg, .png e .webp.
//    Depois é só dar F5 na página — a roleta passa a
//    mostrar a foto nova automaticamente.
//
//  ▸ LEGENDAS (opcional):
//    o array LEGENDAS abaixo aceita uma entrada por foto,
//    na mesma ordem dos arquivos. Exemplo:
//      ['Salão Principal', 'Cozinha Aberta', 'Bar do Japa']
//    Deixe vazio ([]) para a roleta mostrar só a foto.
// ═══════════════════════════════════════════════════
function initRoleta3D() {
    const wheel = document.getElementById('wheel');
    const stage = document.getElementById('wheelStage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const spinBtn = document.getElementById('spinBtn');
    const bloco = document.getElementById('roleta-3d');
    const lightbox = document.getElementById('roletaLightbox');
    const lightboxImg = document.getElementById('roletaLightboxImg');
    const lightboxClose = document.getElementById('roletaLightboxClose');
    if (!wheel || !stage || !prevBtn || !nextBtn || !bloco) return;

    const BASE = 'imagens/roleta-';
    const EXT = ['.jpg', '.jpeg', '.png', '.webp'];
    const MAX_FOTOS = 60;
    const GIRO_MS = 4200;   // tempo (ms) que cada foto fica na frente
    const LEGENDAS = [];    // opcional: uma legenda por foto, na ordem

    let fotos = [];
    let pos = 0;             // índice fracionário do centro (0 = 1ª foto)
    let isDragging = false;
    let dragMoved = false;
    let startX = 0;
    let startPos = 0;
    let alvoArrasto = 0;
    let alvoInicial = null;
    let pausado = false;     // pausa temporária (mouse em cima, aba oculta)
    let giroAtivo = true;    // liga/desliga pedido pelo botão
    let visivel = true;
    let giroTimer = null;
    let rafArrasto = null;

    const semMovimento = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Medidas do carrossel (desktop / tablet / celular) ──
    function medidas() {
        const w = window.innerWidth;
        const card = w < 560 ? 232 : (w < 900 ? 280 : 340);
        const raio = w < 560 ? 1 : 2;
        const larg = stage.clientWidth || 1200;
        const passo = Math.max(card * 0.45, Math.min(212, (larg - card) / (raio * 2)));
        return { card: card, raio: raio, passo: passo };
    }

    // ── Coloca cada foto no seu lugar (caminho circular mais curto) ──
    function aplicar(animar) {
        const n = fotos.length;
        if (!n) return;
        const m = medidas();
        const meio = n / 2;
        const ativo = ((Math.round(pos) % n) + n) % n;
        const suave = animar !== false && !isDragging;

        [...wheel.children].forEach((card, i) => {
            let d = i - pos;
            d = ((d + meio) % n + n) % n - meio;   // menor caminho circular
            const ad = Math.abs(d);
            const dentro = ad <= m.raio;

            const giro = d === 0 ? 0 : -Math.sign(d) * (ad === 1 ? 26 : 34);
            const escala = d === 0 ? 1 : (ad === 1 ? 0.88 : 0.78);
            const z = d === 0 ? 120 : (ad === 1 ? 0 : -80);
            const brilho = d === 0 ? 1 : (ad === 1 ? 0.58 : 0.36);
            const opacidade = d === 0 ? 1 : (ad === 1 ? 0.95 : 0.68);

            card.style.transition = suave
                ? 'transform 780ms cubic-bezier(.33,1,.68,1), opacity .5s ease, filter .5s ease'
                : 'none';
            card.style.transform = 'translate(-50%, -50%) translate3d(' + (d * m.passo) + 'px, 0, ' + z + 'px) rotateY(' + giro + 'deg) scale(' + escala + ')';
            card.style.filter = 'brightness(' + brilho + ')';
            card.style.opacity = dentro ? String(opacidade) : '0';
            card.style.zIndex = String(50 - ad);
            card.style.pointerEvents = (dentro && ad === 0) ? 'auto' : 'none';
            card.classList.toggle('active', i === ativo);
            card.tabIndex = (dentro && ad === 0) ? 0 : -1;
        });
    }

    // ── Descobre as fotos: roleta-1, roleta-2, ... até faltar ──
    function descobrirFotos() {
        const achadas = [];
        let tentativa = 0;

        function fim() {
            fotos = achadas.length
                ? achadas
                : ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'];
            construir();
        }

        function testar(indice) {
            if (indice > MAX_FOTOS || tentativa >= EXT.length) return fim();
            const img = new Image();
            img.onload = () => {
                achadas.push(BASE + indice + EXT[tentativa]);
                tentativa = 0;
                testar(indice + 1);
            };
            img.onerror = () => {
                tentativa += 1;
                testar(indice);
            };
            img.src = BASE + indice + EXT[tentativa];
        }

        testar(1);
    }

    // ── Monta os cartões ──
    function construir() {
        wheel.innerHTML = '';
        fotos.forEach((src, index) => {
            const legenda = String(LEGENDAS[index] || '').trim();
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'wheel-card';
            card.setAttribute('role', 'listitem');
            card.setAttribute('aria-label', legenda ? legenda + ' — foto ' + (index + 1) + ' de ' + fotos.length : 'Foto ' + (index + 1) + ' de ' + fotos.length);
            card.innerHTML =
                '<span class="card-media">' +
                '<img class="card-img-bg" src="' + src + '" alt="" aria-hidden="true" draggable="false">' +
                '<img class="card-img" src="' + src + '" alt="' + esc(legenda || "Foto do Japa's House Bistrô") + '" loading="lazy" draggable="false" onerror="this.onerror=null;this.src=\'imagens/placeholder-prato.svg\'">' +
                '<span class="card-badge">Foto ' + String(index + 1).padStart(2, '0') + '</span>' +
                '</span>' +
                (legenda ? '<span class="card-body"><span class="card-title">' + esc(legenda) + '</span></span>' : '') +
                '<span class="card-foot">' +
                '<span class="card-counter">' + (index + 1) + ' / ' + fotos.length + '</span>' +
                '<span class="card-cta"><i class="fa-solid fa-expand"></i> Ver foto</span>' +
                '</span>';
            // clique (mouse ou teclado) abre a foto;
            // se o ponteiro foi arrastado, o clique é ignorado
            card.addEventListener('click', () => {
                if (dragMoved) return;
                abrirLightbox(src);
            });
            card.addEventListener('dragstart', e => e.preventDefault());
            wheel.appendChild(card);
        });
        aplicar(false);
    }

    // ── Lightbox: abre a foto em tela cheia ──
    let lightboxAberto = false;
    let lightboxAbertoEm = 0;
    let lightboxPressNoFundo = false;
    function abrirLightbox(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.hidden = false;
        lightboxAberto = true;
        lightboxAbertoEm = Date.now();
        document.body.style.overflow = 'hidden';
        if (lightboxClose) lightboxClose.focus();
        pausado = true; // pausa o giro enquanto a foto está aberta
    }
    function fecharLightbox(imediato) {
        if (!lightbox || !lightboxAberto) return;
        // ignora o clique que acabou de abrir a foto (evita abrir e fechar junto)
        if (!imediato && Date.now() - lightboxAbertoEm < 350) return;
        lightbox.hidden = true;
        lightboxAberto = false;
        document.body.style.overflow = '';
        pausado = false;
    }
    if (lightbox) {
        // só fecha se o próprio clique começou no fundo/fechar
        lightbox.addEventListener('mousedown', e => {
            lightboxPressNoFundo = (e.target === lightbox || e.target === lightboxClose);
        });
        lightbox.addEventListener('click', e => {
            // fecha ao clicar no fundo ou no botão; clicar na foto não fecha
            if (lightboxPressNoFundo && (e.target === lightbox || e.target === lightboxClose)) fecharLightbox();
            lightboxPressNoFundo = false;
        });
    }
    if (lightboxClose) lightboxClose.addEventListener('click', () => fecharLightbox(true));
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') fecharLightbox(true);
    });

    // ── Vai até a foto i (sempre pelo caminho mais curto) ──
    function irPara(i) {
        const n = fotos.length;
        if (!n) return;
        const base = Math.round(pos);
        let alvo = ((i % n) + n) % n;
        let delta = alvo - base;
        if (delta > n / 2) delta -= n;
        if (delta < -n / 2) delta += n;
        pos = base + delta;
        aplicar(true);
    }

    // ── Botão de pausar / retomar o giro ──
    function atualizarBotaoGiro() {
        if (!spinBtn) return;
        const icone = spinBtn.querySelector('i');
        const texto = spinBtn.querySelector('span');
        if (icone) icone.className = giroAtivo ? 'fa-solid fa-pause' : 'fa-solid fa-play';
        if (texto) texto.textContent = giroAtivo ? 'Pausar giro' : 'Retomar giro';
        spinBtn.setAttribute('aria-pressed', String(giroAtivo));
    }
    if (spinBtn) {
        spinBtn.addEventListener('click', () => {
            giroAtivo = !giroAtivo;
            atualizarBotaoGiro();
            if (giroAtivo) iniciarGiro();
        });
    }

    // ── Giro automático ──
    function pararGiro() {
        if (giroTimer) { clearInterval(giroTimer); giroTimer = null; }
    }
    function iniciarGiro() {
        pararGiro();
        if (semMovimento()) return; // acessibilidade: não gira sozinha
        giroTimer = setInterval(() => {
            if (!giroAtivo || pausado || lightboxAberto || !visivel || isDragging || fotos.length < 2) return;
            pos += 1;
            aplicar(true);
        }, GIRO_MS);
    }

    // Pausa o giro com o mouse em cima do palco (não pausa no toque)
    stage.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') pausado = true; });
    stage.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !lightboxAberto) pausado = false; });
    bloco.addEventListener('focusin', () => { pausado = true; });
    bloco.addEventListener('focusout', () => { if (!lightboxAberto) pausado = false; });

    // Gira só quando a seção está aparecendo na tela
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
            visivel = entries.some(e => e.isIntersecting);
        }, { threshold: 0.2 }).observe(stage);
    }

    prevBtn.addEventListener('click', () => irPara(Math.round(pos) - 1));
    nextBtn.addEventListener('click', () => irPara(Math.round(pos) + 1));

    // ── Arrasto fluido: a roleta "segue" o dedo/mouse ──
    function acompanhar() {
        const dif = alvoArrasto - pos;
        if (Math.abs(dif) < 0.003) {
            pos = alvoArrasto;
            rafArrasto = null;
            aplicar(true);
        } else {
            pos += dif * 0.22;   // amortecimento suave
            rafArrasto = requestAnimationFrame(acompanhar);
        }
    }

    stage.addEventListener('pointerdown', e => {
        isDragging = true;
        dragMoved = false;
        startX = e.clientX;
        startPos = pos;
        alvoArrasto = pos;
        alvoInicial = e.target;
        stage.classList.add('dragging');
        try { if (stage.setPointerCapture) stage.setPointerCapture(e.pointerId); } catch (err) { /* ponteiro sintético */ }
    });

    window.addEventListener('pointermove', e => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 6) dragMoved = true;
        if (!dragMoved) return;

        // arrastar para a direita traz a foto anterior para o centro
        alvoArrasto = startPos - dx / medidas().passo;
        if (semMovimento()) {
            pos = alvoArrasto;
            aplicar(false);
        } else if (!rafArrasto) {
            rafArrasto = requestAnimationFrame(acompanhar);
        }
    });

    function soltarArrasto() {
        if (!isDragging) return;
        isDragging = false;
        stage.classList.remove('dragging');
        if (rafArrasto) { cancelAnimationFrame(rafArrasto); rafArrasto = null; }

        if (dragMoved) {
            // encaixa na foto mais próxima
            pos = Math.round(alvoArrasto);
            aplicar(true);
        } else {
            // clique simples: abre a foto do cartão
            const card = alvoInicial && alvoInicial.closest ? alvoInicial.closest('.wheel-card') : null;
            if (card) {
                const img = card.querySelector('.card-img');
                if (img) abrirLightbox(img.src);
            }
            aplicar(true);
        }
        setTimeout(() => { dragMoved = false; }, 80);
    }
    window.addEventListener('pointerup', soltarArrasto);
    window.addEventListener('pointercancel', soltarArrasto);

    // Recalcula as posições quando a janela muda de tamanho
    let ultimoPasso = medidas().passo;
    window.addEventListener('resize', () => {
        const p = medidas().passo;
        if (p !== ultimoPasso) {
            ultimoPasso = p;
            if (fotos.length) aplicar(false);
        }
    });

    descobrirFotos();
    atualizarBotaoGiro();
    iniciarGiro();
}

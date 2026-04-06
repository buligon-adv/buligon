/**
 * Configurações globais do site
 */

export const siteConfig = {
  name: 'Buligon Advogados',
  description: 'Escritório especializado em soluções jurídicas estratégicas para agentes públicos, políticos e empresas com mais de duas décadas de atuação.',
  url: 'https://buligonadvogados.adv.br',
  author: 'Buligon Advogados',
  
  // Contato
  whatsapp: '+554130154161', 
  email: 'contato@buligonadvogados.adv.br',
  phone: '(41) 3015-4161',
  
  // Endereço
  address: {
    street: 'Rua Professor Macedo Filho, 315',
    neighborhood: 'Bom Retiro',
    city: 'Curitiba',
    state: 'PR',
    zipCode: '80520-340',
    country: 'Brasil'
  },
  
  // Redes sociais
  social: {
    whatsapp: 'https://wa.me/554130154161',
    instagram: 'https://instagram.com/buligonadvogados',
    linkedin: 'https://linkedin.com/company/buligon-advogados',
  },
  
  // Cores
  colors: {
    navy: '#0C1F40',
    bronze: '#BC9576',
  },
  
  // Menu principal
  navigation: [
    { label: 'Home', href: '/' },
    { 
      label: 'O Escritório', 
      href: '/sobre',
      submenu: [
        { label: 'Estrutura', href: '/sobre#estrutura' },
        { label: 'Profissionais', href: '/equipe' },
      ]
    },
    { label: 'Áreas de Atuação', href: '/areas' },
    { label: 'Notícias', href: '/noticias' },
    { label: 'Contato', href: '/contato' },
  ],
};

export type SiteConfig = typeof siteConfig;

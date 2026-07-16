/**
 * Configurações globais do site
 */

export const siteConfig = {
  name: 'Buligon Advogados',
  description: 'Escritório especializado em soluções jurídicas estratégicas para agentes públicos, políticos e empresas com mais de duas décadas de atuação.',
  url: 'https://buligonadvogados.adv.br',
  author: 'Buligon Advogados',
  
  // Contato
  whatsapp: '+554130535931',
  email: 'contato@buligonadvogados.adv.br',
  phone: '(41) 3053-5931',
  
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
    whatsapp: 'https://wa.me/554130535931',
    instagram: 'https://www.instagram.com/buligon.advogados?igsh=dm9qeWtxMjhkNWlu',
    linkedin: 'https://www.linkedin.com/company/12649348',
    facebook: 'https://www.facebook.com/Buligon-Buligon-Sociedade-de-Advogados-1057613344399693/',
  },
  
  // Cores
  colors: {
    navy: '#0C1F40',
    bronze: '#BC9576',
  },
  
  // Menu principal
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'O Escritório', href: '/sobre' },
    { label: 'Áreas de Atuação', href: '/areas' },
    { label: 'Notícias', href: 'https://blog.buligonadvogados.adv.br/' },
    { label: 'Contato', href: '/contato' },
  ],
};

export type SiteConfig = typeof siteConfig;

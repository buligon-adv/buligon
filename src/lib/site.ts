/**
 * Configurações globais do site
 */

export const siteConfig = {
  name: 'Buligon Advogados',
  description: 'Escritório especializado em direito público, administrativo e tributário com foco em segurança jurídica e atuação estratégica.',
  url: 'https://buligonadvogados.adv.br',
  author: 'Buligon Advogados',
  
  // Contato
  whatsapp: '+554130154161', 
  email: 'contato@buligonadvogados.adv.br',
  phone: '+554130154161',
  
  // Endereço
  address: {
    street: 'Rua Professor Macedo Filho, nº 315, Bom Retiro',
    city: 'Curitiba',
    state: 'PR',
    zipCode: '80.520-340',
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
  
  // Menu
  navigation: [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Áreas', href: '/areas' },
    { label: 'Equipe', href: '/equipe' },
    { label: 'Contato', href: '/contato' },
  ],
};

export type SiteConfig = typeof siteConfig;

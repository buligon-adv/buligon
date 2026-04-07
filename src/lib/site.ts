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
    instagram: 'https://www.instagram.com/buligonadvogados/?hl=pt-br',
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
    { 
      label: 'O Escritório', 
      href: '/sobre',
      submenu: [
        { label: 'O Escritório', href: '/sobre' },
        { label: 'Equipe', href: '/equipe' },
      ]
    },
    { 
      label: 'Áreas de Atuação', 
      href: '/areas',
      submenu: [
        { label: 'Atendimento às Empresas', href: '/areas#empresas' },
        { label: 'Agentes Públicos e Políticos', href: '/areas#agentes-publicos' },
        { label: 'Soluções Pessoais', href: '/areas#pessoal' },
      ]
    },
    { label: 'Contato', href: '/contato' },
  ],
};

export type SiteConfig = typeof siteConfig;

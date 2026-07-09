import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import ImageCarousel from '@/components/ImageCarousel';
import { siteConfig } from '@/lib/site';
import { generateMetadata } from '@/lib/seo';
import TeamAccordion from '@/components/TeamAccordion';

export const metadata: Metadata = generateMetadata({
  title: 'O Escritório',
  description: 'Buligon Advogados - Mais de 20 anos transformando desafios jurídicos em conquistas sólidas.',
});

interface TeamMember {
  name: string;
  oab: string;
  role: string;
  bio: string;
  specialties: string[];
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Vinícius Buligon',
    oab: 'OAB/PR 36.636',
    role: 'Advogado Sócio-Fundador',
    bio: 'Advogado com atuação há mais de 23 anos nas áreas de Direito Administrativo, Constitucional, Cível, Empresarial e Eleitoral, no segmento consultivo e contencioso, com destaque em recursos aos Tribunais Superiores.\n\nNo Direito Público, atua em questões relacionadas ao controle externo da Administração Pública, incluindo processos perante Tribunais de Contas, contratos administrativos e ações de responsabilização de agentes públicos e particulares, especialmente em ações de improbidade administrativa e ressarcimento.\n\nNo Direito Privado, assessora pessoas e empresas na proteção de patrimônio, na elaboração de contratos e na resolução de conflitos, atuando tanto na prevenção de riscos jurídicos quanto na defesa de interesses em litígios judiciais e negociações extrajudiciais.\n\nAtua em demandas consultivas e contenciosas do Direito Eleitoral, com ênfase no processo de prestação de contas eleitorais, assessorando candidatos, partidos políticos e agentes públicos na regularidade dos procedimentos perante a Justiça Eleitoral.\n\nFoi consultor jurídico de Municípios e Câmaras Legislativas e desempenhou atividades de assessor jurídico junto à Coordenadoria de Serviços Especiais, Comissão de Orçamento e Primeira Secretaria da Assembleia Legislativa do Estado do Paraná.\n\nEspecialista em Direito Constitucional pela Academia Brasileira de Direito Constitucional (ABDConst) e em Direito Administrativo pelo Instituto Romeu Felipe Bacellar.',
    specialties: ['Direito Administrativo', 'Direito Eleitoral', 'Controle Externo', 'Improbidade Administrativa'],
    image: '/Dr.%20Vin%C3%ADcius.jpeg'
  },
  {
    name: 'Dr. Diego Buligon',
    oab: 'OAB/PR 41.074',
    role: 'Advogado Sócio-Fundador',
    bio: 'Advogado com mais de 20 anos de experiência, atua no contencioso e no consultivo nas áreas de Direito Administrativo, Tributário e Eleitoral. Sua prática abrange ações de improbidade administrativa e ressarcimento, assessoria em licitações e contratos, e representação perante órgãos de controle.\n\nNo Direito Eleitoral, atua em campanhas desde 2008, com assessoria jurídica que vai da pré-campanha ao contencioso eleitoral, com ênfase em ações de cassação de mandato e representações eleitorais.\n\nSua trajetória inclui atuação como Assessor Técnico na Câmara dos Deputados, Procurador Municipal e Diretor-Geral em Secretaria de Estado, além de membro de conselho em entidade da administração indireta estadual, experiência que lhe confere visão estratégica integrada entre o setor público e a advocacia privada.\n\nMestre em Planejamento e Governança Pública pela Universidade Tecnológica Federal do Paraná (UTFPR), Especialista em Direito Administrativo pelo Instituto Romeu Felipe Bacellar e em Direito e Processo Tributário pela Academia Brasileira de Direito Constitucional (ABDConst). Atualmente, é membro do Instituto Paranaense de Direito Eleitoral (IPRADE) e da Comissão de Direito Eleitoral da OAB/PR.',
    specialties: ['Direito Administrativo', 'Direito Tributário', 'Direito Eleitoral', 'Licitações'],
    image: '/Dr.%20Diego%20Buligon.jpg'
  },
  {
    name: 'Dr. Afonso Ricardo Ribeiro',
    oab: 'OAB/PR 86.779',
    role: 'Advogado Associado',
    bio: 'Advogado com atuação no contencioso cível e empresarial, com experiência em Direito Administrativo, incluindo demandas judiciais e administrativas envolvendo a Administração Pública e processos de controle externo perante os Tribunais de Contas.\n\nNo Direito Eleitoral, atua em representações eleitorais e ações de investigação judicial eleitoral (AIJE), com foco em abuso de poder econômico e político, além de consultoria preventiva a candidatos e partidos.\n\nDesempenhou as funções de Subprocurador e Diretor Jurídico Municipal e Assessor na Assembleia Legislativa do Estado do Paraná.\n\nEspecialista em Direito Constitucional pela Academia Brasileira de Direito Constitucional (ABDConst) e em Direito Tributário pela Faculdade IBMEC São Paulo. Atualmente é membro do Instituto Paranaense de Direito Eleitoral (IPRADE) e da Comissão de Direito Eleitoral da OAB/PR.',
    specialties: ['Contencioso Cível', 'Direito Empresarial', 'Direito Eleitoral', 'Controle Externo'],
    image: '/Dr.%20Afonso.jpeg'
  },
];

const stats = [
  { number: '20+', label: 'Anos de atuação' },
  { number: '1000+', label: 'Casos resolvidos' },
  { number: '100%', label: 'Sigilo garantido' },
];

const estruturaImages = [
  { src: '/Estrutura Buligon 01.jpg', alt: 'Escritório Buligon - Recepção' },
  { src: '/Estrutura Buligon 02.jpg', alt: 'Escritório Buligon - Sala de Reuniões' },
  { src: '/Estrutura Buligon 03.jpg', alt: 'Escritório Buligon - Ambiente' },
  { src: '/Estrutura Buligon 04.jpg', alt: 'Escritório Buligon - Detalhes' },
  { src: '/Estrutura Buligon 05.jpg', alt: 'Escritório Buligon - Espaço' },
  { src: '/Estrutura Buligon 06.jpg', alt: 'Escritório Buligon - Infraestrutura' },
  { src: '/Estrutura Buligon 07.jpg', alt: 'Escritório Buligon - Vista' },
];

export default function SobrePage() {
  return (
    <>
      <Hero
        title="O Escritório"
        subtitle="Onde o comum termina, começa o nosso trabalho."
        backgroundImage="/Estrutura Buligon 01.jpg"
        overlayOpacity="bg-navy/60"
      />

      {/* NOSSA HISTÓRIA - Design Redesenhado */}
      <Section className="relative overflow-hidden">
        {/* Detalhe Decorativo de Fundo */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-50 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Texto superior */}
          <div className="max-w-2xl mb-16 space-y-8">
            <div className="space-y-4">
              <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold block">Legado e Estratégia</span>
              <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
                Buligon <span className="italic text-bronze text-3xl sm:text-4xl align-middle">Advogados.</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                Com uma trajetória que já soma mais de duas décadas de atuação, Buligon Advogados consolidou um legado de soluções jurídicas estratégicas e resultados consistentes. Nossa credibilidade é forjada em anos de dedicação ao atendimento de agentes públicos, políticos e empresas, oferecendo um suporte jurídico robusto e proativo que antecipa desafios e otimiza oportunidades.
              </p>
              <p className="border-l-4 border-bronze pl-8 italic">
                "Quando muitos encerram, nós vamos além. Esta é premissa que guia o Buligon Advogados desde a sua fundação."
              </p>
            </div>
          </div>

          {/* Cards lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-bronze/20 transition-all duration-500">
              <div className="absolute top-0 left-0 w-1 h-0 bg-bronze group-hover:h-full transition-all duration-700" />
              <h3 className="text-2xl font-semibold text-navy mb-8 flex items-center gap-4">
                <span className="text-bronze italic font-serif text-3xl">01</span>
                Nossa Essência
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-base">
                <p>
                  Compreendemos a complexidade de cada caso e adaptamos nossas estratégias para oferecer soluções jurídicas personalizadas, que unem a singularidade de cada cliente, visão prática e rigor técnico, contribuindo para resultados seguros e eficientes.
                </p>
                <p>
                  Acreditamos que uma advocacia eficaz vai além da técnica jurídica, ela se constrói na base de relacionamentos sólidos e de confiança mútua. No Buligon Advogados, todo cliente é um parceiro estratégico cujo sucesso é nossa maior medida de êxito.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-bronze/20 transition-all duration-500">
              <div className="absolute top-0 left-0 w-1 h-0 bg-bronze group-hover:h-full transition-all duration-700" />
              <h3 className="text-2xl font-semibold text-navy mb-8 flex items-center gap-4">
                <span className="text-bronze italic font-serif text-3xl">02</span>
                Atuação Estratégica
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed font-light text-base">
                <p>
                  Atuamos onde a exigência é maior: em cenários que pedem prudência, precisão, discrição e preparo. Cada demanda é tratada com método, profundidade e contexto — porque a solução jurídica não pode ser apenas correta; ela precisa ser adequada ao risco, ao tempo e ao objetivo de quem confia no nosso trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ESTRUTURA */}
      <Section id="estrutura" backgroundColor="bg-white">
        {/* Linha superior: texto + foto fixa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-12">
          <div className="relative animate-fadeInUp">
            <span className="text-bronze uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Nossa Sede</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-navy mb-10 leading-[1.2] tracking-tight">
              Ambiente <span className="text-bronze italic">Moderno</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Nosso escritório foi projetado para oferecer um ambiente sofisticado e acolhedor, onde cada detalhe reflete o compromisso com a excelência. Salas de reunião equipadas, espaços privativos e infraestrutura completa para atender com conforto e discrição.
              </p>
            </div>
          </div>

          {/* Foto fixa da fachada */}
          <div className="relative animate-fadeInUp delay-300">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-bronze/60" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-bronze/60" />
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
              <Image
                src="/Estrutura Buligon 07.jpg"
                alt="Fachada Buligon Advogados"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Galeria de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 animate-fadeInUp delay-200">
          {[
            { src: '/Estrutura Buligon 01.jpg', alt: 'Escritório Buligon 01' },
            { src: '/Estrutura Buligon 02.jpg', alt: 'Escritório Buligon 02' },
            { src: '/Estrutura Buligon 03.jpg', alt: 'Escritório Buligon 03' },
            { src: '/Estrutura Buligon 04.jpg', alt: 'Escritório Buligon 04' },
            { src: '/Estrutura Buligon 05.jpg', alt: 'Escritório Buligon 05' },
            { src: '/Estrutura Buligon 06.jpg', alt: 'Escritório Buligon 06' },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* EQUIPE MIGRADA - Novo Bloco */}
      <Section id="equipe">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold block">Equipe</span>
              <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
                Comprometimento com a <span className="italic text-bronze">Justiça</span> e a Excelência
              </h2>
            </div>
            <p className="text-gray-500 text-base max-w-md font-light border-l border-bronze/30 pl-6 mb-2">
              A união entre solidez acadêmica e vasta experiência prática define nossa abordagem técnica e personalizada.
            </p>
          </div>

          <TeamAccordion members={teamMembers} />
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-semibold text-navy">
              Pronto para uma <span className="italic text-bronze">atuação estratégica?</span>
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              Nossa equipe está preparada para analisar as nuances do seu caso com o rigor técnico que a alta complexidade exige.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-navy text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-navy/90 transition-all flex items-center justify-center gap-3 group"
              >
                <svg className="w-5 h-5 text-bronze group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

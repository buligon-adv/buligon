import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import HeroSlider from '@/components/HeroSlider';
import Section from '@/components/Section';
import PracticeAreasGrid from '@/components/PracticeAreasGrid';
import ImageCarousel from '@/components/ImageCarousel';
import { NewsSection } from '@/components/NewsSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import StatCounter from '@/components/StatCounter';
import { siteConfig } from '@/lib/site';
import { getFeaturedAreas } from '@/lib/areas';
import { posts } from '@/lib/posts';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Consultoria Jurídica Estratégica',
  description: siteConfig.description,
});

const faqItems = [
  {
    question: 'Como solicitar uma consulta jurídica?',
    answer:
      'Você pode entrar em contato através do WhatsApp, telefone ou formulário de contato no site. Agendamos uma consulta conforme sua disponibilidade para entender o seu caso em profundidade.',
  },
  {
    question: 'Qual é a primeira etapa de um atendimento?',
    answer:
      'A primeira etapa é uma consultoria inicial para compreender sua situação, necessidades e objetivos. Nesta fase apresentamos um diagnóstico preliminar e propomos a melhor estratégia.',
  },
  {
    question: 'Vocês trabalham com órgãos públicos e empresas privadas?',
    answer:
      'Sim. Nossa equipe possui experiência em ambos os contextos, com especialização em questões que envolvem entidades públicas e setores privados regulados.',
  },
  {
    question: 'Como funciona a confidencialidade e sigilo profissional?',
    answer:
      'O sigilo profissional é absoluto e garantido por lei. Todas as informações compartilhadas são mantidas em total confidencialidade, sem exceções.',
  },
];

export default function Home() {
  const featuredAreas = getFeaturedAreas().slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Slider */}
      <HeroSlider
        slides={[
          {
            title: "Soluções Jurídicas",
            subtitle: "Experiência, expertise e compromisso que transformam desafios jurídicos em conquistas sólidas.",
            backgroundImage: "/Banner%20Soluções%20Jurídicas%20Buligon.jpg",
            cta: {
              label: 'Soluções Jurídicas',
              href: '/areas',
            }
          },
          {
            title: "Direito Eleitoral",
            subtitle: "Campanhas eleitorais exigem estratégia jurídica e decisão rápida. Do planejamento ao pós-eleição: segurança em cada fase.",
            backgroundImage: "/Banner%2006%20Buligon%20Urna%20Eletrônica.jpg",
            cta: {
              label: 'Entenda nossa atuação',
              href: '/contato',
            }
          },
          {
            title: "Técnica que Sustenta",
            subtitle: "Quando muitos encerram, nós vamos além.",
            backgroundImage: "/Banner%20Técnica%20que%20Sustenta%20Buligon.jpg",
            cta: {
              label: 'Saiba mais sobre o escritório',
              href: '/sobre',
            }
          }
        ]}
      />

      {/* Seção Apresentação / Manifesto */}
      <Section backgroundColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative animate-fadeInUp">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bronze/5 rounded-full blur-3xl opacity-50" />
            <span className="text-bronze uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">O Escritório</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-navy mb-10 leading-[1.2] tracking-tight relative">
              Compromisso com a <span className="text-bronze italic">Justiça</span> e a <span className="text-bronze italic">Estratégia</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Com uma trajetória que já soma mais de duas décadas de atuação, Buligon Advogados consolidou um legado de soluções jurídicas estratégicas e resultados consistentes. Nossa credibilidade é forjada em anos de dedicação ao atendimento de agentes públicos, políticos e empresas, oferecendo um suporte jurídico robusto e proativo que antecipa desafios e otimiza oportunidades.
              </p>
              <div className="pt-6">
                <a 
                  href="/sobre" 
                  className="group inline-flex items-center text-navy font-bold uppercase tracking-[0.2em] text-xs hover:text-bronze transition-colors duration-300"
                >
                  <span className="relative">
                    Saiba mais
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg 
                    className="ml-3 w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div className="animate-fadeInUp delay-100">
                <span className="block text-4xl font-sans font-semibold text-bronze mb-1">
                  <StatCounter end={20} suffix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy opacity-50">Anos de Experiência</span>
              </div>
              <div className="animate-fadeInUp delay-200">
                <span className="block text-4xl font-sans font-semibold text-bronze mb-1">
                  <StatCounter end={1000} suffix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy opacity-50">Demandas Resolvidas</span>
              </div>
            </div>
          </div>

          {/* Carrossel de Estrutura ao lado */}
          <div className="relative animate-fadeInUp delay-300">
            {/* Design Minimalista e Sofisticado - Linhas de precisão */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-bronze/60" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-bronze/60" />
            
            <div className="rounded-sm overflow-hidden border border-gray-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
              <ImageCarousel 
                images={[
                  { src: "/Estrutura Buligon 07.jpg", alt: "Fachada Buligon Advogados" },
                  { src: "/Estrutura Buligon 01.jpg", alt: "Interior Buligon Advogados 01" },
                  { src: "/Estrutura Buligon 02.jpg", alt: "Interior Buligon Advogados 02" },
                  { src: "/Estrutura Buligon 03.jpg", alt: "Interior Buligon Advogados 03" },
                  { src: "/Estrutura Buligon 04.jpg", alt: "Interior Buligon Advogados 04" },
                  { src: "/Estrutura Buligon 05.jpg", alt: "Interior Buligon Advogados 05" },
                  { src: "/Estrutura Buligon 06.jpg", alt: "Interior Buligon Advogados 06" },
                ]}
                autoPlay={true}
                interval={4000}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Áreas em Destaque */}
      <Section backgroundColor="bg-gray-50/50" className="border-y border-gray-100 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Áreas de Atuação</span>
            <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
              Soluções Jurídicas <br /><span className="italic text-bronze">Estratégicas e Pessoais</span>
            </h2>
          </div>
          <a href="/areas" className="group flex items-center gap-3 text-navy font-bold uppercase tracking-widest text-[10px] pb-2 border-b-2 border-bronze hover:gap-5 transition-all">
            Ver todas as áreas
          </a>
        </div>
        <div className="animate-fadeInUp delay-200">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t md:border-l border-gray-100 overflow-hidden">
            {[
              {
                id: 'empresas',
                title: 'Atendimento às Empresas',
                slug: 'empresas',
                description: 'Assessoria jurídica completa para empresas, com atuação estratégica, próxima e orientada à realidade de cada negócio, abrangendo as áreas cível e tributária, com ênfase na recuperação de ativos, obrigações contratuais, licitações e contratos públicos, atuação perante Tribunais de Contas, além de defesa em ações civis públicas e de improbidade administrativa. Com expertise consolidada e atuação singular, conduzimos cada caso com precisão técnica, antecipando riscos e mitigando responsabilizações, sempre voltados à proteção e à preservação da credibilidade e da solidez da empresa.'
              },
              {
                id: 'agentes-publicos',
                title: 'Agentes Públicos e Políticos',
                slug: 'agentes-publicos',
                description: 'Em um ambiente de controle rigoroso e constante exposição, oferecemos suporte jurídico estratégico e personalizado, com foco na defesa de gestores e servidores em ações civis públicas e de improbidade administrativa, além de atuação completa perante os Tribunais de Contas. Com mais de 20 anos de atuação, conduzimos cada demanda com abordagem técnica, discrição e atenção aos reflexos jurídicos e institucionais. No campo eleitoral, a atuação se desenvolve de forma específica, com experiência consolidada ao longo de diversas campanhas, considerando a dinâmica do processo eleitoral e a necessidade de decisões rápidas, seguras e alinhadas à realidade de cada cliente.'
              }
            ].map((area, index) => (
              <div key={area.id} className="group relative p-8 sm:p-12 h-full flex flex-col transition-all duration-500 bg-white border-b border-gray-100 md:border-b-0 md:border-r last:border-r-0 hover:bg-navy hover:shadow-2xl">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-bronze font-sans font-semibold text-2xl group-hover:text-white/50 transition-colors duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="w-10 h-px bg-bronze/30 group-hover:w-16 group-hover:bg-bronze transition-all duration-700" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-semibold mb-6 text-navy group-hover:text-white transition-colors duration-500 leading-tight">
                  {area.title}
                </h3>
                
                <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500 mb-10 text-[16px] leading-[1.8] font-light">
                  {area.description}
                </p>

                <div className="mt-auto pt-4 flex items-center text-xs uppercase tracking-widest font-bold text-bronze group-hover:text-white transition-colors duration-500">
                  <a href={`/areas`} className="flex items-center">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-bronze group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Seção de Notícias */}
      <Section backgroundColor="bg-gray-50" id="noticias">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-bronze uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Blog & Atualidades</span>
            <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
              Notícias e Insights <br />
              <span className="text-bronze italic">Jurídicos</span>
            </h2>
          </div>
          <a 
            href="/noticias" 
            className="group flex items-center gap-3 text-navy font-bold text-[10px] uppercase tracking-widest hover:text-bronze transition-colors"
          >
            Ver todas as publicações
            <div className="w-10 h-px bg-navy/20 group-hover:bg-bronze transition-colors" />
          </a>
        </div>

        <NewsSection posts={posts.slice(0, 3)} />
      </Section>

      {/* CTA final */}
      <CTA />
    </div>
  );
}

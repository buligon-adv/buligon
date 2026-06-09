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
              href: '/#areas-de-atuacao',
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
        {/* Linha superior: texto + foto fachada */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-12">
          <div className="relative animate-fadeInUp">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bronze/5 rounded-full blur-3xl opacity-50" />
            <span className="text-bronze uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">O Escritório</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-navy mb-10 leading-[1.2] tracking-tight relative">
              Técnica que sustenta. <span className="text-bronze italic">Estratégia que diferencia.</span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 animate-fadeInUp delay-200">
          {[
            { src: "/Estrutura Buligon 01.jpg", alt: "Interior Buligon Advogados 01" },
            { src: "/Estrutura Buligon 02.jpg", alt: "Interior Buligon Advogados 02" },
            { src: "/Estrutura Buligon 04.jpg", alt: "Interior Buligon Advogados 04" },
            { src: "/Estrutura Buligon 05.jpg", alt: "Interior Buligon Advogados 05" },
            { src: "/Estrutura Buligon 06.jpg", alt: "Interior Buligon Advogados 06" },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Áreas em Destaque */}
      <Section id="areas-de-atuacao" backgroundColor="bg-[#F5F0EA]">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold">/ Áreas de Atuação</span>
          <a href="/areas" className="group flex items-center gap-2 text-navy font-bold uppercase tracking-widest text-[10px] hover:text-bronze transition-colors">
            Áreas de Atuação
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        <div className="divide-y divide-bronze/20 border-t border-bronze/20 animate-fadeInUp delay-100">
          {[
            {
              id: 'empresas',
              title: 'Atendimento às Empresas',
              description: 'Assessoria jurídica completa para empresas, com atuação estratégica, próxima e orientada à realidade de cada negócio, abrangendo as áreas cível e tributária, com ênfase na recuperação de ativos, obrigações contratuais, licitações e contratos públicos, atuação perante Tribunais de Contas, além de defesa em ações civis públicas e de improbidade administrativa. Com expertise consolidada e atuação singular, conduzimos cada caso com precisão técnica, antecipando riscos e mitigando responsabilizações, sempre voltados à proteção e à preservação da credibilidade e da solidez da empresa.',
            },
            {
              id: 'agentes-publicos',
              title: 'Agentes Públicos e Políticos',
              description: 'Em um ambiente de controle rigoroso e constante exposição, oferecemos suporte jurídico estratégico e personalizado, com foco na defesa de gestores e servidores em ações civis públicas e de improbidade administrativa, além de atuação completa perante os Tribunais de Contas. Com mais de 20 anos de atuação, conduzimos cada demanda com abordagem técnica, discrição e atenção aos reflexos jurídicos e institucionais. No campo eleitoral, a atuação se desenvolve de forma específica, com experiência consolidada ao longo de diversas campanhas, considerando a dinâmica do processo eleitoral e a necessidade de decisões rápidas, seguras e alinhadas à realidade de cada cliente.',
            },
            {
              id: 'pessoal',
              title: 'Soluções Pessoais e Patrimoniais',
              description: 'Atuação jurídica direcionada à pessoa física, com foco na proteção patrimonial e na segurança das relações privadas. Oferecemos suporte em inventários e planejamento sucessório, elaboração e revisão de contratos, regularização de bens, além de atuação em cobranças, execuções e questões obrigacionais. Com abordagem técnica e estratégica, mitigamos riscos, buscando soluções eficazes para preservação do patrimônio e estabilidade nas decisões pessoais.',
            },
            {
              id: 'eleitoral',
              title: 'Eleitoral',
              description: 'O desejo de concorrer a uma eleição vai muito além de uma candidatura, é um projeto que envolve história, propósito e uma trajetória que precisa ser protegida em cada etapa. Em um ambiente jurídico rigoroso e dinâmico, decisões equivocadas ou a ausência de orientação especializada podem comprometer não apenas o resultado das urnas, mas toda uma trajetória política. Há duas décadas atuando em campanhas eleitorais, desenvolvemos uma atuação próxima, estratégica e personalizada, entendendo que cada cliente, cada campanha e cada cenário exigem soluções próprias, não modelos prontos.',
            },
          ].map((area) => (
            <div key={area.id} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-10 md:py-12 items-start">
              <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-navy leading-tight">
                {area.title}
              </h3>
              <div>
                <p className="text-gray-600 text-[15px] leading-[1.8] font-light mb-6">
                  {area.description}
                </p>
                <a href="/areas" className="group/link inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-navy hover:text-bronze transition-colors">
                  Saiba mais
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Seção de Notícias */}
      <Section backgroundColor="bg-gray-50" id="noticias">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-bronze uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Blog & Atualidades</span>
            <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
              Notícias
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

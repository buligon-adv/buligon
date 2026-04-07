import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import HeroSlider from '@/components/HeroSlider';
import Section from '@/components/Section';
import PracticeAreasGrid from '@/components/PracticeAreasGrid';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import StatCounter from '@/components/StatCounter';
import { siteConfig } from '@/lib/site';
import { getFeaturedAreas } from '@/lib/areas';
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
            backgroundImage: "/Banner%2001%20Buligon.jpg",
            cta: {
              label: 'Falar com Especialista',
              href: siteConfig.social.whatsapp,
            },
            secondaryCta: {
              label: 'Ver Áreas',
              href: '/areas',
            }
          },
          {
            title: "Direito Eleitoral",
            subtitle: "Campanhas eleitorais exigem estratégia jurídica e decisão rápida. Do planejamento ao pós-eleição: segurança em cada fase.",
            backgroundImage: "/Banner%2006%20Buligon%20Urna%20Eletrônica.jpg",
            cta: {
              label: 'Falar com Especialista',
              href: siteConfig.social.whatsapp,
            },
            secondaryCta: {
              label: 'Conhecer Atuação',
              href: '/area/direito-eleitoral',
            }
          },
          {
            title: "Técnica que Sustenta",
            subtitle: "Estratégia que diferencia. Em cenários críticos, não recuamos — estruturamos. Onde o comum termina, começa o nosso trabalho.",
            backgroundImage: "/Banner%2003%20Buligon.jpg",
            cta: {
              label: 'Consultoria Especializada',
              href: siteConfig.social.whatsapp,
            },
            secondaryCta: {
              label: 'Conheça o Escritório',
              href: '/sobre',
            }
          }
        ]}
      />

      {/* Seção Apresentação / Manifesto */}
      <Section backgroundColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1 animate-fadeInUp">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bronze/5 rounded-full blur-3xl" />
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">Sobre o Escritório</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-navy mb-8 leading-[1.2] tracking-tight relative">
              Compromisso com a <span className="text-bronze italic">Justiça</span> e a <span className="text-bronze italic">Estratégia</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                No Buligon Advogados, entendemos que o Direito é a base para o crescimento seguro e a proteção de direitos fundamentais.
              </p>
              <p>
                Nossa atuação é pautada pela ética inegociável e por um entendimento profundo dos mecanismos administrativos, oferecendo soluções que antecipam riscos.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div className="animate-fadeInUp delay-100">
                <span className="block text-4xl font-sans font-semibold text-bronze mb-2">
                  <StatCounter end={20} suffix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-navy-light opacity-60">Anos de Experiência</span>
              </div>
              <div className="animate-fadeInUp delay-200">
                <span className="block text-4xl font-sans font-semibold text-bronze mb-2">
                  <StatCounter end={1000} suffix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-navy-light opacity-60">Demandas Resolvidas</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 px-4 lg:px-0 animate-fadeInUp delay-300">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl group relative">
              <Image
                src="/Estrutura Buligon 01.jpg"
                alt="Escritório Buligon Advogados"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
            {/* Floating text for larger screens */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 border-l border-b border-gray-100 hidden sm:block shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] max-w-xs z-30">
               <div className="w-8 h-8 text-bronze mb-4">
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.017 16V13H12.017C13.1216 13 14.017 12.1046 14.017 11V8L14.017 5L20.017 5L20.017 21L14.017 21ZM4.0166 21V5L10.0166 5L10.0166 11H7.0166V16H10.0166V21L4.0166 21Z"/></svg>
               </div>
               <p className="font-sans italic font-semibold text-navy leading-relaxed text-sm">"A segurança jurídica é o alicerce indispensável de qualquer conquista sustentável."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Áreas em Destaque */}
      <Section backgroundColor="bg-gray-50/50" className="border-y border-gray-100 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Especialidades</span>
            <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
              Nossa Expertise em <br /><span className="italic text-bronze">Direito Público</span>
            </h2>
          </div>
          <a href="/areas" className="group flex items-center gap-3 text-navy font-bold uppercase tracking-widest text-[10px] pb-2 border-b-2 border-bronze hover:gap-5 transition-all">
            Ver todas as áreas
          </a>
        </div>
        <div className="animate-fadeInUp delay-200">
          <PracticeAreasGrid areas={featuredAreas} columns={4} />
        </div>
      </Section>

      {/* Diferenciais */}
      <Section backgroundColor="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Processo</span>
          <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy mb-6">Excelência que gera confiança</h2>
          <div className="w-24 h-px bg-bronze/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {[
            {
              title: "Atendimento Tailored",
              desc: "Soluções personalizadas desenhadas sob medida para cada cliente e situação específica.",
              icon: "01"
            },
            {
              title: "Visão Estratégica",
              desc: "Não apenas resolvemos problemas, antecipamos cenários para evitar litígios futuros.",
              icon: "02"
            },
            {
              title: "Foco em Resultados",
              desc: "Comprometimento total com a entrega de resultados que impactam positivamente a vida do cliente.",
              icon: "03"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col group relative">
              <span className="text-8xl font-sans font-semibold text-gray-50 group-hover:text-bronze/10 transition-colors duration-500 absolute -translate-y-12 -translate-x-4 pointer-events-none">
                {item.icon}
              </span>
              <h3 className="text-xl font-sans font-semibold text-navy mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Por que escolher o Buligon Advogados? */}
      <div className="bg-navy py-12 sm:py-24 relative overflow-hidden">
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bronze/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        
        <Section backgroundColor="bg-transparent" className="py-0 sm:py-0 relative z-10">
          <div className="max-w-4xl mb-20">
            <span className="text-bronze uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block animate-fadeIn">Excelência Institucional</span>
            <h2 className="text-3xl sm:text-5xl font-sans font-semibold text-white leading-tight">
              Diferenciais que definem nossa <br />
              <span className="text-bronze italic">atuação estratégica</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              {
                title: "Tradição e Modernidade",
                desc: "Equilíbrio entre a experiência de décadas com a agilidade das novas ferramentas jurídicas.",
                number: "01"
              },
              {
                title: "Consultoria Preventiva",
                desc: "Análise antecipada de riscos para evitar litígios e garantir a continuidade do seu projeto.",
                number: "02"
              },
              {
                title: "Alinhamento de Valor",
                desc: "Entendimento profundo das necessidades do cliente para entregar soluções reais e tangíveis.",
                number: "03"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative pt-10 border-t border-white/10 hover:border-bronze/50 transition-colors duration-500">
                <span className="absolute top-0 left-0 text-[10px] uppercase tracking-widest font-bold text-bronze py-2 px-1">
                  {item.number}
                </span>
                <h3 className="text-xl sm:text-white font-sans font-semibold text-white mb-4 group-hover:text-bronze transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="mt-8 w-8 h-px bg-bronze/20 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <Section backgroundColor="bg-white" id="faq">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">FAQ</span>
            <h2 className="text-4xl font-sans font-semibold text-navy mb-6">Dúvidas Frequentes</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Compilamos as principais dúvidas para ajudar você a entender melhor como funciona nosso atendimento e as particularidades do Direito Público.
            </p>
            <a href={siteConfig.social.whatsapp} className="inline-block px-8 py-3 bg-navy text-white text-[10px] uppercase tracking-widest font-bold hover:bg-bronze transition-colors">
              Falar com Especialista
            </a>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqItems} />
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <CTA />
    </div>
  );
}

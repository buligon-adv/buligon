import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import PracticeAreasGrid from '@/components/PracticeAreasGrid';
import Testimonials from '@/components/Testimonials';
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
      'Você pode entrar em contato através do WhatsApp, telefone ou formulário de contato no site. Respondemos todas as solicitações em até 24 horas e agendamos uma consulta conforme sua disponibilidade.',
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
  const featuredAreas = getFeaturedAreas().slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <Hero
        title="Excelência Jurídica em Cada Detalhe"
        subtitle="Consultoria estratégica especializada em Direito Público e Administrativo. Transformamos complexidade em segurança jurídica."
        cta={{
          label: 'Consultoria Especializada',
          href: siteConfig.social.whatsapp,
        }}
        secondaryCta={{
          label: 'Conheça o Escritório',
          href: '/sobre',
        }}
      />

      {/* Seção Apresentação / Manifesto */}
      <Section backgroundColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1 animate-fadeInUp">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bronze/5 rounded-full blur-3xl" />
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Sobre o Escritório</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy mb-8 leading-[1.2] relative">
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
                <span className="block text-4xl font-serif text-bronze mb-2">
                  <StatCounter end={15} suffix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-navy-light opacity-60">Anos de Experiência</span>
              </div>
              <div className="animate-fadeInUp delay-200">
                <span className="block text-4xl font-serif text-bronze mb-2">
                  <StatCounter end={1000} suffix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-navy-light opacity-60">Demandas Resolvidas</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 px-4 lg:px-0 animate-fadeInUp delay-300">
            <div className="aspect-[4/5] bg-navy-light rounded-sm overflow-hidden shadow-2xl group flex items-center justify-center relative">
              <div className="absolute inset-0 bg-bronze/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-navy-light)_0%,_#0C1F40_100%)] opacity-80" />
              <div className="relative z-20 text-center p-12">
                <div className="w-20 h-px bg-bronze mx-auto mb-8" />
                <h3 className="text-white font-serif italic text-3xl mb-4">Buligon Advogados</h3>
                <p className="text-bronze font-sans uppercase tracking-[0.2em] text-[10px] font-bold">Consultoria Jurídica de Alto Padrão</p>
              </div>
            </div>
            {/* Floating text for larger screens */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 border-l border-b border-gray-100 hidden sm:block shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] max-w-xs z-30">
               <div className="w-8 h-8 text-bronze mb-4">
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.017 16V13H12.017C13.1216 13 14.017 12.1046 14.017 11V8L14.017 5L20.017 5L20.017 21L14.017 21ZM4.0166 21V5L10.0166 5L10.0166 11H7.0166V16H10.0166V21L4.0166 21Z"/></svg>
               </div>
               <p className="font-serif italic text-navy leading-relaxed text-sm">"A segurança jurídica é o alicerce indispensável de qualquer conquista sustentável."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Áreas em Destaque */}
      <Section backgroundColor="bg-gray-50/50" className="border-y border-gray-100 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Especialidades</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-navy leading-tight">
              Nossa Expertise em <br /><span className="italic text-bronze">Direito Público</span>
            </h2>
          </div>
          <a href="/areas" className="group flex items-center gap-3 text-navy font-bold uppercase tracking-widest text-[10px] pb-2 border-b-2 border-bronze hover:gap-5 transition-all">
            Ver todas as áreas
          </a>
        </div>
        <div className="animate-fadeInUp delay-200">
          <PracticeAreasGrid areas={featuredAreas} columns={3} />
        </div>
      </Section>

      {/* Diferenciais */}
      <Section backgroundColor="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Processo</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-navy mb-6">Excelência que gera confiança</h2>
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
            <div key={idx} className="flex flex-col group">
              <span className="text-8xl font-serif text-gray-50 group-hover:text-bronze/10 transition-colors duration-500 absolute -translate-y-12 -translate-x-4 pointer-events-none">
                {item.icon}
              </span>
              <h3 className="text-xl font-serif text-navy mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <div className="bg-navy py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <Section backgroundColor="bg-transparent" className="py-0 sm:py-0">
          <Testimonials />
        </Section>
      </div>

      {/* FAQ */}
      <Section backgroundColor="bg-white" id="faq">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-bold mb-4 block">FAQ</span>
            <h2 className="text-4xl font-serif text-navy mb-6">Dúvidas Frequentes</h2>
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

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ImageCarousel from '@/components/ImageCarousel';
import { siteConfig } from '@/lib/site';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'O Escritório',
  description: 'Buligon Advogados - Mais de 20 anos transformando desafios jurídicos em conquistas sólidas.',
});

const stats = [
  { number: '20+', label: 'Anos de atuação' },
  { number: '1000+', label: 'Casos resolvidos' },
  { number: '100%', label: 'Sigilo garantido' },
];

const diferenciais = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Precisão Técnica',
    description: 'Soluções adequadas ao risco, tempo e objetivo.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Sigilo Absoluto',
    description: 'Discrição e confidencialidade em cada etapa.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Atuação Proativa',
    description: 'Antecipamos riscos antes que se tornem problemas.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Parceria Real',
    description: 'Seu sucesso é nossa medida de êxito.',
  },
];

const metodo = [
  { step: '01', title: 'Escuta', description: 'Entendemos seu cenário e objetivos' },
  { step: '02', title: 'Diagnóstico', description: 'Mapeamos riscos e oportunidades' },
  { step: '03', title: 'Estratégia', description: 'Definimos a melhor abordagem' },
  { step: '04', title: 'Execução', description: 'Atuamos com precisão e agilidade' },
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
        cta={{
          label: 'Agendar Consultoria',
          href: siteConfig.social.whatsapp
        }}
        secondaryCta={{
          label: 'Áreas de Atuação',
          href: '/areas'
        }}
      />

      {/* PROVA DE AUTORIDADE - NÚMEROS */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="py-12 lg:py-16 text-center">
                <span className="block text-4xl lg:text-5xl font-semibold text-navy mb-2">{stat.number}</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSA HISTÓRIA - Design Redesenhado */}
      <Section className="relative overflow-hidden">
        {/* Detalhe Decorativo de Fundo */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-50 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Coluna de Título e Intenção */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div className="space-y-4">
                <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold block">Legado e Estratégia</span>
                <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
                  Advocacia para quem <span className="italic text-bronze text-3xl sm:text-4xl align-middle">não pode errar.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed">
                <p className="border-l-4 border-bronze pl-8 italic">
                  "Onde o comum termina, começa o nosso trabalho. Esta é a premissa que guia o Buligon Advogados desde sua fundação."
                </p>
                <p>
                  Com mais de 20 anos de trajetória, consolidamos uma atuação marcada pelo rigor técnico e pela busca incansável por soluções jurídicas que transcendem o óbvio.
                </p>
              </div>

              {/* Selo de Confidencialidade */}
              <div className="pt-8 flex items-center gap-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-navy flex items-center justify-center">
                  <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-navy font-bold text-xs uppercase tracking-widest">Sigilo Absoluto</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">Protocolo de Confidencialidade Garantido</span>
                </div>
              </div>
            </div>

            {/* Coluna de Conteúdo Detalhado */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-12">
              <div className="bg-gray-50 p-10 lg:p-16 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-bronze/20 transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-0 bg-bronze group-hover:h-full transition-all duration-700" />
                <h3 className="text-2xl font-semibold text-navy mb-8 flex items-center gap-4">
                  <span className="text-bronze italic font-serif text-3xl">01</span>
                  Nossa Essência
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed font-light text-base lg:text-lg">
                  <p>
                    Acreditamos que cada caso é único e exige uma abordagem singular. Nossa estrutura foi desenhada para oferecer um atendimento personalizado, onde os sócios participam ativamente da estratégia de cada demanda.
                  </p>
                  <p>
                    Especializados em demandas complexas, atuamos na intersecção entre o Direito Público e as necessidades do setor corporativo e privado, mitigando riscos e antecipando cenários com precisão cirúrgica.
                  </p>
                </div>
              </div>

              <div className="bg-white p-10 lg:p-16 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-bronze/20 transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-0 bg-bronze group-hover:h-full transition-all duration-700" />
                <h3 className="text-2xl font-semibold text-navy mb-8 flex items-center gap-4">
                  <span className="text-bronze italic font-serif text-3xl">02</span>
                  Atuação Estratégica
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed font-light text-base lg:text-lg">
                  <p>
                    Nossa expertise permite transitar com autoridade perante Tribunais de Contas, órgãos de controle e instâncias superiores, oferecendo defesas robustas e pareceres de alta complexidade técnica.
                  </p>
                  <p>
                    O Buligon Advogados não apenas resolve conflitos; nós desenhamos caminhos seguros para que nossos clientes possam focar em seus objetivos institucionais e pessoais com total tranquilidade jurídica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* MÉTODO - Design de Alta Performance */}
      <Section backgroundColor="bg-navy" className="text-white overflow-hidden py-24 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Cabeçalho do Método */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold block">Rigores e Processos</span>
              <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
                Processo <br />
                <span className="italic text-bronze">Decisório</span>
              </h2>
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                Nossa atuação é pautada por um método rigoroso que transforma complexidade em clareza estratégica.
              </p>
            </div>

            {/* Grid de Passos */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                {metodo.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-navy p-10 lg:p-14 group hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Número Decorativo de Fundo */}
                    <span className="absolute -bottom-4 -right-2 text-8xl font-serif italic text-white/[0.03] group-hover:text-bronze/10 transition-colors pointer-events-none">
                      {item.step}
                    </span>
                    
                    <div className="relative z-10 space-y-4">
                      <span className="text-bronze font-serif italic text-2xl mb-4 block">{item.step}</span>
                      <h3 className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-bronze transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-8 h-px bg-bronze/50 group-hover:w-16 transition-all duration-500" />
                      <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS - Grid Moderno */}
      <Section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {diferenciais.map((item, index) => (
              <div key={index} className="space-y-6 py-6 border-b lg:border-b-0 lg:border-r border-gray-100 last:border-0 pr-8">
                <div className="text-bronze">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy uppercase tracking-widest">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ESTRUTURA */}
      <Section id="estrutura" backgroundColor="bg-gray-50" className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center mb-16">
          <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Nossa Sede</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy">Infraestrutura <span className="italic text-bronze">Premium</span></h2>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ImageCarousel images={estruturaImages} />
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
                Agendar Consultoria
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

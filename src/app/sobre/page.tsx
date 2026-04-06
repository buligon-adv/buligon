import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Estrutura Buligon 01.jpg"
            alt="Escritório Buligon Advogados"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent hidden lg:block" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">O Escritório</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Onde o comum termina,<br />
              <span className="text-bronze italic">começa o nosso trabalho.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Mais de duas décadas transformando desafios jurídicos complexos em conquistas sólidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-bronze text-white font-semibold uppercase tracking-wider text-sm hover:bg-bronze-light transition-all text-center"
              >
                Agendar Consultoria
              </a>
              <Link
                href="/areas"
                className="px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-navy transition-all text-center"
              >
                Áreas de Atuação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA DE AUTORIDADE - NÚMEROS */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="py-12 lg:py-16 text-center">
                <span className="block text-4xl lg:text-5xl font-semibold text-navy mb-2">{stat.number}</span>
                <span className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSA HISTÓRIA - TEXTO COMPLETO COM DESIGN PREMIUM */}
      <Section>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Quem Somos</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy leading-tight">
              Advocacia estratégica para quem não pode errar.
            </h2>
          </div>

          {/* Conteúdo em blocos */}
          <div className="space-y-16">
            {/* Bloco 1 - Intro com destaque */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative pl-8 border-l-2 border-bronze">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Com uma trajetória que já soma mais de duas décadas de atuação, <strong className="text-navy">Buligon Advogados</strong> consolidou um legado de soluções jurídicas estratégicas e resultados consistentes. Nossa credibilidade é forjada em anos de dedicação ao atendimento de agentes públicos, políticos e empresas, oferecendo um suporte jurídico robusto e proativo que antecipa desafios e otimiza oportunidades.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                  <Image
                    src="/Estrutura Buligon 02.jpg"
                    alt="Escritório"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bloco 2 - Destaque citação */}
            <div className="bg-navy rounded-lg p-10 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[200px] leading-none text-white/5 font-serif pointer-events-none select-none">
                "
              </div>
              <div className="relative z-10 max-w-3xl">
                <p className="text-white text-xl lg:text-2xl leading-relaxed font-light italic">
                  Atuamos onde a exigência é maior: em cenários que pedem prudência, precisão, discrição e preparo. Cada demanda é tratada com método, profundidade e contexto — porque a solução jurídica não pode ser apenas correta; ela precisa ser <span className="text-bronze font-semibold not-italic">adequada ao risco, ao tempo e ao objetivo</span> de quem confia no nosso trabalho.
                </p>
              </div>
            </div>

            {/* Bloco 3 - Texto com imagem invertida */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                  <Image
                    src="/Estrutura Buligon 03.jpg"
                    alt="Sala de reuniões"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Compreendemos a complexidade de cada caso e adaptamos nossas estratégias para oferecer soluções jurídicas personalizadas, que unem a singularidade de cada cliente, visão prática e rigor técnico, contribuindo para resultados seguros e eficientes.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Acreditamos que uma advocacia eficaz vai além da técnica jurídica, ela se constrói na base de relacionamentos sólidos e de confiança mútua. No Buligon Advogados, <strong className="text-navy">cada cliente é um parceiro estratégico</strong>. Para nós, o sucesso de nossos clientes é a nossa maior medida de êxito.
                </p>
              </div>
            </div>

            {/* Bloco 4 - Frase final destaque */}
            <div className="text-center py-8">
              <div className="inline-block">
                <div className="w-16 h-px bg-bronze mx-auto mb-8" />
                <p className="text-2xl lg:text-3xl text-navy font-semibold leading-relaxed max-w-3xl">
                  Experiência, expertise e compromisso que transformam <span className="text-bronze italic">desafios jurídicos</span> em <span className="text-bronze italic">conquistas sólidas</span>.
                </p>
                <div className="w-16 h-px bg-bronze mx-auto mt-8" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section backgroundColor="bg-gray-50">
        <div className="text-center mb-16">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Por que nos escolher</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy">
            O que nos diferencia
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-navy/5 flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MÉTODO / PROCESSO */}
      <Section>
        <div className="text-center mb-16">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Como trabalhamos</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy">
            Nosso método
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metodo.map((item, index) => (
            <div key={index} className="relative">
              <span className="text-7xl font-bold text-gray-100 absolute -top-4 left-0">{item.step}</span>
              <div className="relative pt-8 pl-4">
                <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              {index < metodo.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-bronze/30" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ESTRUTURA */}
      <Section id="estrutura" backgroundColor="bg-navy" className="text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Infraestrutura</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Estrutura preparada para o seu caso.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Ambiente privativo com tecnologia de ponta. Salas equipadas para reuniões presenciais e videoconferências. Atendemos clientes de todo o Brasil.
            </p>
            <ul className="space-y-3">
              {['Salas de reunião privativas', 'Videoconferência HD', 'Estacionamento próprio', 'Localização central'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-bronze flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ImageCarousel images={estruturaImages} />
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
              Pronto para resolver sua demanda?
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Agende uma consultoria e descubra como podemos ajudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-navy text-white font-semibold uppercase tracking-wider text-sm hover:bg-navy-light transition-all inline-flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Falar pelo WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-10 py-4 border-2 border-navy text-navy font-semibold uppercase tracking-wider text-sm hover:bg-navy hover:text-white transition-all"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

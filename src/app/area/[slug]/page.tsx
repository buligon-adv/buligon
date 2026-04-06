import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import { siteConfig } from '@/lib/site';
import { practiceAreas, getAreaBySlug } from '@/lib/areas';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return generateSeoMetadata({
      title: 'Área não encontrada',
    });
  }

  return generateSeoMetadata({
    title: area.title,
    description: area.shortDescription,
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  // Extrai primeira frase da descrição completa para usar como headline de benefício
  const benefitHeadline = area.shortDescription;
  
  // Extrai pontos-chave da descrição (primeiras 2-3 frases relevantes)
  const descriptionParts = area.fullDescription.split('\n\n');
  const mainBenefit = descriptionParts[0]?.split('.').slice(0, 2).join('.') + '.';

  return (
    <>
      {/* HERO - Foco em Benefício */}
      <section className="relative min-h-[50vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent hidden lg:block" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-bronze uppercase tracking-[0.25em] text-xs font-semibold mb-6">
              {area.category === 'empresas' ? 'Para Empresas' : area.category === 'agentes-publicos' ? 'Agentes Públicos' : 'Pessoa Física'}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              {area.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mb-10">
              {benefitHeadline}
            </p>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-bronze text-white font-semibold uppercase tracking-wider text-sm hover:bg-bronze-light transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* PROVA DE AUTORIDADE */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-14 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            <div className="py-6 lg:py-0 lg:pr-8 text-center">
              <span className="block text-5xl lg:text-6xl font-semibold text-bronze mb-2">20+</span>
              <span className="block text-xs uppercase tracking-[0.2em] font-bold text-navy/60">Anos de Experiência</span>
            </div>
            <div className="py-6 lg:py-0 lg:px-8 text-center">
              <span className="block text-5xl lg:text-6xl font-semibold text-bronze mb-2">100%</span>
              <span className="block text-xs uppercase tracking-[0.2em] font-bold text-navy/60">Sigilo Garantido</span>
            </div>
            <div className="py-6 lg:py-0 lg:px-8 text-center">
              <span className="block text-5xl lg:text-6xl font-semibold text-bronze mb-2">3</span>
              <span className="block text-xs uppercase tracking-[0.2em] font-bold text-navy/60">Áreas Especializadas</span>
            </div>
            <div className="py-6 lg:py-0 lg:pl-8 text-center">
              <span className="block text-5xl lg:text-6xl font-semibold text-bronze mb-2">∞</span>
              <span className="block text-xs uppercase tracking-[0.2em] font-bold text-navy/60">Foco em Resultado</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE - Texto Reduzido */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Sobre</span>
          <h2 className="text-3xl sm:text-4xl font-light text-navy mb-8">
            Por que escolher nossa assessoria?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {mainBenefit}
          </p>
          
          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {area.topics.slice(0, 6).map((topic, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-gray-50 border-l-2 border-bronze">
                <svg className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section backgroundColor="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">O que nos diferencia</h2>
          <div className="w-24 h-px bg-bronze/30 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              title: "Atuação Preventiva",
              desc: "Antecipamos riscos e evitamos litígios desnecessários com planejamento estratégico.",
              icon: "01"
            },
            {
              title: "Visão Estratégica",
              desc: "Cada caso é tratado com análise profunda e orientação focada em resultado.",
              icon: "02"
            },
            {
              title: "Atendimento Próximo",
              desc: "Relação direta com os sócios e acompanhamento personalizado do seu caso.",
              icon: "03"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col group relative">
              <span className="text-8xl font-semibold text-gray-50 group-hover:text-bronze/10 transition-colors duration-500 absolute -translate-y-10 -translate-x-4 pointer-events-none">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold text-navy mb-4 relative z-10">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESSO - 3 Etapas */}
      <section className="bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Como Funciona</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
                Processo simplificado
              </h2>
              <div className="w-24 h-px bg-bronze/30 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div className="relative text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <span className="w-14 h-14 rounded-full bg-bronze text-white flex items-center justify-center text-xl font-semibold">1</span>
                  <div className="hidden md:block flex-1 h-px bg-gray-200" />
                </div>
                <h3 className="text-navy font-semibold text-lg mb-3">Contato Inicial</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Entre em contato pelo WhatsApp ou telefone. Faremos uma análise preliminar do seu caso.
                </p>
              </div>
              <div className="relative text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <span className="w-14 h-14 rounded-full bg-bronze text-white flex items-center justify-center text-xl font-semibold">2</span>
                  <div className="hidden md:block flex-1 h-px bg-gray-200" />
                </div>
                <h3 className="text-navy font-semibold text-lg mb-3">Diagnóstico</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reunião para entender suas necessidades e definir a melhor estratégia jurídica.
                </p>
              </div>
              <div className="relative text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <span className="w-14 h-14 rounded-full bg-bronze text-white flex items-center justify-center text-xl font-semibold">3</span>
                </div>
                <h3 className="text-navy font-semibold text-lg mb-3">Execução</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Início do trabalho com acompanhamento contínuo e comunicação transparente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-navy mb-4">
              Pronto para resolver?
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Fale com nossa equipe e receba uma análise preliminar do seu caso.
            </p>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-navy text-white font-semibold uppercase tracking-wider text-sm hover:bg-navy-light transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* OUTRAS ÁREAS */}
      <Section>
        <div className="text-center mb-10">
          <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Explore</span>
          <h2 className="text-2xl sm:text-3xl font-light text-navy">
            Outras áreas de atuação
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {practiceAreas
            .filter((a) => a.slug !== area.slug)
            .slice(0, 5)
            .map((otherArea) => (
              <a
                key={otherArea.id}
                href={`/area/${otherArea.slug}`}
                className="group p-5 border border-gray-200 hover:border-bronze bg-white text-center transition-all"
              >
                <span className="text-sm font-medium text-navy group-hover:text-bronze transition-colors">
                  {otherArea.title}
                </span>
              </a>
            ))}
        </div>
      </Section>
    </>
  );
}

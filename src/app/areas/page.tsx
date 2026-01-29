import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import PracticeAreasGrid from '@/components/PracticeAreasGrid';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { practiceAreas } from '@/lib/areas';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Áreas de Atuação',
  description: 'Conheça as áreas de atuação do Buligon Advogados - direito constitucional, administrativo, tributário, eleitoral e mais.',
});

export default function AreasPage() {
  return (
    <>
      <Hero
        title="Áreas de Atuação"
        subtitle="Expertise consolidada em direito público, administrativo e tributário"
      />

      {/* Lista de Áreas */}
      <Section>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Oferecemos consultoria especializada em diversas áreas do direito, com foco em segurança
          jurídica e atuação estratégica. Clique em cada área para conhecer melhor nossos serviços.
        </p>
        <PracticeAreasGrid areas={practiceAreas} columns={3} />
      </Section>

      {/* Diferencial */}
      <Section backgroundColor="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 uppercase tracking-wider" style={{ color: 'var(--color-navy)' }}>
            Nossa Abordagem
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cada caso exige uma análise aprofundada e uma estratégia personalizada. Por isso,
            combinamos expertise técnica com atenção às especificidades de cada cliente.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nosso compromisso é oferecer orientação clara, transparente e focada nos melhores
            resultados, sempre respeitando os princípios éticos da advocacia.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Precisa de orientação especializada?"
        description="Entre em contato e saiba como podemos ajudar no seu caso."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}

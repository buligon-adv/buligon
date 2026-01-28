import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import { siteConfig } from '@/lib/site';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Equipe',
  description: 'Conheça a equipe do Buligon Advogados - profissionais especializados em direito público e administrativo.',
});

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. João Buligon',
    role: 'Advogado Sócio-Fundador',
    bio: 'Especialista em direito público com mais de 15 anos de experiência. Atuação destacada perante Tribunais de Contas e órgãos de controle.',
    specialties: ['Direito Administrativo', 'Tribunais de Contas', 'Improbidade Administrativa'],
  },
  {
    name: 'Dra. Maria Santos',
    role: 'Advogada Sênior',
    bio: 'Mestre em Direito Constitucional. Especializada em questões envolvendo servidores públicos e regime estatutário.',
    specialties: ['Direito Constitucional', 'Servidores Públicos', 'Direito Eleitoral'],
  },
  {
    name: 'Dr. Pedro Oliveira',
    role: 'Advogado Tributarista',
    bio: 'Especialista em direito tributário com foco em planejamento fiscal e contencioso. Experiência em grandes operações empresariais.',
    specialties: ['Direito Tributário', 'Direito Empresarial', 'Licitações e Contratos'],
  },
];

export default function EquipePage() {
  return (
    <>
      <Hero
        title="Nossa Equipe"
        subtitle="Profissionais dedicados à excelência jurídica"
      />

      {/* Apresentação */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700 leading-relaxed">
            Nossa equipe é formada por profissionais com sólida formação acadêmica e vasta experiência
            prática. Cada membro contribui com sua especialidade para oferecer a melhor assessoria aos
            nossos clientes.
          </p>
        </div>

        {/* Grid de Membros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Avatar placeholder */}
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: 'var(--color-navy)' }}
              >
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>

              <h3 className="text-lg font-bold text-center mb-1" style={{ color: 'var(--color-navy)' }}>
                {member.name}
              </h3>
              <p className="text-center text-bronze font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm text-center mb-4">{member.bio}</p>

              {/* Especialidades */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Valores da Equipe */}
      <Section backgroundColor="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
            O que nos une
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Além da expertise técnica, compartilhamos valores fundamentais que orientam nossa atuação:
            ética, transparência, respeito e compromisso com os melhores resultados para nossos clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>
                Formação Contínua
              </h3>
              <p className="text-gray-600 text-sm">
                Investimos constantemente em atualização e especialização.
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>
                Trabalho em Equipe
              </h3>
              <p className="text-gray-600 text-sm">
                Combinamos competências para oferecer soluções completas.
              </p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">⚖️</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>
                Ética Profissional
              </h3>
              <p className="text-gray-600 text-sm">
                Atuamos com integridade e respeito aos princípios da advocacia.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        title="Quer conversar com nossa equipe?"
        description="Entre em contato e agende uma consulta."
        ctaText="Falar no WhatsApp"
        ctaHref={siteConfig.social.whatsapp}
      />
    </>
  );
}

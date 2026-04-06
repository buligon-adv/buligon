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
      <Section backgroundColor="bg-navy" className="text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bronze uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Nossos Valores</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              O que nos une
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Além da expertise técnica, compartilhamos valores fundamentais que orientam nossa atuação:
              ética, transparência, respeito e compromisso com os melhores resultados para nossos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-bronze/30 flex items-center justify-center group-hover:bg-bronze/10 transition-colors">
                <svg className="w-7 h-7 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">
                Formação Contínua
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Investimos constantemente em atualização e especialização.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-bronze/30 flex items-center justify-center group-hover:bg-bronze/10 transition-colors">
                <svg className="w-7 h-7 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">
                Trabalho em Equipe
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Combinamos competências para oferecer soluções completas.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-bronze/30 flex items-center justify-center group-hover:bg-bronze/10 transition-colors">
                <svg className="w-7 h-7 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">
                Ética Profissional
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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

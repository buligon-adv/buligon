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
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Vinícius Buligon',
    role: 'Advogado Sócio-Fundador',
    bio: 'Especialista em Direito Eleitoral e Administrativo, com foco em defesas perante os Tribunais Superiores e órgãos de controle.',
    specialties: ['Direito Eleitoral', 'Controle Externo', 'Pessoa Física'],
    image: '/Dr.%20Vin%C3%ADcius%20Buligon.jpg'
  },
  {
    name: 'Dr. Diego Buligon',
    role: 'Advogado Sócio-Fundador',
    bio: 'Pós-Doutor em Direito pela Universidade de Bolonha, Itália. Especialista em Direito Administrativo e Constitucional.',
    specialties: ['Direito Público', 'Administrativo', 'Gestão Municipal'],
    image: '/Dr.%20Diego%20Buligon.jpg'
  },
  {
    name: 'Dr. Afonso Ricardo',
    role: 'Advogado Associado',
    bio: 'Especialista em Direito Empresarial e Civil, conduzindo resoluções complexas de conflitos corporativos e contratuais.',
    specialties: ['Direito Empresarial', 'Contencioso Cível', 'Recuperação Judicial'],
    image: '/Dr.%20Afonso%20Ricardo.jpg'
  },
];

export default function EquipePage() {
  return (
    <>
      <Hero
        title="Nossa Equipe"
        subtitle="Referência em soluções jurídicas complexas e alta gestão"
        backgroundImage="/Banner%2004%20Buligon.jpg"
        overlayOpacity="bg-navy/60"
      />

      {/* Seção de Filosofia */}
      <Section className="!pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold block">Corpo Jurídico</span>
                <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-navy leading-tight">
                  Comprometimento com a <span className="italic text-bronze">Justiça</span> e a Excelência
                </h2>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed font-light border-l-2 border-bronze/30 pl-8">
                "A união entre solidez acadêmica e vasta experiência prática define nossa abordagem na defesa dos interesses de nossos clientes, sempre voltados à proteção e à preservação da credibilidade de quem acompanhamos."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Especialistas', value: 'Jurídicos' },
                { label: 'Foco em', value: 'Resultados' },
                { label: 'Atuação', value: 'Singular' },
                { label: 'Rigor', value: 'Técnico' }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-100 flex flex-col justify-center items-center text-center">
                  <span className="text-bronze text-[10px] uppercase tracking-[0.3em] mb-1 font-bold">{stat.label}</span>
                  <span className="text-navy font-semibold text-xl">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Grid de Membros */}
      <Section className="!pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Foto do Advogado com Moldura Decorativa */}
              <div className="relative mb-10 overflow-visible">
                {/* Elemento decorativo atrás da foto */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-bronze/20 z-0" />
                
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-100 shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2 z-10">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy text-white text-4xl font-light">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-bronze scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-bronze uppercase tracking-[0.2em] text-[10px] font-bold">{member.role}</p>
                </div>
                
                <div className="w-12 h-px bg-bronze/30 group-hover:w-full transition-all duration-700" />
                
                <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-4">
                  {member.bio}
                </p>

                {/* Especialidades com Design de Pílula */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-[8px] uppercase tracking-[0.15em] font-bold bg-white border border-gray-100 text-gray-400 group-hover:text-navy group-hover:border-bronze/20 transition-all shadow-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Valores da Equipe - Design Elevado */}
    <Section backgroundColor="bg-white" className="relative overflow-hidden">
        {/* Elemento de fundo sutil */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start max-w-7xl mx-auto">
            <div className="lg:w-1/3 space-y-6">
              <span className="text-bronze uppercase tracking-[0.4em] text-[10px] font-bold block">Fundamentos</span>
              <h2 className="text-4xl font-sans font-semibold text-navy leading-tight">
                O que nos <span className="italic text-bronze">une</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Além da expertise técnica, compartilhamos valores fundamentais que orientam nossa atuação estratégica e humana.
              </p>
            </div>
            
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Formação Contínua',
                  desc: 'Investimos constantemente em atualização e especialização acadêmica.',
                  icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                },
                {
                  title: 'Trabalho em Equipe',
                  desc: 'Combinamos competências plurais para oferecer soluções jurídicas completas.',
                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                },
                {
                  title: 'Ética Profissional',
                  desc: 'Atuamos com integridade absoluta e respeito aos princípios da advocacia.',
                  icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-gray-50 border border-gray-100 hover:bg-white hover:border-bronze/20 transition-all duration-500 hover:shadow-xl">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center bg-white border border-gray-100 group-hover:border-bronze/30 transition-colors">
                    <svg className="w-6 h-6 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-navy font-semibold text-lg mb-3 leading-tight group-hover:text-bronze transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
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

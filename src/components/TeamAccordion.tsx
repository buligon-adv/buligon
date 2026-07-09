'use client';

import { useState } from 'react';

interface TeamMember {
  name: string;
  oab: string;
  role: string;
  bio: string;
  specialties: string[];
  image?: string;
}

export default function TeamAccordion({ members }: { members: TeamMember[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
      {members.map((member, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="group flex flex-col">
            {/* Foto em destaque */}
            <div className="relative overflow-hidden mb-6">
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-bronze/20 z-0" />
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 border border-gray-100 shadow-lg z-10">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-navy text-white text-4xl font-light">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-bronze scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>

            {/* Identificação */}
            <div className="space-y-1 mb-4">
              <p className="text-bronze uppercase tracking-[0.3em] text-[9px] font-bold">{member.role}</p>
              <h3 className="text-xl font-sans font-semibold text-navy leading-tight">{member.name}</h3>
              <p className="text-gray-400 text-[9px] tracking-widest uppercase">{member.oab}</p>
            </div>

            <div className="w-10 h-px bg-bronze/30 mb-4" />

            {/* Especialidades */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {member.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-[7px] uppercase tracking-[0.15em] font-bold bg-white border border-gray-100 text-gray-400 shadow-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Primeiro parágrafo sempre visível */}
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {member.bio.split('\n\n')[0]}
            </p>

            {/* Parágrafos restantes expandíveis */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <div className="text-gray-500 text-sm leading-relaxed font-light space-y-3">
                {member.bio.split('\n\n').slice(1).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Botão ver mais / ver menos */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex items-center gap-2 mt-4 text-[10px] uppercase tracking-[0.25em] font-bold text-bronze hover:text-navy transition-colors"
            >
              <span>{isOpen ? 'Ver menos' : 'Ver mais'}</span>
              <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}

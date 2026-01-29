'use client';

export default function RotatingSeal() {
  return (
    <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center p-2 group">
      {/* Efeito de Vidro (Glassmorphism) no Fundo */}
      <div className="absolute inset-4 bg-white/[0.03] backdrop-blur-[6px] rounded-full border border-white/10 shadow-[inner_0_1px_1px_rgba(255,255,255,0.1)] -z-10" />
      
      {/* Sombra de destaque externa */}
      <div className="absolute inset-6 bg-black/20 rounded-full blur-2xl -z-20" />
      
      {/* Container do SVG Rotativo - Invertido (lado oposto) */}
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text className="text-[7px] md:text-[6.5px] uppercase tracking-[0.2em] fill-bronze font-sans font-bold">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              • BULIGON ADVOGADOS • 20 ANOS DE ATUAÇÃO •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Centro do Selo */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img src="/icone logo buligon_2.svg" alt="Ícone Buligon" className="w-12 h-12 md:w-16 md:h-16 mb-2" />
          <span className="text-white/90 text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-sans font-bold">20 Anos</span>
        </div>
      </div>
      
      {/* Decorativo: Círculos concêntricos */}
      <div className="absolute inset-4 border border-bronze/30 rounded-full" />
      <div className="absolute inset-0 border border-bronze/10 rounded-full" />
      
      {/* Brilho de fundo */}
      <div className="absolute inset-8 bg-bronze/5 rounded-full blur-2xl animate-pulse -z-20" />
    </div>
  );
}

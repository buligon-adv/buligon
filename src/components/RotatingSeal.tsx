'use client';

export default function RotatingSeal() {
  return (
    <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center p-2 group">
      {/* 1. Efeito de Vidro (Fundo Principal) - Agora centralizado no raio do texto */}
      <div className="absolute inset-2 bg-white/[0.03] backdrop-blur-[6px] rounded-full border border-white/10 shadow-[inner_0_1px_1px_rgba(255,255,255,0.1)] -z-10" />
      
      {/* 2. Sombra de destaque externa */}
      <div className="absolute inset-4 bg-black/20 rounded-full blur-2xl -z-20" />
      
      {/* 3. Container do SVG Rotativo - Texto centralizado no anel de vidro */}
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -41, 0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0"
            />
          </defs>
          <text className="text-[6.5px] md:text-[6px] uppercase tracking-[0.25em] fill-bronze font-sans font-bold">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              • BULIGON ADVOGADOS • 20 ANOS DE ATUAÇÃO •
            </textPath>
          </text>
        </svg>
      </div>

      {/* 4. Centro do Selo (Elementos Estáticos) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img src="/icone logo buligon_2.svg" alt="Ícone Buligon" className="w-10 h-10 md:w-14 md:h-14 mb-2" />
          <span className="text-white/90 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-sans font-bold">20 Anos</span>
        </div>
      </div>
      
      {/* 5. Linhas Decorativas - Equidistantes entre o centro e o texto */}
      <div className="absolute inset-[30%] border border-bronze/20 rounded-full" />
      <div className="absolute inset-4 border border-white/5 rounded-full" />
      
      {/* 6. Brilho de fundo */}
      <div className="absolute inset-12 bg-bronze/5 rounded-full blur-2xl animate-pulse -z-20" />
    </div>
  );
}

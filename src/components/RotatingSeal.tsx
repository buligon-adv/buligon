'use client';

export default function RotatingSeal() {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center p-2 group">
      {/* 1. Fundo Branco Sólido com Sombra Refinada */}
      <div className="absolute inset-2 bg-white rounded-full border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.12)] -z-10" />
      
      {/* 2. Container do SVG Rotativo - Texto menor para caber no círculo */}
      <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            />
          </defs>
          <text className="text-[5.5px] uppercase tracking-[0.41em] fill-navy font-sans font-extrabold">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              • BULIGON ADVOGADOS • 20 ANOS DE ATUAÇÃO
            </textPath>
          </text>
        </svg>
      </div>

      {/* 3. Centro do Selo (Elementos Estáticos) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img src="/Símbolo Buligon.png" alt="Ícone Buligon" className="w-14 h-14 sm:w-16 sm:h-16 mb-2 object-contain" />
          <span className="text-navy text-[11px] uppercase tracking-[0.4em] font-sans font-bold">20 Anos</span>
        </div>
      </div>
      
      {/* 4. Brilho de fundo sutil */}
      <div className="absolute inset-8 bg-bronze/10 rounded-full blur-3xl -z-20" />
    </div>
  );
}

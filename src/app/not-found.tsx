import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy px-4 pb-20 pt-36 sm:px-6 md:pt-44 lg:px-12">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[65%_center] md:bg-center"
        style={{ backgroundImage: 'url("/404-background.png")' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,31,64,0.98)_0%,rgba(12,31,64,0.86)_48%,rgba(12,31,64,0.3)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(12,31,64,0.82)_0%,transparent_55%)]"
        aria-hidden="true"
      />

      <div className="container mx-auto">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-bronze sm:text-xs">
              Página não encontrada
            </span>
          </div>

          <p className="select-none text-[clamp(7rem,22vw,13rem)] font-semibold leading-[0.72] tracking-[-0.08em] text-white/10">
            404
          </p>

          <h1 className="mt-10 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Este caminho não levou ao destino esperado.
          </h1>

          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/70 sm:text-lg">
            A página pode ter sido movida, removida ou o endereço informado está incorreto.
            Você pode retornar ao início e continuar sua navegação.
          </p>

          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-4 bg-bronze px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Voltar para a home
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-bronze/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

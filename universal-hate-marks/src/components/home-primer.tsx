import Link from "next/link";
import { complexityLadders, nonTechUsageSteps, siteMeta, socialFocusHighlights } from "@/content/site-content";
import { ArrowRight, FileText, Download, ShieldCheck, Zap, Users, Shield, Layers, MessageSquare, Activity, Globe } from "lucide-react";
import { FadeIn, FadeInStagger } from "./fade-in";

const iconMap: Record<string, React.ReactNode> = {
  "Trazabilidad de la agresión": <Activity className="w-5 h-5 text-emerald-400" />,
  "Gobernanza participativa": <Users className="w-5 h-5 text-emerald-400" />,
  "Descentralización operativa": <Globe className="w-5 h-5 text-emerald-400" />,
  "Identificación comunitaria": <MessageSquare className="w-5 h-5 text-emerald-400" />,
  "Votación de casos": <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  "Resultados auditables": <FileText className="w-5 h-5 text-emerald-400" />,
};

export function HomePrimer() {
  return (
    <section className="home-primer panel" id="primer">
      <FadeInStagger className="stack-lg">
        <FadeIn className="home-primer-head">
          <p className="kicker">El proyecto</p>
          <h2>Detectar el odio digital, de forma colectiva y verificable</h2>
          <p>
            Un grupo de especialistas en lenguaje crea reglas para identificar discurso de odio.
            Las reglas se votan, se registran de forma permanente y se usan para analizar contenido real.
          </p>

          <div className="flex gap-4 mt-4 flex-wrap">
            <Link href="/resumen" className="primary-btn group">
              Ver resumen ejecutivo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/docs/tesis.pdf" className="ghost-btn group">
              <Download className="w-4 h-4 mr-1 transition-transform group-hover:-translate-y-1" />
              Descargar tesis completa
            </Link>
          </div>

        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <FadeIn>
            <article className="card">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg text-white font-semibold">Qué mejora social busca</h3>
              </div>
              <div className="flex gap-1 my-3" aria-hidden>
                <span className="w-8 h-2 rounded-full bg-red-400/50" />
                <span className="w-8 h-2 rounded-full bg-red-400/50" />
                <span className="w-8 h-2 rounded-full bg-yellow-400/50" />
                <span className="w-8 h-2 rounded-full bg-emerald-400" />
                <span className="w-8 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-[#9db2ad]">
                Menos normalización del odio, más información útil para convivencia democrática.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="card">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg text-white font-semibold">Cómo se usa la herramienta</h3>
              </div>
              <div className="flex items-center gap-2 my-3 text-sm text-emerald-300 font-mono" aria-hidden>
                <span className="px-2 py-1 bg-emerald-950/50 rounded-md border border-emerald-800/50">Comunidad</span>
                <ArrowRight className="w-3 h-3 text-emerald-500/50" />
                <span className="px-2 py-1 bg-emerald-950/50 rounded-md border border-emerald-800/50">DAO</span>
                <ArrowRight className="w-3 h-3 text-emerald-500/50" />
                <span className="px-2 py-1 bg-emerald-950/50 rounded-md border border-emerald-800/50">Reglas</span>
              </div>
              <p className="text-[#9db2ad]">
                Flujo colaborativo, auditable y orientado a resultados públicos comprensibles.
              </p>
            </article>
          </FadeIn>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {socialFocusHighlights.map((item) => (
            <FadeIn key={item.title}>
              <article className="card h-full">
                <div className="mb-3 p-2 w-fit rounded-lg bg-emerald-950/50 border border-emerald-800/30">
                  {iconMap[item.title] || <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                </div>
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-[#9db2ad]">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {nonTechUsageSteps.map((step) => (
            <FadeIn key={step.title}>
              <article className="card h-full border-dashed border-emerald-800/40">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                    {nonTechUsageSteps.indexOf(step) + 1}
                  </span>
                  <h3 className="text-white font-medium leading-tight">{step.title}</h3>
                </div>
                <p className="text-sm text-[#9db2ad]">{step.body}</p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 rounded-2xl overflow-hidden border border-emerald-800/30">
          {complexityLadders.map((item, i) => (
            <article key={item.level} className={`p-6 ${i !== 2 ? 'border-b md:border-b-0 md:border-r border-emerald-800/30' : ''} bg-gradient-to-b from-emerald-950/20 to-black/40`}>
              <h4 className="text-emerald-300 font-mono text-sm mb-2 opacity-80">{item.level}</h4>
              <p className="text-white text-sm">{item.summary}</p>
            </article>
          ))}
        </FadeIn>
      </FadeInStagger>
    </section>
  );
}

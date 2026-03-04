import Link from "next/link";
import { evidenceStats, homeBlocks, operationalPillars, siteMeta } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <section className="hero hero-executive">
        <div>
          <p className="kicker">Proyecto académico con enfoque comercial</p>
          <h2>{siteMeta.projectFormalTitle}</h2>
          <p>
            DAO-Ling propone una infraestructura descentralizada para diseñar, validar
            y aplicar reglas discursivas contra el odio en entornos digitales, con
            trazabilidad pública y gobernanza colaborativa.
          </p>
        </div>
        <div className="stats-grid">
          {evidenceStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-cards">
        {homeBlocks.map((block) => (
          <article key={block.title} className="card card-kpi">
            <p className="chip chip-solid">{block.kpiLabel}</p>
            <h3>{block.title}</h3>
            <p>{block.body}</p>
            <p className="kpi-value">{block.kpiValue}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <p className="kicker">Pilares operativos</p>
        <div className="grid-cards">
          {operationalPillars.map((pillar) => (
            <article key={pillar.title} className="card">
              <h3>{pillar.title}</h3>
              <p>{pillar.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="kicker">Navegación rápida</p>
        <div className="quick-links">
          <Link href="/resumen" className="quick-link">
            Ver resumen y objetivos
          </Link>
          <Link href="/como-funciona" className="quick-link">
            Explorar flujo operativo
          </Link>
          <Link href="/mapa" className="quick-link">
            Revisar mapa de grupos
          </Link>
          <Link href="/fases" className="quick-link">
            Evaluar roadmap por fases
          </Link>
          <Link href="/faq" className="quick-link">
            Consultar preguntas frecuentes
          </Link>
          <Link href="/descargas" className="quick-link">
            Descargar material académico
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { HomePrimer } from "@/components/home-primer";
import { HomeTechnicalDiagrams } from "@/components/home-technical-diagrams";
import { evidenceStats, homeBlocks, operationalPillars, siteMeta } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <HomePrimer />

      <section className="panel home-anchor-nav">
        <p className="kicker">Ruta de lectura</p>
        <nav className="anchor-list" aria-label="Navegación por secciones de home">
          <a href="#primer">Entender rápido</a>
          <a href="#impacto">Impacto social</a>
          <a href="#operativa">Operativa</a>
          <a href="#tecnico">Base técnica</a>
        </nav>
      </section>

      <section className="hero hero-executive" id="impacto">
        <div>
          <p className="kicker">Civic tech con enfoque en derechos</p>
          <h2>{siteMeta.projectFormalTitle}</h2>
          <p>
            Universal Hate Marks propone una infraestructura descentralizada para
            identificar patrones de odio, fortalecer la convivencia democrática y
            comunicar resultados con transparencia metodológica.
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

      <section className="panel" id="operativa">
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

      <section id="tecnico">
        <p className="kicker">Esquemas técnicos de operación blockchain</p>
        <HomeTechnicalDiagrams />
      </section>

      <section className="panel">
        <p className="kicker">Siguientes pasos</p>
        <div className="quick-links">
          <Link href="/resumen" className="quick-link">
            Ver resumen completo
          </Link>
          <Link href="/como-funciona" className="quick-link">
            Explorar operación
          </Link>
          <Link href="/guia" className="quick-link">
            Abrir guía rápida
          </Link>
        </div>
        <div className="secondary-links">
          <Link href="/faq">FAQ</Link>
          <Link href="/mapa">Mapa de grupos</Link>
          <Link href="/fases">Roadmap</Link>
          <Link href="/descargas">Descargas</Link>
        </div>
      </section>
    </>
  );
}

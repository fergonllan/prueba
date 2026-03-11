import Link from "next/link";
import { HomePrimer } from "@/components/home-primer";
import { HomeTechnicalDiagrams } from "@/components/home-technical-diagrams";
import { evidenceStats, homeBlocks, operationalPillars, siteMeta } from "@/content/site-content";

export default function Home() {
  return (
    <>
      <HomePrimer />

      <section className="panel home-anchor-nav">
        <div className="home-anchor-head">
          <div>
            <p className="kicker">Ruta de lectura</p>
            <h2 className="section-title-sm">Elegí el nivel de profundidad que necesitás</h2>
          </div>
          <p className="muted home-anchor-copy">
            Podés entrar por una lectura rápida, por impacto social o por arquitectura técnica.
          </p>
        </div>
        <nav className="anchor-list" aria-label="Navegación por secciones de home">
          <a href="#primer">Entender rápido</a>
          <a href="#impacto">Impacto social</a>
          <a href="#operativa">Operativa</a>
          <a href="#tecnico">Base técnica</a>
        </nav>
      </section>

      <section className="hero hero-executive" id="impacto">
        <div className="hero-copy">
          <p className="kicker">Civic tech con enfoque en derechos</p>
          <h2>{siteMeta.projectFormalTitle}</h2>
          <p>
            Universal Hate Marks propone una infraestructura descentralizada para
            identificar patrones de odio, fortalecer la convivencia democrática y
            comunicar resultados con transparencia metodológica.
          </p>
          <div className="hero-note-grid" aria-label="Resumen de valor del proyecto">
            <article className="hero-note-card">
              <span>Problema</span>
              <p>El odio escala más rápido que la respuesta institucional y necesita trazabilidad.</p>
            </article>
            <article className="hero-note-card">
              <span>Método</span>
              <p>Reglas lingüísticas revisadas por pares, con gobernanza DAO y registro auditable.</p>
            </article>
          </div>
        </div>
        <div className="stats-grid">
          {evidenceStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-source">{stat.source}</p>
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

      <section className="panel panel-highlight">
        <div>
          <p className="kicker">Qué vas a encontrar en la web</p>
          <h2>Una lectura guiada de la tesis, no solo un archivo para descargar</h2>
          <p>
            El sitio organiza el proyecto en capas: problema social, diseño DAO,
            arquitectura técnica, gobernanza y roadmap. La idea es que cualquier
            visitante pueda entrar por el nivel de detalle que necesite.
          </p>
        </div>
        <div className="quick-links">
          <Link href="/guia" className="quick-link">
            Recorrido guiado en 15 puntos
          </Link>
          <Link href="/faq" className="quick-link">
            Resolver preguntas frecuentes
          </Link>
          <Link href="/descargas" className="quick-link">
            Ir a materiales descargables
          </Link>
        </div>
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

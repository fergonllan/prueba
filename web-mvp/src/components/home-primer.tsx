import { complexityLadders, nonTechUsageSteps, socialFocusHighlights } from "@/content/site-content";

export function HomePrimer() {
  return (
    <section className="home-primer panel" id="primer">
      <div className="home-primer-head">
        <p className="kicker">Entender en 60 segundos</p>
        <h2>Cómo enfrentar discursos de odio con tecnología descentralizada</h2>
        <p>
          Empezamos por el impacto social, seguimos con el uso práctico y recién después
          entramos en la capa técnica.
        </p>
      </div>

      <div className="home-primer-visuals">
        <article className="primer-graphic">
          <h3>Qué mejora social busca</h3>
          <div className="signal-rows" aria-hidden>
            <span className="signal signal-bad" />
            <span className="signal signal-bad" />
            <span className="signal signal-mid" />
            <span className="signal signal-good" />
            <span className="signal signal-good" />
          </div>
          <p className="muted">
            Menos normalización del odio, más información útil para convivencia democrática.
          </p>
        </article>

        <article className="primer-graphic">
          <h3>Cómo se usa la herramienta</h3>
          <div className="mini-flow" aria-hidden>
            <span>Comunidad</span>
            <span>{"->"}</span>
            <span>DAO</span>
            <span>{"->"}</span>
            <span>Reglas</span>
            <span>{"->"}</span>
            <span>Reportes</span>
          </div>
          <p className="muted">
            Flujo colaborativo, auditable y orientado a resultados públicos comprensibles.
          </p>
        </article>
      </div>

      <div className="home-primer-grid">
        {socialFocusHighlights.map((item) => (
          <article key={item.title} className="card primer-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="home-primer-grid">
        {nonTechUsageSteps.map((step) => (
          <article key={step.title} className="card primer-card">
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>

      <div className="complexity-ladder">
        {complexityLadders.map((item) => (
          <article key={item.level} className="ladder-item">
            <h4>{item.level}</h4>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

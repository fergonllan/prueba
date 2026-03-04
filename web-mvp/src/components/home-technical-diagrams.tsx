import { homeTechnicalDiagrams } from "@/content/site-content";

function DiagramPipeline() {
  return (
    <div className="home-diagram-canvas">
      <div className="home-step">Propuesta de regla</div>
      <span className="home-arrow">{"->"}</span>
      <div className="home-step">Debate lingüístico</div>
      <span className="home-arrow">{"->"}</span>
      <div className="home-step">Votación DAO</div>
      <span className="home-arrow">{"->"}</span>
      <div className="home-step">Bloque validado</div>
      <span className="home-arrow">{"->"}</span>
      <div className="home-step">Regla activa</div>
    </div>
  );
}

function DiagramArchitecture() {
  return (
    <div className="home-diagram-canvas home-diagram-architecture">
      <div className="home-arch-node">Oráculos / fuentes</div>
      <div className="home-arch-node">Motor de reglas</div>
      <div className="home-arch-node">Puntaje de riesgo</div>
      <div className="home-arch-node">Hash en blockchain</div>
      <div className="home-arch-node">Reporte público</div>
    </div>
  );
}

export function HomeTechnicalDiagrams() {
  return (
    <section className="home-diagram-grid">
      {homeTechnicalDiagrams.map((item) => (
        <article key={item.id} className="panel diagram-card">
          <h3>{item.title}</h3>
          {item.id === "pipeline-consenso" ? <DiagramPipeline /> : <DiagramArchitecture />}
          <p className="muted">{item.caption}</p>
          <p className="diagram-source">{item.source}</p>
        </article>
      ))}
    </section>
  );
}

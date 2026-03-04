import { diagramCards, type DiagramCard } from "@/content/site-content";

type DiagramSection = DiagramCard["section"];

function DiagramVisual({ id }: { id: DiagramCard["id"] }) {
  if (id === "nodos") {
    return (
      <div className="diagram-canvas diagram-network">
        <div className="diagram-node">Comunidad lingüista</div>
        <span className="diagram-link">↔</span>
        <div className="diagram-node">Votación DAO</div>
        <span className="diagram-link">↔</span>
        <div className="diagram-node">Reglas validadas</div>
      </div>
    );
  }

  if (id === "comunidad") {
    return (
      <div className="diagram-canvas diagram-columns">
        <div className="diagram-column">
          <p className="diagram-label">Comunidad</p>
          <ul>
            <li>Casos</li>
            <li>Debate</li>
            <li>Prioridades</li>
          </ul>
        </div>
        <div className="diagram-column diagram-column-core">
          <p className="diagram-label">Gobernanza</p>
          <ul>
            <li>Propuesta</li>
            <li>Evaluación</li>
            <li>Votación</li>
          </ul>
        </div>
        <div className="diagram-column">
          <p className="diagram-label">Lingüistas</p>
          <ul>
            <li>Reglas</li>
            <li>Revisión</li>
            <li>Versionado</li>
          </ul>
        </div>
      </div>
    );
  }

  if (id === "canales") {
    return (
      <div className="diagram-canvas diagram-hub">
        <div className="hub-core">Motor de consenso</div>
        <div className="hub-chip">Redes</div>
        <div className="hub-chip">Foros</div>
        <div className="hub-chip">Medios</div>
        <div className="hub-chip">Discursos públicos</div>
        <div className="hub-chip">Documentos online</div>
      </div>
    );
  }

  if (id === "ciclo") {
    return (
      <div className="diagram-canvas diagram-cycle">
        <div className="cycle-step">Propuesta</div>
        <span>→</span>
        <div className="cycle-step">Debate</div>
        <span>→</span>
        <div className="cycle-step">Votación</div>
        <span>→</span>
        <div className="cycle-step">Registro</div>
        <span>→</span>
        <div className="cycle-step">Análisis</div>
        <span>→</span>
        <div className="cycle-step">Comunicación</div>
      </div>
    );
  }

  return (
    <div className="diagram-canvas diagram-economy">
      <div className="economy-box">
        <p className="diagram-label">Contribuciones</p>
        <ul>
          <li>Crear reglas</li>
          <li>Mejorar reglas</li>
          <li>Priorizar casos</li>
        </ul>
      </div>
      <div className="economy-arrow">↔</div>
      <div className="economy-box">
        <p className="diagram-label">Recompensas</p>
        <ul>
          <li>Tokens por aporte</li>
          <li>Tokens por uso</li>
          <li>Tokens por colaboración</li>
        </ul>
      </div>
    </div>
  );
}

export function DaoDiagrams({ section }: { section: DiagramSection }) {
  const cards = diagramCards.filter((card) => card.section === section);

  return (
    <section className="diagram-grid">
      {cards.map((card) => (
        <article key={card.id} className="panel diagram-card">
          <h3>{card.title}</h3>
          <DiagramVisual id={card.id} />
          <p className="muted">{card.note}</p>
          <p className="diagram-source">{card.source}</p>
        </article>
      ))}
    </section>
  );
}

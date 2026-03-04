import { DaoDiagrams } from "@/components/dao-diagrams";
import { phases } from "@/content/site-content";

export default function FasesPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Roadmap de implementación</p>
        <h2>Fases del proyecto</h2>
        <p>
          Evolución por etapas desde el diseño estratégico hasta la puesta en marcha
          operativa y la comunicación pública de resultados.
        </p>
      </section>

      <section className="timeline">
        {phases.map((phase) => (
          <article key={phase.id} className="panel timeline-item">
            <p className="kicker">{phase.id}</p>
            <h3>{phase.title}</h3>
            <p className="muted">{phase.focus}</p>

            <h4>Hitos</h4>
            <ul className="plain-list">
              {phase.milestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>

            <h4>Entregables esperados</h4>
            <ul className="plain-list">
              {phase.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>

            <h4>Criterios de avance</h4>
            <ul className="plain-list">
              {phase.readinessCriteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <p className="kicker">Diagramas de ciclo e incentivos</p>
        <DaoDiagrams section="fases" />
      </section>
    </>
  );
}

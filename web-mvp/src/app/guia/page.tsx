import { guideTopics, siteMeta } from "@/content/site-content";

export default function GuiaPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Guía del proyecto</p>
        <h2>Manual resumido estilo GitBook</h2>
        <p>
          Esta sección reúne en 15 puntos los elementos centrales de {siteMeta.projectShortName}:
          arquitectura, operación, gobernanza, economía e impacto.
        </p>
      </section>

      <section className="guide-layout">
        <aside className="panel guide-index">
          <p className="kicker">Índice</p>
          <ol>
            {guideTopics.map((topic) => (
              <li key={topic.id}>
                <a href={`#${topic.id}`}>{topic.title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="guide-content">
          {guideTopics.map((topic, idx) => (
            <article key={topic.id} id={topic.id} className="panel guide-topic">
              <p className="kicker">Punto {idx + 1}</p>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
              <ul className="plain-list">
                {topic.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

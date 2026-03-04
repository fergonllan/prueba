import {
  executiveSummary,
  justificationHighlights,
  limitationsAndScope,
  researchObjectives,
  researchQuestions,
  siteMeta,
} from "@/content/site-content";

export default function ResumenPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Resumen para jurado y público general</p>
        <h2>Idea general del proyecto</h2>
        <p>
          La tesis plantea una DAO de especialistas en análisis del discurso para
          construir reglas lingüísticas, votarlas y registrarlas en blockchain con
          foco en detección y visibilización de discursos de odio.
        </p>
      </section>

      <section className="panel stack-md">
        <h3>1. Resumen ejecutivo</h3>
        <ul className="plain-list">
          {executiveSummary.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="panel stack-md">
        <h3>2. Objetivo general</h3>
        <p>{researchObjectives.general}</p>
        <h4>3. Objetivos secundarios</h4>
        <ul className="plain-list">
          {researchObjectives.secondary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel stack-md">
        <h3>4. Preguntas de investigación</h3>
        <ul className="plain-list">
          {researchQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>

      <section className="panel stack-md">
        <h3>5. Justificación de la propuesta</h3>
        <ul className="plain-list">
          {justificationHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel stack-md">
        <h3>6. Alcance geográfico e idiomático</h3>
        <ul className="plain-list">
          {limitationsAndScope.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>7. Limitaciones y enfoque exploratorio</h4>
        <ul className="plain-list">
          {limitationsAndScope.limitations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel stack-md">
        <h3>Ficha académica</h3>
        <p>
          <strong>Título formal:</strong> {siteMeta.projectFormalTitle}
        </p>
        <p>
          <strong>Autor:</strong> {siteMeta.author}
        </p>
        <p>
          <strong>Dirección:</strong> {siteMeta.director}
        </p>
        <p>
          <strong>Línea temática:</strong> {siteMeta.lineaTematica}
        </p>
        <p>
          <strong>Facultad:</strong> {siteMeta.faculty}
        </p>
      </section>
    </>
  );
}

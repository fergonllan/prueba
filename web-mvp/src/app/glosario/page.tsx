import { glossaryItems } from "@/content/site-content";

export default function GlosarioPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Conceptos clave</p>
        <h2>Glosario del proyecto</h2>
        <p>
          Definiciones esenciales para leer el proyecto desde comunicación,
          lingüística y arquitectura descentralizada sin perder precisión técnica.
        </p>
      </section>

      <section className="grid-cards">
        {glossaryItems.map((item) => (
          <article className="card" key={item.term}>
            <h3>{item.term}</h3>
            <p>{item.definition}</p>
          </article>
        ))}
      </section>
    </>
  );
}

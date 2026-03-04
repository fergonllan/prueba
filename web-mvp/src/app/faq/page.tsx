import { faqItems } from "@/content/site-content";

const categories = [...new Set(faqItems.map((item) => item.category))];

export default function FaqPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Preguntas frecuentes</p>
        <h2>FAQ de Universal Hate Marks</h2>
        <p>
          Respuestas curadas desde la tesis para cubrir fundamentos, operación,
          gobernanza, incentivos y límites de una manera clara y usable.
        </p>
      </section>

      <section className="panel">
        <div className="chip-row">
          {categories.map((category) => (
            <span className="chip" key={category}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="faq-list">
        {faqItems.map((item) => (
          <article className="faq-item" key={item.question}>
            <p className="kicker">{item.category}</p>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}

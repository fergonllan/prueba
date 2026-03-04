import Link from "next/link";
import { downloadItems } from "@/content/site-content";

export default function DescargasPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Material académico</p>
        <h2>Descargas</h2>
        <p>
          Repositorio documental del proyecto: tesis, bibliografía y anexos. Cuando
          un archivo esté disponible, se habilita enlace directo desde esta sección.
        </p>
      </section>

      <section className="panel download-list">
        {downloadItems.map((item) => (
          <article key={item.name} className="download-item">
            <div>
              <h3>{item.name}</h3>
              <p className="muted">{item.note}</p>
            </div>
            <div className="download-action">
              <strong>{item.status}</strong>
              {item.href ? (
                <Link href={item.href} className="quick-link">
                  Descargar
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

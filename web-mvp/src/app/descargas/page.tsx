import { downloadItems } from "@/content/site-content";

const basePath = process.env.NODE_ENV === "production" ? "/universal-hate-marks" : "";

export default function DescargasPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Material académico</p>
        <h2>Descargas</h2>
        <p>
          Repositorio documental del proyecto. Aquí podés descargar la tesis completa
          en PDF con acceso directo.
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
                <a href={`${basePath}${item.href}`} className="quick-link" download>
                  Descargar
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

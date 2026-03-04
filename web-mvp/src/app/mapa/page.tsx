import { ConceptMap } from "@/components/concept-map";

export default function MapaPage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Mapa interactivo</p>
        <h2>Grupos lingüísticos y función operativa</h2>
        <p>
          Visualización conceptual y geográfica de grupos que construyen reglas,
          con su rol operativo y fase de mayor impacto dentro del proyecto.
        </p>
      </section>

      <ConceptMap />
    </>
  );
}

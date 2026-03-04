"use client";

import { useMemo, useState } from "react";
import { linguistGroups } from "@/content/site-content";

type Mode = "conceptual" | "geografico";

export function ConceptMap() {
  const [mode, setMode] = useState<Mode>("conceptual");
  const [selected, setSelected] = useState(linguistGroups[0].id);

  const active = useMemo(
    () => linguistGroups.find((group) => group.id === selected) ?? linguistGroups[0],
    [selected]
  );

  return (
    <section className="panel stack-md">
      <div className="toolbar">
        <p className="kicker">Visualización de grupos lingüísticos</p>
        <div className="toggle-group" role="tablist" aria-label="Modo de mapa">
          <button
            type="button"
            className={`toggle-btn ${mode === "conceptual" ? "toggle-btn-on" : ""}`}
            onClick={() => setMode("conceptual")}
          >
            Conceptual
          </button>
          <button
            type="button"
            className={`toggle-btn ${mode === "geografico" ? "toggle-btn-on" : ""}`}
            onClick={() => setMode("geografico")}
          >
            Geográfico
          </button>
        </div>
      </div>

      {mode === "conceptual" ? (
        <div className="map-grid">
          {linguistGroups.map((group) => (
            <button
              type="button"
              key={group.id}
              className={`node-btn ${selected === group.id ? "node-btn-on" : ""}`}
              onClick={() => setSelected(group.id)}
            >
              <span className="node-short">{group.short}</span>
              <span>{group.name}</span>
              <span className="node-meta">{group.relatedPhase}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="geo-grid">
          {linguistGroups.map((group) => (
            <button
              type="button"
              key={group.id}
              className={`node-btn ${selected === group.id ? "node-btn-on" : ""}`}
              onClick={() => setSelected(group.id)}
            >
              <span className="node-short">{group.region}</span>
              <span>{group.name}</span>
              <span className="node-meta">{group.relatedPhase}</span>
            </button>
          ))}
        </div>
      )}

      <article className="detail-card">
        <h3>{active.name}</h3>
        <p>
          <strong>Qué aporta:</strong> {active.aporte}
        </p>
        <p>
          <strong>Tipo de reglas:</strong> {active.reglas}
        </p>
        <p>
          <strong>Ejemplo neutral:</strong> {active.ejemploNeutral}
        </p>
        <p>
          <strong>Cómo se valida:</strong> {active.validacion}
        </p>
        <p>
          <strong>Rol operativo:</strong> {active.operationalRole}
        </p>
        <p>
          <strong>Fase vinculada:</strong> {active.relatedPhase}
        </p>
      </article>
    </section>
  );
}

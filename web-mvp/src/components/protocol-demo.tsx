"use client";

import { useMemo, useState } from "react";
import { demoRules, flowSteps } from "@/content/site-content";

type VoteMap = Record<string, number>;

function initialVotes() {
  const votes: VoteMap = {};
  for (const rule of demoRules) {
    votes[rule.id] = 0;
  }
  return votes;
}

export function ProtocolDemo() {
  const [text, setText] = useState(
    "Texto de ejemplo para simular activación de reglas sin publicar contenido sensible."
  );
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [votes, setVotes] = useState<VoteMap>(() => initialVotes());

  const matchedRules = useMemo(() => {
    const normalized = text.toLowerCase();
    return demoRules.filter((rule) =>
      rule.pattern.some((token) => normalized.includes(token))
    );
  }, [text]);

  async function runFlow() {
    setRunning(true);
    setStep(0);
    for (let index = 1; index <= flowSteps.length; index += 1) {
      await new Promise((resolve) => setTimeout(resolve, 320));
      setStep(index);
    }
    setRunning(false);
  }

  function castVote(ruleId: string) {
    setVotes((prev) => ({ ...prev, [ruleId]: prev[ruleId] + 1 }));
  }

  const winners = useMemo(() => {
    const sorted = [...demoRules].sort((a, b) => votes[b.id] - votes[a.id]);
    return sorted.slice(0, 2);
  }, [votes]);

  return (
    <section className="panel stack-lg">
      <div>
        <p className="kicker">Simulador del protocolo</p>
        <h2>Demo operativa (sin blockchain real)</h2>
        <p>
          Esta simulación permite visualizar el ciclo de gobernanza y consenso sin
          ejecutar datos reales ni exponer lenguaje dañino.
        </p>
      </div>

      <label className="input-label" htmlFor="demo-text">
        Texto de prueba
      </label>
      <textarea
        id="demo-text"
        className="text-input"
        rows={4}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="button" className="primary-btn" onClick={runFlow} disabled={running}>
        {running ? "Simulando..." : "Simular flujo"}
      </button>

      <ol className="step-list">
        {flowSteps.map((flowStep, index) => {
          const active = step > index;
          return (
            <li key={flowStep} className={`step-item ${active ? "step-item-on" : ""}`}>
              <span className="step-index">{index + 1}</span>
              <span>{flowStep}</span>
            </li>
          );
        })}
      </ol>

      <div className="rule-box">
        <h3>Reglas activadas por el texto</h3>
        {matchedRules.length === 0 ? (
          <p>No se activaron reglas en este ejemplo.</p>
        ) : (
          <ul className="plain-list">
            {matchedRules.map((rule) => (
              <li key={rule.id}>
                <strong>{rule.title}:</strong> {rule.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="rule-box">
        <h3>Votación de reglas ficticias</h3>
        <div className="vote-grid">
          {demoRules.map((rule) => (
            <article key={rule.id} className="vote-card">
              <h4>{rule.title}</h4>
              <p>{rule.description}</p>
              <button
                type="button"
                className="ghost-btn"
                onClick={() => castVote(rule.id)}
              >
                Votar regla
              </button>
              <p className="vote-count">Votos: {votes[rule.id]}</p>
            </article>
          ))}
        </div>
        <p>
          <strong>Reglas ganadoras:</strong>{" "}
          {winners.map((rule) => `${rule.title} (${votes[rule.id]})`).join(" | ")}
        </p>
      </div>
    </section>
  );
}

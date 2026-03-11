"use client";

import { useMemo, useState } from "react";
import { demoRules, flowSteps } from "@/content/site-content";

type MatchFragment = {
  ruleId: string;
  ruleTitle: string;
  token: string;
  start: number;
  end: number;
};

const presetTexts = [
  "Un mensaje repite que cierto grupo no pertenece aquí y que siempre arruina todo.",
  "La comunidad detecta una frase que culpa a un colectivo completo por un problema social.",
  "Texto neutral: se convoca a debatir reglas y registrar hallazgos sin activar lenguaje hostil.",
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findMatches(text: string): MatchFragment[] {
  const normalized = text.toLowerCase();
  const matches: MatchFragment[] = [];

  for (const rule of demoRules) {
    for (const token of rule.pattern) {
      const regex = new RegExp(escapeRegExp(token.toLowerCase()), "g");
      let match: RegExpExecArray | null = regex.exec(normalized);

      while (match) {
        matches.push({
          ruleId: rule.id,
          ruleTitle: rule.title,
          token,
          start: match.index,
          end: match.index + token.length,
        });
        match = regex.exec(normalized);
      }
    }
  }

  return matches.sort((a, b) => a.start - b.start);
}

function renderHighlightedText(text: string, matches: MatchFragment[]) {
  if (matches.length === 0) {
    return <p className="demo-preview-text">{text}</p>;
  }

  const segments: React.ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match, index) => {
    if (match.start > cursor) {
      segments.push(
        <span key={`plain-${index}-${cursor}`}>{text.slice(cursor, match.start)}</span>
      );
    }

    segments.push(
      <mark key={`mark-${match.ruleId}-${match.start}`} className="demo-highlight">
        {text.slice(match.start, match.end)}
      </mark>
    );

    cursor = match.end;
  });

  if (cursor < text.length) {
    segments.push(<span key={`tail-${cursor}`}>{text.slice(cursor)}</span>);
  }

  return <p className="demo-preview-text">{segments}</p>;
}

export function ProtocolDemo() {
  const [text, setText] = useState(presetTexts[0]);
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);

  const matches = useMemo(() => findMatches(text), [text]);

  const matchedRules = useMemo(() => {
    const activeRuleIds = new Set(matches.map((item) => item.ruleId));
    return demoRules.filter((rule) => activeRuleIds.has(rule.id));
  }, [matches]);

  const detectedTokens = useMemo(
    () => Array.from(new Set(matches.map((match) => match.token))),
    [matches]
  );

  const flowStatus = useMemo(() => {
    if (step === 0) {
      return "Cargá un texto o usá un ejemplo para ver cómo el sistema detectaría señales discursivas.";
    }

    if (step <= 2) {
      return "La comunidad y la capa lingüística identifican fragmentos que merecen revisión.";
    }

    if (step <= 4) {
      return "Las reglas consensuadas se contrastan con el texto y se registra el hallazgo analítico.";
    }

    return "La demo produce una salida pública legible: qué fragmentos se marcaron y por qué.";
  }, [step]);

  async function runFlow() {
    setRunning(true);
    setStep(0);
    for (let index = 1; index <= flowSteps.length; index += 1) {
      await new Promise((resolve) => setTimeout(resolve, 360));
      setStep(index);
    }
    setRunning(false);
  }

  return (
    <section className="panel stack-lg protocol-demo-shell">
      <div className="protocol-demo-head">
        <div>
          <p className="kicker">Simulador del protocolo</p>
          <h2>Demo visual de detección y consenso</h2>
          <p>
            En vez de mostrar sólo etapas abstractas, esta demo toma un texto breve,
            encuentra fragmentos problemáticos y muestra cómo la propuesta DAO-Ling
            los transformaría en un hallazgo explicable.
          </p>
        </div>
        <div className="demo-badges" aria-label="Capacidades del demo">
          <span>Detección de fragmentos</span>
          <span>Reglas activadas</span>
          <span>Salida pública legible</span>
        </div>
      </div>

      <div className="protocol-demo-grid">
        <div className="demo-control-panel">
          <label className="input-label" htmlFor="demo-text">
            Texto de prueba
          </label>
          <textarea
            id="demo-text"
            className="text-input demo-textarea"
            rows={5}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />

          <div className="demo-preset-row" aria-label="Ejemplos de texto">
            {presetTexts.map((preset) => (
              <button
                key={preset}
                type="button"
                className={`ghost-btn demo-preset-btn ${text === preset ? "demo-preset-btn-on" : ""}`}
                onClick={() => setText(preset)}
              >
                Usar ejemplo
              </button>
            ))}
          </div>

          <button type="button" className="primary-btn" onClick={runFlow} disabled={running}>
            {running ? "Analizando demo..." : "Ejecutar demo"}
          </button>

          <p className="demo-status-copy">{flowStatus}</p>
        </div>

        <div className="demo-visual-panel">
          <div className="demo-preview-card">
            <div className="demo-preview-head">
              <h3>Lectura del texto</h3>
              <span>{matches.length} fragmentos detectados</span>
            </div>
            {renderHighlightedText(text, matches)}
          </div>

          <div className="demo-signal-grid">
            <article className="demo-mini-card">
              <p className="diagram-label">Fragmentos marcados</p>
              {detectedTokens.length === 0 ? (
                <p className="muted">Sin coincidencias en este ejemplo.</p>
              ) : (
                <div className="chip-row">
                  {detectedTokens.map((token) => (
                    <span key={token} className="chip chip-solid">
                      {token}
                    </span>
                  ))}
                </div>
              )}
            </article>

            <article className="demo-mini-card">
              <p className="diagram-label">Resultado comunicable</p>
              <p>
                {matchedRules.length === 0
                  ? "El texto no activa reglas del set demo y se clasifica como ejemplo neutral."
                  : `El sistema explicaría ${matchedRules.length} regla(s) activada(s) con trazabilidad de fragmentos y criterios.`}
              </p>
            </article>
          </div>
        </div>
      </div>

      <ol className="step-list demo-step-list">
        {flowSteps.map((flowStep, index) => {
          const active = step > index;
          const current = step === index + 1;
          return (
            <li
              key={flowStep}
              className={`step-item ${active ? "step-item-on" : ""} ${current ? "demo-step-current" : ""}`}
            >
              <span className="step-index">{index + 1}</span>
              <span>{flowStep}</span>
            </li>
          );
        })}
      </ol>

      <div className="rule-box">
        <h3>Reglas activadas por el ejemplo</h3>
        {matchedRules.length === 0 ? (
          <p>No se activaron reglas en este ejemplo. Eso también es útil: permite comparar señales reales contra texto neutro.</p>
        ) : (
          <div className="vote-grid">
            {matchedRules.map((rule) => (
              <article key={rule.id} className="vote-card demo-rule-card">
                <p className="diagram-label">Regla activa</p>
                <h4>{rule.title}</h4>
                <p>{rule.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

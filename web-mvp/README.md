# Universal Hate Marks

Sitio estático en Next.js para presentar la tesis:
**"Universal Hate Marks: desarrollo blockchain contra el discurso de odio"**.

## Qué incluye

- Home con narrativa progresiva: social -> operativa -> técnica.
- FAQ, guía tipo GitBook, mapa conceptual y fases.
- Diagramas explicativos del funcionamiento de la propuesta DAO.
- Descarga directa de la tesis en PDF.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Build estático

```bash
npm run build
```

El proyecto usa `output: "export"` y está preparado para GitHub Pages.

## Estructura relevante

- `src/content/site-content.ts`: contenido editorial central.
- `src/app/page.tsx`: home.
- `src/components/home-primer.tsx`: bloque no técnico inicial.
- `src/components/home-technical-diagrams.tsx`: diagramas de operación.
- `src/app/guia/page.tsx`: guía resumida (15 puntos).
- `public/docs/tesis.pdf`: tesis completa para descarga.

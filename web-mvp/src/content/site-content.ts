export const siteMeta = {
  projectShortName: "Universal Hate Marks",
  projectFormalTitle: "Universal Hate Marks: desarrollo blockchain contra el discurso de odio",
  title: "Universal Hate Marks",
  subtitle:
    "Tesis de Máster en Dirección Estratégica e Innovación en la Comunicación",
  author: "Fernando Gonzalez Llanos",
  year: "2021-2022",
  director: "María de las Mercedes Cancelo Sanmartin",
  faculty: "Facultad de Ciencias de la Comunicación",
  lineaTematica: "Organizaciones y nuevas tecnologías",
};

export type HomeBlock = {
  title: string;
  body: string;
  kpiLabel: string;
  kpiValue: string;
};

export const homeBlocks: HomeBlock[] = [
  {
    title: "Problema",
    body: "La circulación de discursos de odio en contenidos virtuales escala más rápido que los mecanismos de respuesta institucional.",
    kpiLabel: "Urgencia",
    kpiValue: "Alta",
  },
  {
    title: "Propuesta",
    body: "Una DAO de especialistas en lenguaje que diseña reglas discursivas auditables para detectar patrones de odio.",
    kpiLabel: "Modelo",
    kpiValue: "DAO lingüística",
  },
  {
    title: "Mecánica",
    body: "Propuesta, debate, votación y registro en blockchain para construir un algoritmo de consenso transparente.",
    kpiLabel: "Flujo",
    kpiValue: "6 etapas",
  },
  {
    title: "Incentivos",
    body: "Economía interna con recompensas para creación, mejora y uso de reglas en beneficio del sistema.",
    kpiLabel: "Participación",
    kpiValue: "Tokenizada",
  },
  {
    title: "Salida",
    body: "Publicación de hallazgos y reportes para visibilizar la realidad discursiva y promover conciencia pública.",
    kpiLabel: "Impacto",
    kpiValue: "Comunicación social",
  },
];

export const socialFocusHighlights = [
  {
    title: "Protección de comunidades vulneradas",
    body: "El foco central es reducir exposición, normalización y reproducción del discurso de odio en entornos digitales.",
  },
  {
    title: "Debate público más sano",
    body: "La herramienta promueve decisiones informadas con evidencia abierta, sin automatizar castigos ni censuras.",
  },
  {
    title: "Respuesta colectiva y transparente",
    body: "Las reglas se diseñan y validan de forma descentralizada para reducir arbitrariedad y sesgos de poder.",
  },
];

export const nonTechUsageSteps = [
  {
    title: "1. La comunidad detecta casos",
    body: "Personas y organizaciones marcan contenidos o patrones preocupantes de manera colaborativa.",
  },
  {
    title: "2. La DAO convierte casos en reglas",
    body: "Equipos lingüísticos proponen, debaten y votan reglas con criterios explícitos.",
  },
  {
    title: "3. Se publican resultados comprensibles",
    body: "El sistema comunica hallazgos con trazabilidad metodológica y lectura accesible.",
  },
];

export const complexityLadders = [
  {
    level: "Nivel 1 · Social",
    summary: "Qué mejora: menos normalización del odio y más herramientas para convivencia democrática.",
  },
  {
    level: "Nivel 2 · Operativo",
    summary: "Cómo se usa: propuesta de regla, votación, ejecución analítica y comunicación pública.",
  },
  {
    level: "Nivel 3 · Técnico",
    summary: "Cómo funciona: contratos inteligentes, oráculos, consenso y registro verificable en blockchain.",
  },
];

export type EvidenceStat = {
  value: string;
  label: string;
  source: string;
};

export const evidenceStats: EvidenceStat[] = [
  {
    value: "+20%",
    label: "Aumento de discurso de odio durante la pandemia en Reino Unido y EE. UU.",
    source: "Síntesis de estudios citados en la tesis (Ditch the Label + Brandwatch)",
  },
  {
    value: "+71%",
    label: "Incremento anual reportado en Costa Rica",
    source: "Síntesis de referencia ONU incluida en la tesis",
  },
  {
    value: "+8%",
    label: "Suba de casos por orientación sexual y género en Andalucía (2020-2021)",
    source: "Observatorio Andaluz contra la Homofobia, Bifobia y Transfobia",
  },
];

export const executiveSummary = [
  "La tesis diseña una Organización Autónoma Descentralizada orientada al análisis de discurso de odio mediante reglas lingüísticas revisadas por pares.",
  "El enfoque combina teoría del discurso, gobernanza distribuida y trazabilidad blockchain para crear un proceso verificable de toma de decisiones.",
  "Las reglas propuestas por lingüistas y comunidad se debaten y votan; las aprobadas se registran como parte de un algoritmo de consenso.",
  "La arquitectura no depende de una autoridad central y prioriza transparencia, seguridad operativa y acceso público a resultados.",
  "El modelo incluye incentivos tokenizados para sostener participación y mejora continua en la construcción de reglas.",
  "El objetivo final es doble: producir inteligencia discursiva útil y comunicar hallazgos con impacto social.",
];

export const researchObjectives = {
  general:
    "Diseñar la estrategia para crear una DAO, soportada por blockchain, capaz de identificar discursos de odio en medios y redes mediante algoritmos de consenso, generando reportes y visibilización pública.",
  secondary: [
    "Evaluar si blockchain habilita el almacenamiento de reglas lingüísticas reutilizables.",
    "Diseñar procesos internos para descentralización organizativa e incentivos económicos sostenibles.",
    "Desarrollar un prototipo funcional de DAO conforme a la estructura propuesta.",
  ],
};

export const researchQuestions = [
  "¿Qué aportes concretos puede ofrecer la tecnología blockchain en la lucha contra los discursos de odio?",
  "¿Cómo puede construirse un algoritmo lingüístico de consenso entre participantes anónimos y distribuidos?",
];

export const justificationHighlights = [
  "El problema presenta escala global y crecimiento sostenido en contextos digitales de alta circulación.",
  "La propuesta no busca una solución total, sino crear una infraestructura complementaria con reglas transparentes y gobernanza abierta.",
  "La combinación de anonimato, descentralización y consenso reduce dependencia de intereses centralizados y habilita neutralidad operativa.",
  "El carácter exploratorio del proyecto reconoce límites, pero produce valor teórico y práctico para futuras aplicaciones.",
];

export type OperationalPillar = {
  title: string;
  summary: string;
  highlights: string[];
};

export const operationalPillars: OperationalPillar[] = [
  {
    title: "Comunidad",
    summary:
      "La DAO integra nodos lingüistas y comunidad ampliada para detectar casos prioritarios, debatir y proponer reglas.",
    highlights: [
      "Participación de especialistas y ciudadanía interpelada por la temática.",
      "Foros y votaciones para elevar casos relevantes a lingüistas.",
      "Retroalimentación continua entre reglas técnicas y demandas sociales.",
    ],
  },
  {
    title: "Operabilidad",
    summary:
      "Cada bloque incorpora reglas discursivas validadas; su acumulación forma un algoritmo de consenso para análisis de contenidos.",
    highlights: [
      "Aplicación inicial enfocada en idioma español e hispanohablantes.",
      "Capacidad de analizar medios, redes, foros y materiales públicos en línea.",
      "Comunicación de resultados como parte central del protocolo.",
    ],
  },
  {
    title: "Incentivos",
    summary:
      "La economía interna premia creación, revisión y uso efectivo de reglas para sostener participación y calidad.",
    highlights: [
      "Tokens por proponer reglas y mejorar reglas existentes.",
      "Tokens por propuestas comunitarias que se convierten en reglas operativas.",
      "Diseño económico orientado a continuidad y escalabilidad del sistema.",
    ],
  },
];

export const limitationsAndScope = {
  scope: [
    "Primera implementación orientada a contenidos en español.",
    "Sitio de tesis con enfoque demostrativo y pedagógico, sin backend productivo.",
    "Modelo conceptual-operativo de DAO, no despliegue real de blockchain.",
  ],
  limitations: [
    "No se afirma reducción automática del discurso de odio por la sola existencia del sistema.",
    "El desempeño depende de calidad de reglas, gobernanza y participación sostenida.",
    "Requiere validación progresiva en contextos reales y marcos normativos diversos.",
  ],
};

export type FaqCategory =
  | "Conceptos"
  | "Marco teórico"
  | "Operación DAO"
  | "Gobernanza y voto"
  | "Incentivos y tokenomics"
  | "Ética y límites"
  | "Escalabilidad";

export type FaqItem = {
  category: FaqCategory;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    category: "Conceptos",
    question: "¿Qué es DAO-Ling dentro de la tesis?",
    answer:
      "Es una propuesta de Organización Autónoma Descentralizada que articula expertos lingüísticos para crear y validar reglas contra discurso de odio.",
  },
  {
    category: "Conceptos",
    question: "¿Por qué blockchain y no una base de datos tradicional?",
    answer:
      "Porque la tesis prioriza trazabilidad pública, inmutabilidad de decisiones y gobernanza distribuida sobre reglas críticas.",
  },
  {
    category: "Conceptos",
    question: "¿Qué significa algoritmo de consenso en este contexto?",
    answer:
      "Significa que el sistema opera con reglas aprobadas colectivamente y no por una autoridad única.",
  },
  {
    category: "Marco teórico",
    question: "¿Qué aporta el análisis del discurso al diseño del sistema?",
    answer:
      "Aporta criterios para identificar intencionalidad, estigmatización, deíxis, polifonía y otros mecanismos de construcción de odio.",
  },
  {
    category: "Marco teórico",
    question: "¿Por qué se combinan lingüística y tecnología?",
    answer:
      "Porque la tesis asume que la complejidad del problema requiere teoría lingüística para definir reglas y tecnología para operarlas de forma escalable.",
  },
  {
    category: "Marco teórico",
    question: "¿Qué vacancia detecta el estado del arte?",
    answer:
      "Se identifica poca evidencia de DAOs orientadas específicamente a almacenar y gobernar reglas discursivas contra odio.",
  },
  {
    category: "Operación DAO",
    question: "¿Cómo entra una regla al sistema?",
    answer:
      "Se propone, debate y vota. Si supera umbral, se registra y queda disponible para ejecución analítica.",
  },
  {
    category: "Operación DAO",
    question: "¿Qué rol tiene la comunidad no especialista?",
    answer:
      "Puede señalar casos, priorizar contenidos y participar en foros para orientar focos de trabajo de lingüistas.",
  },
  {
    category: "Operación DAO",
    question: "¿Qué contenidos puede analizar el modelo?",
    answer:
      "Redes sociales, foros, medios digitales, discursos públicos y materiales online definidos como prioritarios por votación.",
  },
  {
    category: "Operación DAO",
    question: "¿El sistema publica resultados automáticamente?",
    answer:
      "La lógica propuesta incluye una etapa específica de comunicación de hallazgos para visibilización social.",
  },
  {
    category: "Gobernanza y voto",
    question: "¿Quién tiene poder de decisión?",
    answer:
      "Los nodos con derecho a voto definidos por el protocolo. La tesis enfatiza horizontalidad y ausencia de jerarquías rígidas.",
  },
  {
    category: "Gobernanza y voto",
    question: "¿Cómo se evita captura política del sistema?",
    answer:
      "Se propone anonimato operativo, reglas de gobernanza públicas y registro transparente de decisiones.",
  },
  {
    category: "Gobernanza y voto",
    question: "¿Qué pasa con reglas rechazadas?",
    answer:
      "Se conservan con historial argumental para revisión futura y mejora iterativa.",
  },
  {
    category: "Incentivos y tokenomics",
    question: "¿Por qué incorporar incentivos económicos?",
    answer:
      "Para sostener participación especializada en el tiempo y recompensar aportes de valor dentro de la DAO.",
  },
  {
    category: "Incentivos y tokenomics",
    question: "¿Qué acciones reciben tokens según la tesis?",
    answer:
      "Creación de reglas, mejoras sobre reglas existentes, propuestas comunitarias útiles y uso efectivo de reglas en análisis.",
  },
  {
    category: "Incentivos y tokenomics",
    question: "¿La economía interna reemplaza motivación social?",
    answer:
      "No. Se plantea como complemento para continuidad operativa y no como sustituto del compromiso social.",
  },
  {
    category: "Ética y límites",
    question: "¿Cómo se evita amplificar contenido dañino?",
    answer:
      "La web utiliza ejemplos neutros y explica patrones sin replicar expresiones explícitas de odio.",
  },
  {
    category: "Ética y límites",
    question: "¿Este sistema censura automáticamente?",
    answer:
      "No. La tesis propone una herramienta de análisis y visibilización, no un mecanismo punitivo automático.",
  },
  {
    category: "Ética y límites",
    question: "¿Qué relación tiene con marcos legales?",
    answer:
      "Se plantea una base documental para contextualizar resultados frente a normativas vigentes.",
  },
  {
    category: "Ética y límites",
    question: "¿Cuáles son los principales riesgos?",
    answer:
      "Sesgos en reglas, baja diversidad de nodos, incentivos mal calibrados y sobrerrepresentación de ciertos contextos discursivos.",
  },
  {
    category: "Escalabilidad",
    question: "¿Puede extenderse a otros idiomas?",
    answer:
      "Sí, pero requiere reconstrucción lingüística por idioma y nuevas rondas de validación comunitaria.",
  },
  {
    category: "Escalabilidad",
    question: "¿Cómo crecería hacia otros escenarios?",
    answer:
      "La metodología puede adaptarse a desinformación, discriminación sectorial u otros conflictos de lenguaje público.",
  },
  {
    category: "Escalabilidad",
    question: "¿Qué condición es clave para escalar?",
    answer:
      "Gobernanza sólida, datos de calidad y comunidad activa con incentivos alineados al propósito.",
  },
];

export type Phase = {
  id: string;
  title: string;
  focus: string;
  milestones: string[];
  deliverables: string[];
  readinessCriteria: string[];
};

export const phases: Phase[] = [
  {
    id: "Fase 1",
    title: "Estrategia inicial",
    focus:
      "Diseño del modelo DAO, estructura de nodos, tokenomics, reglas y prototipo técnico de prueba.",
    milestones: [
      "Niveles de la DAO, oráculos y flujo operacional",
      "Plan de nodos y descentralización",
      "Plan de comunicación inicial",
      "Tokenomics, gobernanza y contingencias",
      "Generación de reglas y proceso de evaluación",
    ],
    deliverables: [
      "Arquitectura funcional del protocolo",
      "Matriz de reglas discursivas iniciales",
      "Prototipo de DAO para testeo interno",
    ],
    readinessCriteria: [
      "Reglas mínimas viables definidas",
      "Rondas de votación operativas",
      "Documentación técnica base cerrada",
    ],
  },
  {
    id: "Fase 2",
    title: "Estructura colaborativa descentralizada",
    focus:
      "Consolidación de la comunidad, financiamiento inicial y primera ronda formal de votación DAO.",
    milestones: [
      "Obtención de fondos",
      "Partes del aplicativo algorítmico",
      "Primera votación de nodos DAO",
    ],
    deliverables: [
      "Estructura operativa de comunidad y roles",
      "Reglamento de participación y priorización de casos",
      "Set ampliado de reglas validadas",
    ],
    readinessCriteria: [
      "Masa crítica de participantes",
      "Flujo de propuestas estable",
      "Indicadores de actividad comunitaria sostenida",
    ],
  },
  {
    id: "Fase 3",
    title: "Diseño operacional",
    focus:
      "Puesta en marcha del protocolo con comunicación de resultados y expansión de impacto.",
    milestones: [
      "Incorporación de comunidad ampliada",
      "Plan de comunicación de resultados",
      "Puesta en marcha del protocolo",
    ],
    deliverables: [
      "Reportes periódicos de hallazgos",
      "Canales digitales de difusión activos",
      "Sistema de retroalimentación para mejora continua",
    ],
    readinessCriteria: [
      "Resultados comunicables con metodología explícita",
      "Ciclo de análisis-comunicación estable",
      "Plan de escalamiento definido",
    ],
  },
];

export type GroupNode = {
  id: string;
  name: string;
  short: string;
  aporte: string;
  reglas: string;
  ejemploNeutral: string;
  validacion: string;
  region: string;
  operationalRole: string;
  relatedPhase: string;
};

export const linguistGroups: GroupNode[] = [
  {
    id: "cda",
    name: "Análisis del discurso",
    short: "CDA",
    aporte: "Define señales de estigmatización, deslegitimación y construcción de antagonismos.",
    reglas: "Reglas sobre enunciación, ethos y marcas discursivas de exclusión.",
    ejemploNeutral:
      "Identificación de generalizaciones absolutas que anulan singularidad de grupos.",
    validacion: "Debate por pares con trazabilidad de argumentos.",
    region: "Cono Sur",
    operationalRole: "Diseño de reglas núcleo y revisión semántica avanzada.",
    relatedPhase: "Fase 1",
  },
  {
    id: "socio",
    name: "Sociolingüística",
    short: "SOC",
    aporte: "Incorpora variación lingüística, contexto social y diferencias territoriales.",
    reglas: "Reglas contextuales según comunidad, registro y situación comunicativa.",
    ejemploNeutral:
      "Detección de etiquetas degradantes asociadas a identidad social y territorial.",
    validacion: "Contraste entre regiones y ajustes por sesgo contextual.",
    region: "Andina",
    operationalRole: "Adaptación regional y control de validez externa.",
    relatedPhase: "Fase 2",
  },
  {
    id: "corpus",
    name: "Lingüística de corpus",
    short: "COR",
    aporte: "Estructura corpus, frecuencias y coocurrencias para análisis reproducible.",
    reglas: "Umbrales de repetición y patrones de asociación léxica.",
    ejemploNeutral:
      "Aumento sistemático de combinaciones lingüísticas en contextos de hostilidad.",
    validacion: "Muestreo por lotes y versionado documental.",
    region: "Iberia",
    operationalRole: "Curaduría de datos y métricas de calidad de reglas.",
    relatedPhase: "Fase 2",
  },
  {
    id: "nlp",
    name: "Lingüística computacional",
    short: "NLP",
    aporte: "Traduce reglas discursivas en lógica ejecutable y auditable.",
    reglas: "Matchers, normalización textual y priorización de reglas activas.",
    ejemploNeutral:
      "Activación por coincidencia de estructura sintáctica definida en consenso.",
    validacion: "Pruebas funcionales y trazas de ejecución.",
    region: "Global",
    operationalRole: "Implementación técnica y gobernanza de versiones.",
    relatedPhase: "Fase 3",
  },
  {
    id: "ethics",
    name: "Moderación y ética",
    short: "ETH",
    aporte: "Define límites de uso, daño potencial y criterios de responsabilidad.",
    reglas: "Políticas de privacidad, sesgo y no amplificación de contenido dañino.",
    ejemploNeutral:
      "Presentación anonimizada de casos con foco pedagógico y legal.",
    validacion: "Comité de revisión ética y auditoría de decisiones.",
    region: "Global",
    operationalRole: "Control de riesgo y cumplimiento de principios.",
    relatedPhase: "Fase 3",
  },
];

export const glossaryItems = [
  {
    term: "DAO",
    definition:
      "Organización Autónoma Descentralizada que coordina decisiones mediante reglas y votaciones transparentes.",
  },
  {
    term: "Blockchain",
    definition:
      "Infraestructura distribuida que registra operaciones de forma trazable e inmutable.",
  },
  {
    term: "Contrato inteligente",
    definition:
      "Código que ejecuta condiciones predefinidas sin necesidad de intermediación manual.",
  },
  {
    term: "Oráculo",
    definition:
      "Mecanismo que conecta el protocolo con datos o eventos externos verificables.",
  },
  {
    term: "Tokenomics",
    definition:
      "Diseño económico de incentivos, emisión y distribución de tokens en el ecosistema.",
  },
  {
    term: "Regla discursiva",
    definition:
      "Patrón lingüístico formalizado para identificar señales de discurso de odio.",
  },
  {
    term: "Consenso",
    definition:
      "Aprobación colectiva de reglas y decisiones para operar sin autoridad central única.",
  },
  {
    term: "Nodo",
    definition:
      "Participante de la red con rol activo en propuesta, debate, votación o auditoría.",
  },
  {
    term: "Deíxis",
    definition:
      "Marcas lingüísticas que sitúan el enunciado en relación con sujetos, tiempo y contexto.",
  },
  {
    term: "Modalidad enunciativa",
    definition:
      "Intencionalidad del emisor para implicar, persuadir o influir mediante el enunciado.",
  },
  {
    term: "Ethos",
    definition:
      "Imagen del enunciador que se construye en el discurso y condiciona su credibilidad.",
  },
  {
    term: "Dialogismo",
    definition:
      "Interacción de voces y sentidos entre discursos que se referencian mutuamente.",
  },
  {
    term: "Polifonía enunciativa",
    definition:
      "Convivencia de múltiples voces dentro de un mismo enunciado.",
  },
  {
    term: "Semiosis social",
    definition:
      "Producción social de sentido en redes discursivas históricas y contextuales.",
  },
  {
    term: "Condiciones de producción",
    definition:
      "Factores que restringen o habilitan cómo se genera un discurso.",
  },
  {
    term: "Condiciones de reconocimiento",
    definition:
      "Factores que condicionan la recepción e interpretación del discurso.",
  },
  {
    term: "Circulación discursiva",
    definition:
      "Desplazamiento de sentidos entre contextos diversos con desfasajes interpretativos.",
  },
  {
    term: "Gobernanza descentralizada",
    definition:
      "Conjunto de reglas de decisión distribuida con mecanismos de control comunitario.",
  },
  {
    term: "Trazabilidad",
    definition:
      "Capacidad de reconstruir el historial de decisiones, cambios y responsables en el sistema.",
  },
  {
    term: "Visibilización",
    definition:
      "Estrategia comunicacional para convertir hallazgos analíticos en conciencia pública.",
  },
];

export const flowSteps = [
  "Propuesta de regla",
  "Debate entre nodos",
  "Votación",
  "Registro en blockchain",
  "Ejecución analítica",
  "Comunicación de resultados",
];

export type DiagramCard = {
  id: string;
  title: string;
  source: string;
  note: string;
  section: "como-funciona" | "fases";
};

export const diagramCards: DiagramCard[] = [
  {
    id: "nodos",
    title: "Estructura de nodos lingüistas",
    source: "Fuente: Elaboración propia (tesis)",
    note:
      "Representa la red de especialistas que proponen, revisan y votan reglas en un esquema horizontal.",
    section: "como-funciona",
  },
  {
    id: "comunidad",
    title: "Articulación interna de comunidad DAO",
    source: "Fuente: Elaboración propia (tesis)",
    note:
      "Muestra la relación operativa entre comunidad, nodos lingüistas y capa de gobernanza.",
    section: "como-funciona",
  },
  {
    id: "canales",
    title: "Contenidos y canales analizables",
    source: "Fuente: Elaboración propia (tesis)",
    note:
      "Expone los espacios digitales sobre los que puede operar el algoritmo de consenso.",
    section: "como-funciona",
  },
  {
    id: "ciclo",
    title: "Ciclo completo de funcionamiento",
    source: "Fuente: Elaboración propia (tesis)",
    note:
      "Resume el circuito continuo de propuesta, validación, análisis y comunicación pública.",
    section: "fases",
  },
  {
    id: "economia",
    title: "Distribución y gestión de economía interna",
    source: "Fuente: Elaboración propia (tesis)",
    note:
      "Describe cómo los incentivos tokenizados sostienen la colaboración entre comunidad y expertos.",
    section: "fases",
  },
];

export const demoRules = [
  {
    id: "r1",
    title: "Generalización absoluta sobre grupos",
    pattern: ["todos", "ninguno", "siempre", "nunca"],
    description: "Marca enunciados que anulan matices y favorecen dinámicas de exclusión.",
  },
  {
    id: "r2",
    title: "Llamado a excluir colectivos",
    pattern: ["expulsar", "prohibir", "echar"],
    description: "Detecta propuestas de apartar grupos de espacios o derechos.",
  },
  {
    id: "r3",
    title: "Deslegitimación identitaria",
    pattern: ["no merecen", "no pertenecen", "no tienen derecho"],
    description: "Identifica negaciones de legitimidad social en torno a identidades.",
  },
  {
    id: "r4",
    title: "Atribución de culpa colectiva",
    pattern: ["culpa de", "arruinan", "destruyen"],
    description: "Advierte asignación de culpa global a una comunidad.",
  },
  {
    id: "r5",
    title: "Deshumanización indirecta",
    pattern: ["son una plaga", "son basura", "hay que limpiar"],
    description: "Alerta sobre marcos discursivos de cosificación o degradación extrema.",
  },
];

export type DownloadItem = {
  name: string;
  status: string;
  note: string;
  href?: string;
};

export const downloadItems: DownloadItem[] = [
  {
    name: "Tesis completa (PDF)",
    status: "Disponible",
    note: "Descarga directa del documento completo de tesis.",
    href: "/docs/tesis.pdf",
  },
];

export type HomeTechnicalDiagram = {
  id: string;
  title: string;
  caption: string;
  source: string;
};

export const homeTechnicalDiagrams: HomeTechnicalDiagram[] = [
  {
    id: "pipeline-consenso",
    title: "Pipeline de consenso blockchain",
    caption:
      "Muestra cómo una propuesta lingüística se convierte en regla activa tras debate, votación y registro en cadena.",
    source: "Síntesis técnica basada en fases operativas de la tesis.",
  },
  {
    id: "arquitectura-ejecucion",
    title: "Arquitectura de ejecución y trazabilidad",
    caption:
      "Representa el flujo de análisis: oráculos de contenido, evaluación por reglas, registro auditable y comunicación de hallazgos.",
    source: "Síntesis técnica basada en capítulos de operabilidad y tokenomics.",
  },
];

export type GuideTopic = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const guideTopics: GuideTopic[] = [
  {
    id: "01-problema",
    title: "Problema que aborda",
    summary:
      "El proyecto responde al aumento de discursos de odio en entornos digitales y a la necesidad de mecanismos más transparentes.",
    bullets: [
      "Escala de circulación mayor que la capacidad de respuesta tradicional.",
      "Requiere intervención lingüística y no solo tecnológica.",
    ],
  },
  {
    id: "02-vision",
    title: "Visión del proyecto",
    summary:
      "Construir una infraestructura colaborativa para detectar patrones de odio y comunicar evidencia con impacto social.",
    bullets: [
      "Modelo descentralizado, auditado y participativo.",
      "Orientación inicial al ecosistema hispanohablante.",
    ],
  },
  {
    id: "03-arquitectura-dao",
    title: "Arquitectura DAO",
    summary:
      "La organización opera con nodos distribuidos que proponen, mejoran y votan reglas discursivas sin jerarquías rígidas.",
    bullets: [
      "Gobernanza horizontal con trazabilidad de decisiones.",
      "Separación entre capa social y capa operativa técnica.",
    ],
  },
  {
    id: "04-roles-nodos",
    title: "Roles de nodos",
    summary:
      "Lingüistas, comunidad y perfiles técnicos cumplen funciones complementarias para sostener calidad y escala del sistema.",
    bullets: [
      "Especialistas diseñan y validan reglas.",
      "Comunidad prioriza casos y aporta contexto.",
    ],
  },
  {
    id: "05-smart-contracts",
    title: "Contratos inteligentes",
    summary:
      "Los acuerdos de gobernanza y recompensas se formalizan en contratos ejecutables, minimizando arbitrariedad operativa.",
    bullets: [
      "Definen lógica de votación y umbrales de aceptación.",
      "Automatizan reglas de incentivos y registro.",
    ],
  },
  {
    id: "06-oraculos",
    title: "Oráculos y entrada de datos",
    summary:
      "Los oráculos conectan la DAO con fuentes externas de contenido para activar análisis sin comprometer trazabilidad.",
    bullets: [
      "Integran eventos o datasets fuera de la cadena.",
      "Habilitan ejecución sobre canales priorizados.",
    ],
  },
  {
    id: "07-cadena-reglas",
    title: "Cadena de reglas discursivas",
    summary:
      "Cada bloque incorpora reglas votadas; la acumulación crea una base evolutiva para análisis de discurso.",
    bullets: [
      "Versionado continuo de conocimiento lingüístico.",
      "Historial verificable de cada regla activa.",
    ],
  },
  {
    id: "08-algoritmo-consenso",
    title: "Algoritmo de consenso",
    summary:
      "No depende de un actor central; se alimenta del acuerdo entre participantes y del desempeño de reglas en contexto.",
    bullets: [
      "Convergencia por votación distribuida.",
      "Ajuste iterativo ante nuevos escenarios discursivos.",
    ],
  },
  {
    id: "09-tokenomics",
    title: "Tokenomics e incentivos",
    summary:
      "El modelo económico premia aportes útiles para sostener participación y mejora técnica del sistema.",
    bullets: [
      "Tokens por crear, refinar y activar reglas.",
      "Incentivos también para contribuciones comunitarias.",
    ],
  },
  {
    id: "10-gobernanza-voto",
    title: "Gobernanza y voto",
    summary:
      "Las decisiones clave sobre reglas, prioridades y evolución del protocolo se toman por mecanismos de voto definidos.",
    bullets: [
      "Criterios explícitos y auditables.",
      "Registro permanente de resultados de cada ronda.",
    ],
  },
  {
    id: "11-comunicacion",
    title: "Comunicación de resultados",
    summary:
      "La salida del sistema no es solo técnica: se publica en formatos comprensibles para visibilizar fenómenos discursivos.",
    bullets: [
      "Reportes periódicos con trazabilidad metodológica.",
      "Difusión por canales digitales para alcance social.",
    ],
  },
  {
    id: "12-etica-limites",
    title: "Ética y límites",
    summary:
      "La propuesta reconoce límites: no sustituye juicio humano ni garantiza por sí sola reducción del odio en redes.",
    bullets: [
      "Necesita revisión ética y control de sesgos.",
      "Evita amplificar expresiones explícitas de daño.",
    ],
  },
  {
    id: "13-fases",
    title: "Fases de implementación",
    summary:
      "El roadmap avanza desde diseño estratégico y prototipo hasta puesta en marcha operativa y comunicación pública.",
    bullets: [
      "Fase 1: diseño y prueba base.",
      "Fase 2-3: escalado comunitario y operación.",
    ],
  },
  {
    id: "14-metricas",
    title: "Métricas de éxito",
    summary:
      "El desempeño se evalúa por calidad de reglas, participación sostenida y capacidad de producir resultados comunicables.",
    bullets: [
      "Indicadores de actividad y validación por fase.",
      "Seguimiento de cobertura y precisión discursiva.",
    ],
  },
  {
    id: "15-escalabilidad",
    title: "Escalabilidad futura",
    summary:
      "La metodología puede extenderse a otros idiomas y dominios, manteniendo gobernanza y validación adaptadas al contexto.",
    bullets: [
      "Requiere nuevos marcos lingüísticos por idioma.",
      "Puede adaptarse a otros conflictos de lenguaje público.",
    ],
  },
];

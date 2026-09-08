type DiagramType = 'rag-audit' | 'whatsapp-agent' | 'voice-sim' | 'megan' | 'vr-street'

type Pill = { text: string; color: string; border: string; glow?: string; pulse?: boolean }
type MetricItem = { value: string; label: string; sub: string; color: string; border: string; glow?: string }
type ProjectItem = {
  sysId: string
  stats: string
  eyebrow: string
  title: string
  description: string
  impactLabel: string
  impact: string
  tags: string[]
  diagram: DiagramType
  accent: string
  border: string
  wide?: boolean
}
type RoleDetail = { title: string; text: string; color: string }
type Role = {
  title: string
  company: string
  period: string
  badge?: string
  accent: string
  border: string
  description: string
  details?: RoleDetail[]
}
type SkillGroup = { code: string; icon: string; title: string; accent: string; tags: string[]; footer: string }
type NavLink = { label: string; href: string }

export interface Strings {
  nav: { links: NavLink[]; subtitle: string; badge: string; toggleLabel: string }
  hero: {
    sysRun: string
    loc: string
    tel: string
    status: string
    identity: string
    headline1: string
    headline2: string
    roleLine: string
    introPre: string
    introStrong: string
    introPost: string
    commLinkLabel: string
    location: string
    pills: Pill[]
    ctaView: string
    ctaExperience: string
    ctaLinkedIn: string
    ctaGithub: string
    terminal: { title: string; suite: string; cmd: string; line1: string; line2: string; status: string }
  }
  metrics: { kicker: string; badge: string; items: MetricItem[] }
  projects: { kicker: string; title: string; badge: string; items: ProjectItem[] }
  experience: {
    kicker: string
    title: string
    badge: string
    roles: Role[]
    education: { kicker: string; title: string; textBefore: string; textStrong: string; textAfter: string; tags: string[] }
  }
  skills: { kicker: string; title: string; badge: string; groups: SkillGroup[] }
  contact: {
    kicker: string
    title: string
    description: string
    emailLabel: string
    phoneLabel: string
    baseLocLabel: string
    baseLoc: string
    btnTransmit: string
    btnLinkedIn: string
    btnGithub: string
  }
  cv: { kicker: string; title: string; description: string; btnLabel: string; meta: string; fileLabel: string; fileName: string }
  footer: { status: string; copyright: string }
}

export type Lang = 'en' | 'es'

export const en: Strings = {
  nav: {
    subtitle: '> AI PROJECT MANAGER & IMPLEMENTATION ENGINEER',
    badge: '[AI_PM.SYS]',
    toggleLabel: 'Language',
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Metrics', href: '#metrics' },
      { label: 'CV', href: '#cv' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    sysRun: 'SYS.RUN // AI_TRANSFORMATION::MEGACABLE [ACTIVE_100K_USERS]',
    loc: 'LOC: GUADALAJARA, JALISCO, MX',
    tel: 'TEL: (+52) 311 373 8261',
    status: 'STATUS: PRODUCTION_STABLE',
    identity: '> IDENTITY::INITIALIZED // AI_PROJECT_MANAGER & IMPLEMENTATION_ENGINEER',
    headline1: 'BUILDING THE',
    headline2: 'NEURAL FUTURE.',
    roleLine: 'AI Project Manager | AI Implementation Engineer | Software Engineer',
    introPre:
      'Bridging the gap between enterprise AI strategy, corporate governance, and hands-on engineering. Currently driving AI transformation at Megacable serving ',
    introStrong: '100,000+ monthly users',
    introPost:
      ' across multi-agent generative systems, real-time RAG diagnostic engines, and high-concurrency telephony platforms.',
    commLinkLabel: '> COMM_LINK:',
    location: 'Guadalajara, Jalisco, Mexico',
    pills: [
      { text: '[100K+ USERS]', color: '#00ffff', border: 'rgba(0,255,255,0.3)', glow: 'rgba(0,255,255,0.2)' },
      { text: '[60%+ AUTO-RESOLUTION]', color: '#ff8ff7', border: 'rgba(255,0,255,0.3)', glow: 'rgba(255,0,255,0.2)' },
      { text: '[RAG & LLM-AS-A-JUDGE]', color: '#39ff14', border: 'rgba(57,255,20,0.3)', glow: 'rgba(57,255,20,0.25)', pulse: true },
      { text: '[VIBECODING & AGILE]', color: '#00ffff', border: 'rgba(0,255,255,0.2)', glow: undefined },
      { text: '[AWS / GCP / AZURE]', color: '#ffb7f2', border: 'rgba(255,183,242,0.2)', glow: undefined },
    ],
    ctaView: 'VIEW KEY PROJECTS',
    ctaExperience: 'ENTERPRISE EXPERIENCE',
    ctaLinkedIn: 'CONNECT ON LINKEDIN',
    ctaGithub: 'GITHUB: @MoonRiver75',
    terminal: {
      title: 'session::root@ai-core-01:~$',
      suite: 'FIELD_AUDIT_ENGINE // ORCHESTRATOR',
      cmd: 'python -m field_audit.engine --system "FIELD_AUDIT_V1" --telemetry "SIGNAL, GEO, IMG" --scale 100k',
      line1:
        '[SYSTEM] Ingestion stream linked: Evaluating field technician validation payloads via Geolocation + Image Computer Vision...',
      line2:
        '[TELEMETRY] Link budget verified | Geo-fence delta within limits | Optical power threshold: PASS',
      status:
        '[STATUS] 100K+ queries processed | Validation accuracy: HIGH | Escalation containment: SUSTAINED | Autonomous escalation: ACTIVE',
    },
  },
  metrics: {
    kicker: '// ENTERPRISE_METRICS_HUD :: REAL_WORLD_PRODUCTION_IMPACT',
    badge: 'VALIDATED: PRODUCTION CLUSTER // 2025-2026 CYCLE',
    items: [
      { value: '100K+', label: 'Monthly Active Users', sub: 'Across Production Agents', color: '#00ffff', border: 'rgba(0,255,255,0.3)', glow: 'rgba(0,255,255,0.1)' },
      { value: '60%+', label: 'Automated Resolution', sub: 'WhatsApp AI Agent', color: '#ff8ff7', border: 'rgba(255,143,247,0.4)', glow: 'rgba(255,0,255,0.1)' },
      { value: '70K+', label: 'Monthly Inquiries', sub: 'Self-Contained', color: '#39ff14', border: 'rgba(57,255,20,0.4)', glow: 'rgba(57,255,20,0.1)' },
      { value: '×10+', label: 'Query Scaling', sub: 'SCALE: Field Audit', color: '#00ffff', border: 'rgba(0,255,255,0.3)' },
      { value: '80%', label: 'Quality Score', sub: '29 Intents in 1.5 Mos', color: '#39ff14', border: 'rgba(57,255,20,0.3)' },
      { value: '$100K+', label: 'MXN State Budget', sub: 'Tech Innovation Grant', color: '#00ffff', border: 'rgba(0,255,255,0.3)' },
    ],
  },
  projects: {
    kicker: '// 01_FEATURED_PRODUCTION_PROJECTS',
    title: 'Engineered AI Architectures & Systems',
    badge: 'PORTFOLIO SCOPE: 5 PRODUCTION GRADE DEPLOYMENTS',
    items: [
      {
        sysId: 'RAG-AUDIT-2026',
        stats: 'SCALE: 10K+/MO',
        eyebrow: '● TELECOMMUNICATIONS AUDIT & CV',
        title: 'RAG Field Auditor | AI Assistant (2026)',
        description:
          "Challenge & Architecture: Auditing field technician 'actas' and validation documents. Built an ingestion pipeline parsing structured telemetry (network signal metrics), cross-referencing corporate operational policy in an isolated vector RAG system with image and geolocation Computer Vision verification.",
        impactLabel: 'Quantified Impact:',
        impact:
          'Scaled system capacity to tens of thousands of monthly queries; reduced validation discrepancies and automated escalation pathways.',
        tags: ['RAG', 'Mobile App', 'Computer Vision', 'Geolocation', 'Telemetry Audit'],
        diagram: 'rag-audit',
        accent: '#00ffff',
        border: 'rgba(0,255,255,0.3)',
      },
      {
        sysId: 'WA-SUPPORT-AGENT',
        stats: 'USERS: 100K+/MO',
        eyebrow: '● CONVERSATIONAL AI & TELCO SUPPORT',
        title: 'WhatsApp TV Support AI Agent (2025 - 2026)',
        description:
          'Challenge & Architecture: Production conversational solution mapped across 29 customer intents in 1.5 months. Integrated AWS Generative Language Models with WhatsApp Business API, external vendor frameworks, and rigorous LLM-as-a-Judge evaluations.',
        impactLabel: 'Quantified Impact:',
        impact:
          '100K+ monthly users; achieved a 60%+ auto-resolution rate, containing 70K+ inquiries monthly with seamless click-to-call human fallback.',
        tags: ['NLP', 'AWS Bedrock/LLMs', 'WhatsApp API', 'External Vendor Integration', 'LLM-as-a-Judge'],
        diagram: 'whatsapp-agent',
        accent: '#ff8ff7',
        border: 'rgba(255,143,247,0.4)',
      },
      {
        sysId: 'VOICE-SIM-2026',
        stats: 'RETENTION: IMPROVED',
        eyebrow: '● REAL-TIME VOICE SIMULATION & MLOPS',
        title: 'AI Call-Center Voice Training Simulator (2026)',
        description:
          'Challenge & Architecture: High call-center turnover and long onboarding cycles. Engineered an AWS serverless architecture (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) with dynamic prompt generation across diverse customer personas and fatal-error policy detection.',
        impactLabel: 'Quantified Impact:',
        impact:
          'Reduced operational staff turnover significantly; cut training time from weeks to days with live scoring.',
        tags: ['AWS Bedrock', 'WebSocket', 'DuckDB', 'DeepDub', 'Serverless'],
        diagram: 'voice-sim',
        accent: '#39ff14',
        border: 'rgba(57,255,20,0.4)',
      },
      {
        sysId: 'ENT-COPILOT-2026',
        stats: 'CORE::ENTERPRISE_RAG',
        eyebrow: '● INTERNAL COPILOT & CORPORATE INTELLIGENCE',
        title: 'Enterprise AI Copilot (2026 - Active)',
        description:
          'Challenge & Architecture: Enterprise Product Management of internal generative copilot. Combines proprietary RAG architectures with distributed local LLMs (Ollama / vLLM) for ultra-secure, air-gapped corporate document search, HR automation, and strategic synthesis.',
        impactLabel: 'Strategic Impact:',
        impact:
          'Empowered executive and operational tiers with real-time verified knowledge retrieval under stringent corporate data sovereignty.',
        tags: ['Enterprise PM', 'RAG Architecture', 'Local LLMs', 'Data Sovereignty'],
        diagram: 'megan',
        accent: '#00ffff',
        border: 'rgba(0,255,255,0.3)',
      },
      {
        sysId: 'CICESE-VR-STREET',
        stats: 'CLINICAL: 35+ AUTISTIC CHILDREN',
        eyebrow: '● VR THERAPEUTIC ENVIRONMENT & SPATIAL COMPUTING',
        title: 'Street Simulator | VR Therapeutic Environment (2024 - 2025)',
        description:
          'Challenge & Architecture: Led Agile/Scrum development as Scrum Master and Software Engineer to create an immersive, low-anxiety VR simulation for autistic children to master street crossing and sensory management. Architected Unity C# physics with real-time geospatial telemetry tracking and Azure/PostgreSQL backend analytics.',
        impactLabel: 'Quantified Clinical Impact:',
        impact:
          'Benefited 35+ children in clinical trials; verified measurable improvement in cognitive hazard identification and autonomic composure.',
        tags: ['Scrum Master', 'Unity VR', 'C#', 'PostgreSQL', 'Azure Cloud', 'Biometric Analytics'],
        diagram: 'vr-street',
        accent: '#ff8ff7',
        border: 'rgba(255,143,247,0.4)',
        wide: true,
      },
    ],
  },
  experience: {
    kicker: '// 02_ENTERPRISE_CHRONOLOGY',
    title: 'Professional Experience & Leadership',
    badge: 'EXECUTIVE GOVERNANCE & IMPLEMENTATION TIMELINE',
    roles: [
      {
        title: 'AI Project Manager & Implementation Engineer',
        company: 'MEGACABLE // Guadalajara, Jalisco, Mexico',
        period: '2025 - PRESENT // ACTIVE',
        badge: '[CURRENT]',
        accent: '#00ffff',
        border: '#00ffff',
        description:
          'Reporting directly to the Chief AI Officer (CAIO), steering the end-to-end artificial intelligence portfolio serving 100,000+ monthly users. Leading multi-disciplinary squads across conversational engineering, computer vision auditing, and automated voice simulation.',
        details: [
          {
            title: '> Enterprise Governance:',
            text: 'Evaluating enterprise systems (including Oracle Fusion Cloud HCM), Generative Language Models (GLM) selection, and multi-cloud security compliance.',
            color: '#00ffff',
          },
          {
            title: '> Modern Methodology:',
            text: 'Designing operational architectures with Mermaid.js, PlantUML, and Eraser.io; spearheading Vibecoding rapid prototyping and Agile sprints.',
            color: '#ff8ff7',
          },
          {
            title: '> Enterprise Adoption:',
            text: 'Driving corporate rollouts of Microsoft Copilot Pro, NotebookLM, and internal fine-tuned knowledge systems.',
            color: '#39ff14',
          },
        ],
      },
      {
        title: 'Video Game Designer & Software Engineer',
        company: 'CICESE - UNIDAD DE TRANSFERENCIA TECNOLÓGICA (UAT) // Nayarit, Mexico',
        period: '2024 - 2025',
        accent: '#39ff14',
        border: '#39ff14',
        description:
          'Designed and developed interactive systems as part of a cross-functional Agile team, applying software engineering practices to game and simulation design — including the therapeutic VR project Street Simulator serving 35+ autistic children in clinical trials.',
      },
      {
        title: 'State Technology Advisor & Innovation Coordinator',
        company: 'GOVERNMENT OF NAYARIT // Tepic, Nayarit, Mexico',
        period: 'JUNE 2024 - PRESENT',
        accent: '#ff8ff7',
        border: '#ff8ff7',
        description:
          'Coordinating technology initiatives and innovation proposals across the state of Nayarit, impacting 100,000+ students and youth; secured an accumulated budget of over $100K MXN in state innovation grants.',
      },
    ],
    education: {
      kicker: '[ACADEMIC_EXCELLENCE // DISTINCTION]',
      title: 'Universidad Autónoma de Nayarit — B.Sc. Computational Systems Engineering',
      textBefore: 'Graduated December 2024 with a perfect ',
      textStrong: 'GPA 4.0 / 100%',
      textAfter: ' • Golden Key Honours Scholar • Top-ranked departmental capstone.',
      tags: [
        'ADVANCED AI PROJECT MANAGEMENT (ONGOING)',
        'AI GOVERNANCE & COMPLIANCE (ONGOING)',
        'SECURE ENTERPRISE AI: RISK MANAGEMENT (ONGOING)',
      ],
    },
  },
  skills: {
    kicker: '// 03_CAPABILITIES_MATRIX',
    title: 'Technical & Strategic Arsenal',
    badge: 'STACK TELEMETRY // SYSTEM CAPABILITIES',
    groups: [
      {
        code: '[AI_GOVERNANCE]',
        icon: 'policy',
        title: 'AI Strategy & Governance',
        accent: '#00ffff',
        tags: [
          'AI Project Management (PM)',
          'Product Roadmapping',
          'RAG Architecture',
          'LLM-as-a-Judge Evaluation',
          'Prompt Security & Risk Management',
          'Vendor & Change Management',
        ],
        footer: 'EXECUTIVE GOVERNANCE',
      },
      {
        code: '[LANGUAGES]',
        icon: 'code_blocks',
        title: 'Core Programming',
        accent: '#ff8ff7',
        tags: [
          'Python (Async, FastAPI, PyTorch)',
          'C# (.NET Core, Unity Engine)',
          'Java (Enterprise Backend)',
          'JavaScript / TypeScript',
          'C++ (Optimization & Math)',
          'SQL (PostgreSQL, DuckDB)',
        ],
        footer: 'MULTI-PARADIGM ENGINES',
      },
      {
        code: '[INFRASTRUCTURE]',
        icon: 'cloud_sync',
        title: 'Cloud & Distributed',
        accent: '#39ff14',
        tags: [
          'Amazon Web Services (Bedrock)',
          'Google Cloud Platform (GCP)',
          'Microsoft Azure Cloud',
          'Docker & Kubernetes',
          'Fedora Linux Ecosystem',
          'Databricks Data Lakehouse',
        ],
        footer: 'HIGH-AVAILABILITY CLUSTERS',
      },
      {
        code: '[TOOLS_ECOSYSTEM]',
        icon: 'terminal',
        title: 'Tooling & Modeling',
        accent: '#00ffff',
        tags: [
          'Copilot Studio & Pro',
          'NotebookLM & Obsidian',
          'Ollama, LM Studio (Local LLMs)',
          'ChatGPT, Gemini, Power Automate',
          'Figma, Jira & Prototyping',
          'Mermaid, PlantUML, Eraser.io',
        ],
        footer: 'FULL-CYCLE MLOPS STACK',
      },
    ],
  },
  contact: {
    kicker: '[UPLINK_READY // TRANSMISSION_TERMINAL]',
    title: 'Initialize Direct Enterprise Collaboration',
    description:
      'Available for AI project leadership, enterprise generative transformations, advisory on RAG and LLM-as-a-Judge systems, and high-impact software engineering initiatives.',
    emailLabel: '> EMAIL:',
    phoneLabel: '> PHONE:',
    baseLocLabel: '> BASE_LOC:',
    baseLoc: 'Guadalajara, Jalisco, Mexico',
    btnTransmit: 'TRANSMIT DISPATCH',
    btnLinkedIn: 'CONNECT ON LINKEDIN',
    btnGithub: 'GITHUB @MoonRiver75',
  },
  cv: {
    kicker: '// 00_DOWNLOAD_PORTFOLIO',
    title: 'Download CV — Harvard Format',
    description:
      'Full two-page A4 résumé in traditional Harvard format, generated on the fly in your current language. Education, experience, projects, and skills reproduced from the real CV with quantified impact.',
    btnLabel: 'DOWNLOAD CV // HARVARD FORMAT',
    meta: '2 PAGES // A4 // PDF',
    fileLabel: 'FILE:',
    fileName: 'Jesus_Roldan_Madero_CV_Harvard.pdf',
  },
  footer: {
    status: 'SYS_STATUS: ONLINE // ALL INTEL CIRCUITS OPERATIONAL',
    copyright: '© 2026 Jesús Roldán Madero Aguilar. All neural architectures deployed.',
  },
}

const es: Strings = {
  nav: {
    subtitle: '> AI PROJECT MANAGER & IMPLEMENTATION ENGINEER',
    badge: '[AI_PM.SYS]',
    toggleLabel: 'Idioma',
    links: [
      { label: 'Proyectos', href: '#projects' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Métricas', href: '#metrics' },
      { label: 'CV', href: '#cv' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  hero: {
    sysRun: 'SYS.RUN // AI_TRANSFORMATION::MEGACABLE [ACTIVO_100K_USUARIOS]',
    loc: 'LOC: GUADALAJARA, JALISCO, MX',
    tel: 'TEL: (+52) 311 373 8261',
    status: 'ESTADO: PRODUCCIÓN_ESTABLE',
    identity: '> IDENTIDAD::INICIALIZADA // AI_PROJECT_MANAGER & IMPLEMENTATION_ENGINEER',
    headline1: 'CONSTRUYENDO EL',
    headline2: 'FUTURO NEURAL.',
    roleLine: 'AI Project Manager | AI Implementation Engineer | Software Engineer',
    introPre:
      'Uniendo la brecha entre la estrategia empresarial de IA, la gobernanza corporativa y la ingeniería hands-on. Actualmente impulsando la transformación de IA en Megacable, sirviendo a ',
    introStrong: '100,000+ usuarios mensuales',
    introPost:
      ' a través de sistemas generativos multi-agente, motores RAG de diagnóstico en tiempo real y plataformas de telefonía de alta concurrencia.',
    commLinkLabel: '> MEDIO_COM:',
    location: 'Guadalajara, Jalisco, México',
    pills: [
      { text: '[100K+ USUARIOS]', color: '#00ffff', border: 'rgba(0,255,255,0.3)', glow: 'rgba(0,255,255,0.2)' },
      { text: '[60%+ AUTO-RESOLUCIÓN]', color: '#ff8ff7', border: 'rgba(255,0,255,0.3)', glow: 'rgba(255,0,255,0.2)' },
      { text: '[RAG & LLM-AS-A-JUDGE]', color: '#39ff14', border: 'rgba(57,255,20,0.3)', glow: 'rgba(57,255,20,0.25)', pulse: true },
      { text: '[VIBECODING & AGILE]', color: '#00ffff', border: 'rgba(0,255,255,0.2)', glow: undefined },
      { text: '[AWS / GCP / AZURE]', color: '#ffb7f2', border: 'rgba(255,183,242,0.2)', glow: undefined },
    ],
    ctaView: 'VER PROYECTOS CLAVE',
    ctaExperience: 'EXPERIENCIA EMPRESARIAL',
    ctaLinkedIn: 'CONECTAR EN LINKEDIN',
    ctaGithub: 'GITHUB: @MoonRiver75',
    terminal: {
      title: 'sesión::root@ai-core-01:~$',
      suite: 'FIELD_AUDIT_ENGINE // ORQUESTADOR',
      cmd: 'python -m field_audit.engine --system "FIELD_AUDIT_V1" --telemetry "SIGNAL, GEO, IMG" --scale 100k',
      line1:
        '[SISTEMA] Flujo de ingesta enlazado: evaluando cargas de validación de técnicos de campo mediante Geolocalización + Visión por Computadora de imágenes...',
      line2:
        '[TELEMETRÍA] Presupuesto de enlace verificado | Delta de geo-cerca dentro de límites | Umbral de potencia óptica: PASS',
      status:
        '[ESTADO] 100K+ consultas procesadas | Precisión de validación: ALTA | Contención de escalamientos: SOSTENIDA | Escalamiento autónomo: ACTIVO',
    },
  },
  metrics: {
    kicker: '// HUD_DE_MÉTRICAS_EMPRESARIALES :: IMPACTO_REAL_DE_PRODUCCIÓN',
    badge: 'VALIDADO: CLÚSTER DE PRODUCCIÓN // CICLO 2025-2026',
    items: [
      { value: '100K+', label: 'Usuarios Activos', sub: 'Agentes en Producción', color: '#00ffff', border: 'rgba(0,255,255,0.3)', glow: 'rgba(0,255,255,0.1)' },
      { value: '60%+', label: 'Resolución Automatizada', sub: 'Agente IA de WhatsApp', color: '#ff8ff7', border: 'rgba(255,143,247,0.4)', glow: 'rgba(255,0,255,0.1)' },
      { value: '70K+', label: 'Consultas Mensuales', sub: 'Contenidas en el Sistema', color: '#39ff14', border: 'rgba(57,255,20,0.4)', glow: 'rgba(57,255,20,0.1)' },
      { value: '×10+', label: 'Escalamiento de Consultas', sub: 'ESCALA: Auditor de Campo', color: '#00ffff', border: 'rgba(0,255,255,0.3)' },
      { value: '80%', label: 'Puntaje de Calidad', sub: '29 Intents en 1.5 Meses', color: '#39ff14', border: 'rgba(57,255,20,0.3)' },
      { value: '$100K+', label: 'Presupuesto Estatal MXN', sub: 'Beca de Innovación', color: '#00ffff', border: 'rgba(0,255,255,0.3)' },
    ],
  },
  projects: {
    kicker: '// 01_PROYECTOS_DE_PRODUCCIÓN_DESTACADOS',
    title: 'Arquitecturas y Sistemas de IA Desarrollados',
    badge: 'ALCANCE DEL PORTAFOLIO: 5 DESPLIEGUES DE PRODUCCIÓN',
    items: [
      {
        sysId: 'RAG-AUDIT-2026',
        stats: 'ESCALA: 10K+/MES',
        eyebrow: '● AUDITORÍA DE TELECOMUNICACIONES & CV',
        title: 'RAG Field Auditor | Asistente IA (2026)',
        description:
          'Reto y Arquitectura: Auditoría de "actas" de técnicos de campo y documentos de validación. Pipeline de ingesta que parsea telemetría estructurada (métricas de señal de red), cruzándola con la política operativa corporativa en un sistema RAG vectorial aislado, con verificación por Computer Vision de imágenes y geolocalización.',
        impactLabel: 'Impacto Cuantificado:',
        impact:
          'Escaló la capacidad del sistema a decenas de miles de consultas mensuales; redujo discrepancias de validación y automatizó rutas de escalamiento.',
        tags: ['RAG', 'App Móvil', 'Computer Vision', 'Geolocalización', 'Auditoría de Telemetría'],
        diagram: 'rag-audit',
        accent: '#00ffff',
        border: 'rgba(0,255,255,0.3)',
      },
      {
        sysId: 'WA-SUPPORT-AGENT',
        stats: 'USUARIOS: 100K+/MES',
        eyebrow: '● IA CONVERSACIONAL & SOPORTE TELCO',
        title: 'Agente IA de Soporte TV por WhatsApp (2025 - 2026)',
        description:
          'Reto y Arquitectura: Solución conversacional en producción mapeada sobre 29 intents de clientes en 1.5 meses. Integración de modelos generativos AWS con la API de WhatsApp Business, marcos de proveedores externos y evaluación rigurosa LLM-as-a-Judge.',
        impactLabel: 'Impacto Cuantificado:',
        impact:
          '100K+ usuarios mensuales; tasa de auto-resolución del 60%+, conteniendo 70K+ consultas mensuales con fallback humano click-to-call.',
        tags: ['NLP', 'AWS Bedrock/LLMs', 'API de WhatsApp', 'Integración de Proveedores', 'LLM-as-a-Judge'],
        diagram: 'whatsapp-agent',
        accent: '#ff8ff7',
        border: 'rgba(255,143,247,0.4)',
      },
      {
        sysId: 'VOICE-SIM-2026',
        stats: 'RETENCIÓN: MEJORADA',
        eyebrow: '● SIMULACIÓN DE VOZ EN TIEMPO REAL & MLOPS',
        title: 'Simulador de Call-Center para Capacitación con IA (2026)',
        description:
          'Reto y Arquitectura: Alta rotación y largos ciclos de onboarding. Arquitectura serverless en AWS (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) con generación dinámica de prompts sobre distintas personas y detección de errores de política.',
        impactLabel: 'Impacto Cuantificado:',
        impact:
          'Redujo notablemente la rotación operativa; redujo el entrenamiento de semanas a días con puntuación en vivo.',
        tags: ['AWS Bedrock', 'WebSocket', 'DuckDB', 'DeepDub', 'Serverless'],
        diagram: 'voice-sim',
        accent: '#39ff14',
        border: 'rgba(57,255,20,0.4)',
      },
      {
        sysId: 'ENT-COPILOT-2026',
        stats: 'CORE::ENTERPRISE_RAG',
        eyebrow: '● COPILOTO INTERNO & INTELIGENCIA CORPORATIVA',
        title: 'Copiloto IA Empresarial (2026 - Activo)',
        description:
          'Reto y Arquitectura: Gestión de producto empresarial de un copiloto generativo interno. Combina arquitecturas RAG propietarias con LLMs locales distribuidos (Ollama / vLLM) para búsqueda corporativa ultra-segura y aislada, automatización de RH y síntesis estratégica.',
        impactLabel: 'Impacto Estratégico:',
        impact:
          'Potencia a los niveles ejecutivo y operativo con recuperación de conocimiento verificada en tiempo real bajo estricta soberanía de datos corporativa.',
        tags: ['PM Empresarial', 'Arquitectura RAG', 'LLMs Locales', 'Soberanía de Datos'],
        diagram: 'megan',
        accent: '#00ffff',
        border: 'rgba(0,255,255,0.3)',
      },
      {
        sysId: 'CICESE-VR-STREET',
        stats: 'CLÍNICO: 35+ NIÑOS AUTISTAS',
        eyebrow: '● ENTORNO VR TERAPÉUTICO & COMPUTACIÓN ESPACIAL',
        title: 'Simulador de Calle | Entorno VR Terapéutico (2024 - 2025)',
        description:
          'Reto y Arquitectura: Lideré el desarrollo Agile/Scrum como Scrum Master e Ingeniero de Software para crear una simulación VR inmersiva de baja ansiedad que permite a niños autistas dominar el cruce de calles y el manejo sensorial. Arquitectura Unity C# con física en tiempo real y telemetría geoespacial con analítica en Azure/PostgreSQL.',
        impactLabel: 'Impacto Clínico Cuantificado:',
        impact:
          'Benefició a 35+ niños en ensayos clínicos; mejora medible en identificación cognitiva de peligros y compostura autonómica.',
        tags: ['Scrum Master', 'Unity VR', 'C#', 'PostgreSQL', 'Azure Cloud', 'Analítica Biométrica'],
        diagram: 'vr-street',
        accent: '#ff8ff7',
        border: 'rgba(255,143,247,0.4)',
        wide: true,
      },
    ],
  },
  experience: {
    kicker: '// 02_CRONOLOGÍA_EMPRESARIAL',
    title: 'Experiencia Profesional y Liderazgo',
    badge: 'LÍNEA DE TIEMPO DE GOBERNANZA E IMPLEMENTACIÓN EJECUTIVA',
    roles: [
      {
        title: 'AI Project Manager & Implementation Engineer',
        company: 'MEGACABLE // Guadalajara, Jalisco, México',
        period: '2025 - ACTUAL // ACTIVO',
        badge: '[ACTUAL]',
        accent: '#00ffff',
        border: '#00ffff',
        description:
          'Reportando directamente al Chief AI Officer (CAIO), dirigiendo el portafolio integral de inteligencia artificial que atiende a más de 100,000 usuarios mensuales. Liderando equipos multidisciplinarios en ingeniería conversacional, auditoría por visión por computadora y simulación de voz automatizada.',
        details: [
          {
            title: '> Gobernanza Empresarial:',
            text: 'Evaluando sistemas empresariales (incluido Oracle Fusion Cloud HCM), selección de modelos generativos de lenguaje (GLMs) y cumplimiento de seguridad multi-nube.',
            color: '#00ffff',
          },
          {
            title: '> Metodología Moderna:',
            text: 'Diseñando arquitecturas operativas con Mermaid.js, PlantUML y Eraser.io; impulsando prototipado rápido Vibecoding y sprints Agile.',
            color: '#ff8ff7',
          },
          {
            title: '> Adopción Empresarial:',
            text: 'Liderando rollouts corporativos de Microsoft Copilot Pro, NotebookLM y sistemas internos de conocimiento afinado.',
            color: '#39ff14',
          },
        ],
      },
      {
        title: 'Video Game Designer & Software Engineer',
        company: 'CICESE - UNIDAD DE TRANSFERENCIA TECNOLÓGICA (UAT) // Nayarit, México',
        period: '2024 - 2025',
        accent: '#39ff14',
        border: '#39ff14',
        description:
          'Diseñé y desarrollé sistemas interactivos como parte de un equipo Agile multifuncional, aplicando prácticas de ingeniería de software al diseño de juegos y simulaciones — incluido el proyecto VR terapéutico Street Simulator que atiende a 35+ niños autistas en ensayos clínicos.',
      },
      {
        title: 'State Technology Advisor & Innovation Coordinator',
        company: 'GOBIERNO DE NAYARIT // Tepic, Nayarit, México',
        period: 'JUNIO 2024 - ACTUAL',
        accent: '#ff8ff7',
        border: '#ff8ff7',
        description:
          'Coordinando iniciativas tecnológicas y propuestas de innovación en todo el estado de Nayarit, impactando a más de 100,000 estudiantes y jóvenes; aseguré un presupuesto acumulado de más de $100K MXN en becas estatales de innovación.',
      },
    ],
    education: {
      kicker: '[EXCELENCIA ACADÉMICA // MÉRITO]',
      title: 'Universidad Autónoma de Nayarit — B.Sc. Ingeniería en Sistemas Computacionales',
      textBefore: 'Graduado en diciembre 2024 con ',
      textStrong: 'promedio perfecto GPA 4.0 / 100%',
      textAfter: ' • Distinción Golden Key Honours Scholar • Honor del capstone departamental con el mejor desempeño.',
      tags: [
        'ADVANCED AI PROJECT MANAGEMENT (EN CURSO)',
        'AI GOVERNANCE & COMPLIANCE (EN CURSO)',
        'SECURE ENTERPRISE AI: RISK MANAGEMENT (EN CURSO)',
      ],
    },
  },
  skills: {
    kicker: '// 03_MATRIZ_DE_CAPACIDADES',
    title: 'Arsenal Técnico y Estratégico',
    badge: 'TELEMETRÍA DE STACK // CAPACIDADES DEL SISTEMA',
    groups: [
      {
        code: '[GOBERNANZA_IA]',
        icon: 'policy',
        title: 'Estrategia y Gobernanza de IA',
        accent: '#00ffff',
        tags: [
          'Gestión de Proyectos de IA (PM)',
          'Product Roadmapping',
          'Arquitectura RAG',
          'Evaluación LLM-as-a-Judge',
          'Prompt Security y Gestión de Riesgo',
          'Gestión de Proveedores y Cambio',
        ],
        footer: 'GOBERNANZA EJECUTIVA',
      },
      {
        code: '[LENGUAJES]',
        icon: 'code_blocks',
        title: 'Programación Core',
        accent: '#ff8ff7',
        tags: [
          'Python (Async, FastAPI, PyTorch)',
          'C# (.NET Core, Unity Engine)',
          'Java (Backend Empresarial)',
          'JavaScript / TypeScript',
          'C++ (Optimización y Matemáticas)',
          'SQL (PostgreSQL, DuckDB)',
        ],
        footer: 'MOTORES MULTI-PARADIGMA',
      },
      {
        code: '[INFRAESTRUCTURA]',
        icon: 'cloud_sync',
        title: 'Cloud y Distribuido',
        accent: '#39ff14',
        tags: [
          'Amazon Web Services (Bedrock)',
          'Google Cloud Platform (GCP)',
          'Microsoft Azure Cloud',
          'Docker y Kubernetes',
          'Ecosistema Fedora Linux',
          'Databricks Data Lakehouse',
        ],
        footer: 'CLÚSTERES DE ALTA DISPONIBILIDAD',
      },
      {
        code: '[ECOSISTEMA_HERRAMIENTAS]',
        icon: 'terminal',
        title: 'Herramientas y Modelado',
        accent: '#00ffff',
        tags: [
          'Copilot Studio & Pro',
          'NotebookLM & Obsidian',
          'Ollama, LM Studio (LLMs Locales)',
          'ChatGPT, Gemini, Power Automate',
          'Figma, Jira y Prototipado',
          'Mermaid, PlantUML, Eraser.io',
        ],
        footer: 'STACK MLOPS DE CICLO COMPLETO',
      },
    ],
  },
  contact: {
    kicker: '[UPLINK_LISTO // TERMINAL_DE_TRANSMISIÓN]',
    title: 'Inicia la Colaboración Empresarial Directa',
    description:
      'Disponible para liderazgo de proyectos de IA, transformaciones generativas empresariales, consultoría en sistemas RAG y LLM-as-a-Judge, e iniciativas de ingeniería de software de alto impacto.',
    emailLabel: '> EMAIL:',
    phoneLabel: '> TELÉFONO:',
    baseLocLabel: '> BASE_LOC:',
    baseLoc: 'Guadalajara, Jalisco, México',
    btnTransmit: 'ENVIAR DESPACHO',
    btnLinkedIn: 'CONECTAR EN LINKEDIN',
    btnGithub: 'GITHUB @MoonRiver75',
  },
  cv: {
    kicker: '// 00_DESCARGAR_CV',
    title: 'Descargar CV — Formato Harvard',
    description:
      'Currículum completo de dos páginas A4 en formato Harvard clásico, generado al instante en tu idioma actual. Educación, experiencia, proyectos y habilidades reproducidos del CV real con impacto cuantificado.',
    btnLabel: 'DESCARGAR CV // FORMATO HARVARD',
    meta: '2 PÁGINAS // A4 // PDF',
    fileLabel: 'ARCHIVO:',
    fileName: 'Jesus_Roldan_Madero_CV_Harvard.pdf',
  },
  footer: {
    status: 'SYS_STATUS: ONLINE // TODOS LOS CIRCUITOS INTEL OPERATIVOS',
    copyright: '© 2026 Jesús Roldán Madero Aguilar. Todas las arquitecturas neurales desplegadas.',
  },
}

export const translations: Record<Lang, Strings> = { en, es }
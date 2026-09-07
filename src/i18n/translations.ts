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
    sysRun: 'SYS.RUN // AI_TRANSFORMATION::MEGACABLE [ACTIVE_150K_USERS]',
    loc: 'LOC: GUADALAJARA, JALISCO, MX',
    tel: 'TEL: (+52) 311 373 8261',
    status: 'STATUS: PRODUCTION_STABLE',
    identity: '> IDENTITY::INITIALIZED // AI_PROJECT_MANAGER & IMPLEMENTATION_ENGINEER',
    headline1: 'BUILDING THE',
    headline2: 'NEURAL FUTURE.',
    roleLine: 'AI Project Manager | AI Implementation Engineer | Software Engineer',
    introPre:
      'Bridging the gap between enterprise AI strategy, corporate governance, and hands-on engineering. Currently driving AI transformation at Megacable serving ',
    introStrong: '150,000+ monthly users',
    introPost:
      ' across multi-agent generative systems, real-time RAG diagnostic engines, and high-concurrency telephony platforms.',
    commLinkLabel: '> COMM_LINK:',
    location: 'Guadalajara, Jalisco, Mexico',
    pills: [
      { text: '[150K+ MONTHLY USERS]', color: '#00fbfb', border: 'rgba(0,251,251,0.3)', glow: 'rgba(0,251,251,0.2)' },
      { text: '[60-65% AUTO RESOLUTION]', color: '#ffabf3', border: 'rgba(254,0,254,0.3)', glow: 'rgba(254,0,254,0.2)' },
      { text: '[RAG & LLM-AS-A-JUDGE]', color: '#2ae500', border: 'rgba(42,229,0,0.3)', glow: 'rgba(42,229,0,0.25)', pulse: true },
      { text: '[VIBECODING & AGILE]', color: '#00fbfb', border: 'rgba(0,251,251,0.2)', glow: undefined },
      { text: '[AWS / GCP / AZURE]', color: '#ffd7f5', border: 'rgba(255,215,245,0.2)', glow: undefined },
    ],
    ctaView: 'VIEW KEY PROJECTS',
    ctaExperience: 'ENTERPRISE EXPERIENCE',
    ctaLinkedIn: 'CONNECT ON LINKEDIN',
    ctaGithub: 'GITHUB: @MoonRiver75',
    terminal: {
      title: 'session::root@megacable-ai-core:~$',
      suite: 'AUDIT_SUITE v2.8 // ORCHESTRATOR',
      cmd: 'python -m enterprise_rag.audit --system "RAG_FIELD_AUDITOR" --telemetry "RSSI, JITTER, OPTICAL_PWR" --scale 27000',
      line1:
        '[SYSTEM] Ingestion stream linked: Evaluating field technician validation payloads via Geolocation + Image Computer Vision...',
      line2:
        '[TELEMETRY] Optical link budget verified | Geo-fence delta < 4.2m | Optical power threshold: PASS (-18.4 dBm)',
      status:
        '[STATUS] 27,000 queries processed | Fraud prevention: 99.4% | Escalation containment: 65% | Autonomous escalation: ACTIVE',
    },
  },
  metrics: {
    kicker: '// ENTERPRISE_METRICS_HUD :: REAL_WORLD_PRODUCTION_IMPACT',
    badge: 'VALIDATED: MEGACABLE AUDIT CLUSTER // 2025-2026 CYCLE',
    items: [
      { value: '150K+', label: 'Monthly Active Users', sub: 'Across Production Agents', color: '#00fbfb', border: 'rgba(0,251,251,0.3)', glow: 'rgba(0,251,251,0.1)' },
      { value: '60-65%', label: 'Automated Resolution', sub: 'WhatsApp AI Agent', color: '#ffabf3', border: 'rgba(255,171,243,0.4)', glow: 'rgba(254,0,254,0.1)' },
      { value: '75K+', label: 'Monthly Inquiries', sub: 'Self-Contained', color: '#2ae500', border: 'rgba(42,229,0,0.4)', glow: 'rgba(42,229,0,0.1)' },
      { value: '13.5x', label: 'Query Scaling', sub: '2K → 27K Field Auditor', color: '#00fbfb', border: 'rgba(0,251,251,0.3)' },
      { value: '-50/mo', label: 'Staff Turnover', sub: 'Voice Sim Onboarding', color: '#ffabf3', border: 'rgba(255,171,243,0.3)' },
      { value: '80%', label: 'Quality Score', sub: '29 Intents in 1.5 Mos', color: '#2ae500', border: 'rgba(42,229,0,0.3)' },
      { value: '$100K+', label: 'MXN State Budget', sub: 'Tech Innovation Grant', color: '#00fbfb', border: 'rgba(0,251,251,0.3)' },
    ],
  },
  projects: {
    kicker: '// 01_FEATURED_PRODUCTION_PROJECTS',
    title: 'Engineered AI Architectures & Systems',
    badge: 'PORTFOLIO SCOPE: 5 PRODUCTION GRADE DEPLOYMENTS',
    items: [
      {
        sysId: 'RAG-AUDIT-2026',
        stats: 'SCALE: 2K → 27K/MO',
        eyebrow: '● TELECOMMUNICATIONS AUDIT & CV',
        title: 'RAG Field Auditor | AI Assistant (2026)',
        description:
          "Challenge & Architecture: Auditing field technician 'actas' and validation documents. Built an ingestion pipeline parsing JSON telemetry (Jitter, RSSI, optical power levels), cross-referencing corporate operational policy in an isolated vector RAG system with image and geolocation Computer Vision verification.",
        impactLabel: 'Quantified Impact:',
        impact:
          'Scaled system capacity from 2,000 to 27,000 monthly queries; prevented widespread fraud and automated escalation pathways.',
        tags: ['RAG', 'Mobile App', 'Computer Vision', 'Geolocation', 'Telemetry Audit'],
        diagram: 'rag-audit',
        accent: '#00fbfb',
        border: 'rgba(0,251,251,0.3)',
      },
      {
        sysId: 'XVIEW-WA-AGENT',
        stats: 'USERS: 125,000/MO',
        eyebrow: '● CONVERSATIONAL AI & TELCO SUPPORT',
        title: 'WhatsApp TV Support AI Agent (XVIEW+) (2025 - 2026)',
        description:
          'Challenge & Architecture: Production conversational solution mapped across 29 customer intents in 1.5 months. Integrated AWS Generative Language Models with WhatsApp Business API, Huawei partnership frameworks, and rigorous LLM-as-a-Judge evaluations.',
        impactLabel: 'Quantified Impact:',
        impact:
          '125,000 monthly users; achieved 60–65% auto-resolution rate, containing 75,000+ inquiries monthly with seamless click-to-call human fallback.',
        tags: ['NLP', 'AWS Bedrock/LLMs', 'WhatsApp API', 'Huawei Tech', 'LLM-as-a-Judge'],
        diagram: 'whatsapp-agent',
        accent: '#ffabf3',
        border: 'rgba(255,171,243,0.4)',
      },
      {
        sysId: 'VOICE-SIM-2026',
        stats: 'RETENTION: +50/MO',
        eyebrow: '● REAL-TIME VOICE SIMULATION & MLOPS',
        title: 'AI Call-Center Voice Training Simulator (2026)',
        description:
          'Challenge & Architecture: High call-center turnover and long onboarding cycles. Engineered an AWS serverless architecture (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) with dynamic prompt generation across diverse customer personas and fatal-error policy detection.',
        impactLabel: 'Quantified Impact:',
        impact:
          'Reduced operational staff turnover by 50 agents per month; cut training time from 4 weeks to 8 days with live scoring.',
        tags: ['AWS Bedrock', 'WebSocket', 'DuckDB', 'DeepDub', 'Serverless'],
        diagram: 'voice-sim',
        accent: '#2ae500',
        border: 'rgba(42,229,0,0.4)',
      },
      {
        sysId: 'MEGAN-ENT-2026',
        stats: 'CORE::ENTERPRISE_RAG',
        eyebrow: '● INTERNAL COPILOT & CORPORATE INTELLIGENCE',
        title: "'Megan' Enterprise AI Assistant (2026 - Active)",
        description:
          'Challenge & Architecture: Enterprise Product Management of internal generative copilot. Combines proprietary RAG architectures with distributed local LLMs (Ollama / vLLM) for ultra-secure, air-gapped corporate document search, HR automation, and strategic synthesis.',
        impactLabel: 'Strategic Impact:',
        impact:
          'Empowered executive and operational tiers with sub-second verified knowledge retrieval under stringent corporate data sovereignty.',
        tags: ['Enterprise PM', 'RAG Architecture', 'Local LLMs', 'Data Sovereignty'],
        diagram: 'megan',
        accent: '#00fbfb',
        border: 'rgba(0,251,251,0.3)',
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
        accent: '#ffabf3',
        border: 'rgba(255,171,243,0.4)',
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
        accent: '#00fbfb',
        border: '#00fbfb',
        description:
          'Reporting directly to the Chief AI Officer (CAIO), steering the end-to-end artificial intelligence portfolio serving 150,000+ monthly users. Leading multi-disciplinary squads across conversational engineering, computer vision auditing, and automated voice simulation.',
        details: [
          {
            title: '> Enterprise Governance:',
            text: 'Evaluating Oracle Fusion Cloud HCM 26A/26B updates, Generative Language Models (GLM) selection, and multi-cloud security compliance.',
            color: '#00fbfb',
          },
          {
            title: '> Modern Methodology:',
            text: 'Designing operational architectures with Mermaid.js, PlantUML, and Eraser.io; spearheading Vibecoding rapid prototyping and Agile sprints.',
            color: '#ffabf3',
          },
          {
            title: '> Enterprise Adoption:',
            text: 'Driving corporate rollouts of Microsoft Copilot Pro, NotebookLM, and internal fine-tuned knowledge systems.',
            color: '#2ae500',
          },
        ],
      },
      {
        title: 'Video Game Designer & Software Engineer',
        company: 'CICESE - UNIDAD DE TRANSFERENCIA TECNOLÓGICA (UAT) // Nayarit, Mexico',
        period: '2024 - 2025',
        accent: '#2ae500',
        border: '#2ae500',
        description:
          'Designed and developed interactive systems as part of a cross-functional Agile team, applying software engineering practices to game and simulation design — including the therapeutic VR project Street Simulator serving 35+ autistic children in clinical trials.',
      },
      {
        title: 'State Technology Advisor & Innovation Coordinator',
        company: 'GOVERNMENT OF NAYARIT // Tepic, Nayarit, Mexico',
        period: 'JUNE 2024 - PRESENT',
        accent: '#ffabf3',
        border: '#ffabf3',
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
        accent: '#00fbfb',
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
        accent: '#ffabf3',
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
        accent: '#2ae500',
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
        accent: '#00fbfb',
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
    subtitle: '> GERENTE DE PROYECTOS DE IA & INGENIERO DE IMPLEMENTACIÓN',
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
    sysRun: 'SYS.RUN // AI_TRANSFORMATION::MEGACABLE [ACTIVO_150K_USUARIOS]',
    loc: 'LOC: GUADALAJARA, JALISCO, MX',
    tel: 'TEL: (+52) 311 373 8261',
    status: 'ESTADO: PRODUCCIÓN_ESTABLE',
    identity: '> IDENTIDAD::INICIALIZADA // GERENTE_DE_PROYECTOS_DE_IA & INGENIERO_DE_IMPLEMENTACIÓN',
    headline1: 'CONSTRUYENDO EL',
    headline2: 'FUTURO NEURAL.',
    roleLine: 'Gerente de Proyectos de IA | Ingeniero de Implementación IA | Ingeniero de Software',
    introPre:
      'Uniendo la brecha entre la estrategia empresarial de IA, la gobernanza corporativa y la ingeniería hands-on. Actualmente impulsando la transformación de IA en Megacable, sirviendo a ',
    introStrong: '150,000+ usuarios mensuales',
    introPost:
      ' a través de sistemas generativos multi-agente, motores RAG de diagnóstico en tiempo real y plataformas de telefonía de alta concurrencia.',
    commLinkLabel: '> MEDIO_COM:',
    location: 'Guadalajara, Jalisco, México',
    pills: [
      { text: '[150K+ USUARIOS/MES]', color: '#00fbfb', border: 'rgba(0,251,251,0.3)', glow: 'rgba(0,251,251,0.2)' },
      { text: '[60-65% AUTO-RESOLUCIÓN]', color: '#ffabf3', border: 'rgba(254,0,254,0.3)', glow: 'rgba(254,0,254,0.2)' },
      { text: '[RAG & LLM-AS-A-JUDGE]', color: '#2ae500', border: 'rgba(42,229,0,0.3)', glow: 'rgba(42,229,0,0.25)', pulse: true },
      { text: '[VIBECODING & AGILE]', color: '#00fbfb', border: 'rgba(0,251,251,0.2)', glow: undefined },
      { text: '[AWS / GCP / AZURE]', color: '#ffd7f5', border: 'rgba(255,215,245,0.2)', glow: undefined },
    ],
    ctaView: 'VER PROYECTOS CLAVE',
    ctaExperience: 'EXPERIENCIA EMPRESARIAL',
    ctaLinkedIn: 'CONECTAR EN LINKEDIN',
    ctaGithub: 'GITHUB: @MoonRiver75',
    terminal: {
      title: 'sesión::root@megacable-ai-core:~$',
      suite: 'AUDIT_SUITE v2.8 // ORQUESTADOR',
      cmd: 'python -m enterprise_rag.audit --system "RAG_FIELD_AUDITOR" --telemetry "RSSI, JITTER, OPTICAL_PWR" --scale 27000',
      line1:
        '[SISTEMA] Flujo de ingesta enlazado: evaluando cargas de validación de técnicos de campo mediante Geolocalización + Visión por Computadora de imágenes...',
      line2:
        '[TELEMETRÍA] Presupuesto de enlace óptico verificado | Delta de geo-cerca < 4.2m | Umbral de potencia óptica: PASS (-18.4 dBm)',
      status:
        '[ESTADO] 27,000 consultas procesadas | Prevención de fraude: 99.4% | Contención de escalamientos: 65% | Escalamiento autónomo: ACTIVO',
    },
  },
  metrics: {
    kicker: '// HUD_DE_MÉTRICAS_EMPRESARIALES :: IMPACTO_REAL_DE_PRODUCCIÓN',
    badge: 'VALIDADO: CLÚSTER DE AUDITORÍA MEGACABLE // CICLO 2025-2026',
    items: [
      { value: '150K+', label: 'Usuarios Activos', sub: 'Agentes en Producción', color: '#00fbfb', border: 'rgba(0,251,251,0.3)', glow: 'rgba(0,251,251,0.1)' },
      { value: '60-65%', label: 'Resolución Automatizada', sub: 'Agente IA de WhatsApp', color: '#ffabf3', border: 'rgba(255,171,243,0.4)', glow: 'rgba(254,0,254,0.1)' },
      { value: '75K+', label: 'Consultas Mensuales', sub: 'Contenidas en el Sistema', color: '#2ae500', border: 'rgba(42,229,0,0.4)', glow: 'rgba(42,229,0,0.1)' },
      { value: '13.5x', label: 'Escalamiento de Consultas', sub: '2K → 27K Auditor de Campo', color: '#00fbfb', border: 'rgba(0,251,251,0.3)' },
      { value: '-50/mes', label: 'Rotación de Personal', sub: 'Onboarding Voice Sim', color: '#ffabf3', border: 'rgba(255,171,243,0.3)' },
      { value: '80%', label: 'Puntaje de Calidad', sub: '29 Intents en 1.5 Meses', color: '#2ae500', border: 'rgba(42,229,0,0.3)' },
      { value: '$100K+', label: 'Presupuesto Estatal MXN', sub: 'Beca de Innovación', color: '#00fbfb', border: 'rgba(0,251,251,0.3)' },
    ],
  },
  projects: {
    kicker: '// 01_PROYECTOS_DE_PRODUCCIÓN_DESTACADOS',
    title: 'Arquitecturas y Sistemas de IA Desarrollados',
    badge: 'ALCANCE DEL PORTAFOLIO: 5 DESPLIEGUES DE PRODUCCIÓN',
    items: [
      {
        sysId: 'RAG-AUDIT-2026',
        stats: 'ESCALA: 2K → 27K/MES',
        eyebrow: '● AUDITORÍA DE TELECOMUNICACIONES & CV',
        title: 'RAG Field Auditor | Asistente IA (2026)',
        description:
          'Reto y Arquitectura: Auditoría de "actas" de técnicos de campo y documentos de validación. Pipeline de ingesta que parsea telemetría JSON (Jitter, RSSI, niveles de potencia óptica), cruzándola con la política operativa corporativa en un sistema RAG vectorial aislado, con verificación por Computer Vision de imágenes y geolocalización.',
        impactLabel: 'Impacto Cuantificado:',
        impact:
          'Escaló la capacidad del sistema de 2,000 a 27,000 consultas mensuales; previno fraude masivo y automatizó rutas de escalamiento.',
        tags: ['RAG', 'App Móvil', 'Computer Vision', 'Geolocalización', 'Auditoría de Telemetría'],
        diagram: 'rag-audit',
        accent: '#00fbfb',
        border: 'rgba(0,251,251,0.3)',
      },
      {
        sysId: 'XVIEW-WA-AGENT',
        stats: 'USUARIOS: 125,000/MES',
        eyebrow: '● IA CONVERSACIONAL & SOPORTE TELCO',
        title: 'Agente IA de Soporte TV por WhatsApp (XVIEW+) (2025 - 2026)',
        description:
          'Reto y Arquitectura: Solución conversacional en producción mapeada sobre 29 intents de clientes en 1.5 meses. Integración de modelos generativos AWS con la API de WhatsApp Business, marcos de colaboración Huawei y evaluación rigurosa LLM-as-a-Judge.',
        impactLabel: 'Impacto Cuantificado:',
        impact:
          '125,000 usuarios mensuales; tasa de auto-resolución de 60–65%, conteniendo 75,000+ consultas mensuales con fallback humano click-to-call.',
        tags: ['NLP', 'AWS Bedrock/LLMs', 'API de WhatsApp', 'Tecnología Huawei', 'LLM-as-a-Judge'],
        diagram: 'whatsapp-agent',
        accent: '#ffabf3',
        border: 'rgba(255,171,243,0.4)',
      },
      {
        sysId: 'VOICE-SIM-2026',
        stats: 'RETENCIÓN: +50/MES',
        eyebrow: '● SIMULACIÓN DE VOZ EN TIEMPO REAL & MLOPS',
        title: 'Simulador de Call-Center para Capacitación con IA (2026)',
        description:
          'Reto y Arquitectura: Alta rotación y largos ciclos de onboarding. Arquitectura serverless en AWS (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) con generación dinámica de prompts sobre distintas personas y detección de errores de política.',
        impactLabel: 'Impacto Cuantificado:',
        impact:
          'Redujo la rotación operativa en 50 agentes al mes; redujo el entrenamiento de 4 semanas a 8 días con puntuación en vivo.',
        tags: ['AWS Bedrock', 'WebSocket', 'DuckDB', 'DeepDub', 'Serverless'],
        diagram: 'voice-sim',
        accent: '#2ae500',
        border: 'rgba(42,229,0,0.4)',
      },
      {
        sysId: 'MEGAN-ENT-2026',
        stats: 'CORE::ENTERPRISE_RAG',
        eyebrow: '● COPILOTO INTERNO & INTELIGENCIA CORPORATIVA',
        title: "'Megan' Asistente IA Empresarial (2026 - Activo)",
        description:
          'Reto y Arquitectura: Gestión de producto empresarial de un copiloto generativo interno. Combina arquitecturas RAG propietarias con LLMs locales distribuidos (Ollama / vLLM) para búsqueda corporativa ultra-segura y aislada, automatización de RH y síntesis estratégica.',
        impactLabel: 'Impacto Estratégico:',
        impact:
          'Potencia a los niveles ejecutivo y operativo con recuperación de conocimiento verificada en menos de 1 segundo bajo estricta soberanía de datos corporativa.',
        tags: ['PM Empresarial', 'Arquitectura RAG', 'LLMs Locales', 'Soberanía de Datos'],
        diagram: 'megan',
        accent: '#00fbfb',
        border: 'rgba(0,251,251,0.3)',
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
        accent: '#ffabf3',
        border: 'rgba(255,171,243,0.4)',
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
        title: 'Gerente de Proyectos de IA e Ingeniero de Implementación',
        company: 'MEGACABLE // Guadalajara, Jalisco, México',
        period: '2025 - ACTUAL // ACTIVO',
        badge: '[ACTUAL]',
        accent: '#00fbfb',
        border: '#00fbfb',
        description:
          'Reportando directamente al Chief AI Officer (CAIO), dirigiendo el portafolio integral de inteligencia artificial que atiende a más de 150,000 usuarios mensuales. Liderando equipos multidisciplinarios en ingeniería conversacional, auditoría por visión por computadora y simulación de voz automatizada.',
        details: [
          {
            title: '> Gobernanza Empresarial:',
            text: 'Evaluando actualizaciones de Oracle Fusion Cloud HCM 26A/26B, selección de modelos generativos de lenguaje (GLMs) y cumplimiento de seguridad multi-nube.',
            color: '#00fbfb',
          },
          {
            title: '> Metodología Moderna:',
            text: 'Diseñando arquitecturas operativas con Mermaid.js, PlantUML y Eraser.io; impulsando prototipado rápido Vibecoding y sprints Agile.',
            color: '#ffabf3',
          },
          {
            title: '> Adopción Empresarial:',
            text: 'Liderando rollouts corporativos de Microsoft Copilot Pro, NotebookLM y sistemas internos de conocimiento afinado.',
            color: '#2ae500',
          },
        ],
      },
      {
        title: 'Diseñador de Videojuegos e Ingeniero de Software',
        company: 'CICESE - UNIDAD DE TRANSFERENCIA TECNOLÓGICA (UAT) // Nayarit, México',
        period: '2024 - 2025',
        accent: '#2ae500',
        border: '#2ae500',
        description:
          'Diseñé y desarrollé sistemas interactivos como parte de un equipo Agile multifuncional, aplicando prácticas de ingeniería de software al diseño de juegos y simulaciones — incluido el proyecto VR terapéutico Street Simulator que atiende a 35+ niños autistas en ensayos clínicos.',
      },
      {
        title: 'Asesor de Tecnología Estatal y Coordinador de Innovación',
        company: 'GOBIERNO DE NAYARIT // Tepic, Nayarit, México',
        period: 'JUNIO 2024 - ACTUAL',
        accent: '#ffabf3',
        border: '#ffabf3',
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
        accent: '#00fbfb',
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
        accent: '#ffabf3',
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
        accent: '#2ae500',
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
        accent: '#00fbfb',
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
import type { jsPDF } from 'jspdf'
import type { Lang } from '../i18n/translations'

type CvEntry = {
  title?: string
  tagsLine?: string
  period?: string
  sub?: string
  flush?: boolean
  bullets?: string[]
}

type CvSection = {
  title: string
  entries: CvEntry[]
}

type CvContent = {
  name: string
  role: string
  contacts: string[]
  sections: CvSection[]
}

const FILE_NAME = 'Jesus_Roldan_Madero_CV_Harvard.pdf'

function buildContent(lang: Lang): CvContent {
  if (lang === 'es') {
    return {
      name: 'JESÚS ROLDÁN MADERO AGUILAR',
      role: 'AI Project Manager | AI Implementation Engineer | Software Engineer',
      contacts: [
        'Guadalajara, Jalisco, México | Tel: (+52) 311 373 8261',
        'roldanmadero16@outlook.com | linkedin.com/in/roldanmadero | github.com/MoonRiver75',
      ],
      sections: [
        {
          title: 'PERFIL PROFESIONAL',
          entries: [
            {
              flush: true,
              bullets: [
                'AI Project Manager and Software Engineer con experiencia práctica liderando transformación empresarial de IA, gestión de producto e implementación full-stack a escala. Actualmente responsable del ciclo de vida completo de iniciativas de IA que atienden a más de 150,000 usuarios combinados al mes entre el soporte al cliente y las operaciones de campo de Megacable, desde requisitos de negocio y evaluación de proveedores hasta la ejecución ágil con desarrollo asistido por IA (Vibecoding) y coordinación transversal con el Chief AI Officer. Base técnica sólida en lenguajes de programación, arquitecturas cloud (AWS, Azure, GCP) y diseño de sistemas RAG/LLM. Capaz de unir la estrategia de IA, la gobernanza corporativa y la ingeniería práctica para desplegar flujos de trabajo inteligentes seguros, medibles y altamente adoptados.',
              ],
            },
          ],
        },
        {
          title: 'EDUCACIÓN',
          entries: [
            {
              title: 'B.Sc. Ingeniería en Sistemas Computacionales | Ingeniería de Software',
              sub: 'Universidad Autónoma de Nayarit — Nayarit, México',
              period: 'Graduación: Diciembre 2024',
              bullets: [
                'Golden Key Honours Scholar | GPA: 4.0',
                'Cursos Relevantes: Ingeniería de Software, Machine Learning Aplicado, Sistemas Operativos, Arquitectura de Computadoras, Programación Basada en Modelos, Algoritmos y Estructuras de Datos.',
              ],
            },
          ],
        },
        {
          title: 'FORMACIÓN EN IA Y DESARROLLO PROFESIONAL',
          entries: [
            { title: 'Advanced AI Project Management — En curso.', bullets: ['Aplicación de herramientas de IA para roadmapping de producto, ejecución, comunicación con stakeholders y control Agile de proyectos.'] },
            { title: 'AI Governance & Compliance — En curso.', bullets: ['Marcos de gobernanza, consideraciones regulatorias, adopción responsable y prácticas de cumplimiento para iniciativas empresariales de IA.'] },
            { title: 'Secure Enterprise AI: Risk Management — En curso.', bullets: ['Gestión de riesgo empresarial, protección de datos, controles de cumplimiento, seguridad de prompts y despliegue responsable.'] },
          ],
        },
        {
          title: 'EXPERIENCIA PROFESIONAL',
          entries: [
            {
              title: 'AI Project Manager & Implementation Engineer',
              sub: 'Megacable — Guadalajara, México',
              period: '2025 – Actual',
              bullets: [
                'Lidero el project management de extremo a extremo y la implementación técnica de iniciativas empresariales de IA, reportando al Chief AI Officer y coordinando con equipos multifuncionales y proveedores externos (Huawei, Meta).',
                'Soy responsable del roadmap de un portafolio de agentes de IA en producción (soporte TV vía WhatsApp, auditor RAG de campo, simulador de voz de call-center, asistente empresarial "Megan") que atiende a más de 150,000 usuarios combinados al mes.',
                'Realizo evaluaciones de capacidad técnica de sistemas empresariales (incluido Oracle Fusion Cloud HCM releases 26A/26B) y de modelos generativos de lenguaje (GLMs) para determinar costo, latencia, seguridad y alineación estratégica.',
                'Diseño arquitecturas operativas y diagramas de flujo de procesos con Mermaid.js, PlantUML y Eraser.io para traducir necesidades complejas de negocio en entregables de ingeniería estructurados.',
                'Impulso el prototipado rápido y la entrega de soluciones con metodologías Vibecoding (Desarrollo Asistido por IA), minimizando deuda técnica y acelerando el time-to-market.',
                'Lidero la gestión de cambio empresarial para la adopción de Copilot Pro y NotebookLM, generando business cases, flujos de permisos y documentación ejecutiva.',
              ],
            },
            {
              title: 'Video Game Designer & Software Engineer',
              sub: 'CICESE UAT — Nayarit, México',
              period: '2024 – 2025',
              bullets: [
                'Diseñé y desarrollé sistemas interactivos como parte de un equipo Agile multifuncional, aplicando prácticas de ingeniería de software al diseño de juegos y simulaciones, incluido el proyecto VR terapéutico Street Simulator (ver Proyectos).',
              ],
            },
          ],
        },
        {
          title: 'PROYECTOS E INICIATIVAS TÉCNICAS',
          entries: [
            {
              title: 'RAG-Powered Field Service AI Auditor (CPK)',
              tagsLine: 'RAG, Telemetría IoT, Procesamiento JSON, Prevención de Fraude',
              period: '2026',
              bullets: [
                'Arquitecté un asistente de IA RAG (Retrieval-Augmented Generation) seguro integrado con una app móvil para guiar y auditar a técnicos de campo durante instalaciones de telecomunicaciones residenciales, validando actas mediante análisis de imagen y geolocalización para prevenir fraude.',
                'Diseñé la ingesta de payloads complejos de telemetría JSON (Jitter, RSSI, potencia óptica, datos geoespaciales) capturados vía antenas Wi-Fi móviles.',
                'Correlacioné variables técnicas contra la política corporativa privada dentro de una base de conocimiento RAG aislada, generando reportes diagnósticos estructurados (impacto, causa raíz, plan de acción) y escalando tickets de forma autónoma cuando era necesario.',
                'Escalé la adopción de 2,000 a 27,000 consultas mensuales iterando los prompts con base en el feedback de campo, estableciendo la IA como un copiloto técnico de confianza.',
              ],
            },
            {
              title: 'WhatsApp TV Support AI Agent (XVIEW+)',
              tagsLine: 'AI Product Management, NLP, AWS, Integración de APIs',
              period: '2025 – 2026',
              bullets: [
                'Lideré el mapeo de procesos de extremo a extremo y el despliegue de un asistente IA de WhatsApp impulsado por NLP que atiende a 125,000 usuarios mensuales, en alianza con Huawei para la integración Meta/WhatsApp.',
                'Logré una tasa de resolución automatizada de 60% – 65%, conteniendo más de 75,000 consultas mensuales; diseñé el enrutamiento de respaldo "Click to Call" a agentes humanos para escenarios no mapeados.',
                'Evalué y desplegué un modelo generativo de lenguaje (GLM) optimizado en costo sobre AWS, seleccionado por latencia y métricas de rendimiento, para interpretar quejas técnicas de TV ambiguas en lenguaje natural.',
                'Mapeé 29 intents de soporte desde cero en 1.5 meses e integré APIs RESTful (GET/POST) con una base de datos operativa de alta transacción para consultas de contrato, agendamiento y ticketing en tiempo real.',
                'Diseñé un marco de evaluación "LLM-as-a-Judge" para monitorear latencia, coherencia y precisión de respuestas, alcanzando un score de calidad del 80% en el rollout de fase 1.',
              ],
            },
            {
              title: 'AI Call-Center Voice Training Simulator',
              tagsLine: 'IA Conversacional, AWS Serverless, Quality Scoring',
              period: '2026',
              bullets: [
                'Construí un simulador de voz IA en tiempo real que replica escenarios complejos de clientes para entrenar y evaluar agentes de call-center, con generación dinámica de prompts y perfiles de personalidad de clientes.',
                'Diseñé una arquitectura AWS completamente serverless (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) que entrega voz en tiempo real, scoring de calidad por sesión y detección de errores fatales contra las políticas corporativas.',
                'Reduje el tiempo de onboarding de nuevos agentes y la rotación de personal en 50 personas/mes dentro de los 3 primeros meses del lanzamiento, mejorando directamente la retención y la confianza de los agentes.',
              ],
            },
            {
              title: '"Megan" Enterprise AI Assistant',
              tagsLine: 'Product Management, RAG, Despliegue de LLMs Locales',
              period: '2026',
              bullets: [
                'Gestiono el alcance del proyecto y el desarrollo técnico de un asistente IA empresarial para automatizar flujos de soporte al cliente en toda la organización.',
                'Diseño sistemas RAG y desplegando LLMs locales sobre arquitecturas distribuidas para inferencia segura on-premise.',
              ],
            },
            {
              title: 'Street Simulator',
              tagsLine: 'Scrum Master, VR, C#, Unity, PostgreSQL, Azure',
              period: '2024 – 2025',
              bullets: [
                'Gestioné un equipo Agile multifuncional de 7 desarrolladores (SCRUM) construyendo un entorno VR terapéutico que rastrea datos geoespaciales en tiempo real para más de 35 niños autistas; diseñé la infraestructura backend en C#, SQL y Azure.',
              ],
            },
          ],
        },
        {
          title: 'LIDERAZGO',
          entries: [
            {
              title: 'State Technology Advisor',
              period: 'Junio 2024 – Actual',
              bullets: [
                'Coordiné iniciativas tecnológicas y propuestas de innovación que impactan a más de 100,000 jóvenes en el estado de Nayarit, asegurando un presupuesto acumulado de más de $100,000 MXN.',
              ],
            },
          ],
        },
        {
          title: 'HABILIDADES TÉCNICAS',
          entries: [
            { bullets: ['Gestión y Gobernanza de IA: AI Project Management (PM), Product Roadmapping, RAG Architecture, LLM-as-a-Judge Evaluation, Prompt Security, Risk Management, Vendor Management, Change Management.'] },
            { bullets: ['Lenguajes de Programación: Python, C#, Java, JavaScript, C++, SQL.'] },
            { bullets: ['Frameworks y Backend: .NET Core, Angular, Laravel, Django, REST APIs, JSON Processing.'] },
            { bullets: ['DevOps, Cloud e Infraestructura: Docker, Kubernetes, Fedora Linux, AWS, Google Cloud (GCP), Azure, Databricks.'] },
            { bullets: ['Modelos y Ecosistemas de IA: Microsoft Copilot Studio, NotebookLM, Ollama, LM Studio, ChatGPT, Gemini, Power Automate, scikit-learn.'] },
            { bullets: ['Arquitectura y Metodologías: Vibecoding (AI-Assisted Dev), Agile/SCRUM, Mermaid.js, PlantUML, Eraser.io, Jira, Figma, Process Mapping.'] },
          ],
        },
      ],
    }
  }

  return {
    name: 'JESÚS ROLDÁN MADERO AGUILAR',
    role: 'AI Project Manager | AI Implementation Engineer | Software Engineer',
    contacts: [
      'Guadalajara, Jalisco, Mexico | Phone: (+52) 311 373 8261',
      'roldanmadero16@outlook.com | linkedin.com/in/roldanmadero | github.com/MoonRiver75',
    ],
    sections: [
      {
        title: 'PROFESSIONAL PROFILE',
        entries: [
          {
            flush: true,
            bullets: [
              'AI Project Manager and Software Engineer with hands-on experience leading enterprise AI transformation, product management, and full-stack implementation at scale. Currently own the end-to-end lifecycle of AI initiatives serving over 150,000 combined monthly users across Megacable\'s customer support and field operations, from business requirements and vendor evaluation to agile execution using AI-assisted development (Vibecoding) and cross-functional coordination with the Chief AI Officer. Strong technical foundation across programming languages, cloud architectures (AWS, Azure, GCP), and RAG/LLM system design. Skilled at bridging AI strategy, corporate governance, and hands-on engineering to ship secure, measurable, highly-adopted intelligent workflows.',
            ],
          },
        ],
      },
      {
        title: 'EDUCATION',
        entries: [
          {
            title: 'B.Sc. Computational Systems Engineering | Software Engineering',
            sub: 'Universidad Autónoma de Nayarit — Nayarit, Mexico',
            period: 'Graduation: December 2024',
            bullets: [
              'Golden Key Honours Scholar | GPA: 4.0',
              'Relevant Coursework: Software Engineering, Applied Machine Learning, Operating Systems, Computer Architecture, Model-Based Programming, Algorithms, and Data Structures.',
            ],
          },
        ],
      },
      {
        title: 'AI TRAINING & PROFESSIONAL DEVELOPMENT',
        entries: [
          { title: 'Advanced AI Project Management — Ongoing.', bullets: ['Application of AI tools for product roadmapping, execution, stakeholder communication, and Agile project control.'] },
          { title: 'AI Governance & Compliance — Ongoing.', bullets: ['Governance frameworks, regulatory considerations, responsible adoption, and compliance practices for enterprise AI initiatives.'] },
          { title: 'Secure Enterprise AI: Risk Management — Ongoing.', bullets: ['Enterprise risk management, data protection, compliance controls, prompt security, and responsible deployment.'] },
        ],
      },
      {
        title: 'PROFESSIONAL EXPERIENCE',
        entries: [
          {
            title: 'AI Project Manager & Implementation Engineer',
            sub: 'Megacable — Guadalajara, Mexico',
            period: '2025 – Present',
            bullets: [
              'Lead end-to-end project management and technical implementation of enterprise AI initiatives, reporting to the Chief AI Officer and coordinating with cross-functional teams and external vendors (Huawei, Meta).',
              'Own the roadmap for a portfolio of production AI agents (WhatsApp TV support, field-service RAG auditor, call-center voice simulator, enterprise assistant "Megan") serving over 150,000 combined monthly users.',
              'Conduct technical capability evaluations of enterprise systems (including Oracle Fusion Cloud HCM releases 26A/26B) and Generative Language Models (GLMs) to determine cost, latency, security, and strategic alignment.',
              'Design operational architectures and process flowcharts utilizing Mermaid.js, PlantUML, and Eraser.io to translate complex business needs into structured engineering deliverables.',
              'Drive rapid prototyping and solution delivery leveraging Vibecoding (AI-Assisted Development) methodologies, minimizing technical debt and accelerating time-to-market.',
              'Spearhead enterprise change management for Copilot Pro and NotebookLM adoption, generating business cases, permission workflows, and executive documentation.',
            ],
          },
          {
            title: 'Video Game Designer & Software Engineer',
            sub: 'CICESE UAT — Nayarit, Mexico',
            period: '2024 – 2025',
            bullets: [
              'Designed and developed interactive systems as part of a cross-functional Agile team, applying software engineering practices to game and simulation design, including the therapeutic VR project Street Simulator (see Projects).',
            ],
          },
        ],
      },
      {
        title: 'PROJECTS & TECHNICAL INITIATIVES',
        entries: [
          {
            title: 'RAG-Powered Field Service AI Auditor (CPK)',
            tagsLine: 'RAG, IoT Telemetry, JSON Processing, Fraud Prevention',
            period: '2026',
            bullets: [
              'Architected a secure Retrieval-Augmented Generation (RAG) AI assistant integrated with a mobile app to guide and audit field technicians during residential telecom installations, validating actas via image and geolocation analysis to prevent fraud.',
              'Engineered ingestion of complex JSON telemetry payloads (Jitter, RSSI, optical power, geospatial data) captured via mobile Wi-Fi antennas.',
              'Correlated technical variables against private corporate policy within an isolated RAG knowledge base, generating structured diagnostic reports (impact, root cause, action plan) and autonomously escalating tickets when needed.',
              'Scaled adoption from 2,000 to 27,000 monthly queries by iterating on prompts based on field feedback, establishing the AI as a trusted technical copilot.',
            ],
          },
          {
            title: 'WhatsApp TV Support AI Agent (XVIEW+)',
            tagsLine: 'AI Product Management, NLP, AWS, API Integration',
            period: '2025 – 2026',
            bullets: [
              'Led end-to-end process mapping and deployment of an NLP-powered WhatsApp AI assistant serving 125,000 monthly users, partnering with Huawei for Meta/WhatsApp integration.',
              'Achieved a 60% – 65% automated resolution rate, containing over 75,000 inquiries monthly; engineered "Click to Call" fallback routing for unmapped scenarios to human agents.',
              'Evaluated and deployed a cost-optimized Generative Language Model (GLM) on AWS, selected on latency and performance metrics, to interpret ambiguous natural-language TV technical complaints.',
              'Mapped 29 support intents from scratch in 1.5 months and integrated RESTful APIs (GET/POST) with a high-transaction operational database for real-time contract lookups, scheduling, and ticketing.',
              'Designed an "LLM-as-a-Judge" evaluation framework to monitor response latency, coherence, and accuracy, reaching an 80% quality score in the phase 1 rollout.',
            ],
          },
          {
            title: 'AI Call-Center Voice Training Simulator',
            tagsLine: 'Conversational AI, AWS Serverless, Quality Scoring',
            period: '2026',
            bullets: [
              'Built a real-time AI voice simulator that replicates complex customer scenarios to train and evaluate call-center agents, using dynamic prompt generation and customer personality profiles.',
              'Designed a fully serverless AWS architecture (Bedrock, S3, DuckDB, DeepDub, API Gateway WebSocket) delivering real-time voice, per-session quality scoring, and fatal-error detection against corporate policy adherence.',
              'Cut new-hire onboarding time and reduced staff turnover by 50 people/month within 3 months of launch, directly improving retention and agent confidence.',
            ],
          },
          {
            title: '"Megan" Enterprise AI Assistant',
            tagsLine: 'Product Management, RAG, Local LLM Deployment',
            period: '2026',
            bullets: [
              'Managing project scope and technical development of an enterprise AI assistant to automate customer support workflows across the organization.',
              'Designing RAG systems and deploying local LLMs on distributed architectures for secure, on-premise inference.',
            ],
          },
          {
            title: 'Street Simulator',
            tagsLine: 'Scrum Master, VR, C#, Unity, PostgreSQL, Azure',
            period: '2024 – 2025',
            bullets: [
              'Managed a cross-functional Agile team of 7 developers (SCRUM) building a therapeutic VR environment tracking real-time geospatial data for over 35 autistic children; engineered backend infrastructure in C#, SQL, and Azure.',
            ],
          },
        ],
      },
      {
        title: 'LEADERSHIP',
        entries: [
          {
            title: 'State Technology Advisor',
            period: 'June 2024 – Present',
            bullets: [
              'Coordinated technology initiatives and innovation proposals impacting over 100,000 youth in the state of Nayarit, successfully securing an accumulated budget of over $100,000 MXN.',
            ],
          },
        ],
      },
      {
        title: 'TECHNICAL SKILLS',
        entries: [
          { bullets: ['AI Management & Governance: AI Project Management (PM), Product Roadmapping, RAG Architecture, LLM-as-a-Judge Evaluation, Prompt Security, Risk Management, Vendor Management, Change Management.'] },
          { bullets: ['Programming Languages: Python, C#, Java, JavaScript, C++, SQL.'] },
          { bullets: ['Frameworks & Backend: .NET Core, Angular, Laravel, Django, REST APIs, JSON Processing.'] },
          { bullets: ['DevOps, Cloud & Infrastructure: Docker, Kubernetes, Fedora Linux, AWS, Google Cloud (GCP), Azure, Databricks.'] },
          { bullets: ['AI Models & Ecosystems: Microsoft Copilot Studio, NotebookLM, Ollama, LM Studio, ChatGPT, Gemini, Power Automate, scikit-learn.'] },
          { bullets: ['Architecture & Methodologies: Vibecoding (AI-Assisted Dev), Agile/SCRUM, Mermaid.js, PlantUML, Eraser.io, Jira, Figma, Process Mapping.'] },
        ],
      },
    ],
  }
}

function wrapLines(doc: jsPDF, text: string, maxWidth: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word
    if (doc.getTextWidth(candidate) > maxWidth && current) {
      lines.push(current)
      current = word
    } else {
      current = candidate
    }
  }
  if (current) lines.push(current)
  return lines
}

export async function renderCvPdf(lang: Lang): Promise<{ doc: jsPDF; content: CvContent }> {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  doc.setProperties({
    title: 'Jesús Roldán Madero — CV (Harvard Format)',
    author: 'Jesús Roldán Madero Aguilar',
    subject: 'Professional Résumé',
  })

  const content = buildContent(lang)
  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()
  const marginL = 55
  const marginR = 55
  const marginT = 46
  const marginB = 42
  const usableW = pageW - marginL - marginR
  const lineH = 11

  let y = marginT

  const ensureSpace = (needed: number) => {
    if (y + needed > pageH - marginB) {
      doc.addPage()
      y = marginT
    }
  }

  // Header
  doc.setFont('times', 'bold')
  doc.setFontSize(17)
  doc.text(content.name, pageW / 2, y, { align: 'center' })
  y += 15

  doc.setFont('times', 'italic')
  doc.setFontSize(10.5)
  doc.text(content.role, pageW / 2, y, { align: 'center' })
  y += 13

  doc.setFont('times', 'normal')
  doc.setFontSize(9)
  doc.text(content.contacts.join('  |  '), pageW / 2, y, { align: 'center' })
  y += 7

  doc.setDrawColor(0)
  doc.setLineWidth(1)
  doc.line(marginL, y, pageW - marginR, y)
  y += 11

  for (const section of content.sections) {
    ensureSpace(24)
    doc.setFont('times', 'bold')
    doc.setFontSize(10.5)
    doc.setCharSpace(0.6)
    doc.text(section.title, marginL, y)
    doc.setCharSpace(0)
    y += 3.5
    doc.setLineWidth(0.6)
    doc.line(marginL, y, pageW - marginR, y)
    y += 8.5

    for (const entry of section.entries) {
      if (entry.title) {
        ensureSpace(16)
        doc.setFont('times', 'bold')
        doc.setFontSize(9.6)
        doc.text(entry.title, marginL, y)
        if (entry.period) {
          doc.setFont('times', 'italic')
          doc.setFontSize(9)
          doc.text(entry.period, pageW - marginR, y, { align: 'right' })
        }
        y += 11

        if (entry.tagsLine) {
          doc.setFont('times', 'italic')
          doc.setFontSize(8.4)
          doc.setTextColor(60)
          doc.text(entry.tagsLine, marginL, y)
          doc.setTextColor(0)
          y += 9.5
        } else if (entry.sub) {
          doc.setFont('times', 'italic')
          doc.setFontSize(8.8)
          doc.setTextColor(40)
          doc.text(entry.sub, marginL, y)
          doc.setTextColor(0)
          y += 9.5
        }
      }

      if (entry.bullets) {
        const bulletIndent = marginL + 12
        const wrapW = usableW - 12
        for (const bullet of entry.bullets) {
          const lines = wrapLines(doc, bullet, wrapW)
          ensureSpace(lines.length * lineH)
          doc.setFont('times', 'normal')
          doc.setFontSize(9.2)
          for (const line of lines) {
            const isFirst = line === lines[0]
            if (!entry.flush) doc.text('•', marginL, y)
            doc.text(line, isFirst ? bulletIndent : entry.flush ? marginL : bulletIndent, y)
            y += lineH
          }
          y += 1.2
        }
      }
      y += 2.2
    }
    y += 1.5
  }

  return { doc, content }
}

export async function downloadCvPdf(lang: Lang): Promise<void> {
  const { doc } = await renderCvPdf(lang)
  doc.save(FILE_NAME)
}

export { FILE_NAME }
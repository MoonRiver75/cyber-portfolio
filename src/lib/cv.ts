import type { jsPDF } from 'jspdf'
import type { Lang } from '../i18n/translations'

type CvEntry = {
  title: string
  sub?: string
  period?: string
  bullets: string[]
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
      role: 'Gerente de Proyectos de IA  |  Ingeniero de Implementación  |  Ingeniero de Software',
      contacts: [
        'Guadalajara, Jalisco, México',
        '(+52) 311 373 8261',
        'roldanmadero16@outlook.com',
        'linkedin.com/in/roldanmadero',
        'github.com/MoonRiver75',
      ],
      sections: [
        {
          title: 'EDUCACIÓN',
          entries: [
            {
              title: 'B.Sc. Ingeniería en Sistemas Computacionales',
              sub: 'Universidad Autónoma de Nayarit  —  México',
              period: '2025',
              bullets: [
                'Promedio perfecto GPA 4.0 / 100%  ·  Distinción Golden Key International Honour Society  ·  Mejor capstone departamental.',
              ],
            },
          ],
        },
        {
          title: 'EXPERIENCIA',
          entries: [
            {
              title: 'Gerente de Proyectos de IA e Ingeniero de Implementación',
              sub: 'Megacable  —  Guadalajara, Jalisco, México',
              period: '2025 – Actual',
              bullets: [
                'Dirijo el portafolio de IA empresarial que sirve a 150,000+ usuarios mensuales en auditoría RAG, agentes conversacionales y simulación de voz.',
                'Logré 60–65% de resolución automatizada en un agente de WhatsApp con 125K usuarios y escalé un auditor RAG de 2,000 a 27,000 consultas mensuales.',
              ],
            },
            {
              title: 'Asesor de Tecnología Estatal y Coordinador de Innovación',
              sub: 'Gobierno de Nayarit  —  Tepic, México',
              period: '2024 – 2025',
              bullets: [
                'Aseguré $100K+ MXN en becas estatales de innovación y coordiné programas de modernización que impactaron a 100,000+ estudiantes y jóvenes.',
              ],
            },
            {
              title: 'Diseñador de Videojuegos, Scrum Master e Ingeniero de Software',
              sub: 'CICESE  -  Unidad de Transferencia Tecnológica (UAT)',
              period: '2024 – 2025',
              bullets: [
                'Scrum Master de un equipo interdisciplinario que construyó un simulador VR de cruce de calles para niños autistas; 35+ niños en ensayos clínicos.',
              ],
            },
          ],
        },
        {
          title: 'PROYECTOS SELECCIONADOS',
          entries: [
            { title: '', bullets: ['RAG Field Auditor (2026) — pipeline de auditoría con telemetría y visión por computadora, escalado a 27K consultas/mes.'] },
            { title: '', bullets: ['Agente IA de Soporte TV en WhatsApp (2025-26) — 125K usuarios/mes, 60–65% de auto-resolución.'] },
            { title: '', bullets: ['Simulador de voz para Call-Center (2026) — serverless en AWS; rotación reducida 50 agentes/mes.'] },
            { title: '', bullets: ['Asistente IA Empresarial Megan (2026) — copiloto RAG on-premise ultra-seguro para telecom.'] },
            { title: '', bullets: ['Simulador VR Terapéutico de Calle (2024-25) — Unity C# + Azure; ensayos clínicos con 35+ niños.'] },
          ],
        },
        {
          title: 'HABILIDADES',
          entries: [
            {
              title: '',
              bullets: [
                'IA: Arquitectura RAG, evaluación LLM-as-a-Judge, prompt engineering, copilotos empresariales.',
                'Ingeniería: Python, C#, Java, TypeScript, SQL (PostgreSQL, DuckDB), React, .NET, Unity.',
                'Cloud: AWS (Bedrock), GCP, Azure, Docker, Kubernetes, Databricks; LLMs locales (Ollama, vLLM).',
                'Liderazgo: Gobernanza de IA empresarial, Scrum/Agile, gestión de proveedores (Huawei, Meta), innovación en el sector público.',
              ],
            },
          ],
        },
      ],
    }
  }

  return {
    name: 'JESÚS ROLDÁN MADERO AGUILAR',
    role: 'AI Project Manager  |  AI Implementation Engineer  |  Software Engineer',
    contacts: [
      'Guadalajara, Jalisco, Mexico',
      '(+52) 311 373 8261',
      'roldanmadero16@outlook.com',
      'linkedin.com/in/roldanmadero',
      'github.com/MoonRiver75',
    ],
    sections: [
      {
        title: 'EDUCATION',
        entries: [
          {
            title: 'B.Sc. Computational Systems Engineering',
            sub: 'Universidad Autónoma de Nayarit  —  Mexico',
            period: '2025',
            bullets: [
              'Perfect GPA 4.0 / 100%  ·  Golden Key International Honour Society  ·  Top-ranked departmental capstone.',
            ],
          },
        ],
      },
      {
        title: 'EXPERIENCE',
        entries: [
          {
            title: 'AI Project Manager & Implementation Engineer',
            sub: 'Megacable  —  Guadalajara, Jalisco, Mexico',
            period: '2025 – Present',
            bullets: [
              'Lead the enterprise AI portfolio serving 150,000+ monthly users across RAG auditing, conversational agents, and voice simulation.',
              'Drove 60–65% automated resolution on a 125K-user WhatsApp agent and scaled a RAG auditor from 2,000 to 27,000 monthly queries.',
            ],
          },
          {
            title: 'State Technology Advisor & Innovation Coordinator',
            sub: 'Government of Nayarit  —  Tepic, Mexico',
            period: '2024 – 2025',
            bullets: [
              'Secured $100K+ MXN in state innovation grants and coordinated modernization programs impacting 100,000+ students and youth.',
            ],
          },
          {
            title: 'Video Game Designer, Scrum Master & Software Engineer',
            sub: 'CICESE  -  Unidad de Transferencia Tecnológica (UAT)',
            period: '2024 – 2025',
            bullets: [
              'Scrum-mastered a cross-functional team building a VR street-crossing simulator for autistic children; 35+ children in clinical trials.',
            ],
          },
        ],
      },
      {
        title: 'SELECTED PROJECTS',
        entries: [
          { title: '', bullets: ['RAG Field Auditor (2026) — telemetry + computer-vision auditing pipeline scaled to 27K queries/mo.'] },
          { title: '', bullets: ['WhatsApp TV Support AI Agent (2025-26) — 125K users/mo, 60–65% auto-resolution.'] },
          { title: '', bullets: ['AI Call-Center Voice Simulator (2026) — serverless AWS; turnover reduced by 50 agents/mo.'] },
          { title: '', bullets: ['Megan Enterprise AI Assistant (2026) — ultra-secure on-premise RAG copilot for a major telco.'] },
          { title: '', bullets: ['VR Street Therapeutic Simulator (2024-25) — Unity C# + Azure; clinical trials with 35+ children.'] },
        ],
      },
      {
        title: 'SKILLS',
        entries: [
          {
            title: '',
            bullets: [
              'AI: RAG architecture, LLM-as-a-Judge evaluation, prompt engineering, enterprise copilots.',
              'Engineering: Python, C#, Java, TypeScript, SQL (PostgreSQL, DuckDB), React, .NET, Unity.',
              'Cloud: AWS (Bedrock), GCP, Azure, Docker, Kubernetes, Databricks; local LLMs (Ollama, vLLM).',
              'Leadership: Enterprise AI governance, Scrum/Agile, vendor management (Huawei, Meta), public-sector innovation.',
            ],
          },
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
  const marginB = 46
  const usableW = pageW - marginL - marginR

  let y = marginT

  // Header
  doc.setFont('times', 'bold')
  doc.setFontSize(17)
  doc.text(content.name, pageW / 2, y, { align: 'center' })
  y += 15

  doc.setFont('times', 'italic')
  doc.setFontSize(10.5)
  doc.text(content.role, pageW / 2, y, { align: 'center' })
  y += 14

  doc.setFont('times', 'normal')
  doc.setFontSize(9)
  doc.text(content.contacts.join('   ·   '), pageW / 2, y, { align: 'center' })
  y += 8

  doc.setDrawColor(0)
  doc.setLineWidth(1)
  doc.line(marginL, y, pageW - marginR, y)
  y += 14

  const ensureSpace = (needed: number) => {
    if (y + needed > pageH - marginB) {
      doc.addPage()
      y = marginT
    }
  }

  for (const section of content.sections) {
    ensureSpace(24)
    doc.setFont('times', 'bold')
    doc.setFontSize(10.5)
    doc.setCharSpace(0.6)
    doc.text(section.title, marginL, y)
    doc.setCharSpace(0)
    y += 4
    doc.setLineWidth(0.6)
    doc.line(marginL, y, pageW - marginR, y)
    y += 10

    for (const entry of section.entries) {
      if (entry.title) {
        ensureSpace(18)
        doc.setFont('times', 'bold')
        doc.setFontSize(10)
        doc.text(entry.title, marginL, y)
        if (entry.period) {
          doc.setFont('times', 'italic')
          doc.setFontSize(9)
          doc.text(entry.period, pageW - marginR, y, { align: 'right' })
          doc.setFont('times', 'normal')
          doc.setFontSize(9.2)
        } else {
          doc.setFont('times', 'normal')
          doc.setFontSize(9.2)
        }
        y += 12

        if (entry.sub) {
          doc.setFont('times', 'italic')
          doc.setFontSize(8.8)
          doc.text(entry.sub, marginL, y)
          doc.setFont('times', 'normal')
          doc.setFontSize(9.2)
          y += 11
        }
      }

      const bulletIndent = marginL + 13
      const wrapW = usableW - 13
      for (const bullet of entry.bullets) {
        const lines = wrapLines(doc, bullet, wrapW)
        ensureSpace(lines.length * 11.5)
        doc.setFont('times', 'normal')
        doc.setFontSize(9.2)
        for (const line of lines) {
          const isFirst = line === lines[0]
          doc.text(isFirst ? '•' : '', marginL, y)
          doc.text(line, isFirst ? bulletIndent : bulletIndent, y)
          y += 11.5
        }
        y += 1.5
      }
      y += 3
    }
    y += 6
  }

  return { doc, content }
}

export async function downloadCvPdf(lang: Lang): Promise<void> {
  const { doc } = await renderCvPdf(lang)
  doc.save(FILE_NAME)
}

export { FILE_NAME }
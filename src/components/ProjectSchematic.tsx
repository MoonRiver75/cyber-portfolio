export type DiagramType =
  | 'rag-audit'
  | 'whatsapp-agent'
  | 'voice-sim'
  | 'megan'
  | 'vr-street'

const bg: Record<DiagramType, string> = {
  'rag-audit': '#00ffff',
  'whatsapp-agent': '#ff00ff',
  'voice-sim': '#39ff14',
  megan: '#00e5ff',
  'vr-street': '#ff00ff',
}

function TelemetryLabel({ text, color }: { text: string; color: string }) {
  return (
    <text fill={color} fontFamily="monospace" fontSize="8" x="15" y="20">
      {text}
    </text>
  )
}

function RagAuditDiagram() {
  return (
    <svg className="w-full h-full text-primary-fixed" fill="none" stroke="currentColor" viewBox="0 0 320 130">
      <TelemetryLabel text="> TELEMETRY: SIGNAL | JITTER | LINK_PWR" color="#00ffff" />
      <rect fill="#1c1b1b" height="40" stroke="#00ffff" strokeWidth="1.5" width="50" x="15" y="45" />
      <text fill="#00ffff" fontFamily="monospace" fontSize="7" x="18" y="60">FIELD APP</text>
      <text fill="#b9cac9" fontFamily="monospace" fontSize="6.5" x="18" y="72">GEO + IMG</text>
      <line stroke="#00ffff" strokeDasharray="2 2" strokeWidth="1.5" x1="65" x2="105" y1="65" y2="65" />
      <polygon fill="#1c1b1b" points="125,45 145,65 125,85 105,65" stroke="#ff8ff7" strokeWidth="1.5" />
      <text fill="#ff8ff7" fontFamily="monospace" fontSize="6.5" x="111" y="68">PARSER</text>
      <line stroke="#ff8ff7" strokeWidth="1.5" x1="145" x2="185" y1="55" y2="40" />
      <line stroke="#ff8ff7" strokeWidth="1.5" x1="145" x2="185" y1="75" y2="90" />
      <rect fill="#1c1b1b" height="26" stroke="#39ff14" strokeWidth="1.5" width="55" x="185" y="27" />
      <text fill="#39ff14" fontFamily="monospace" fontSize="6.5" x="188" y="43">POLICY RAG</text>
      <rect fill="#1c1b1b" height="26" stroke="#00ffff" strokeWidth="1.5" width="55" x="185" y="77" />
      <text fill="#00ffff" fontFamily="monospace" fontSize="6.5" x="190" y="93">ACT VALIDATION</text>
      <line stroke="#39ff14" strokeWidth="2" x1="240" x2="275" y1="40" y2="65" />
      <line stroke="#00ffff" strokeWidth="2" x1="240" x2="275" y1="90" y2="65" />
      <circle cx="290" cy="65" fill="#39ff14" r="14" />
      <text fill="#053900" fontFamily="monospace" fontSize="7.5" fontWeight="bold" x="279" y="68">VALID</text>
    </svg>
  )
}

function WhatsAppDiagram() {
  return (
    <svg className="w-full h-full text-secondary" fill="none" stroke="currentColor" viewBox="0 0 320 130">
      <TelemetryLabel text="> CONTAINMENT: 70K+ INQUIRIES/MO" color="#e5e2e1" />
      <rect fill="#1c1b1b" height="34" stroke="#ff8ff7" strokeWidth="1.5" width="55" x="15" y="48" />
      <text fill="#ff8ff7" fontFamily="monospace" fontSize="7" x="20" y="62">MESSAGING / WA</text>
      <text fill="#b9cac9" fontFamily="monospace" fontSize="6.5" x="20" y="74">29 INTENTS</text>
      <line stroke="#ff8ff7" strokeWidth="2" x1="70" x2="110" y1="65" y2="65" />
      <rect fill="#1c1b1b" height="50" stroke="#ff00ff" strokeWidth="2" width="70" x="110" y="40" />
      <text fill="#ff00ff" fontFamily="monospace" fontSize="7" x="115" y="58">AWS GEN-AI</text>
      <text fill="#00ffff" fontFamily="monospace" fontSize="6.5" x="115" y="70">LLM LAYER</text>
      <text fill="#39ff14" fontFamily="monospace" fontSize="6.5" x="115" y="82">LLM-JUDGE</text>
      <path d="M180 55 H 220 V 35 H 245" fill="none" stroke="#39ff14" strokeWidth="1.8" />
      <path d="M180 75 H 220 V 95 H 245" fill="none" stroke="#ff8ff7" strokeDasharray="3 2" strokeWidth="1.8" />
      <rect fill="#1c1b1b" height="24" stroke="#39ff14" strokeWidth="1.5" width="65" x="245" y="23" />
      <text fill="#39ff14" fontFamily="monospace" fontSize="6.5" x="249" y="38">{'AUTO: >60%'}</text>
      <rect fill="#1c1b1b" height="24" stroke="#ff8ff7" strokeWidth="1.5" width="65" x="245" y="83" />
      <text fill="#ff8ff7" fontFamily="monospace" fontSize="6.5" x="249" y="98">CLICK-TO-CALL</text>
    </svg>
  )
}

function VoiceSimDiagram() {
  return (
    <svg className="w-full h-full text-tertiary-fixed-dim" fill="none" stroke="currentColor" viewBox="0 0 320 130">
      <TelemetryLabel text="> ZERO LATENCY SPEECH-TO-SPEECH SIM" color="#39ff14" />
      <circle cx="35" cy="65" fill="#1c1b1b" r="20" stroke="#39ff14" strokeWidth="1.5" />
      <text fill="#39ff14" fontFamily="monospace" fontSize="6.5" x="20" y="68">AGENT</text>
      <path d="M55 65 H 90" stroke="#39ff14" strokeWidth="2" />
      <rect fill="#1c1b1b" height="50" stroke="#00ffff" strokeWidth="1.8" width="70" x="90" y="40" />
      <text fill="#00ffff" fontFamily="monospace" fontSize="6.5" x="96" y="58">API GATEWAY</text>
      <text fill="#00ffff" fontFamily="monospace" fontSize="6" x="96" y="69">WEBSOCKET</text>
      <text fill="#39ff14" fontFamily="monospace" fontSize="6" x="96" y="80">BEDROCK S3</text>
      <path d="M160 65 H 195" stroke="#00ffff" strokeWidth="2" />
      <rect fill="#1c1b1b" height="50" stroke="#ff8ff7" strokeWidth="1.8" width="60" x="195" y="40" />
      <text fill="#ff8ff7" fontFamily="monospace" fontSize="6.5" x="200" y="58">DEEPDUB</text>
      <text fill="#ff8ff7" fontFamily="monospace" fontSize="6" x="200" y="69">DUCKDB</text>
      <text fill="#39ff14" fontFamily="monospace" fontSize="6" x="200" y="80">PERSONALITY</text>
      <path d="M255 65 H 285" stroke="#ff8ff7" strokeWidth="2" />
      <circle cx="295" cy="65" fill="#39ff14" r="10" />
      <text fill="#053900" fontFamily="monospace" fontSize="7" fontWeight="bold" x="287" y="68">HUD</text>
    </svg>
  )
}

function EnterpriseCopilotDiagram() {
  return (
    <svg className="w-full h-full text-primary-fixed" fill="none" stroke="currentColor" viewBox="0 0 320 130">
      <TelemetryLabel text="> ON-PREMISE SECURE ENTERPRISE INFERENCE" color="#00ffff" />
      <rect fill="#1c1b1b" height="30" stroke="#00ffff" strokeWidth="1.5" width="45" x="20" y="30" />
      <text fill="#00ffff" fontFamily="monospace" fontSize="6.5" x="25" y="48">POLICY</text>
      <rect fill="#1c1b1b" height="30" stroke="#00ffff" strokeWidth="1.5" width="45" x="20" y="70" />
      <text fill="#00ffff" fontFamily="monospace" fontSize="6.5" x="25" y="88">ERP/HCM</text>
      <path d="M65 45 H 110" stroke="#00ffff" strokeWidth="1.5" />
      <path d="M65 85 H 110" stroke="#00ffff" strokeWidth="1.5" />
      <circle cx="130" cy="65" fill="#1c1b1b" r="20" stroke="#39ff14" strokeWidth="2" />
      <text fill="#39ff14" fontFamily="monospace" fontSize="6.5" x="115" y="68">VECTOR STORE</text>
      <path d="M150 65 H 190" stroke="#39ff14" strokeWidth="2" />
      <rect fill="#1c1b1b" height="50" stroke="#ff8ff7" strokeWidth="1.8" width="70" x="190" y="40" />
      <text fill="#ff8ff7" fontFamily="monospace" fontSize="6.5" x="195" y="58">LOCAL LLM</text>
      <text fill="#b9cac9" fontFamily="monospace" fontSize="6" x="195" y="69">AIR-GAPPED</text>
      <text fill="#00ffff" fontFamily="monospace" fontSize="6" x="195" y="80">SECURE LOCAL</text>
      <line stroke="#ff8ff7" strokeWidth="2" x1="260" x2="285" y1="65" y2="65" />
      <polygon fill="#00ffff" points="295,55 305,65 295,75 285,65" />
    </svg>
  )
}

function VrStreetDiagram() {
  return (
    <svg className="w-full h-full text-secondary" fill="none" stroke="currentColor" viewBox="0 0 320 130">
      <TelemetryLabel text="> BIOMETRIC & GEOSPATIAL REACTION TELEMETRY" color="#e5e2e1" />
      <line opacity="0.4" stroke="#ff8ff7" strokeWidth="1" x1="160" x2="20" y1="20" y2="120" />
      <line opacity="0.4" stroke="#ff8ff7" strokeWidth="1" x1="160" x2="80" y1="20" y2="120" />
      <line opacity="0.4" stroke="#ff8ff7" strokeWidth="1" x1="160" x2="160" y1="20" y2="120" />
      <line opacity="0.4" stroke="#ff8ff7" strokeWidth="1" x1="160" x2="240" y1="20" y2="120" />
      <line opacity="0.4" stroke="#ff8ff7" strokeWidth="1" x1="160" x2="300" y1="20" y2="120" />
      <rect fill="#1c1b1b" height="15" stroke="#00ffff" strokeWidth="1.5" width="120" x="100" y="80" />
      <text fill="#00ffff" fontFamily="monospace" fontSize="7" x="120" y="91">STREET SIM</text>
      <circle cx="160" cy="50" fill="#39ff14" r="6" />
      <text fill="#39ff14" fontFamily="monospace" fontSize="7" x="172" y="53">GAZE_TRACK: 60Hz</text>
      <rect fill="#1c1b1b" height="24" stroke="#ff00ff" strokeWidth="1.5" width="70" x="220" y="15" />
      <text fill="#ff00ff" fontFamily="monospace" fontSize="6.5" x="225" y="30">POSTGRES/AZURE</text>
    </svg>
  )
}

const diagramMap: Record<DiagramType, React.FC> = {
  'rag-audit': RagAuditDiagram,
  'whatsapp-agent': WhatsAppDiagram,
  'voice-sim': VoiceSimDiagram,
  megan: EnterpriseCopilotDiagram,
  'vr-street': VrStreetDiagram,
}

export default function ProjectSchematic({ type }: { type: DiagramType }) {
  const DotColor = bg[type]
  const Diagram = diagramMap[type]
  return (
    <div className="relative w-full h-40 bg-surface-container-lowest overflow-hidden flex items-center justify-center p-2 border border-surface-light">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(${DotColor} 1px, transparent 1px)`,
          backgroundSize: '12px 12px',
        }}
      />
      <Diagram />
    </div>
  )
}
const metrics = [
  {
    value: '150K+',
    label: 'Monthly Active Users',
    sub: 'Across Production Agents',
    color: '#00fbfb',
    border: 'rgba(0,251,251,0.3)',
    glow: 'rgba(0,251,251,0.1)',
  },
  {
    value: '60-65%',
    label: 'Automated Resolution',
    sub: 'WhatsApp AI Agent',
    color: '#ffabf3',
    border: 'rgba(255,171,243,0.4)',
    glow: 'rgba(254,0,254,0.1)',
  },
  {
    value: '75K+',
    label: 'Monthly Inquiries',
    sub: 'Self-Contained',
    color: '#2ae500',
    border: 'rgba(42,229,0,0.4)',
    glow: 'rgba(42,229,0,0.1)',
  },
  {
    value: '13.5x',
    label: 'Query Scaling',
    sub: '2K → 27K Field Auditor',
    color: '#00fbfb',
    border: 'rgba(0,251,251,0.3)',
  },
  {
    value: '-50/mo',
    label: 'Staff Turnover',
    sub: 'Voice Sim Onboarding',
    color: '#ffabf3',
    border: 'rgba(255,171,243,0.3)',
  },
  {
    value: '80%',
    label: 'Quality Score',
    sub: '29 Intents in 1.5 Mos',
    color: '#2ae500',
    border: 'rgba(42,229,0,0.3)',
  },
  {
    value: '$100K+',
    label: 'MXN State Budget',
    sub: 'Tech Innovation Grant',
    color: '#00fbfb',
    border: 'rgba(0,251,251,0.3)',
  },
]

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="w-full scroll-mt-24 border-b border-surface-light bg-surface-container-low px-4 py-12 lg:px-8"
    >
      <div className="container-cyber flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-2 font-code text-[10px] font-bold">
          <div className="flex items-center gap-2 uppercase tracking-widest text-primary-fixed">
            <span className="material-symbols-outlined text-[16px]">query_stats</span>
            <span>// ENTERPRISE_METRICS_HUD :: REAL_WORLD_PRODUCTION_IMPACT</span>
          </div>
          <div className="text-outline">
            VALIDATED: MEGACABLE AUDIT CLUSTER // 2025-2026 CYCLE
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-7">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 border bg-surface-container-lowest p-2"
              style={{
                borderColor: m.border,
                boxShadow: m.glow ? `0 0 15px ${m.glow}` : undefined,
              }}
            >
              <span
                className="font-display text-[28px] font-bold leading-tight"
                style={{ color: m.color }}
              >
                {m.value}
              </span>
              <span className="font-code text-[10px] font-bold uppercase leading-snug text-on-surface">
                {m.label}
              </span>
              <span className="font-code text-[10px]" style={{ color: m.color }}>
                {m.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
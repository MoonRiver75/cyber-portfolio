import { useI18n } from '../i18n'

export default function Metrics() {
  const { t } = useI18n()
  const { metrics } = t

  return (
    <section
      id="metrics"
      className="w-full scroll-mt-24 border-b border-surface-light bg-surface-container-low px-4 py-12 lg:px-8"
    >
      <div className="container-cyber flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-2 font-code text-[10px] font-bold">
          <div className="flex items-center gap-2 uppercase tracking-widest text-primary-fixed">
            <span className="material-symbols-outlined text-[16px]">query_stats</span>
            <span>{metrics.kicker}</span>
          </div>
          <div className="text-outline">{metrics.badge}</div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-7">
          {metrics.items.map((m) => (
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
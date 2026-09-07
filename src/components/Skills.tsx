import { useI18n } from '../i18n'

export default function Skills() {
  const { t } = useI18n()
  const { skills } = t

  return (
    <section
      id="skills"
      className="w-full scroll-mt-24 border-b border-surface-light px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="container-cyber flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-tertiary-fixed-dim">
              <span className="h-2 w-2 bg-tertiary-fixed-dim" />
              <span>{skills.kicker}</span>
            </div>
            <h2 className="font-headline-lg uppercase tracking-tight text-primary">
              {skills.title}
            </h2>
          </div>
          <div className="font-code text-[10px] font-bold text-outline">{skills.badge}</div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.groups.map((group) => (
            <div
              key={group.code}
              className="flex flex-col justify-between gap-4 bg-surface p-4"
              style={{ border: `1px solid ${group.accent}40` }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-surface-light pb-1">
                  <span className="font-code text-[10px] font-bold uppercase" style={{ color: group.accent }}>
                    {group.code}
                  </span>
                  <span className="material-symbols-outlined text-[18px]" style={{ color: group.accent }}>
                    {group.icon}
                  </span>
                </div>
                <h4 className="font-headline-sm text-[18px] uppercase text-primary">{group.title}</h4>
                <ul className="flex list-none flex-col gap-1.5 font-code text-[13px] text-on-surface-variant">
                  {group.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-1">
                      <span style={{ color: group.accent }}>&gt;</span> {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className="w-max bg-surface-container-low px-2 py-0.5 font-code text-[10px]"
                style={{ color: group.accent }}
              >
                {group.footer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
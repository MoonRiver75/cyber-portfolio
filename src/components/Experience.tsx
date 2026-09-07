import { useI18n } from '../i18n'

export default function Experience() {
  const { t } = useI18n()
  const { experience } = t

  return (
    <section
      id="experience"
      className="w-full scroll-mt-24 border-b border-surface-light bg-surface-container-lowest px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="container-cyber flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-secondary">
              <span className="h-2 w-2 bg-secondary" />
              <span>{experience.kicker}</span>
            </div>
            <h2 className="font-headline-lg uppercase tracking-tight text-primary">
              {experience.title}
            </h2>
          </div>
          <div className="font-code text-[10px] font-bold text-outline">{experience.badge}</div>
        </div>

        <div className="flex flex-col gap-4">
          {experience.roles.map((role) => (
            <div
              key={role.company}
              className="flex flex-col gap-2 bg-surface p-6"
              style={{ borderLeft: `4px solid ${role.border}` }}
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="font-headline-sm uppercase text-primary">
                    {role.title}
                    {role.badge && (
                      <span
                        className="ml-2 border bg-surface-container-low px-1.5 py-0.5 font-code text-[10px] font-bold text-primary-fixed"
                        style={{ borderColor: 'rgba(0,251,251,0.3)' }}
                      >
                        {role.badge}
                      </span>
                    )}
                  </h3>
                  <span
                    className="font-code text-[12px] font-medium tracking-wider"
                    style={{ color: role.accent }}
                  >
                    {role.company}
                  </span>
                </div>
                <span
                  className="w-max border bg-surface-container-low px-3 py-1 font-code text-[10px] font-bold"
                  style={{ color: role.accent, borderColor: `${role.accent}40` }}
                >
                  {role.period}
                </span>
              </div>

              <p className="font-body-md leading-relaxed text-on-surface-variant">
                {role.description}
              </p>

              {role.details && (
                <div className="grid grid-cols-1 gap-2 pt-1 md:grid-cols-3">
                  {role.details.map((d) => (
                    <div
                      key={d.title}
                      className="border border-surface-light bg-surface-container-low p-2"
                    >
                      <span
                        className="block font-code text-[10px] font-bold uppercase"
                        style={{ color: d.color }}
                      >
                        {d.title}
                      </span>
                      <span className="font-body-sm text-on-surface-variant">{d.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Education callout */}
          <div
            className="flex flex-col items-start justify-between gap-4 border bg-surface-container-low p-6 md:flex-row md:items-center"
            style={{ borderColor: 'rgba(0,251,251,0.3)' }}
          >
            <div className="flex flex-col gap-1">
              <span className="font-code text-[10px] font-bold uppercase tracking-widest text-primary-fixed">
                {experience.education.kicker}
              </span>
              <h4 className="font-headline-sm uppercase text-primary">
                {experience.education.title}
              </h4>
              <p className="font-body-sm text-on-surface-variant">
                {experience.education.textBefore}
                <strong className="font-bold text-tertiary-fixed-dim">
                  {experience.education.textStrong}
                </strong>
                {experience.education.textAfter}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.education.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`border bg-surface-container px-3 py-1 font-code text-[10px] font-bold ${
                    i === 0
                      ? 'border-primary-fixed/30 text-primary-fixed'
                      : 'border-secondary/30 text-secondary'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
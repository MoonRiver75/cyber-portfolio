import type { DiagramType } from './ProjectSchematic'
import { useI18n } from '../i18n'
import ProjectSchematic from './ProjectSchematic'

export default function Projects() {
  const { t } = useI18n()
  const { projects } = t

  return (
    <section
      id="projects"
      className="w-full scroll-mt-24 border-b border-surface-light px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="container-cyber flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-code text-[12px] font-medium uppercase tracking-widest text-primary-fixed">
              <span className="h-2 w-2 bg-primary-fixed" />
              <span>{projects.kicker}</span>
            </div>
            <h2 className="font-headline-lg uppercase tracking-tight text-primary">
              {projects.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-surface-light bg-surface-container px-3 py-1 font-code text-[10px] font-bold text-outline">
            <span className="inline-block h-2 w-2 animate-ping rounded-full bg-tertiary-fixed-dim" />
            <span>{projects.badge}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <article
              key={project.sysId}
              className={`group relative flex flex-col justify-between bg-surface p-6 transition-all duration-300 hover:bg-surface-container ${
                project.wide ? 'md:col-span-2' : ''
              }`}
              style={{
                border: `1px solid ${project.border}`,
              }}
            >
              <div>
                <div className="mb-2 flex items-center justify-between bg-surface-container-low px-3 py-1">
                  <span
                    className="font-code text-[10px] font-bold"
                    style={{ color: project.accent }}
                  >
                    [SYS_ID: {project.sysId}]
                  </span>
                  <span className="font-code text-[10px] font-bold text-tertiary-fixed-dim">
                    {project.stats}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span
                    className="inline-block w-max bg-surface-container-low px-2 py-0.5 font-code text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: project.accent }}
                  >
                    {project.eyebrow}
                  </span>
                  <h3 className="font-headline-sm uppercase transition-colors group-hover:text-primary-fixed">
                    {project.title}
                  </h3>

                  <ProjectSchematic type={project.diagram as DiagramType} />

                  <p className="font-body-sm leading-relaxed text-on-surface-variant">
                    {project.description}
                  </p>
                  <div
                    className="border-l-2 bg-surface-container-low p-2"
                    style={{ borderLeftColor: project.accent }}
                  >
                    <span
                      className="font-code text-[10px] font-bold uppercase"
                      style={{ color: project.accent }}
                    >
                      {project.impactLabel}
                    </span>
                    <p className="font-body-sm text-on-surface">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 font-code text-[10px] font-bold"
                      style={{ color: project.accent, backgroundColor: '#1c1b1b' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
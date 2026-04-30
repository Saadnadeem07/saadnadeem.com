import { Code } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";
import { useReveal } from "../../lib/useReveal";
import { projects } from "../../data/projects";
import { ProjectVisual } from "../ProjectVisual";

export function Projects() {
  const reveal = useReveal();
  return (
    <Section id="projects">
      <SectionHeading
        title="Featured"
        highlight="Projects"
        lead="Explore my recent work showcasing AI integration, full-stack development, and cloud solutions"
      />

      <div ref={reveal.ref} className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${reveal.className}`}>
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col rounded-xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-surface/70 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
          >
            <div className="relative h-44 overflow-hidden bg-bg border-b border-border">
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <ProjectVisual
                  primary={project.visual.primary}
                  secondary={project.visual.secondary}
                  accent={project.visual.accent}
                  gradient={project.visual.gradient}
                  title={project.title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-soft text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 bg-accent/20 text-muted text-xs rounded-full border border-accent/30"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent text-sm font-medium transition-colors w-fit"
              >
                <Code className="h-4 w-4" />
                View Code
              </a>
            </div>
          </article>
        ))}
      </div>

    </Section>
  );
}

import { Section, SectionHeading } from "../layout/Section";
import { useReveal } from "../../lib/useReveal";
import { experience } from "../../data/experience";

export function Experience() {
  const reveal = useReveal();
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience &"
        highlight="Education"
        lead="My academic journey and professional experiences that shaped my expertise"
      />

      <div ref={reveal.ref} className={`relative max-w-4xl mx-auto ${reveal.className}`}>
        <div
          aria-hidden="true"
          className="absolute left-6 top-2 bottom-2 w-0.5 bg-accent/40"
        />
        <ul className="space-y-8">
          {experience.map((entry, idx) => (
            <li key={idx} className="relative pl-16">
              <span
                aria-hidden="true"
                className="absolute left-3 top-6 grid h-6 w-6 place-items-center rounded-full bg-bg border-2 border-accent"
              >
                <span className="block h-2.5 w-2.5 rounded-full bg-accent" />
              </span>

              <article className="rounded-xl border border-border bg-gradient-to-br from-surface to-bg p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-heading font-semibold text-lg sm:text-xl">
                      {entry.title}
                    </h3>
                    {entry.subtitle && (
                      <p className="text-accent mt-1 text-sm sm:text-base">
                        {entry.subtitle}
                      </p>
                    )}
                  </div>
                  {entry.period && (
                    <span className="text-xs sm:text-sm bg-accent/20 text-muted px-3 py-1 rounded-full font-medium">
                      {entry.period}
                    </span>
                  )}
                </div>

                <ul className="list-disc list-inside text-soft mt-4 text-sm space-y-2 leading-relaxed marker:text-accent">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2 mt-4">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-bg text-soft text-xs font-medium px-3 py-1 rounded-md"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

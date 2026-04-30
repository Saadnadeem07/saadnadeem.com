import { Section } from "../layout/Section";
import { useReveal } from "../../lib/useReveal";
import { services } from "../../data/services";

export function Services() {
  const reveal = useReveal();
  return (
    <Section className="!py-12 sm:!py-16">
      <div ref={reveal.ref} className={`grid gap-6 md:grid-cols-3 ${reveal.className}`}>
        {services.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="group rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-surface/70 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
          >
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-accent/20 mb-4 group-hover:bg-accent/30 transition-colors">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-soft text-sm leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

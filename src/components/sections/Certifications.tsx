import { Award } from "lucide-react";
import { Section, SectionHeading } from "../layout/Section";
import { useReveal } from "../../lib/useReveal";
import { certifications } from "../../data/certifications";

export function Certifications() {
  const reveal = useReveal();
  return (
    <Section id="certifications">
      <SectionHeading
        title="My"
        highlight="Certifications"
        lead="Credentials and professional achievements"
      />

      <div ref={reveal.ref} className={reveal.className}>
        <ul className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
          <li
            key={cert}
            className="group rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(123,97,255,0.5)]"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/20 group-hover:bg-white/20 transition-colors shrink-0">
                <Award className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {cert}
              </h3>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

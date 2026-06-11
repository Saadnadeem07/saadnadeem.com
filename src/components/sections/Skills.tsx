import { useMemo, useState } from "react";
import clsx from "clsx";
import { Section, SectionHeading } from "../layout/Section";
import { useReveal } from "../../lib/useReveal";
import { SkillIcon } from "../../lib/skillIcons";
import { skillCategories, skills, type SkillCategory } from "../../data/skills";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("All Skills");
  const reveal = useReveal();

  // Render skills as labeled groups so each category reads as a tidy cluster
  // instead of one scattered flow. "All Skills" shows every group stacked.
  const groups = useMemo(() => {
    const categories = skillCategories.filter((c) => c.name !== "All Skills");
    const chosen =
      active === "All Skills" ? categories : categories.filter((c) => c.name === active);
    return chosen.map((c) => ({
      ...c,
      items: skills.filter((s) => s.category === c.name),
    }));
  }, [active]);

  return (
    <Section id="skills">
      <SectionHeading
        title="My"
        highlight="Skills"
        lead="Technologies and tools I leverage to build and ship reliable, secure systems"
      />

      <div ref={reveal.ref} className={reveal.className}>
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {skillCategories.map(({ name, icon: Icon }) => {
            const isActive = active === name;
            return (
              <button
                key={name}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(name)}
                className={clsx(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "bg-surface/50 border border-border text-soft hover:bg-surface/70 hover:border-accent/30 hover:text-heading",
                )}
              >
                <span className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {groups.map(({ name, icon: Icon, items }) => (
            <div
              key={name}
              className="rounded-2xl border border-border bg-surface/30 backdrop-blur-sm p-6 sm:p-7 transition-colors duration-300 hover:border-accent/30"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 shrink-0">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="text-heading font-semibold text-base sm:text-lg">{name}</h3>
                <span className="ml-auto text-muted text-xs font-medium tabular-nums">
                  {items.length} tools
                </span>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <li
                    key={`${skill.category}-${skill.name}`}
                    className="group inline-flex items-center gap-2 px-3.5 py-2 bg-surface/60 backdrop-blur-sm border border-border rounded-lg text-soft text-sm transition-all duration-300 hover:bg-accent/10 hover:border-accent/60 hover:text-heading hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(123,97,255,0.35)]"
                  >
                    <SkillIcon
                      name={skill.name}
                      size={16}
                      className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Section, SectionHeading } from "../layout/Section";
import { useReveal } from "../../lib/useReveal";
import { SkillIcon } from "../../lib/skillIcons";
import { skillCategories, skills, type SkillCategory } from "../../data/skills";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("All Skills");
  const reveal = useReveal();

  const visible = useMemo(() => {
    if (active === "All Skills") return skills;
    return skills.filter((s) => s.category === active);
  }, [active]);

  return (
    <Section id="skills">
      <SectionHeading
        title="My"
        highlight="Skills"
        lead="Technologies and tools I leverage to build innovative solutions"
      />

      <div ref={reveal.ref} className={reveal.className}>
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap justify-center gap-3 mb-8"
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
                    : "bg-surface/50 border border-border text-soft hover:bg-surface/70 hover:border-accent/30 hover:text-white",
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

        <ul className="flex flex-wrap justify-center gap-3">
          {visible.map((skill) => (
            <li
              key={`${skill.category}-${skill.name}`}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-sm border border-border rounded-lg text-soft text-sm transition-all duration-300 hover:bg-accent/10 hover:border-accent/60 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(123,97,255,0.4)]"
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
    </Section>
  );
}

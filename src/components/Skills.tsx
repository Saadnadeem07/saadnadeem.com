import { motion } from "framer-motion";
import { Cloud, Code, Server, Wrench, type LucideIcon } from "lucide-react";
import { skills, type SkillCategory } from "../data";

const icon: Record<SkillCategory, LucideIcon> = {
  Cloud,
  DevOps: Server,
  Programming: Code,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-lead">
            Grouped by where they live in my day-to-day work. No bars, no
            percentages — these are tools I'm comfortable picking up and using.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skills.map((group, idx) => {
            const Icon = icon[group.category];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="card p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-bg/60 px-3 py-1 text-sm text-muted hover:border-accent/50 hover:text-white transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

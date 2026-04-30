import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, type ProjectCategory } from "../data";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "DevOps",
  "Cloud",
  "Web",
  "AI",
];

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-lead">
            A mix of DevOps, cloud, and full-stack projects — from Kubernetes
            deployments to AI-assisted platforms.
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Project category filters"
          className="mt-10 flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === f
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-surface/60 text-muted hover:border-accent/50 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.ul
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
                className="card overflow-hidden flex flex-col hover:border-accent/40 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-border bg-bg">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent border border-accent/20"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

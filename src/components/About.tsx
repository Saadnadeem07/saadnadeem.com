import { motion } from "framer-motion";
import { about, profile } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">A bit about me</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {about.paragraph}
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Outside of shipping, I write the occasional engineering note on{" "}
              <a
                href={profile.socials.medium}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                Medium
              </a>{" "}
              and contribute on{" "}
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="card p-5 sm:p-6 hover:border-accent/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

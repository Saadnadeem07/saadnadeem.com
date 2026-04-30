import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";
import { profile } from "../data";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative border-t border-border bg-surface/40"
    >
      <section className="section">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Let's get in touch</h2>
            <p className="section-lead mx-auto">
              Open to DevOps, Cloud, and full-stack roles. The fastest way to
              reach me is email.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent-hover transition-colors"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent transition-colors"
            >
              <FileText size={16} /> Resume
            </a>
          </motion.div>

          <ul className="mt-8 flex justify-center gap-3">
            <li>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface/60 text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={18} />
              </a>
            </li>
            <li>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface/60 text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </li>
            <li>
              <a
                href={profile.socials.medium}
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
                className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface/60 text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
                </svg>
              </a>
            </li>
          </ul>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
            <p>© {year} {profile.name}. All rights reserved.</p>
            <Link
              to="hero"
              smooth
              duration={500}
              className="inline-flex items-center gap-1.5 cursor-pointer hover:text-accent transition-colors"
            >
              Back to top <ArrowUp size={14} />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

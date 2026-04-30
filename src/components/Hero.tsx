import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/30 blur-[120px] animate-orb-float" />
        <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-fuchsia-500/15 blur-[140px] animate-orb-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new opportunities
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-accent">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-72}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent-hover transition-colors cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-72}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              <Mail size={16} />
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

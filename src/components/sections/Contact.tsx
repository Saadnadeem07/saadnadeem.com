"use client";

import { Mail, Phone } from "lucide-react";
import { Github, LinkedIn } from "../icons/BrandIcons";
import { Section, SectionHeading } from "../layout/Section";
import { useReveal } from "../../lib/useReveal";
import { profile } from "../../data/profile";

export function Contact() {
  const reveal = useReveal();
  return (
    <Section id="contact">
      <SectionHeading
        title="Get In"
        highlight="Touch"
        lead="Have a question or want to work together? I'd love to hear from you."
      />

      <div ref={reveal.ref} className={`max-w-3xl mx-auto space-y-6 ${reveal.className}`}>
        <div className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-surface/70 hover:border-accent/30">
          <h3 className="text-2xl font-semibold text-heading mb-3">Let's Connect</h3>
          <p className="text-soft leading-relaxed max-w-xl mx-auto">
            I'm currently looking for new opportunities to apply my skills in full‑stack
            development and machine learning. Whether you have a question or just want to say hi,
            the quickest way to reach me is below — I'll do my best to get back to you!
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          <li>
            <a
              href={profile.socials.mail}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface/70"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#EA4335]/20 shrink-0">
                <Mail className="h-6 w-6 text-[#EA4335]" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">Email</span>
                <span className="block text-heading font-medium text-sm break-all">
                  {profile.email}
                </span>
              </span>
            </a>
          </li>

          <li>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface/70"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/20 shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">Phone</span>
                <span className="block text-heading font-medium text-sm">{profile.phone}</span>
              </span>
            </a>
          </li>

          <li>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface/70"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#24292e] shrink-0">
                <Github className="h-6 w-6 text-white" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">GitHub</span>
                <span className="block text-heading font-medium text-sm">@Saadnadeem07</span>
              </span>
            </a>
          </li>

          <li>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface/70"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#0077B5]/20 shrink-0">
                <LinkedIn className="h-6 w-6 text-[#0077B5]" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted">LinkedIn</span>
                <span className="block text-heading font-medium text-sm">@saadnadeem07</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
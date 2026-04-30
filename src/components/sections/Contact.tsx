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

      <div ref={reveal.ref} className={`grid gap-8 lg:grid-cols-2 ${reveal.className}`}>
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-surface/70 hover:border-accent/30">
            <h3 className="text-2xl font-semibold text-white mb-3">Let's Connect</h3>
            <p className="text-soft leading-relaxed">
              I'm currently looking for new opportunities to apply my skills in full‑stack
              development and machine learning. Whether you have a question or just want to say hi,
              I'll do my best to get back to you!
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
                  <span className="block text-white font-medium text-sm break-all">
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
                  <span className="block text-white font-medium text-sm">{profile.phone}</span>
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
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#24292e]/40 shrink-0">
                  <Github className="h-6 w-6 text-white" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted">GitHub</span>
                  <span className="block text-white font-medium text-sm">@Saadnadeem07</span>
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
                  <span className="block text-white font-medium text-sm">@saadnadeem07</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <form
          action={profile.socials.mail}
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-4"
          aria-label="Contact form"
        >
          <label className="block">
            <span className="sr-only">Your name</span>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent/30 transition-colors"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your email</span>
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent/30 transition-colors"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your message</span>
            <textarea
              name="Message"
              rows={6}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-muted/60 focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent/30 transition-colors resize-y"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25"
          >
            <Mail className="h-5 w-5" />
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}

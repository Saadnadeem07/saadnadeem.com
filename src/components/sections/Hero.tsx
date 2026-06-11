import { FileText, Mail, Link as LinkIcon } from "lucide-react";
import { Container } from "../layout/Container";
import { profile } from "../../data/profile";
import { Github, LinkedIn, Medium } from "../icons/BrandIcons";

const ctas = [
  {
    href: profile.socials.github,
    Icon: Github,
    label: "GitHub",
    bg: "bg-[#24292e] hover:bg-[#1b1f23] text-white",
  },
  {
    href: profile.socials.linkedin,
    Icon: LinkedIn,
    label: "LinkedIn",
    bg: "bg-[#0077B5] hover:bg-[#005f8d] text-white",
  },
  {
    href: profile.resumeUrl,
    Icon: FileText,
    label: "View Resume",
    bg: "bg-accent hover:bg-accent-hover text-white",
  },
  {
    href: profile.socials.mail,
    Icon: Mail,
    label: "Gmail",
    bg: "bg-[#EA4335] hover:bg-[#d33426] text-white",
  },
  {
    href: profile.socials.medium,
    Icon: Medium,
    label: "Medium",
    bg: "bg-black hover:bg-[#333] text-white",
  },
  {
    href: profile.socials.linktree,
    Icon: LinkIcon,
    label: "Linktree",
    bg: "bg-[#39E09B] hover:bg-[#2bc88d] text-black",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-orb-float" />
        <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-muted/10 blur-[140px] animate-orb-float-slow" />
      </div>

      <Container>
        <div id="about" className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center scroll-mt-24">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-heading">
                {profile.name}
              </h1>
              <p className="mt-3 text-accent text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight max-w-xl">
                {profile.tagline}
              </p>
            </div>

            <p className="text-soft text-base sm:text-lg leading-relaxed max-w-xl">
              <span className="text-heading font-medium">
                Software engineer with hands-on experience across the full delivery
                pipeline — building <span className="font-bold text-accent">MERN</span> apps,
                containerising them with <span className="font-bold text-accent">Docker</span>,
                orchestrating with <span className="font-bold text-accent">Kubernetes</span>,
                automating CI/CD with{" "}
                <span className="font-bold text-accent">GitHub Actions</span> and{" "}
                <span className="font-bold text-accent">Jenkins</span>, managing
                infrastructure as code on <span className="font-bold text-accent">AWS</span>{" "}
                with <span className="font-bold text-accent">Terraform</span>, and enforcing
                code quality and security with{" "}
                <span className="font-bold text-accent">SonarQube</span>.
              </span>
            </p>

            <div className="flex flex-wrap gap-3">
              {ctas.map(({ href, Icon, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 ${bg}`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-[400px] mx-auto aspect-[3/4] bg-gradient-to-br from-surface to-bg rounded-2xl border border-border overflow-hidden">
              <img
                src={profile.profileImage}
                alt={`${profile.name} — ${profile.title}`}
                width={400}
                height={533}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent pointer-events-none" />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-muted/10 rounded-full blur-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

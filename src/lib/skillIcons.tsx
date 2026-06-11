import {
  BarChart3,
  Cloud,
  Database,
  GitBranch,
  Infinity as InfinityIcon,
  Layers,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import {
  siAnsible,
  siArgo,
  siCplusplus,
  siDocker,
  siExpress,
  siFastapi,
  siFlask,
  siGit,
  siGithub,
  siGithubactions,
  siGitlab,
  siGnubash,
  siGooglecloud,
  siGrafana,
  siHelm,
  siHtml5,
  siJavascript,
  siJenkins,
  siKubernetes,
  siLinux,
  siMongodb,
  siMysql,
  siNodedotjs,
  siNumpy,
  siOpenjdk,
  siPandas,
  siPostgresql,
  siPrometheus,
  siPython,
  siReact,
  siSonarqubeserver,
  siTailwindcss,
  siTerraform,
  siTrivy,
  siTypescript,
} from "simple-icons";

type SimpleIcon = { title: string; slug: string; hex: string; path: string };

const brandIconMap: Record<string, SimpleIcon> = {
  // Languages
  Python: siPython,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  "C++": siCplusplus,
  Java: siOpenjdk,

  // Web & Backend
  "HTML/CSS": siHtml5,
  "React.js": siReact,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  "Tailwind CSS": siTailwindcss,
  FastAPI: siFastapi,
  Flask: siFlask,

  // Databases & Data
  MongoDB: siMongodb,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Pandas: siPandas,
  NumPy: siNumpy,

  // DevOps & CI/CD
  Docker: siDocker,
  "Docker Compose": siDocker,
  Kubernetes: siKubernetes,
  Helm: siHelm,
  "GitHub Actions": siGithubactions,
  "GitLab CI": siGitlab,
  Jenkins: siJenkins,
  ArgoCD: siArgo,
  Ansible: siAnsible,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  Linux: siLinux,
  "Bash/Shell": siGnubash,

  // DevSecOps & Monitoring
  SonarQube: siSonarqubeserver,
  Trivy: siTrivy,
  Prometheus: siPrometheus,
  Grafana: siGrafana,

  // Cloud & IaC
  "Google Cloud Platform": siGooglecloud,
  Terraform: siTerraform,
};

// Lucide fallbacks for skills without a brand icon, so every pill shows a glyph.
const lucideFallback: Record<string, { Icon: LucideIcon; color: string }> = {
  AWS: { Icon: Cloud, color: "#FF9900" },
  "CI/CD": { Icon: InfinityIcon, color: "var(--color-accent)" },
  GitOps: { Icon: GitBranch, color: "var(--color-accent)" },
  "Cloud Deployments": { Icon: Cloud, color: "var(--color-accent)" },
  "REST APIs": { Icon: Webhook, color: "var(--color-accent)" },
  "MERN Stack": { Icon: Layers, color: "var(--color-accent)" },
  SQL: { Icon: Database, color: "var(--color-accent)" },
  "SQL & NoSQL": { Icon: Database, color: "var(--color-accent)" },
  "Data Analysis": { Icon: BarChart3, color: "var(--color-accent)" },
};

type Props = { name: string; size?: number; className?: string };

export function SkillIcon({ name, size = 18, className }: Props) {
  const brand = brandIconMap[name];
  if (brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        style={{ fill: `#${brand.hex}` }}
        aria-hidden="true"
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const fallback = lucideFallback[name];
  if (fallback) {
    const { Icon, color } = fallback;
    return <Icon size={size} className={className} style={{ color }} aria-hidden="true" />;
  }

  return null;
}

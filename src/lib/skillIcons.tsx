import { Cloud, type LucideIcon } from "lucide-react";
import {
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
  siGooglecloud,
  siHtml5,
  siJavascript,
  siJenkins,
  siKubernetes,
  siMongodb,
  siMysql,
  siNodedotjs,
  siNumpy,
  siOpenjdk,
  siPandas,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTerraform,
  siTypescript,
} from "simple-icons";

type SimpleIcon = { title: string; slug: string; hex: string; path: string };

const brandIconMap: Record<string, SimpleIcon> = {
  Python: siPython,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  "C++": siCplusplus,
  Java: siOpenjdk,

  "HTML/CSS": siHtml5,
  "React.js": siReact,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  MongoDB: siMongodb,
  "Tailwind CSS": siTailwindcss,

  FastAPI: siFastapi,
  Flask: siFlask,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Pandas: siPandas,
  NumPy: siNumpy,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,

  Docker: siDocker,
  "Docker Compose": siDocker,
  "GitHub Actions": siGithubactions,
  Kubernetes: siKubernetes,
  ArgoCD: siArgo,
  Jenkins: siJenkins,

  "Google Cloud Platform": siGooglecloud,
  Terraform: siTerraform,
};

const lucideFallback: Record<string, { Icon: LucideIcon; color: string }> = {
  AWS: { Icon: Cloud, color: "#FF9900" },
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

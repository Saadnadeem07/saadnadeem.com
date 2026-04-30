import { Cloud, Code, Database, Globe, Server, type LucideIcon } from "lucide-react";

export type SkillCategory =
  | "All Skills"
  | "Languages"
  | "Web"
  | "Data"
  | "DevOps"
  | "Cloud";

export const skillCategories: { name: SkillCategory; icon: LucideIcon }[] = [
  { name: "All Skills", icon: Code },
  { name: "Languages", icon: Code },
  { name: "Web", icon: Globe },
  { name: "Data", icon: Database },
  { name: "DevOps", icon: Server },
  { name: "Cloud", icon: Cloud },
];

export type Skill = { name: string; category: Exclude<SkillCategory, "All Skills"> };

export const skills: Skill[] = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "SQL", category: "Languages" },

  { name: "HTML/CSS", category: "Web" },
  { name: "React.js", category: "Web" },
  { name: "Node.js", category: "Web" },
  { name: "Express.js", category: "Web" },
  { name: "MongoDB", category: "Web" },
  { name: "MERN Stack", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },

  { name: "FastAPI", category: "Data" },
  { name: "Flask", category: "Data" },
  { name: "REST APIs", category: "Data" },
  { name: "MySQL", category: "Data" },
  { name: "PostgreSQL", category: "Data" },
  { name: "SQL & NoSQL", category: "Data" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "Data Analysis", category: "Data" },
  { name: "Git", category: "Data" },
  { name: "GitHub", category: "Data" },
  { name: "GitLab", category: "Data" },

  { name: "Docker", category: "DevOps" },
  { name: "Docker Compose", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "GitOps", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "ArgoCD", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },

  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud Platform", category: "Cloud" },
  { name: "Terraform", category: "Cloud" },
  { name: "Cloud Deployments", category: "Cloud" },
];

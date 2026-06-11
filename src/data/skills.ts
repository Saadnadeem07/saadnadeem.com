import {
  Cloud,
  Code,
  Database,
  Globe,
  ShieldCheck,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory =
  | "All Skills"
  | "DevOps & CI/CD"
  | "DevSecOps & Monitoring"
  | "Cloud & IaC"
  | "Languages"
  | "Web & Backend"
  | "Databases & Data";

export const skillCategories: { name: SkillCategory; icon: LucideIcon }[] = [
  { name: "All Skills", icon: Code },
  { name: "DevOps & CI/CD", icon: Workflow },
  { name: "DevSecOps & Monitoring", icon: ShieldCheck },
  { name: "Cloud & IaC", icon: Cloud },
  { name: "Languages", icon: Terminal },
  { name: "Web & Backend", icon: Globe },
  { name: "Databases & Data", icon: Database },
];

export type Skill = { name: string; category: Exclude<SkillCategory, "All Skills"> };

export const skills: Skill[] = [
  // DevOps & CI/CD — the core of the profile, listed first
  { name: "Docker", category: "DevOps & CI/CD" },
  { name: "Docker Compose", category: "DevOps & CI/CD" },
  { name: "Kubernetes", category: "DevOps & CI/CD" },
  { name: "Helm", category: "DevOps & CI/CD" },
  { name: "GitHub Actions", category: "DevOps & CI/CD" },
  { name: "GitLab CI", category: "DevOps & CI/CD" },
  { name: "Jenkins", category: "DevOps & CI/CD" },
  { name: "ArgoCD", category: "DevOps & CI/CD" },
  { name: "GitOps", category: "DevOps & CI/CD" },
  { name: "CI/CD", category: "DevOps & CI/CD" },
  { name: "Ansible", category: "DevOps & CI/CD" },
  { name: "Git", category: "DevOps & CI/CD" },
  { name: "GitHub", category: "DevOps & CI/CD" },
  { name: "GitLab", category: "DevOps & CI/CD" },
  { name: "Linux", category: "DevOps & CI/CD" },
  { name: "Bash/Shell", category: "DevOps & CI/CD" },

  // DevSecOps & Monitoring
  { name: "SonarQube", category: "DevSecOps & Monitoring" },
  { name: "Trivy", category: "DevSecOps & Monitoring" },
  { name: "Prometheus", category: "DevSecOps & Monitoring" },
  { name: "Grafana", category: "DevSecOps & Monitoring" },

  // Cloud & IaC
  { name: "AWS", category: "Cloud & IaC" },
  { name: "Google Cloud Platform", category: "Cloud & IaC" },
  { name: "Terraform", category: "Cloud & IaC" },
  { name: "Cloud Deployments", category: "Cloud & IaC" },

  // Languages
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Web & Backend
  { name: "HTML/CSS", category: "Web & Backend" },
  { name: "React.js", category: "Web & Backend" },
  { name: "Node.js", category: "Web & Backend" },
  { name: "Express.js", category: "Web & Backend" },
  { name: "MERN Stack", category: "Web & Backend" },
  { name: "Tailwind CSS", category: "Web & Backend" },
  { name: "FastAPI", category: "Web & Backend" },
  { name: "Flask", category: "Web & Backend" },
  { name: "REST APIs", category: "Web & Backend" },

  // Databases & Data
  { name: "MongoDB", category: "Databases & Data" },
  { name: "MySQL", category: "Databases & Data" },
  { name: "PostgreSQL", category: "Databases & Data" },
  { name: "SQL & NoSQL", category: "Databases & Data" },
  { name: "Pandas", category: "Databases & Data" },
  { name: "NumPy", category: "Databases & Data" },
  { name: "Data Analysis", category: "Databases & Data" },
];

import { BarChart3, BrainCircuit, Shield, type LucideIcon } from "lucide-react";
import type { ProjectGradient } from "../components/ProjectVisual";

export type ProjectVisual = {
  primary: string;
  secondary?: string;
  accent?: LucideIcon;
  gradient: ProjectGradient;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  codeUrl: string;
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "NeuroAssess FYP",
    description:
      "AI-Assisted platform for supporting neurodivergent students with dyslexia and dysgraphia automating detailed reports for users and psychiatrists to support personalized learning.",
    technologies: [
      "MERN Stack",
      "Python",
      "OpenCV",
      "Hugging Face",
      "Gemini",
      "Docker",
    ],
    codeUrl: "https://github.com/Saadnadeem07/NeuroAssess-FYP",
    visual: {
      primary: "React.js",
      secondary: "Python",
      gradient: "violet",
    },
  },
  {
    id: 2,
    title: "RAG-based Clinical Diagnostic System",
    description:
      "Retrieval-Augmented Generation system for clinical diagnostics using LangChain and various language models.",
    technologies: ["Python", "LangChain", "FAISS", "Streamlit", "BART", "Flan-T5"],
    codeUrl:
      "https://github.com/Saadnadeem07/RAG-based-Clinical-Diagnostic-System",
    visual: {
      primary: "Python",
      accent: BrainCircuit,
      gradient: "amber",
    },
  },
  {
    id: 3,
    title: "Containerized Web Application with CI/CD",
    description:
      "First project exploring containerization of web applications using Docker and implementing CI/CD pipelines for automated deployment workflows.",
    technologies: ["Docker", "Docker Compose", "CI/CD"],
    codeUrl: "https://github.com/Saadnadeem07/dockerized-webapp-ci-cd",
    visual: {
      primary: "Docker",
      gradient: "blue",
    },
  },
  {
    id: 4,
    title: "Advanced Kubernetes Deployment with GitOps, Helm & Service Mesh",
    description:
      "Designed and deployed a multi-service containerized web application on Kubernetes with environment-specific ConfigMaps, Secrets, health probes, and resource limits across dev and prod clusters.",
    technologies: ["Docker", "Kubernetes", "ArgoCD", "GitOps"],
    codeUrl: "https://github.com/Saadnadeem07/dockerized-webapp-ci-cd",
    visual: {
      primary: "Kubernetes",
      secondary: "ArgoCD",
      gradient: "indigo",
    },
  },
  {
    id: 5,
    title: "Phishing Email Detection System",
    description:
      "Designed and developed an intelligent system that accurately classifies emails as phishing or legitimate by analyzing subject lines and content. It enhances email security by extracting key patterns and features from text, enabling precise detection and protection against phishing attempts.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "TensorFlow",
      "React",
      "PostgreSQL",
    ],
    codeUrl:
      "https://github.com/Saadnadeem07/Phishing-Email-Detection-System",
    visual: {
      primary: "Python",
      accent: Shield,
      gradient: "rose",
    },
  },
  {
    id: 6,
    title: "Social Media Sentiment Analysis",
    description:
      "Analyzed Facebook and Instagram comments on a fashion product using cardiffnlp/twitter-roberta-base-sentiment, identifying key sentiment drivers and visualizing trends to extract actionable customer insights.",
    technologies: ["Python", "Transformers", "Apify", "Seaborn"],
    codeUrl:
      "https://github.com/Saadnadeem07/SentimentAnalysis-CustomerFeedback",
    visual: {
      primary: "Python",
      accent: BarChart3,
      gradient: "emerald",
    },
  },
];

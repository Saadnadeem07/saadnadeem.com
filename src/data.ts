export const profile = {
  name: "Saad Nadeem",
  initials: "SN",
  title: "DevOps & Cloud Engineer",
  tagline:
    "I build and ship reliable cloud-native systems — containerised workloads on Kubernetes, GitOps pipelines, and AWS infrastructure as code.",
  email: "saadnadeem5509@gmail.com",
  phone: "+92 304 9417255",
  location: "Pakistan",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/profile.jpeg",
  socials: {
    github: "https://github.com/Saadnadeem07",
    linkedin: "https://www.linkedin.com/in/saadnadeem07/",
    medium: "https://medium.com/@saadnadeem07",
    linktree: "https://linktr.ee/saadnadeem07",
  },
};

export const about = {
  paragraph:
    "I'm a Computer Science graduate from FAST NUCES, focused on the DevOps and cloud side of building software. I containerise full-stack apps, wire up CI/CD with GitHub Actions and ArgoCD, and run them on Kubernetes and AWS with Terraform. I care about pipelines that are reproducible, infrastructure that's documented in code, and deployments that are boring on purpose.",
  stats: [
    { label: "Years coding", value: "4+" },
    { label: "Projects shipped", value: "10+" },
    { label: "Certifications", value: "4" },
    { label: "Degree", value: "BS CS" },
  ],
};

export type SkillCategory = "Cloud" | "DevOps" | "Programming" | "Tools";

export const skills: { category: SkillCategory; items: string[] }[] = [
  {
    category: "Cloud",
    items: [
      "AWS",
      "Google Cloud Platform",
      "Terraform",
      "EC2",
      "S3",
      "CloudFront",
      "Serverless",
    ],
  },
  {
    category: "DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "ArgoCD",
      "GitHub Actions",
      "GitOps",
      "CI/CD",
      "Jenkins",
      "Helm",
    ],
  },
  {
    category: "Programming",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C++",
      "SQL",
      "Bash",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Linux",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "FastAPI",
      "Node.js",
      "React",
    ],
  },
];

export type ProjectCategory = "DevOps" | "Cloud" | "Web" | "AI";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
  categories: ProjectCategory[];
};

export const projects: Project[] = [
  {
    title: "Advanced Kubernetes Deployment with GitOps, Helm & Service Mesh",
    description:
      "Multi-service web app on Kubernetes with environment-specific ConfigMaps, Secrets, health probes, and resource limits across dev and prod clusters.",
    tech: ["Kubernetes", "ArgoCD", "Helm", "GitOps", "Docker"],
    image: "/images/project-k8s-gitops.png",
    github: "https://github.com/Saadnadeem07/dockerized-webapp-ci-cd",
    categories: ["DevOps", "Cloud"],
  },
  {
    title: "Containerized Web App with CI/CD",
    description:
      "Containerised a full-stack web app with Docker and Docker Compose, then automated build, test, and deploy through a GitHub Actions pipeline.",
    tech: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD"],
    image: "/images/project-docker-cicd.png",
    github: "https://github.com/Saadnadeem07/dockerized-webapp-ci-cd",
    categories: ["DevOps"],
  },
  {
    title: "NeuroAssess — AI Platform for Neurodivergent Students",
    description:
      "MERN-stack platform with a custom handwriting model that screens for dyslexia and dysgraphia and generates reports for users and clinicians.",
    tech: ["MERN", "Python", "Hugging Face", "OpenCV", "Docker", "AWS EC2"],
    image: "/images/project-neuroassess.png",
    github: "https://github.com/Saadnadeem07/NeuroAssess-FYP",
    categories: ["Web", "AI", "Cloud"],
  },
  {
    title: "RAG-based Clinical Diagnostic System",
    description:
      "Retrieval-Augmented Generation system for clinical diagnostics, combining LangChain, FAISS vector search, and BART/Flan-T5 over a Streamlit UI.",
    tech: ["Python", "LangChain", "FAISS", "Streamlit", "BART", "Flan-T5"],
    image: "/images/project-rag-clinical.png",
    github:
      "https://github.com/Saadnadeem07/RAG-based-Clinical-Diagnostic-System",
    categories: ["AI", "Web"],
  },
  {
    title: "Phishing Email Detection System",
    description:
      "End-to-end system that classifies emails as phishing or legitimate by analysing subject and body, served as a FastAPI + React app.",
    tech: ["Python", "FastAPI", "Scikit-learn", "TensorFlow", "React", "PostgreSQL"],
    image: "/images/project-phishing.jpg",
    github: "https://github.com/Saadnadeem07/Phishing-Email-Detection-System",
    categories: ["Web", "AI"],
  },
  {
    title: "Social Media Sentiment Analysis",
    description:
      "Analysed Facebook and Instagram comments on a fashion product with cardiffnlp/twitter-roberta-base-sentiment to extract actionable customer insights.",
    tech: ["Python", "Transformers", "Apify", "Seaborn"],
    image: "/images/project-sentiment.png",
    github:
      "https://github.com/Saadnadeem07/SentimentAnalysis-CustomerFeedback",
    categories: ["AI"],
  },
];

export const certifications = [
  "Introduction to DevOps — IBM (Coursera)",
  "Git: Become an Expert in Git & GitHub — Udemy",
  "Google Prompting Essentials Specialization — Coursera",
  "Google AI Essentials Specialization — Coursera",
];

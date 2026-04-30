export type TimelineEntry = {
  title: string;
  subtitle?: string;
  period?: string;
  bullets: string[];
  tags: string[];
};

export const experience: TimelineEntry[] = [
  {
    title: "Bachelor of Science in Computer Science",
    subtitle: "FAST National University of Computer and Emerging Sciences",
    period: "Sep 2021 - Jun 2025",
    bullets: [
      "Graduated with a Bachelor's degree in Computer Science from FAST NUCES",
      "Specialized in Full-Stack Web Development using the MERN stack",
      "Hands-on experience with DevOps tools like Docker, Kubernetes, GitHub Actions, and Terraform",
      "Skilled in Cloud-Native Development & Deployment, primarily on AWS",
      "Developed a foundational understanding of AI/ML, including hands-on exposure to NLP and Generative AI",
    ],
    tags: [
      "OOP",
      "DSA",
      "DBMS",
      "OS",
      "Software Design & Analysis",
      "MERN Stack",
      "DevOps (Docker, CI/CD, Terraform)",
      "Cloud (AWS EC2/S3, Basic Infra)",
      "NLP (Foundational)",
      "Generative AI (Introductory)",
    ],
  },
  {
    title: "NeuroAssess – AI-Assisted Support for Neurodivergent Students (FYP)",
    bullets: [
      "Co-developed and deployed an AI-powered MERN stack platform with an interactive React.js frontend and scalable Node.js backend, ensuring efficient data flow via MongoDB.",
      "Integrated a custom-trained handwriting recognition model (via Hugging Face) to detect dyslexia and dysgraphia, enabling automated reports for users and psychiatrists.",
      "Containerized the app using Docker and implemented CI/CD pipelines with GitHub Actions for seamless AWS EC2 deployment.",
    ],
    tags: [
      "MERN Stack",
      "Docker",
      "AWS (EC2)",
      "Gemini API",
      "Open CV",
      "Hugging Face",
      "Python",
      "Custom-Trained Handwriting Recognition Model",
    ],
  },
];

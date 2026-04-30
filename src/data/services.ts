import { Cloud, Code, Server, type LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Full-Stack Development",
    description:
      "Crafting responsive user interfaces and scalable backend systems using React, Node.js, and MongoDB — ensuring clean architecture and seamless data flow.",
    icon: Code,
  },
  {
    title: "DevOps & Automation",
    description:
      "Implementing CI/CD pipelines and containerized workflows using tools like Docker, Kubernetes, Argo CD, and GitHub Actions for efficient and reliable delivery.",
    icon: Server,
  },
  {
    title: "Cloud-Native Deployments",
    description:
      "Deploying and managing secure, scalable applications in the cloud using AWS services like EC2 and Terraform-based infrastructure as code.",
    icon: Cloud,
  },
];

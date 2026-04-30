import { Mail, Link as LinkIcon } from "lucide-react";
import clsx from "clsx";
import { profile } from "../../data/profile";
import { Github, LinkedIn, Medium } from "../icons/BrandIcons";

const items = [
  {
    href: profile.socials.github,
    label: "GitHub",
    Icon: Github,
    bgClass: "bg-[#24292e] hover:bg-[#1b1f23]",
  },
  {
    href: profile.socials.linkedin,
    label: "LinkedIn",
    Icon: LinkedIn,
    bgClass: "bg-[#0077B5] hover:bg-[#005f8d]",
  },
  {
    href: profile.socials.medium,
    label: "Medium",
    Icon: Medium,
    bgClass: "bg-black hover:bg-[#333]",
  },
  {
    href: profile.socials.linktree,
    label: "Linktree",
    Icon: LinkIcon,
    bgClass: "bg-[#39E09B] hover:bg-[#2bc88d] text-black",
  },
  {
    href: profile.socials.mail,
    label: "Email",
    Icon: Mail,
    bgClass: "bg-[#EA4335] hover:bg-[#d33426]",
  },
];

type Props = { className?: string };

export function SocialIcons({ className }: Props) {
  return (
    <ul className={clsx("flex items-center gap-3", className)}>
      {items.map(({ href, label, Icon, bgClass }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={clsx(
              "grid h-9 w-9 place-items-center rounded-lg text-white transition-all duration-300 hover:scale-110",
              bgClass,
            )}
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}

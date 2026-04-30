import { type LucideIcon } from "lucide-react";
import clsx from "clsx";
import { SkillIcon } from "../lib/skillIcons";

const gradients = {
  violet: "bg-gradient-to-br from-violet-600/25 to-fuchsia-900/30",
  blue: "bg-gradient-to-br from-blue-600/30 to-cyan-900/25",
  indigo: "bg-gradient-to-br from-indigo-600/30 to-blue-900/30",
  amber: "bg-gradient-to-br from-amber-600/25 to-orange-900/30",
  rose: "bg-gradient-to-br from-rose-600/25 to-pink-900/30",
  emerald: "bg-gradient-to-br from-emerald-600/25 to-teal-900/30",
} as const;

export type ProjectGradient = keyof typeof gradients;

type Props = {
  primary: string;
  secondary?: string;
  accent?: LucideIcon;
  gradient: ProjectGradient;
  title: string;
  className?: string;
};

export function ProjectVisual({
  primary,
  secondary,
  accent: Accent,
  gradient,
  title,
  className,
}: Props) {
  return (
    <div
      role="img"
      aria-label={`${title} — visual`}
      className={clsx(
        "relative h-full w-full overflow-hidden",
        gradients[gradient],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -top-16 -left-16 h-48 w-48 bg-white/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 h-56 w-56 bg-black/40 rounded-full blur-3xl"
      />

      <div className="absolute inset-0 grid place-items-center">
        <div className="flex items-center justify-center gap-6">
          <SkillIcon
            name={primary}
            size={88}
            className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
          />
          {secondary && (
            <SkillIcon
              name={secondary}
              size={64}
              className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] opacity-95"
            />
          )}
        </div>
      </div>

      {Accent && (
        <Accent
          size={36}
          className="absolute bottom-4 right-4 text-white/75 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

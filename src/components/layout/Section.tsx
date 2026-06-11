import { type ReactNode } from "react";
import clsx from "clsx";
import { Container } from "./Container";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: Props) {
  return (
    <section
      id={id}
      className={clsx("relative z-10 py-16 sm:py-20 scroll-mt-24", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  lead,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  lead?: string;
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {eyebrow && <p className="text-accent text-xs uppercase tracking-[0.18em] font-semibold mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading">
        {title}{" "}
        {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
      {lead && (
        <p className="mt-4 text-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  );
}

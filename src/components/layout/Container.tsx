import { type ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "header" | "footer" | "nav";
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-7xl px-6", className)}>
      {children}
    </Tag>
  );
}

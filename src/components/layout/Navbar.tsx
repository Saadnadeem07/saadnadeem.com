"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page, links smooth-scroll to in-page sections (with active spy).
  // On other routes (e.g. /blog), they become anchor links back to the homepage.
  const renderSectionLink = (
    to: string,
    label: string,
    className: string,
    activeClassName: string,
    onClick?: () => void,
  ) => {
    if (onHome) {
      return (
        <ScrollLink
          to={to}
          smooth
          duration={500}
          spy
          offset={-72}
          onSetActive={() => setActive(to)}
          onClick={onClick}
          className={clsx(className, active === to ? activeClassName : undefined)}
        >
          {label}
        </ScrollLink>
      );
    }
    return (
      <NextLink href={`/#${to}`} onClick={onClick} className={className}>
        {label}
      </NextLink>
    );
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        {onHome ? (
          <ScrollLink
            to="hero"
            smooth
            duration={500}
            spy
            onSetActive={() => setActive("hero")}
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent to-muted text-white font-bold">
              {profile.initials}
            </span>
            <span className="text-base sm:text-lg font-semibold text-heading">{profile.name}</span>
          </ScrollLink>
        ) : (
          <NextLink href="/" className="flex items-center gap-3 cursor-pointer group" aria-label="Home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent to-muted text-white font-bold">
              {profile.initials}
            </span>
            <span className="text-base sm:text-lg font-semibold text-heading">{profile.name}</span>
          </NextLink>
        )}

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <li key={l.to}>
              <span className="relative inline-block">
                {renderSectionLink(
                  l.to,
                  l.label,
                  clsx(
                    "relative text-sm font-medium cursor-pointer transition-colors",
                    onHome && active === l.to ? "text-heading" : "text-soft hover:text-heading",
                  ),
                  "text-heading",
                )}
                {onHome && (
                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                      active === l.to ? "w-full" : "w-0",
                    )}
                  />
                )}
              </span>
            </li>
          ))}
          <li>
            <NextLink
              href="/blog"
              className={clsx(
                "text-sm font-medium cursor-pointer transition-colors",
                pathname?.startsWith("/blog") ? "text-heading" : "text-soft hover:text-heading",
              )}
            >
              Blog
            </NextLink>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-heading"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md transition-[max-height,opacity] duration-300",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                {renderSectionLink(
                  l.to,
                  l.label,
                  clsx(
                    "block px-2 py-3 text-base font-medium cursor-pointer",
                    onHome && active === l.to ? "text-accent" : "text-heading",
                  ),
                  "text-accent",
                  () => setOpen(false),
                )}
              </li>
            ))}
            <li>
              <NextLink
                href="/blog"
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-base font-medium cursor-pointer text-heading"
              >
                Blog
              </NextLink>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}

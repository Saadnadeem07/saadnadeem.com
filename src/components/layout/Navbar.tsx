import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { Container } from "./Container";
import { SocialIcons } from "./SocialIcons";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Link
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
          <span className="text-base sm:text-lg font-semibold text-white">
            {profile.name}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={500}
                spy
                offset={-72}
                onSetActive={() => setActive(l.to)}
                className={clsx(
                  "relative text-sm font-medium cursor-pointer transition-colors",
                  active === l.to ? "text-white" : "text-soft hover:text-white",
                )}
              >
                <span className="relative inline-block">
                  {l.label}
                  <span
                    className={clsx(
                      "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                      active === l.to ? "w-full" : "w-0",
                    )}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <SocialIcons />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
                <Link
                  to={l.to}
                  smooth
                  duration={500}
                  spy
                  offset={-72}
                  onClick={() => setOpen(false)}
                  onSetActive={() => setActive(l.to)}
                  className={clsx(
                    "block px-2 py-3 text-base font-medium cursor-pointer",
                    active === l.to ? "text-accent" : "text-white",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border mt-2">
            <SocialIcons />
          </div>
        </Container>
      </div>
    </header>
  );
}

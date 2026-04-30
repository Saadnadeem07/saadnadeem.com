import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          to="hero"
          smooth
          duration={500}
          spy
          onSetActive={() => setActive("hero")}
          className="flex items-center gap-2 cursor-pointer group"
          aria-label="Home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent font-bold tracking-tight group-hover:bg-accent group-hover:text-white transition-colors">
            SN
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth
                duration={500}
                spy
                offset={-72}
                onSetActive={() => setActive(l.to)}
                className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
                  active === l.to
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {l.label}
                {active === l.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

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
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md"
          >
            <ul className="container-x flex flex-col py-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    smooth
                    duration={500}
                    spy
                    offset={-72}
                    onClick={() => setOpen(false)}
                    onSetActive={() => setActive(l.to)}
                    className={`block px-2 py-3 text-base font-medium cursor-pointer ${
                      active === l.to ? "text-accent" : "text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { ArrowUp } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../layout/Container";
import { SocialIcons } from "../layout/SocialIcons";
import { navLinks } from "../../data/nav";
import { profile } from "../../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <footer className="relative z-10 border-t border-border bg-bg/60 py-10 px-0">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-accent mb-2">{profile.name}</h3>
            <p className="text-soft text-sm leading-relaxed">{profile.footerTagline}</p>
          </div>

          <div className="md:flex md:justify-end">
            <SocialIcons />
          </div>
        </div>

        <div className="border-t border-border my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-soft">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.to}>
                {onHome ? (
                  <ScrollLink
                    to={l.to}
                    smooth
                    duration={500}
                    offset={-72}
                    className="cursor-pointer hover:text-accent transition-colors"
                  >
                    {l.label}
                  </ScrollLink>
                ) : (
                  <NextLink href={`/#${l.to}`} className="cursor-pointer hover:text-accent transition-colors">
                    {l.label}
                  </NextLink>
                )}
              </li>
            ))}
            <li>
              <NextLink href="/blog" className="cursor-pointer hover:text-accent transition-colors">
                Blog
              </NextLink>
            </li>
            <li>
              {onHome ? (
                <ScrollLink
                  to="hero"
                  smooth
                  duration={500}
                  aria-label="Back to top"
                  className="cursor-pointer grid h-9 w-9 place-items-center bg-accent text-white rounded-full transition-transform duration-300 hover:bg-accent-hover hover:scale-110"
                >
                  <ArrowUp className="h-4 w-4" />
                </ScrollLink>
              ) : (
                <NextLink
                  href="/"
                  aria-label="Back to home"
                  className="cursor-pointer grid h-9 w-9 place-items-center bg-accent text-white rounded-full transition-transform duration-300 hover:bg-accent-hover hover:scale-110"
                >
                  <ArrowUp className="h-4 w-4" />
                </NextLink>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

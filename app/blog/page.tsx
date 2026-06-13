import type { Metadata } from "next";
import NextLink from "next/link";
import { Container } from "@/components/layout/Container";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Saad Nadeem",
  description:
    "Project deep-dives and notes on DevOps, DevSecOps, and cloud-native engineering.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <Container>
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading">
            The <span className="text-accent">Blog</span>
          </h1>
          <p className="mt-4 text-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Project deep-dives and notes on DevOps, DevSecOps, and cloud-native engineering.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-center text-muted">No posts yet — check back soon.</p>
        ) : (
          <ul className="grid gap-6 max-w-3xl mx-auto">
            {posts.map((p) => (
              <li key={p.slug}>
                <NextLink
                  href={`/blog/${p.slug}`}
                  className="group block rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface/70"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-2">
                    {p.date && <time dateTime={p.date}>{p.date}</time>}
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-heading group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-soft text-sm leading-relaxed">{p.description}</p>
                </NextLink>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
}

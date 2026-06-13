import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import NextLink from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Saad Nadeem`,
    description: post.meta.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="relative z-10 pt-28 sm:pt-32 pb-16 sm:pb-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          <NextLink
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </NextLink>

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-3">
              {post.meta.date && <time dateTime={post.meta.date}>{post.meta.date}</time>}
              {post.meta.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-heading leading-tight">
              {post.meta.title}
            </h1>
            {post.meta.description && (
              <p className="mt-3 text-soft text-lg leading-relaxed">{post.meta.description}</p>
            )}
          </header>

          <div className="prose max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </Container>
    </main>
  );
}

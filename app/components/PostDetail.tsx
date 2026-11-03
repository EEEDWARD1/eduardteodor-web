import type { Metadata } from "next";
import Link from "next/link";
import MarkdownContent from "@/app/components/MarkdownContent";
import { getPostPath, type Post } from "@/app/data/posts";
import TrackedExternalLink from "@/app/components/TrackedExternalLink";

export function postMetadata(post: Post): Metadata {
  const url = getPostPath(post);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      ...(post.image ? { images: [{ url: post.image, alt: post.title }] } : {}),
    },
    twitter: {
      card: post.image ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default function PostDetail({ post }: { post: Post }) {
  const category = post.postType === 0 ? "projects" : "thoughts";
  return (
    <article className="mx-auto my-8 max-w-3xl">
      <Link
        href={`/${category}`}
        className="text-sm underline underline-offset-4 hover:text-accent"
      >
        Back to {category}
      </Link>
      <header className="mt-6 border-b border-border pb-6">
        <h1 className="text-3xl leading-tight font-bold md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-700">{post.description}</p>
        {post.tags.length > 0 && (
          <ul aria-label="Tags" className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <li
                key={`${tag}-${index}`}
                className="border border-amber-200 bg-amber-50 px-2 py-1 text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {post.href && (
          <TrackedExternalLink
            href={post.href}
            linkContext={
              post.postType === 0 ? "project_detail" : "thought_detail"
            }
            className="mt-4 inline-block underline underline-offset-4 hover:text-accent"
          >
            Visit {post.postType === 0 ? "project" : "related link"}
          </TrackedExternalLink>
        )}
      </header>
      <MarkdownContent content={post.content} />
    </article>
  );
}

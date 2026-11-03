import Link from "next/link";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";
import { getPostPath, type Post } from "@/app/data/posts";

export default function PostCard({
  post,
  preview = false,
}: {
  post: Post;
  preview?: boolean;
}) {
  const Title = preview ? "h3" : "h2";
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <Title className="min-w-0 text-base leading-snug font-semibold text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </Title>
        <span
          aria-hidden="true"
          className="shrink-0 transition-colors group-hover:text-accent"
        >
          <ExternalLinkIcon />
        </span>
      </div>
      <p
        className={
          preview
            ? "line-clamp-2 text-sm leading-relaxed text-neutral-600"
            : "text-sm leading-relaxed text-neutral-600"
        }
      >
        {post.description}
      </p>
      {post.postType === 0 && post.tags.length > 0 && (
        <ul
          aria-label={`Technologies for ${post.title}`}
          className="flex flex-wrap gap-1.5 [&>li]:max-w-full"
        >
          {post.tags.slice(0, preview ? 3 : undefined).map((tag, index) => (
            <li
              key={`${tag}-${index}`}
              className="border border-neutral-300 bg-neutral-100/60 px-1.5 py-0.5 text-xs font-normal text-neutral-600"
            >
              {tag}
            </li>
          ))}
          {preview && post.tags.length > 3 && (
            <li
              aria-label={`${post.tags.length - 3} more technologies`}
              className="border border-neutral-300 bg-neutral-100/60 px-1.5 py-0.5 text-xs font-normal text-neutral-600"
            >
              +{post.tags.length - 3}
            </li>
          )}
        </ul>
      )}
    </>
  );
  const className =
    "group flex h-full min-w-0 flex-col gap-3 rounded-none border border-border p-4 [overflow-wrap:anywhere] no-underline! transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  return (
    <Link href={getPostPath(post)} className={className}>
      {content}
    </Link>
  );
}

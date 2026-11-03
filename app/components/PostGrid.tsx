import Link from "next/link";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";
import { getPostPath, type Post } from "@/app/data/posts";

export default function PostGrid({
  posts,
  labelledBy,
}: {
  posts: readonly Post[];
  labelledBy: string;
}) {
  return (
    <section className="mt-8" aria-labelledby={labelledBy}>
      {posts.length === 0 ? (
        <p className="px-4 py-3 text-neutral-700">
          {labelledBy === "projects-page-heading"
            ? "No projects published yet."
            : "No thoughts published yet."}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {posts.map((post) => {
            const href =
              post.postType === 0 && post.href ? post.href : getPostPath(post);
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="min-w-0 text-base leading-snug font-semibold text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="shrink-0 transition-colors group-hover:text-accent"
                  >
                    <ExternalLinkIcon />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {post.description}
                </p>
                {post.postType === 0 && post.tags.length > 0 && (
                  <ul
                    aria-label={`Technologies for ${post.title}`}
                    className="flex flex-wrap gap-1.5 [&>li]:max-w-full"
                  >
                    {post.tags.map((tag, index) => (
                      <li
                        key={`${tag}-${index}`}
                        className="border border-neutral-300 bg-neutral-100/60 px-1.5 py-0.5 text-xs font-normal text-neutral-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            );
            const className =
              "group flex h-full min-w-0 flex-col gap-3 rounded-none border border-border p-4 [overflow-wrap:anywhere] no-underline! transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
            return (
              <li key={getPostPath(post)} className="min-w-0">
                {href.startsWith("/") ? (
                  <Link href={href} className={className}>
                    {content}
                  </Link>
                ) : (
                  <a href={href} className={className}>
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

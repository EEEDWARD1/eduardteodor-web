import { getPosts, getPostPath } from "@/app/data/posts";
import Link from "next/link";
import PostGrid from "@/app/components/PostGrid";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default async function ThoughtsSection({
  limit,
  variant = "compact",
}: {
  limit?: number;
  variant?: "compact" | "full";
}) {
  const allThoughts = (await getPosts()).filter((post) => post.postType === 1);
  if (variant === "full") {
    return <PostGrid posts={allThoughts} labelledBy="thoughts-page-heading" />;
  }
  const thoughts = allThoughts.slice(0, Math.min(limit ?? 3, 3));

  return (
    <section className="mt-12" aria-labelledby="thoughts-heading">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2
          id="thoughts-heading"
          className="text-lg font-semibold tracking-tight md:text-xl"
        >
          Thoughts
        </h2>
        <Link
          href="/thoughts"
          className="text-sm underline underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View all thoughts
        </Link>
      </div>
      <div className="border border-border">
        {thoughts.length === 0 ? (
          <p className="px-4 py-3 text-neutral-700">
            No thoughts published yet.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {thoughts.map((thought) => (
              <li key={thought.slug}>
                <Link
                  href={getPostPath(thought)}
                  className="group flex min-w-0 items-start gap-4 px-4 py-3 [overflow-wrap:anywhere] no-underline! transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base leading-snug font-semibold text-foreground transition-colors group-hover:text-accent">
                      {thought.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                      {thought.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 transition-colors group-hover:text-accent"
                  >
                    <ExternalLinkIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

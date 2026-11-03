import { getPosts, getPostPath } from "@/app/data/posts";
import Link from "next/link";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default async function ThoughtsSection({ limit }: { limit?: number }) {
  const allThoughts = (await getPosts()).filter((post) => post.postType === 1);
  const thoughts =
    limit === undefined ? allThoughts : allThoughts.slice(0, limit);

  return (
    <section
      className="mt-8 border border-neutral-400"
      aria-labelledby="thoughts-heading"
    >
      <h2
        id="thoughts-heading"
        className="border-b border-border text-lg font-bold tracking-tight md:text-xl"
      >
        <Link
          href="/thoughts"
          className="group flex items-stretch no-underline!"
        >
          {/* Title cell */}
          <span className="flex items-center border-r border-border px-3 py-1.5 transition-colors group-hover:bg-orange-50 md:px-6 md:py-2">
            Thoughts
          </span>

          {/* Flexible middle cell */}
          <span
            className="flex-1 transition-colors group-hover:bg-orange-50"
            aria-hidden="true"
          />

          {/* Icon cell */}
          <span className="flex shrink-0 items-center justify-center border-l border-border px-2 transition-colors group-hover:bg-orange-50 group-hover:text-accent md:px-3">
            <ExternalLinkIcon />
          </span>
        </Link>
      </h2>

      {thoughts.length === 0 && (
        <p className="px-4 py-3 text-neutral-700">No thoughts published yet.</p>
      )}
      <ul className="divide-y divide-border">
        {thoughts.map((thought) => (
          <li key={thought.slug} className="list-none">
            <div className="group flex min-w-0 flex-col gap-1 px-4 py-3 transition-colors hover:bg-orange-50">
              {/* Title */}
              <h3 className="min-w-0 text-base leading-snug font-medium break-words">
                <Link
                  href={getPostPath(thought)}
                  className="no-underline! transition-colors group-hover:text-accent"
                >
                  {thought.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="min-w-0 line-clamp-2 text-sm leading-snug break-words text-neutral-600">
                {thought.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

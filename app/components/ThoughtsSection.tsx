import { posts } from "@/app/data/posts";
import Link from "next/link";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default function ThoughtsSection() {
  const thoughts = posts.filter((post) => post.type === "thought");

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

      {/* Thoughts list */}
      <ul className="divide-y divide-border">
        {thoughts.map((thought) => (
          <li key={thought.slug} className="list-none">
            <div className="group flex min-w-0 flex-col gap-1 px-4 py-3 transition-colors hover:bg-orange-50 md:flex-row md:items-center md:gap-3">
              {/* Title */}
              <h3 className="min-w-0 text-base font-semibold leading-tight md:max-w-[60%] md:shrink-0 md:truncate md:border-r md:border-border md:pr-3">
                {thought.href ? (
                  <a
                    href={thought.href}
                    className="no-underline! transition-colors group-hover:text-accent"
                  >
                    {thought.title}
                  </a>
                ) : (
                  thought.title
                )}
              </h3>

              {/* Description */}
              <p className="min-w-0 line-clamp-2 text-sm leading-snug text-neutral-700 md:flex-1 md:truncate md:text-base">
                {thought.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { posts } from "@/app/data/posts";
import Link from "next/link";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default function ThoughtsSection() {
  const thoughts = posts.filter((post) => post.type === "thought");

  return (
    <section className="mt-8 border" aria-labelledby="thoughts-heading">
      <h2
        id="thoughts-heading"
        className="border-b border-neutral-300 text-xl font-bold tracking-tight text-zinc-950"
      >
        <Link
          href="/thoughts"
          className="group flex items-stretch no-underline!"
        >
          <span className="flex items-center border-r border-neutral-300 px-6 py-2 transition-colors group-hover:bg-orange-50">
            Thoughts
          </span>

          <span
            className="flex-1 transition-colors group-hover:bg-orange-50"
            aria-hidden="true"
          />

          <span className="flex shrink-0 items-center justify-center border-l border-neutral-300 px-3 transition-colors group-hover:bg-orange-50 group-hover:text-[#FE5F55]">
            <ExternalLinkIcon />
          </span>
        </Link>
      </h2>

      <ul className="divide-y divide-neutral-300">
        {thoughts.map((thought) => (
          <li key={thought.slug} className="list-none">
            <div className="group flex min-w-0 items-center gap-3 px-4 py-3 transition-colors hover:bg-orange-50">
              {/* Title — natural width */}
              <h3 className="max-w-[60%] shrink-0 truncate border-r border-neutral-300 pr-3 text-lg font-semibold leading-tight">
                {thought.href ? (
                  <a
                    href={thought.href}
                    className="transition-colors group-hover:text-[#FE5F55]"
                  >
                    {thought.title}
                  </a>
                ) : (
                  thought.title
                )}
              </h3>

              {/* Description — remaining width */}
              <p className="min-w-0 flex-1 truncate text-base leading-tight text-neutral-700">
                {thought.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

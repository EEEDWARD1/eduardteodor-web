import { posts } from "@/app/data/posts";
import Link from "next/link";
import Image from "next/image";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default function ProjectsSection() {
  const projects = posts.filter((post) => post.type === "project");

  return (
    <section
      className="mt-8 border border-neutral-400"
      aria-labelledby="projects-heading"
    >
      {/* Section heading */}
      <h2
        id="projects-heading"
        className="border-b border-neutral-300 text-lg font-bold tracking-tight md:text-xl"
      >
        <Link
          href="/projects"
          className="group flex items-stretch no-underline!"
        >
          {/* Title cell */}
          <span className="flex items-center border-r border-neutral-300 px-3 py-1.5 transition-colors group-hover:bg-orange-50 md:px-6 md:py-2">
            Projects
          </span>

          {/* Flexible middle cell */}
          <span
            className="flex-1 transition-colors group-hover:bg-orange-50"
            aria-hidden="true"
          />

          {/* Icon cell */}
          <span className="flex shrink-0 items-center justify-center border-l border-neutral-300 px-2 transition-colors group-hover:bg-orange-50 group-hover:text-accent md:px-3">
            <ExternalLinkIcon />
          </span>
        </Link>
      </h2>

      {/* Project rows */}
      <ul className="divide-y divide-border">
        {projects.map((project) => (
          <li key={project.slug} className="list-none">
            <article
              className={`group grid overflow-hidden transition-colors hover:bg-orange-50 ${
                project.image
                  ? "grid-cols-1 md:min-h-37.5 md:grid-cols-[30%_minmax(0,1fr)]"
                  : "grid-cols-1"
              }`}
            >
              {/* Optional screenshot */}
              {project.image && (
                <div className="relative h-35 overflow-hidden border-b border-border bg-neutral-100 md:h-auto md:min-h-30 md:border-r md:border-b-0">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 350px"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Project information */}
              <div className="flex min-w-0 flex-col justify-center gap-1.5 px-4 py-3">
                <h3 className="line-clamp-2 text-base leading-snug font-semibold md:truncate md:text-lg">
                  {project.href ? (
                    <a
                      href={project.href}
                      className="transition-colors group-hover:text-accent"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="line-clamp-2 text-sm leading-snug text-neutral-700 md:truncate md:text-base">
                  {project.description}
                </p>

                {/* Technology tags */}
                {project.tags.length > 0 && (
                  <ul
                    aria-label={`Technologies for ${project.title}`}
                    className="flex min-w-0 flex-wrap gap-1.5"
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

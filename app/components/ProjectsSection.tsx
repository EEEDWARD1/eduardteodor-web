import { posts } from "@/app/data/posts";
import Link from "next/link";
import Image from "next/image";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default function ProjectsSection() {
  const projects = posts.filter((post) => post.type === "project");

  return (
    <section className="mt-8 border" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="border-b border-neutral-300 text-xl font-bold tracking-tight text-zinc-950"
      >
        <Link
          href="/projects"
          className="group flex items-stretch no-underline!"
        >
          {/* Title cell */}
          <span className="flex items-center border-r border-neutral-300 px-6 py-2 transition-colors group-hover:bg-orange-50 ">
            <span className="">Projects</span>
          </span>

          {/* Flexible empty cell */}
          <span
            className="flex-1 transition-colors group-hover:bg-orange-50 "
            aria-hidden="true"
          />

          {/* Icon cell */}
          <span className="flex px-3 shrink-0 items-center justify-center border-l border-neutral-300 transition-colors group-hover:bg-orange-50 group-hover:text-[#FE5F55]">
            <ExternalLinkIcon />
          </span>
        </Link>
      </h2>

      <ul className="divide-y divide-neutral-300">
        {projects.map((project) => (
          <li key={project.slug} className="list-none">
            <article
              className={`group grid min-h-30 overflow-hidden transition-colors hover:bg-orange-50 ${
                project.image ? "grid-cols-[35%_minmax(0,1fr)]" : "grid-cols-1"
              }`}
            >
              {/* Only render image column when an image exists */}
              {project.image && (
                <div className="relative overflow-hidden border-r border-neutral-300 bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 35vw, 350px"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex min-w-0 flex-col justify-center gap-1.5 overflow-hidden px-3 py-3">
                <h3 className="min-w-0 truncate text-lg font-semibold">
                  {project.href ? (
                    <a href={project.href} className="hover:text-[#FE5F55]">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="truncate text-base leading-tight text-neutral-700">
                  {project.description}
                </p>

                {project.tags.length > 0 && (
                  <ul
                    aria-label={`Technologies for ${project.title}`}
                    className="flex min-w-0 flex-wrap gap-1.5"
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="whitespace-nowrap border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-xs font-medium text-slate-700"
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

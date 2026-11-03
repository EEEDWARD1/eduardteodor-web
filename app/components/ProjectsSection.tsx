import { getPosts, getPostPath } from "@/app/data/posts";
import Link from "next/link";
import PostGrid from "@/app/components/PostGrid";
import Image from "next/image";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default async function ProjectsSection({
  limit,
  tagLimit,
  variant = "compact",
}: {
  limit?: number;
  tagLimit?: number;
  variant?: "compact" | "full";
}) {
  const allProjects = (await getPosts()).filter((post) => post.postType === 0);
  if (variant === "full") {
    return <PostGrid posts={allProjects} labelledBy="projects-page-heading" />;
  }
  const projects =
    limit === undefined ? allProjects : allProjects.slice(0, limit);

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

      {projects.length === 0 && (
        <p className="px-4 py-3 text-neutral-700">No projects published yet.</p>
      )}
      <ul className="divide-y divide-border">
        {projects.map((project) => (
          <li key={project.slug} className="list-none">
            <article
              className={`group grid overflow-hidden transition-colors hover:bg-orange-50 ${
                project.image
                  ? "grid-cols-1 md:min-h-37.5 md:grid-cols-[25%_minmax(0,1fr)]"
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
                    sizes="(max-width: 767px) 100vw, 250px"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Project information */}
              <div className="flex min-w-0 flex-col justify-center gap-2 px-4 py-3">
                <h3 className="line-clamp-2 text-base leading-snug font-semibold md:truncate md:text-lg">
                  <Link
                    href={getPostPath(project)}
                    className="transition-colors group-hover:text-accent"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="line-clamp-2 text-sm leading-snug text-neutral-600 md:text-base">
                  {project.description}
                </p>

                {/* Technology tags */}
                {project.tags.length > 0 && (
                  <ul
                    aria-label={`Technologies for ${project.title}`}
                    className="flex min-w-0 flex-wrap gap-1.5 [&>li]:max-w-full"
                  >
                    {project.tags.slice(0, tagLimit).map((tag) => (
                      <li
                        key={tag}
                        className="border border-neutral-300 bg-neutral-100/60 px-1.5 py-0.5 text-xs font-normal break-words text-neutral-600"
                      >
                        {tag}
                      </li>
                    ))}
                    {tagLimit !== undefined &&
                      project.tags.length > tagLimit && (
                        <li
                          aria-label={`${project.tags.length - tagLimit} more technologies`}
                          className="border border-neutral-300 bg-neutral-100/60 px-1.5 py-0.5 text-xs font-normal break-words text-neutral-600"
                        >
                          +{project.tags.length - tagLimit}
                        </li>
                      )}
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

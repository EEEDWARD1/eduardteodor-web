import { getPosts } from "@/app/data/posts";
import Link from "next/link";
import PostGrid from "@/app/components/PostGrid";
import PostCard from "@/app/components/PostCard";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default async function ProjectsSection({
  limit,
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
  const projects = allProjects.slice(0, Math.min(limit ?? 3, 3));

  return (
    <section className="mt-12" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="mb-4 text-lg font-semibold tracking-tight md:text-xl"
      >
        Selected Work
      </h2>
      {projects.length === 0 && (
        <p className="mb-4 text-neutral-700">No projects published yet.</p>
      )}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="min-w-0">
            <PostCard post={project} preview />
          </li>
        ))}
        <li className="min-w-0">
          <Link
            href="/projects"
            className="group flex h-full min-w-0 flex-col gap-3 rounded-none border border-border p-4 [overflow-wrap:anywhere] no-underline! transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="min-w-0 text-base leading-snug font-semibold text-foreground transition-colors group-hover:text-accent">
                Explore all projects
              </h3>
              <span
                aria-hidden="true"
                className="shrink-0 transition-colors group-hover:text-accent"
              >
                <ExternalLinkIcon />
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600">
              More work across software, data and client projects.
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

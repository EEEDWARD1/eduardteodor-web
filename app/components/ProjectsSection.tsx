import { posts } from "@/app/data/posts";
import Link from "next/link";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default function ProjectsSection() {
    const projects = posts.filter((post) => post.type === "project");

    return (
        <section className="mt-20 border border-neutral-300 bg-white" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="border-b border-neutral-300 text-2xl font-semibold tracking-tight text-slate-950">
                <Link href="/projects" className="flex items-center justify-between px-5 py-4 no-underline transition-colors hover:bg-orange-50 hover:text-[#FE5F55] hover:no-underline">
                    <span className="border-l-4 border-[#FE5F55] pl-3">Projects</span>
                    <ExternalLinkIcon />
                </Link>
            </h2>

            <ul className="space-y-10 p-5">
                {projects.map((project) => (
                    <li key={project.slug} className="list-none">
                        <article>
                            <h3 className="text-lg font-semibold">
                                {project.href ? <a href={project.href}>{project.title}</a> : project.title}
                            </h3>
                            <p className="mt-2 leading-relaxed text-neutral-900">{project.description}</p>

                            {project.tags.length > 0 && (
                                <ul aria-label={`Technologies for ${project.title}`} className="mt-3 flex flex-wrap gap-2 p-0">
                                    {project.tags.map((tag) => (
                                        <li key={tag} className="list-none rounded-sm border border-amber-200 bg-amber-50 px-2 py-0.5 text-sm font-medium text-slate-700">{tag}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}

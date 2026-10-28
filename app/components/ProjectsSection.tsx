import { posts } from "@/app/data/posts";

export default function ProjectsSection() {
    const projects = posts.filter((post) => post.type === "project");

    return (
        <section>
            <h2>Projects</h2>

            <ul>
                {projects.map((project) => (
                    <li key={project.slug}>
                        <article>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            {project.href && (
                                <p>
                                    <a href={project.href}>View project</a>
                                </p>
                            )}

                            {project.tags.length > 0 && (
                                <ul aria-label={`Tags for ${project.title}`}>
                                    {project.tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
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
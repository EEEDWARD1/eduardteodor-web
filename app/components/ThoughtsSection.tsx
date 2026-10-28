import { posts } from "@/app/data/posts";

export default function ThoughtsSection() {
    const thoughts = posts.filter((post) => post.type === "thought");

    return (
        <section aria-labelledby="thoughts-heading">
            <h2 id="thoughts-heading">Thoughts</h2>

            <ul>
                {thoughts.map((thought) => (
                    <li key={thought.slug}>
                        <article>
                            <h3>{thought.title}</h3>
                            <p>{thought.description}</p>

                            {thought.href && (
                                <p>
                                    <a href={thought.href}>Read more</a>
                                </p>
                            )}

                            {thought.tags.length > 0 && (
                                <ul aria-label={`Tags for ${thought.title}`}>
                                    {thought.tags.map((tag) => (
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
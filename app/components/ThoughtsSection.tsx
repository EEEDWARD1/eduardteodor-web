import { posts } from "@/app/data/posts";
import Link from "next/link";
import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";

export default function ThoughtsSection() {
    const thoughts = posts.filter((post) => post.type === "thought");

    return (
        <section className="mt-8 border" aria-labelledby="thoughts-heading">
            <h2 id="thoughts-heading" className="border-b border-neutral-300 text-2xl font-semibold tracking-tight text-slate-950">
                <Link href="/thoughts" style={{ textDecoration: "none" }} className="flex items-center justify-between px-5 py-4 no-underline transition-colors hover:bg-orange-50 hover:text-[#FE5F55] hover:no-underline">
                    <span className="border-l-4 border-[#FE5F55] pl-3">Thoughts</span>
                    <ExternalLinkIcon />
                </Link>
            </h2>

            <ul className="space-y-4 p-5 text-lg">
                {thoughts.map((thought) => (
                    <li key={thought.slug} className="flex list-none items-baseline justify-between gap-6 rounded-sm px-2 py-1 transition-colors hover:bg-orange-50">
                        {thought.href ? (
                            <a href={thought.href}>{thought.title}</a>
                        ) : (
                            <span>{thought.title}</span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}

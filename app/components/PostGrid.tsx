import PostCard from "@/app/components/PostCard";
import { getPostPath, type Post } from "@/app/data/posts";

export default function PostGrid({
  posts,
  labelledBy,
}: {
  posts: readonly Post[];
  labelledBy: string;
}) {
  return (
    <section className="mt-8" aria-labelledby={labelledBy}>
      {posts.length === 0 ? (
        <p className="px-4 py-3 text-neutral-700">
          {labelledBy === "projects-page-heading"
            ? "No projects published yet."
            : "No thoughts published yet."}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {posts.map((post) => {
            return (
              <li key={getPostPath(post)} className="min-w-0">
                <PostCard post={post} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

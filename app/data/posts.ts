import "server-only";
import { cache } from "react";
import { notFound } from "next/navigation";

export type PostType = 0 | 1;
export interface Post {
  id: string;
  postType: PostType;
  slug: string;
  title: string;
  description: string;
  image: string | null;
  content: string;
  href: string | null;
  tags: string[];
}

function isWebUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function isPost(value: unknown): value is Post {
  if (!value || typeof value !== "object") return false;
  const post = value as Record<string, unknown>;
  return (
    ["id", "slug", "title", "description", "content"].every(
      (key) => typeof post[key] === "string",
    ) &&
    typeof post.slug === "string" &&
    post.slug.trim().length > 0 &&
    !/[\/\\?#%\u0000-\u001f]/.test(post.slug) &&
    post.slug !== "." &&
    post.slug !== ".." &&
    (post.postType === 0 || post.postType === 1) &&
    (post.image === null || isWebUrl(post.image)) &&
    (post.href === null || isWebUrl(post.href)) &&
    Array.isArray(post.tags) &&
    post.tags.every((tag) => typeof tag === "string")
  );
}

// React memoises consumers within a render; the default fetch mode gets fresh
// data on each static build without persisting an API response across builds.
export const getPosts = cache(async (): Promise<Post[]> => {
  const baseUrl = process.env.API_BASE_URL || "https://api.eduardteodor.co.uk";
  const url = `${baseUrl.replace(/\/$/, "")}/v1/posts`;
  let response: Response;
  try {
    response = await fetch(url, { signal: AbortSignal.timeout(20_000) });
  } catch (cause) {
    throw new Error(
      `Could not fetch posts from ${url}. Check API availability and API_BASE_URL.`,
      { cause },
    );
  }
  if (!response.ok) {
    throw new Error(`Posts API returned HTTP ${response.status} from ${url}.`);
  }
  let data: unknown;
  try {
    data = await response.json();
  } catch (cause) {
    throw new Error("Posts API returned invalid JSON.", { cause });
  }
  if (!Array.isArray(data) || !data.every(isPost)) {
    throw new Error("Posts API returned an invalid post contract.");
  }
  const routes = new Set<string>();
  for (const post of data) {
    const route = getPostPath(post);
    if (routes.has(route))
      throw new Error(`Posts API returned duplicate route: ${route}`);
    routes.add(route);
  }
  return data;
});

export function getPostPath(post: Pick<Post, "postType" | "slug">) {
  return `/${post.postType === 0 ? "projects" : "thoughts"}/${encodeURIComponent(post.slug)}`;
}

export async function getPost(slug: string, postType: PostType) {
  const post = (await getPosts()).find(
    (post) => post.slug === slug && post.postType === postType,
  );
  if (!post) notFound();
  return post;
}

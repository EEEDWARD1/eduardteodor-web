import type { MetadataRoute } from "next";
import { getPosts, getPostPath } from "@/app/data/posts";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://eduardteodor.co.uk";
  const posts = await getPosts();

  return [
    ...["/", "/projects", "/thoughts", "/contact", "/privacy"].map((path) => ({
      url: new URL(path, baseUrl).href,
    })),
    ...posts.map((post) => ({
      url: new URL(getPostPath(post), baseUrl).href,
    })),
  ];
}

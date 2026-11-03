import { getPost, getPosts } from "@/app/data/posts";
import PostDetail, { postMetadata } from "@/app/components/PostDetail";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts())
    .filter((post) => post.postType === 0)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  return postMetadata(await getPost((await params).slug, 0));
}

export default async function Page({ params }: Props) {
  return <PostDetail post={await getPost((await params).slug, 0)} />;
}

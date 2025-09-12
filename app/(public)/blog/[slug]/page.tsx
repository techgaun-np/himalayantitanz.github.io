import BlogDeatails from "@/components/blog/details";
import { blogData } from "@/static/blog";
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.id,
  }));
}

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <BlogDeatails id={slug} />;
}

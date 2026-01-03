import { useLoaderData } from "react-router";
import BlogView from "~/pages/BlogView";
import type { MdxModule } from "~/types/MdxModule";
import type { PostMetadata } from "~/types/PostMetadata";
import type { Route } from "../+types/root";

export async function loader() {
  // Use import.meta.glob to get all MDX files
  const posts = import.meta.glob<MdxModule>("../content/posts/*.mdx", {
    eager: true,
  });

  const postList = Object.entries(posts).map(
    ([path, module]): PostMetadata => ({
      slug: path.match(/\/posts\/(.+)\.mdx$/)![1],
      title: module.frontmatter.title,
      date: module.frontmatter.date,
      author: module.frontmatter.author,
      excerpt: module.frontmatter.excerpt,
      tags: module.frontmatter.tags,
    }),
  );

  return postList;
}

export function meta(_: Route.MetaArgs) {
  return [{ title: "Blog - Tom's Portfolio" }];
}

const BlogIndex = (): React.ReactNode => {
  const posts = useLoaderData<PostMetadata[]>();

  return <BlogView posts={posts} />;
};

export default BlogIndex;

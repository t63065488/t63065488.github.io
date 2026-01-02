import type { PostMetadata } from "~/types/PostMetadata";

export async function getAllPosts(): Promise<PostMetadata[]> {
  const posts = import.meta.glob("../content/posts/*.mdx", { eager: true });

  return Object.entries(posts)
    .map(([path, module]: [string, any]) => ({
      slug: path.match(/\/posts\/(.+)\.mdx$/)?.[1] || "",
      title: module.title,
      date: module.date,
      author: module.author,
      excerpt: module.excerpt,
      tags: module.tags,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

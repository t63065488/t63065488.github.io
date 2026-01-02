import { useLoaderData } from "react-router";
import BlogCard from "~/components/blog-card/BlogCard";
import type { MdxModule } from "~/types/MdxModule";
import type { PostMetadata } from "~/types/PostMetadata";

type BlogViewProps = Readonly<{
  posts: PostMetadata[];
}>;

const BlogView = ({ posts }: BlogViewProps): React.ReactNode => {
  return (
    <div className="flex flex-col items-center w-full justify-center pt-16 pb-4">
      <h1 className="h1 mb-8">All Posts</h1>
      <div className="flex w-full">
        {posts.map((post) => (
          <BlogCard
            author={post.author}
            date={post.date}
            href={`/blog/${post.date}-${post.slug}`}
            title={post.title}
            key={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogView;

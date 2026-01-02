export type MdxModule = {
  frontmatter: {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    tags: string[];
  };
  default: React.ComponentType; // The compiled MDX component
};

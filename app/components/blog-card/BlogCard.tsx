import Badge from "../badge/Badge";

type ProjectCardProps = Readonly<{
  title: string;
  excerpt?: string;
  href: string;
  date: string;
  author: string;
  tags?: string[];
}>;

const BlogCard = ({
  title,
  excerpt = "",
  href,
  date,
  author,
  tags = [],
}: ProjectCardProps): React.ReactNode => {
  return (
    <a
      href={href}
      className="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block w-full divide-y overflow-hidden transition-all"
    >
      <article className="space-y-4 p-4">
        <div>
          <h2 className="h2">{title}</h2>
        </div>
        <p className="opacity-60">{excerpt}</p>
        <div className="flex items-center justify-start gap-4">
          <span className="preset-typo-caption opacity-60">Tags:</span>
          {tags.map((tag) => (
            <Badge key={tag} text={tag} />
          ))}
        </div>
      </article>
      <footer className="flex items-center justify-between gap-4 p-4">
        <small className="opacity-60">{author}</small>
        <small className="opacity-60">On {date}</small>
      </footer>
    </a>
  );
};

export default BlogCard;

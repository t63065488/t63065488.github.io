import Badge from "~/components/badge/Badge";

type ProjectCardProps = Readonly<{
  title: string;
  subtitle?: string;
  body: string;
  imgSrc?: string;
  href: string;
  onDate?: string;
  tags?: string[];
}>;

const ProjectCard = ({
  title,
  subtitle,
  body,
  imgSrc,
  href = "#",
  onDate = "",
  tags = [],
}: ProjectCardProps): React.ReactNode => {
  return (
    <>
      <a
        href={href}
        className="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
      >
        {imgSrc && (
          <header>
            <img
              src={imgSrc}
              className="aspect-[21/9] w-full grayscale hue-rotate-90"
              alt="banner"
            />
          </header>
        )}
        <article className="space-y-4 p-4">
          <div>
            <h2 className="h2">{title}</h2>
            <h3 className="h6">{subtitle}</h3>
          </div>
          <p className="opacity-60">{body}</p>
          {tags.length !== 0 && (
            <div className="flex items-center justify-start gap-4">
              <span className="preset-typo-caption opacity-60">Tags:</span>
              {tags.map((tag) => (
                <Badge key={tag} text={tag} />
              ))}
            </div>
          )}
        </article>
        <footer className="flex items-center justify-between gap-4 p-4">
          <small className="opacity-60">Started {onDate}</small>
        </footer>
      </a>
    </>
  );
};

export default ProjectCard;

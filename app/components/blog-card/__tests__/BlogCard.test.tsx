import { render, screen } from "@testing-library/react";
import BlogCard from "../BlogCard";

vi.mock("../badge/Badge", () => ({
  default: ({ text }: { text: string }) => (
    <span data-testid="badge">{text}</span>
  ),
}));

describe("BlogCard", () => {
  const defaultProps = {
    title: "Test Blog Post",
    href: "/blog/test-post",
    date: "2024-01-15",
    author: "John Doe",
  };

  it("renders with required props only", () => {
    render(<BlogCard {...defaultProps} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/blog/test-post");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Test Blog Post",
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("On 2024-01-15")).toBeInTheDocument();
  });

  it("renders excerpt when provided", () => {
    render(
      <BlogCard
        {...defaultProps}
        excerpt="This is a test excerpt for the blog post."
      />,
    );

    expect(
      screen.getByText("This is a test excerpt for the blog post."),
    ).toBeInTheDocument();
  });

  it("does not render excerpt paragraph when not provided", () => {
    const { container } = render(<BlogCard {...defaultProps} />);

    const excerptParagraph = container.querySelector("p.opacity-60");
    expect(excerptParagraph).toHaveTextContent("");
  });

  it("renders tags when provided", () => {
    render(
      <BlogCard {...defaultProps} tags={["React", "TypeScript", "Testing"]} />,
    );

    expect(screen.getByText("Tags:")).toBeInTheDocument();
    expect(screen.getAllByTestId("badge")).toHaveLength(3);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });

  it("renders without tags when tags array is empty", () => {
    render(<BlogCard {...defaultProps} tags={[]} />);

    expect(screen.getByText("Tags:")).toBeInTheDocument();
    expect(screen.queryAllByTestId("badge")).toHaveLength(0);
  });

  it("renders article with correct structure", () => {
    const { container } = render(
      <BlogCard {...defaultProps} excerpt="Test excerpt" tags={["Tag1"]} />,
    );

    const article = container.querySelector("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass("space-y-4", "p-4");
  });

  it("renders footer with author and date", () => {
    const { container } = render(<BlogCard {...defaultProps} />);

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass(
      "flex",
      "items-center",
      "justify-between",
      "gap-4",
      "p-4",
    );
  });

  it("applies correct CSS classes to link", () => {
    const { container } = render(<BlogCard {...defaultProps} />);

    const link = container.querySelector("a");
    expect(link).toHaveClass(
      "card",
      "preset-filled-surface-100-900",
      "border-[1px]",
      "border-surface-200-800",
      "card-hover",
      "divide-surface-200-800",
      "block",
      "w-full",
      "divide-y",
      "overflow-hidden",
      "transition-all",
    );
  });

  it("formats date correctly in footer", () => {
    render(<BlogCard {...defaultProps} date="2024-12-25" />);

    expect(screen.getByText("On 2024-12-25")).toBeInTheDocument();
  });

  it("renders multiple tags with unique keys", () => {
    const tags = ["JavaScript", "CSS", "HTML"];
    render(<BlogCard {...defaultProps} tags={tags} />);

    const badges = screen.getAllByTestId("badge");
    expect(badges).toHaveLength(3);

    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
});

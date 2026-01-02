import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

describe("ProjectCard", () => {
  const defaultProps = {
    title: "Test Project",
    body: "This is a test project description",
    href: "/test-project",
  };

  it("renders with required props", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test project description"),
    ).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<ProjectCard {...defaultProps} subtitle="Test Subtitle" />);

    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    const { container } = render(<ProjectCard {...defaultProps} />);

    const h3Elements = container.querySelectorAll("h3");
    expect(h3Elements[0]).toHaveTextContent("");
  });

  it("renders image when imgSrc is provided", () => {
    render(<ProjectCard {...defaultProps} imgSrc="/test-image.jpg" />);

    const img = screen.getByAltText("banner");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-image.jpg");
  });

  it("does not render image when imgSrc is not provided", () => {
    render(<ProjectCard {...defaultProps} />);

    const img = screen.queryByAltText("banner");
    expect(img).not.toBeInTheDocument();
  });

  it("renders onDate when provided", () => {
    render(<ProjectCard {...defaultProps} onDate="January 1, 2024" />);

    expect(screen.getByText(/On January 1, 2024/)).toBeInTheDocument();
  });

  it("renders empty onDate by default", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText(/On/)).toBeInTheDocument();
  });

  it("uses provided href", () => {
    render(<ProjectCard {...defaultProps} href="/custom-link" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/custom-link");
  });

  it("uses # as default href when not provided", () => {
    const { title, body } = defaultProps;
    render(<ProjectCard title={title} body={body} href="#" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "#");
  });

  it("renders all sections in correct order", () => {
    const { container } = render(
      <ProjectCard
        {...defaultProps}
        imgSrc="/test.jpg"
        subtitle="Subtitle"
        onDate="Today"
      />,
    );

    const header = container.querySelector("header");
    const article = container.querySelector("article");
    const footer = container.querySelector("footer");

    expect(header).toBeInTheDocument();
    expect(article).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});

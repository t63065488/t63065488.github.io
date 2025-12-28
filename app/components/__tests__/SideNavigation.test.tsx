import { render, screen } from "@testing-library/react";
import SideNavigation from "../SideNavigation";

it("should render", () => {
  const { container } = render(<SideNavigation />);

  expect(container).toBeInTheDocument();
});

it.each([["Home"]])("should render %s link", (link: string) => {
  render(<SideNavigation />);

  const navLink = screen.getByText(link);

  expect(navLink).toBeInTheDocument();
});

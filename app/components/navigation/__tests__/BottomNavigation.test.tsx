import { render, screen } from "@testing-library/react";
import BottomNavigation from "../BottomNavigation";

it("should render", () => {
  const { container } = render(<BottomNavigation />);

  expect(container).toBeInTheDocument();
});

it.each([
  ["Blog"],
  ["Projects"],
  ["GitHub"],
  ["LinkedIn"],
  ["Twitter"],
  ["About"],
])("should render %s link", (link: string) => {
  render(<BottomNavigation />);

  const navLink = screen.getByLabelText(link);

  expect(navLink).toBeInTheDocument();
});

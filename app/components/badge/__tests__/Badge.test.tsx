import { render, screen } from "@testing-library/react";
import Badge from "../Badge";

it("renders correctly with the correct text", () => {
  render(<Badge text="Test" />);

  const badge = screen.getByText("Test");

  expect(badge).toBeVisible();
});

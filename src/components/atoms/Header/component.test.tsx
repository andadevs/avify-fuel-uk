import { render, screen } from "@testing-library/react";
import Header from ".";

describe("HEADER", () => {
  test("should display text correctly", () => {
    render(<Header title="Testing Header" />);
    expect(screen.getByText("Testing Header")).toBeInTheDocument();
  });

  test("should display a default text when title has empty string", () => {
    render(<Header title="" />);
    expect(screen.getByText("Page Header")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import ChangeView from "./";

describe("CHANGE-VIEW", () => {
  test("should include a default label text", () => {
    render(<ChangeView changeHandler={() => {}} />);
    expect(screen.getByText("Change View")).toBeInTheDocument();
  });

  test("switch option should be active by default", () => {
    render(<ChangeView changeHandler={() => {}} />);
    const switchView = screen.getByTestId("change-view-switch");
    expect(switchView.className.includes("active")).toBeTruthy();
  });
});

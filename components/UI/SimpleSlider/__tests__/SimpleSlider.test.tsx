import { render, screen } from "@testing-library/react";
import SimpleSlider from "..";

jest.mock("react-slick", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-slider">{children}</div>
  ),
}));

describe("SimpleSlider", () => {
  it("should render children inside the slider", () => {
    render(
      <SimpleSlider>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </SimpleSlider>,
    );

    expect(screen.getByTestId("mock-slider")).toBeInTheDocument();

    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });
});

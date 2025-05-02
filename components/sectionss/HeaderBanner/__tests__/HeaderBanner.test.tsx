/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import HeaderBanner from "..";

jest.mock(
  "@/components/ui/SimpleSlider",
  () =>
    ({ children }: { children: React.ReactNode }) => (
      <div data-testid="simple-slider">{children}</div>
    ),
);

describe("HeaderBanner", () => {
  it("should render SimpleSlider", () => {
    render(<HeaderBanner />);

    expect(screen.getByTestId("simple-slider")).toBeInTheDocument();
  });

  it("should render the correct number of slides", () => {
    render(<HeaderBanner />);

    const slides = screen.getAllByAltText("banner image");

    expect(slides).toHaveLength(2);
  });
});

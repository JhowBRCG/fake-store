import { render, screen } from "@testing-library/react";
import LoadingSkeletonCards from "..";

describe("LoadingSkeletonCards", () => {
  it("should render the correct numbers of cards", () => {
    render(<LoadingSkeletonCards cards={15} />);

    const cards = screen.getAllByRole("article");

    expect(cards).toHaveLength(15);
  });

  it("should show 'loading...' text", () => {
    render(<LoadingSkeletonCards cards={15} />);

    expect(screen.getAllByText("loading...").length).toBeGreaterThan(0);
  });
});

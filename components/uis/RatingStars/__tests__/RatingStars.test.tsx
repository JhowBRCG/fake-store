import { render, screen } from "@testing-library/react";
import RatingStars from "..";

jest.mock("react-icons/fa", () => ({
  FaStar: () => <svg data-testid="filled-star" />,
  FaRegStar: () => <svg data-testid="empty-star" />,
}));

describe("RatingStars", () => {
  it("should render the correct number of filled and empty stars", () => {
    render(<RatingStars rating={3.4} />);

    const filledStars = screen.getAllByTestId("filled-star");
    const emptyStars = screen.getAllByTestId("empty-star");

    expect(filledStars).toHaveLength(3);
    expect(emptyStars).toHaveLength(2);
  });

  it("should render all filled stars when rating is 5", () => {
    render(<RatingStars rating={5} />);

    const filledStars = screen.getAllByTestId("filled-star");

    expect(filledStars).toHaveLength(5);
  });

  it("should render all empty stars when rating is 0", () => {
    render(<RatingStars rating={0} />);

    const emptyStars = screen.getAllByTestId("empty-star");

    expect(emptyStars).toHaveLength(5);
  });
});

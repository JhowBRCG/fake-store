import { render, screen } from "@testing-library/react";
import DiscountPercentage from "..";

describe("DiscountPercentage", () => {
  it("should render discount price", () => {
    render(<DiscountPercentage discount={10} />);

    expect(screen.getByText("-10%")).toBeInTheDocument();
  });
  it("should render any discount value", () => {
    render(<DiscountPercentage discount={25} />);

    expect(screen.getByText("-25%")).toBeInTheDocument();
  });
});

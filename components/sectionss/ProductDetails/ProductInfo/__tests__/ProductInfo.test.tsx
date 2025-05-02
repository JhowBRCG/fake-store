import { render, screen } from "@testing-library/react";
import ProductInfo from "..";

describe("ProductInfo", () => {
  it("should show discount and stock info", () => {
    render(<ProductInfo discount={10} stock={5} />);

    expect(screen.getByText("Discount:")).toBeInTheDocument();
    expect(screen.getByText("10%")).toBeInTheDocument();
    expect(screen.getByText("Remaining:")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});

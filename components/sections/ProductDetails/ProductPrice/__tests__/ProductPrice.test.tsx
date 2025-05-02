import { render, screen } from "@testing-library/react";
import ProductPrice from "..";

describe("ProductPrice", () => {
  it("should not render original price if there is no discount", () => {
    render(<ProductPrice discount={0} price={10} />);

    expect(screen.queryByTestId("original-price")).not.toBeInTheDocument();
  });

  it("should show current price if there is no discount", () => {
    render(<ProductPrice discount={0} price={10} />);

    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });

  it("should show original price and discounted price when disocunt is applied", () => {
    render(<ProductPrice discount={50} price={10} />);

    expect(screen.getByTestId("original-price")).toBeInTheDocument();
    expect(screen.getByText("$20.00")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });
});

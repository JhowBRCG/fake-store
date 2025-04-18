import { render, screen } from "@testing-library/react";
import ProductPrice from "..";

describe("ProductPrice", () => {
  it("should not show original price if there is no discount", () => {
    render(<ProductPrice discount={0} price={10} />);

    expect(screen.queryByTestId("original-price")).not.toBeInTheDocument();
  });

  it("should show price if exist no discount", () => {
    render(<ProductPrice discount={0} price={10} />);

    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });

  it("should show original price and the price with discount", () => {
    render(<ProductPrice discount={50} price={10} />);

    expect(screen.getByTestId("original-price")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });
});

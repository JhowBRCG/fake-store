/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import Cart from "../page";

jest.mock("@/components/cart/CartHeader", () => () => (
  <div data-testid="cart-header">CartHeader component</div>
));

jest.mock("@/components/cart/CartItems", () => () => (
  <div data-testid="cart-items">CartItems component</div>
));

jest.mock("@/components/cart/CartSummary", () => () => (
  <div data-testid="cart-summary">CartSummary component</div>
));

describe("CartPage", () => {
  it("should render all children", () => {
    render(<Cart />);

    expect(screen.getByTestId("cart-header")).toBeInTheDocument();
    expect(screen.getByTestId("cart-items")).toBeInTheDocument();
    expect(screen.getByTestId("cart-summary")).toBeInTheDocument();
  });
});

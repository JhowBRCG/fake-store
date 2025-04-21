/* eslint-disable react/display-name */

import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/lib/utils/test-utils/renderWithProviders";
import CartItems from "..";

jest.mock("../../CartItem", () => () => (
  <div data-testid="cart-item">CartItem component</div>
));

const preloadedState = {
  cart: {
    cartItems: [],
    totalProducts: 0,
    totalPrice: 0,
  },
};

describe("CartItems", () => {
  it("should not render any cartItem when cart is empty", () => {
    renderWithProviders(<CartItems />, { preloadedState });

    const cartItems = screen.queryAllByTestId("cart-item");
    expect(cartItems).toHaveLength(0);
  });

  it("should render cartItem when cart is not empty", () => {
    const newPreloadedState = {
      cart: {
        ...preloadedState,
        cartItems: [{}, {}],
      },
    };

    renderWithProviders(<CartItems />, { preloadedState: newPreloadedState });

    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems).toHaveLength(2);
  });
});

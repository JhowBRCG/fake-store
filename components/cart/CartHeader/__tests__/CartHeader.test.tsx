import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/lib/utils/test-utils/renderWithProviders";
import CartHeader from "..";

const preloadedState = {
  cart: {
    cartItems: [],
    totalProducts: 0,
    totalPrice: 0,
  },
};

const noProductMessage = "You don't have any product in cart";
const singularMessage = "You have 1 product in cart";
const pluralMessage = "You have 2 products in cart";

describe("CartHeader", () => {
  it("should show the correct text when there is no products in the cart", () => {
    renderWithProviders(<CartHeader />, { preloadedState });

    expect(screen.getByText(noProductMessage)).toBeInTheDocument();
  });

  it("should show the correct text when there is only one product in the cart", () => {
    const newPreloadedState = {
      cart: {
        ...preloadedState,
        totalProducts: 1,
      },
    };

    renderWithProviders(<CartHeader />, { preloadedState: newPreloadedState });

    expect(screen.getByText(singularMessage)).toBeInTheDocument();
  });

  it("should show the correct text when there is more than one product in the cart", () => {
    const newPreloadedState = {
      cart: {
        ...preloadedState,
        totalProducts: 2,
      },
    };

    renderWithProviders(<CartHeader />, { preloadedState: newPreloadedState });

    expect(screen.getByText(pluralMessage)).toBeInTheDocument();
  });
});

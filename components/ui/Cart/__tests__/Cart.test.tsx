import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/lib/utils/test-utils/renderWithProviders";
import Cart from "..";

const preloadedState = {
  cart: { cartItems: [], totalProducts: 3, totalPrice: 0 },
};

describe("Cart", () => {
  it("should render link to /cart", () => {
    renderWithProviders(<Cart />, { preloadedState });
    expect(screen.getByRole("link")).toHaveAttribute("href", "/cart");
  });

  it("should render the cart icon", () => {
    renderWithProviders(<Cart />, { preloadedState });
    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
  });

  it("should display total products", () => {
    renderWithProviders(<Cart />, { preloadedState });
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});

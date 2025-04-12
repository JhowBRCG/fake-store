import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "@/store/cartSlice";
import Cart from "..";

describe("Cart", () => {
  const renderWithStore = (
    preloadedState = {
      cart: { cartItems: [], totalProducts: 3, totalPrice: 0 },
    },
  ) => {
    const store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState,
    });

    return render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );
  };

  it("should render link to /cart", () => {
    renderWithStore();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/cart");
  });

  it("should render the cart icon", () => {
    renderWithStore();
    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
  });

  it("should display total products", () => {
    renderWithStore();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});

import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/lib/utils/test-utils/renderWithProviders";
import { clearCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import CartSummary from "..";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const preloadedState = {
  cart: {
    cartItems: [],
    totalProducts: 0,
    totalPrice: 0,
  },
};

describe("CartSummary", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not render CartSummary when there is no products", () => {
    renderWithProviders(<CartSummary />, { preloadedState });

    expect(screen.queryByTestId("summary")).not.toBeInTheDocument();
  });

  it("should show the total price cart", () => {
    const newPreloadedState = {
      cart: {
        ...preloadedState,
        totalProducts: 2,
        totalPrice: 50,
      },
    };

    renderWithProviders(<CartSummary />, { preloadedState: newPreloadedState });

    expect(screen.getByText("Total Price:"));
    expect(screen.getByText("$50.00"));
  });
  it("should show the total price cart", () => {
    const newPreloadedState = {
      cart: {
        ...preloadedState,
        totalProducts: 2,
        totalPrice: 50,
      },
    };

    renderWithProviders(<CartSummary />, { preloadedState: newPreloadedState });

    expect(screen.getByText("Total Price:"));
    expect(screen.getByText("$50.00"));
  });

  it("should render buttons", () => {
    const newPreloadedState = {
      cart: {
        ...preloadedState,
        totalProducts: 2,
        totalPrice: 50,
      },
    };

    renderWithProviders(<CartSummary />, { preloadedState: newPreloadedState });

    const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
    const checkoutButton = screen.getByRole("button", { name: "Checkout" });

    expect(clearCartButton).toBeInTheDocument();
    expect(checkoutButton).toBeInTheDocument();
  });

  it("should dispatch clearCart action when clicked", () => {
    const dispatchSpy = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchSpy);

    const newPreloadedState = {
      cart: {
        ...preloadedState,
        totalProducts: 2,
        totalPrice: 50,
      },
    };

    renderWithProviders(<CartSummary />, { preloadedState: newPreloadedState });

    const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCartButton);

    expect(dispatchSpy).toHaveBeenCalledWith(clearCart());
  });
});

import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/lib/utils/test-utils/renderWithProviders";
import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import AddToCartButton from "..";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const productMock = {
  id: 1,
  title: "Product 1",
  price: 10,
  images: ["image.jpg"],
};

describe("AddToCartButton", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render button", () => {
    renderWithProviders(<AddToCartButton product={productMock} />);

    const button = screen.getByRole("button", { name: "ADD TO CART" });
    expect(button).toBeInTheDocument();
  });

  it("should not render button when product is undefined", () => {
    renderWithProviders(<AddToCartButton />);

    const button = screen.queryByRole("button", { name: "ADD TO CART" });
    expect(button).not.toBeInTheDocument();
  });

  it("should dispatch addToCart action when clicked", () => {
    const dispatchSpy = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchSpy);

    renderWithProviders(<AddToCartButton product={productMock} />);

    const button = screen.getByRole("button", { name: "ADD TO CART" });
    fireEvent.click(button);

    expect(dispatchSpy).toHaveBeenCalledWith(
      addToCart({
        id: productMock.id,
        title: productMock.title,
        price: productMock.price,
        img: productMock.images[0] || "",
        quantity: 1,
      }),
    );
  });
});

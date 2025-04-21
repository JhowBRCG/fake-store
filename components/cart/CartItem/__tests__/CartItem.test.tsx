import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/lib/utils/test-utils/renderWithProviders";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import CartItem from "..";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const cartItemMock = {
  id: 1,
  title: "Product 1",
  img: "https://example.com/image.jpg",
  price: 10,
  quantity: 1,
};

describe("CartItem", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("shoud render cart item information", () => {
    renderWithProviders(<CartItem product={cartItemMock} />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });

  it("shoud render img with the correct alt", () => {
    renderWithProviders(<CartItem product={cartItemMock} />);

    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
  });

  it("shoud render img with the correct src", () => {
    renderWithProviders(<CartItem product={cartItemMock} />);

    const img = screen.getByAltText("Product 1") as HTMLImageElement;

    expect(img.src).toContain(
      encodeURIComponent("https://example.com/image.jpg"),
    );
  });

  it("should render the remove cart icon", () => {
    renderWithProviders(<CartItem product={cartItemMock} />);

    const icon = screen.getByRole("button").firstChild;

    expect(icon).toBeInTheDocument();
  });

  it("should dispatch removeFromCart action when clicked", () => {
    const dispatchSpy = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchSpy);

    renderWithProviders(<CartItem product={cartItemMock} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(dispatchSpy).toHaveBeenCalledWith(
      removeFromCart({
        id: cartItemMock.id,
        title: cartItemMock.title,
        img: cartItemMock.img,
        price: cartItemMock.price,
        quantity: cartItemMock.quantity,
      }),
    );
  });
});

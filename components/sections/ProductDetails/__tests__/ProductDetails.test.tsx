/* eslint-disable react/display-name */

import { screen } from "@testing-library/react";
import { renderWithClient } from "@/lib/utils/test-utils/renderWithClient";
import { useProductsByID } from "@/lib/hooks/queries/useProductsByID";
import ProductDetails from "..";

jest.mock("@/lib/hooks/queries/useProductsByID");

const useProductsIDMock = useProductsByID as jest.Mock;

jest.mock("@/components/ui/RatingStars", () => () => (
  <div data-testid="rating-stars">RatingStars component</div>
));

jest.mock("@/components/ui/Accordion", () => () => (
  <div data-testid="accordion">Accordion component</div>
));

jest.mock(
  "@/components/ui/ErrorMessage",
  () =>
    ({ message }: { message: string }) => (
      <div data-testid="error-message">{message}</div>
    ),
);

jest.mock("../ProductImage", () => () => (
  <div data-testid="product-image">ProductImage component</div>
));

jest.mock("../ProductInfo", () => () => (
  <div data-testid="product-info">ProductInfo component</div>
));

jest.mock("../ProductInfo", () => () => (
  <div data-testid="product-info">ProductInfo component</div>
));

jest.mock("../ProductPrice", () => () => (
  <div data-testid="product-price">ProductPrice component</div>
));

jest.mock("../AddToCartButton", () => () => (
  <div data-testid="add-to-cart-button">AddToCartButton component</div>
));

jest.mock("../BuyButton", () => () => (
  <div data-testid="buy-button">BuyButton component</div>
));

jest.mock("../LoadingSkeleton", () => () => (
  <div data-testid="loading-skeleton">LoadingSkeleton component</div>
));

const productMock = {
  title: "Product 1",
  images: ["image.jpg"],
  description: "product description",
  brand: "product brand",
  warrantyInformation: "product warranty",
  rating: 4.4,
  dimensions: {
    width: "10",
    height: "5",
    depth: "2",
  },
};

describe("ProductDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render LoadingSkeleton when data is loading", () => {
    useProductsIDMock.mockReturnValue({
      isLoading: true,
      isError: false,
      data: null,
    });

    renderWithClient(<ProductDetails productID="1" />);

    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });

  it("should render ErrorMessage when no products are found", () => {
    useProductsIDMock.mockReturnValue({
      isLoading: false,
      isError: true,
      data: {},
    });

    renderWithClient(<ProductDetails productID="1" />);

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "NO PRODUCT FOUND :/",
    );
  });

  it("should show the product title", () => {
    useProductsIDMock.mockReturnValue({
      isLoading: false,
      isError: false,
      data: productMock,
    });

    renderWithClient(<ProductDetails productID="1" />);

    expect(screen.getByText("4.4"));
  });

  it("should show the rating product", () => {
    useProductsIDMock.mockReturnValue({
      isLoading: false,
      isError: false,
      data: productMock,
    });

    renderWithClient(<ProductDetails productID="1" />);

    expect(screen.getByText("Product 1"));
  });

  it("should render the correct amount of accordions", () => {
    useProductsIDMock.mockReturnValue({
      isLoading: false,
      isError: false,
      data: productMock,
    });

    renderWithClient(<ProductDetails productID="1" />);

    const accordions = screen.getAllByTestId("accordion");

    expect(accordions).toHaveLength(4);
  });

  it("should render all sub-components", () => {
    useProductsIDMock.mockReturnValue({
      isLoading: false,
      isError: false,
      data: productMock,
    });

    renderWithClient(<ProductDetails productID="1" />);

    expect(screen.getByTestId("product-image")).toBeInTheDocument();
    expect(screen.getByTestId("product-info")).toBeInTheDocument();
    expect(screen.getByTestId("product-price")).toBeInTheDocument();
    expect(screen.getByTestId("add-to-cart-button")).toBeInTheDocument();
    expect(screen.getByTestId("buy-button")).toBeInTheDocument();
    expect(screen.getByTestId("rating-stars")).toBeInTheDocument();
  });
});

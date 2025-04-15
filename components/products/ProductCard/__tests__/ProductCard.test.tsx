/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import { productProps } from "@/lib/@types/productProps";
import ProductCard from "..";

jest.mock(
  "../../../ui/DiscountPercentage",
  () =>
    ({ discount }: { discount: number }) => (
      <div data-testid="discount-percentage">{discount}</div>
    ),
);

const mockProduct: productProps = {
  id: 1,
  title: "Product 1",
  description: "product descripion",
  price: 5,
  discountPercentage: 10,
  rating: 3.5,
  stock: 10,
  brand: "product brand",
  images: ["https://example.com/image.jpg"],
  dimensions: {
    width: 10,
    height: 4,
    depth: 2,
  },
  warrantyInformation: "no warranty",
};

describe("ProductCard", () => {
  it("should render discount", () => {
    render(<ProductCard product={mockProduct} />);

    const discount = screen.getByTestId("discount-percentage");

    expect(mockProduct.discountPercentage).toBeGreaterThan(0);
    expect(discount).toBeInTheDocument();
    expect(discount).toHaveTextContent("10");
  });

  it("should not render discount", () => {
    const mockWithoutDicount = {
      ...mockProduct,
      discountPercentage: 0,
    };

    render(<ProductCard product={mockWithoutDicount} />);

    const discount = screen.queryByTestId("discount-percentage");

    expect(mockWithoutDicount.discountPercentage).toBe(0);
    expect(discount).not.toBeInTheDocument();
  });

  it("should render the product title", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
  });

  it("should render the formatted rating", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("3.5")).toBeInTheDocument();
  });

  it("should render the formatted price", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("$5.00")).toBeInTheDocument();
  });

  it("should render the stock quantity", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("10 remaining")).toBeInTheDocument();
  });

  it("should render the image with correct alt text", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
  });

  it("should render the image with correct src ", () => {
    render(<ProductCard product={mockProduct} />);

    const img = screen.getByAltText("Product 1") as HTMLImageElement;
    expect(img.src).toContain(
      encodeURIComponent("https://example.com/image.jpg"),
    );
  });

  it("should render rating icon", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByTestId("rating-icon")).toBeInTheDocument();
  });
});

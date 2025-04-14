/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import { productProps } from "@/lib/@types/productProps";
import ProductList from "..";

jest.mock(
  "../../ProductCard",
  () =>
    ({ product }: { product: productProps }) => (
      <div data-testid="product-card">{product.title}</div>
    ),
);

const mockProducts: productProps[] = [
  {
    id: 1,
    title: "Product 1",
    description: "product descripion",
    price: 5,
    discountPercentage: 10,
    rating: 3.5,
    stock: 10,
    brand: "product brand",
    images: [],
    dimensions: {
      width: 10,
      height: 4,
      depth: 2,
    },
    warrantyInformation: "no warranty",
  },
  {
    id: 2,
    title: "Product 2",
    description: "product descripion",
    price: 10,
    discountPercentage: 20,
    rating: 3.5,
    stock: 15,
    brand: "product brand",
    images: [],
    dimensions: {
      width: 10,
      height: 4,
      depth: 2,
    },
    warrantyInformation: "1 year warranty",
  },
];

describe("ProductList", () => {
  it("should render all products", () => {
    render(<ProductList products={mockProducts} />);

    const productCards = screen.getAllByTestId("product-card");

    expect(productCards).toHaveLength(mockProducts.length);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("should render links with correct hrefs", () => {
    render(<ProductList products={mockProducts} />);

    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveAttribute("href", "/1");
    expect(links[1]).toHaveAttribute("href", "/2");
  });
});

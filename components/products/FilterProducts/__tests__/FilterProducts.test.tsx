/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import FilterProducts from "..";

jest.mock("../../SortProductByRelevance", () => () => (
  <div data-testid="sort-product-by-relevance">SortProductsByRelevance</div>
));
jest.mock("../../CategoryFilter", () => () => (
  <div data-testid="category-filter">CategoryFilter</div>
));
jest.mock("../../SortProductByPrice", () => () => (
  <div data-testid="sort-product-by-price">SortProductByPrice</div>
));

describe("FilterProducts", () => {
  it("render all chidren", () => {
    render(<FilterProducts />);

    expect(screen.getByText("Classify by")).toBeInTheDocument();
    expect(screen.getByTestId("sort-product-by-relevance")).toBeInTheDocument();
    expect(screen.getByTestId("category-filter")).toBeInTheDocument();
    expect(screen.getByTestId("sort-product-by-price")).toBeInTheDocument();
  });
});

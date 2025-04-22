/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import CategoryNamePage from "../page";

jest.mock("@/components/products/FilterProducts", () => () => (
  <div data-testid="filter-products">FilterProducts component</div>
));

jest.mock(
  "@/components/sections/ProductsCategory",
  () =>
    ({ categoryName }: { categoryName: string }) => (
      <div data-testid="products-category">Category name: {categoryName}</div>
    ),
);

describe("CategoryNamePage", () => {
  it("should render the filterProducts component", async () => {
    const mockParams = Promise.resolve({ category_name: "beauty" });

    const Page = await CategoryNamePage({ params: mockParams });

    render(Page);

    expect(screen.getByTestId("filter-products")).toBeInTheDocument();
  });

  it("should render ProductsCategory with the correct category_name", async () => {
    const mockParams = Promise.resolve({ category_name: "beauty" });

    const Page = await CategoryNamePage({ params: mockParams });

    render(Page);

    expect(screen.getByTestId("products-category")).toHaveTextContent("beauty");
  });
});

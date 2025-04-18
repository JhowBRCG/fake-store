/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as useProductParamsModule from "@/lib/hooks/useProductParams";
import * as useProductsByCategoryModule from "@/lib/hooks/queries/useProductsByCategory";
import ProductsCategory from "..";

jest.mock("@/components/ui/Pagination", () => () => (
  <div data-testid="pagination">Pagination component</div>
));

jest.mock("@/components/products/ProductList", () => () => (
  <div data-testid="product-list">ProductList component</div>
));

jest.mock(
  "@/components/ui/ErrorMessage",
  () =>
    ({ message }: { message: string }) => (
      <div data-testid="error-message">{message}</div>
    ),
);

jest.mock("@/lib/hooks/useProductParams");
jest.mock("@/lib/hooks/queries/useProductsByCategory");

const useProductParamsMock =
  useProductParamsModule.useProductParams as jest.Mock;
const useProductsByCategory =
  useProductsByCategoryModule.useProductsByCategory as jest.Mock;

const renderWithClient = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

describe("ProductsCategory", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show loading text when data is loading", () => {
    useProductParamsMock.mockReturnValue({
      currenPage: 1,
      sort: "",
      order: "",
    });

    useProductsByCategory.mockReturnValue({
      isLoading: true,
      data: null,
    });

    renderWithClient(<ProductsCategory categoryName="laptops" />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should show category name", () => {
    useProductParamsMock.mockReturnValue({
      currenPage: 1,
      sort: "",
      order: "",
    });

    useProductsByCategory.mockReturnValue({
      isLoading: false,
      data: {
        products: [{ id: 1, title: "Product 1" }],
        total: 20,
      },
    });

    renderWithClient(<ProductsCategory categoryName="laptops" />);

    expect(screen.getByText("Category:")).toBeInTheDocument();
    expect(screen.getByText("laptops")).toBeInTheDocument();
  });

  it("should render product list and pagination when data is loaded", () => {
    useProductParamsMock.mockReturnValue({
      currenPage: 1,
      sort: "",
      order: "",
    });

    useProductsByCategory.mockReturnValue({
      isLoading: false,
      data: {
        products: [{ id: 1, title: "Product 1" }],
        total: 20,
      },
    });

    renderWithClient(<ProductsCategory categoryName="laptops" />);

    expect(screen.getByTestId("product-list")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("should show error message when no products are found", () => {
    useProductParamsMock.mockReturnValue({
      currenPage: 1,
      sort: "",
      order: "",
    });

    useProductsByCategory.mockReturnValue({
      isLoading: false,
      data: {
        products: [],
        total: 0,
      },
    });

    renderWithClient(<ProductsCategory categoryName="dog" />);

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "NO PRODUCTS FOUND :/",
    );
  });
});

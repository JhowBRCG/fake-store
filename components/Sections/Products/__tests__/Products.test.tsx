/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import Products from "..";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const useProductParamsMock = jest.fn();
const useProductsMock = jest.fn();
const useProductsBySearchMock = jest.fn();

jest.mock("@/lib/hooks/useProductParams", () => ({
  useProductParams: () => useProductParamsMock(),
}));

jest.mock("@/lib/hooks/queries/useProducts", () => ({
  useProducts: () => useProductsMock(),
}));

jest.mock("@/lib/hooks/queries/useProductsBySearch", () => ({
  useProductsBySearch: () => useProductsBySearchMock(),
}));

jest.mock("@/components/products/ProductList", () => () => (
  <div data-testid="product-list">ProductList component</div>
));

jest.mock("@/components/ui/Pagination", () => () => (
  <div data-testid="pagination">Pagination component</div>
));

jest.mock(
  "@/components/ui/ErrorMessage",
  () =>
    ({ message }: { message: string }) => (
      <div data-testid="error-message">{message}</div>
    ),
);

const renderWithClient = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

describe("Products", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show loading text when data is loading", () => {
    useProductParamsMock.mockImplementation(() => ({
      currentPage: 1,
      sort: "",
      order: "",
      query: "",
    }));

    useProductsMock.mockImplementation(() => ({
      data: null,
      isLoading: true,
    }));

    renderWithClient(<Products />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render product list and pagination when data is loaded", () => {
    useProductParamsMock.mockImplementation(() => ({
      currentPage: 1,
      sort: "",
      order: "",
      query: "",
    }));

    useProductsMock.mockImplementation(() => ({
      isLoading: false,
      data: {
        products: [{ id: 1, title: "Product 1" }],
        total: 20,
      },
    }));

    renderWithClient(<Products />);

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByTestId("product-list")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("should show error message when no products are found", () => {
    useProductParamsMock.mockImplementation(() => ({
      currentPage: 1,
      sort: "",
      order: "",
      query: "",
    }));

    useProductsMock.mockImplementation(() => ({
      isLoading: false,
      data: {
        products: [],
        total: 0,
      },
    }));

    renderWithClient(<Products />);

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "NO PRODUCTS FOUND :/",
    );
  });

  it("should show search message when query is present", () => {
    useProductParamsMock.mockImplementation(() => ({
      currentPage: 1,
      sort: "",
      order: "",
      query: "phone",
    }));

    useProductsMock.mockImplementation(() => ({
      isLoading: false,
      data: null,
    }));

    useProductsBySearchMock.mockImplementation(() => ({
      isLoading: false,
      data: {
        products: [{ id: 1, title: "Product 1" }],
        total: 10,
      },
    }));

    renderWithClient(<Products />);

    expect(screen.getByText("The results for:")).toBeInTheDocument();
    expect(screen.getByText("phone")).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import CategoryDrawer from "..";

jest.mock("@/config", () => ({
  CATEGORIES: ["beauty", "fragrances"],
}));

const handleCategoryMock = jest.fn();
const showAllProductsMock = jest.fn();

describe("CategoryDrawer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be hidden when IsFilsterOpen is true", () => {
    render(
      <CategoryDrawer
        handleCategory={handleCategoryMock}
        showAllProducts={showAllProductsMock}
        isFilterOpen={false}
      />,
    );

    const drawer = screen.getByRole("navigation");

    expect(drawer).toHaveClass("-translate-x-full");
    expect(drawer).not.toHaveClass("translate-x-0");
  });

  it("should be visible when IsFilsterOpen is true", () => {
    render(
      <CategoryDrawer
        handleCategory={handleCategoryMock}
        showAllProducts={showAllProductsMock}
        isFilterOpen={true}
      />,
    );

    const drawer = screen.getByRole("navigation");

    expect(drawer).toHaveClass("translate-x-0");
    expect(drawer).not.toHaveClass("-translate-x-full");
  });

  it("should render all category items", () => {
    render(
      <CategoryDrawer
        handleCategory={handleCategoryMock}
        showAllProducts={showAllProductsMock}
        isFilterOpen={true}
      />,
    );

    const categoryItems = screen.getAllByTestId("category-item");

    expect(categoryItems).toHaveLength(2);
    expect(screen.getByText("beauty")).toBeInTheDocument();
    expect(screen.getByText("fragrances")).toBeInTheDocument();
  });

  it("should call handleCategory with correct category", () => {
    render(
      <CategoryDrawer
        handleCategory={handleCategoryMock}
        showAllProducts={showAllProductsMock}
        isFilterOpen={true}
      />,
    );

    const categoryItems = screen.getAllByTestId("category-item");
    fireEvent.click(categoryItems[0]);

    expect(handleCategoryMock).toHaveBeenCalledWith("beauty");
  });

  it("should call showAllProducts when 'All' is clicked", () => {
    render(
      <CategoryDrawer
        handleCategory={handleCategoryMock}
        showAllProducts={showAllProductsMock}
        isFilterOpen={true}
      />,
    );

    const all = screen.getByText("All");
    fireEvent.click(all);

    expect(showAllProductsMock).toHaveBeenCalled();
  });

  it("should render the close icon button", () => {
    render(
      <CategoryDrawer
        handleCategory={handleCategoryMock}
        showAllProducts={showAllProductsMock}
        isFilterOpen={true}
      />,
    );

    const icon = screen.getByRole("button").childNodes[0];

    expect(icon).toBeInTheDocument();
  });
});

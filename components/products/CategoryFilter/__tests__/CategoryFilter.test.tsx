/* eslint-disable react/display-name */

import { fireEvent, render, screen } from "@testing-library/react";
import CategoryFilter from "..";

const toggleFilterMock = jest.fn();
const handleCategoryMock = jest.fn();
const showAllProducts = jest.fn();

const useCategoryFilterMock = jest.fn();

jest.mock("@/lib/hooks/useCategoryFilter", () => ({
  useCategoryFilter: () => useCategoryFilterMock(),
}));

jest.mock("../../CategoryDrawer", () => () => (
  <div data-testid="category-drawer">CategoryDrawer component</div>
));

describe("CategoryFilter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shoud render the categories button", () => {
    useCategoryFilterMock.mockImplementation(() => ({
      toggleFilter: toggleFilterMock,
      handleCategory: handleCategoryMock,
      isFilterOpen: false,
      showAllProducts: showAllProducts,
    }));

    render(<CategoryFilter className="test-class" />);

    expect(screen.getByText("categories")).toBeInTheDocument();
  });

  it("should call toggleFilter on click", () => {
    useCategoryFilterMock.mockImplementation(() => ({
      toggleFilter: toggleFilterMock,
      handleCategory: handleCategoryMock,
      isFilterOpen: false,
      showAllProducts: showAllProducts,
    }));

    render(<CategoryFilter className="test-class" />);

    const wrapper = screen.getByTestId("wrapper");
    fireEvent.click(wrapper);

    expect(toggleFilterMock).toHaveBeenCalled();
  });

  it("should render CategoryDrawer component", () => {
    useCategoryFilterMock.mockImplementation(() => ({
      toggleFilter: toggleFilterMock,
      handleCategory: handleCategoryMock,
      isFilterOpen: false,
      showAllProducts: showAllProducts,
    }));

    render(<CategoryFilter className="test-class" />);

    expect(screen.getByTestId("category-drawer")).toBeInTheDocument();
  });

  it("should aplly the correct class when isFilterIsOpen is true", () => {
    useCategoryFilterMock.mockImplementation(() => ({
      toggleFilter: toggleFilterMock,
      handleCategory: handleCategoryMock,
      isFilterOpen: true,
      showAllProducts: showAllProducts,
    }));

    render(<CategoryFilter className="test-class" />);
    const wrapper = screen.getByText("categories").closest("div");

    expect(wrapper).toHaveClass("bg-red-400 text-white");
  });

  it("should apply the correct class when isFilterOpen is false", () => {
    useCategoryFilterMock.mockImplementation(() => ({
      toggleFilter: toggleFilterMock,
      handleCategory: handleCategoryMock,
      isFilterOpen: false,
      showAllProducts: showAllProducts,
    }));

    render(<CategoryFilter className="test-class" />);
    const wrapper = screen.getByText("categories").closest("div");

    expect(wrapper).toHaveClass("bg-white");
    expect(wrapper).not.toHaveClass("bg-red-400", "text-white");
  });
});

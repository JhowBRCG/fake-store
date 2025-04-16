import { fireEvent, render, screen } from "@testing-library/react";
import SortProductByPrice from "..";

const toggleFilterMock = jest.fn();
const handleSortFilterMock = jest.fn();
const getCurrentSortOrderMock = jest.fn();

const useSortByPriceMock = jest.fn();

jest.mock("react-icons/io", () => ({
  IoIosArrowDown: () => <svg data-testid="icon-down" />,
  IoIosArrowUp: () => <svg data-testid="icon-up" />,
}));

jest.mock("@/lib/hooks/useSortByPrice", () => ({
  useSortByPrice: () => useSortByPriceMock(),
}));

describe("SortProductByPrice", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the default order text", () => {
    getCurrentSortOrderMock.mockReturnValue("Price");

    useSortByPriceMock.mockImplementation(() => ({
      isFilterOpen: false,
      handleRelevanceSort: handleSortFilterMock,
      toggleFilter: toggleFilterMock,
      getCurrentSortOrder: getCurrentSortOrderMock,
    }));

    render(<SortProductByPrice className="test-class" />);

    expect(screen.getByText("Price")).toBeInTheDocument();
  });

  it("should call toggleFiter on click", () => {
    getCurrentSortOrderMock.mockReturnValue("Price");

    useSortByPriceMock.mockImplementation(() => ({
      isFilterOpen: false,
      handleRelevanceSort: handleSortFilterMock,
      toggleFilter: toggleFilterMock,
      getCurrentSortOrder: getCurrentSortOrderMock,
    }));

    render(<SortProductByPrice className="test-class" />);

    const toggleButton = screen.getByText("Price").closest("div");

    fireEvent.click(toggleButton!);

    expect(toggleFilterMock).toHaveBeenCalled();
  });

  it("should display order options when isFilterOpen is true ", () => {
    getCurrentSortOrderMock.mockReturnValue("Price");

    useSortByPriceMock.mockImplementation(() => ({
      isFilterOpen: true,
      handleRelevanceSort: handleSortFilterMock,
      toggleFilter: toggleFilterMock,
      getCurrentSortOrder: getCurrentSortOrderMock,
    }));

    render(<SortProductByPrice className="test-class" />);

    expect(screen.getByText("ascending")).toBeInTheDocument();
    expect(screen.getByText("descending")).toBeInTheDocument();
  });

  it("should call handleSortFilter with 'asc' when ascending is clicked", () => {
    getCurrentSortOrderMock.mockReturnValue("Ascending");

    useSortByPriceMock.mockImplementation(() => ({
      isFilterOpen: true,
      toggleFilter: toggleFilterMock,
      handleSortFilter: handleSortFilterMock,
      getCurrentSortOrder: getCurrentSortOrderMock,
    }));

    render(<SortProductByPrice className="test-class" />);

    const ascendingOption = screen.getByText("ascending");
    fireEvent.click(ascendingOption);

    expect(handleSortFilterMock).toHaveBeenCalledWith("asc");
  });

  it("should call handleSortFilter with 'desc' when descending is clicked", () => {
    getCurrentSortOrderMock.mockReturnValue("Descending");

    useSortByPriceMock.mockImplementation(() => ({
      isFilterOpen: true,
      toggleFilter: toggleFilterMock,
      handleSortFilter: handleSortFilterMock,
      getCurrentSortOrder: getCurrentSortOrderMock,
    }));

    render(<SortProductByPrice className="test-class" />);

    const ascendingOption = screen.getByText("descending");
    fireEvent.click(ascendingOption);

    expect(handleSortFilterMock).toHaveBeenCalledWith("desc");
  });

  it("should render the arrow down icon when isFilterOpen is false", () => {
    useSortByPriceMock.mockImplementation(() => ({
      isFilterOpen: false,
      toggleFilter: toggleFilterMock,
      handleSortFilter: handleSortFilterMock,
      getCurrentSortOrder: getCurrentSortOrderMock,
    }));

    render(<SortProductByPrice className="test-class" />);

    expect(screen.getByTestId("icon-down")).toBeInTheDocument();
  });

  it("should render the arrow up icon when isFilterOpen is true", () => {
    useSortByPriceMock.mockImplementation(() => ({
      isFilterOpen: true,
      toggleFilter: toggleFilterMock,
      handleSortFilter: handleSortFilterMock,
      getCurrentSortOrder: getCurrentSortOrderMock,
    }));

    render(<SortProductByPrice className="test-class" />);

    expect(screen.getByTestId("icon-up")).toBeInTheDocument();
  });
});

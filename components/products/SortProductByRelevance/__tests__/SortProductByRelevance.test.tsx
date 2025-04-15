import { fireEvent, render, screen } from "@testing-library/react";
import SortProductByRelevance from "..";

const handleRelevanceSortMock = jest.fn();

const useSortByRelevanceMock = jest.fn();

jest.mock("@/lib/hooks/useSortByRelevance", () => ({
  useSortByRelevance: () => useSortByRelevanceMock(),
}));

describe("SortProductByRelevance", () => {
  it("should render the relevance button", () => {
    useSortByRelevanceMock.mockImplementation(() => ({
      handleRelevanceSort: handleRelevanceSortMock,
      isRelevanceActive: false,
    }));

    render(<SortProductByRelevance className="test-class" />);

    expect(screen.getByText("Relevance")).toBeInTheDocument();
  });

  it("should call handleRelevanceSort on click", () => {
    useSortByRelevanceMock.mockImplementation(() => ({
      handleRelevanceSort: handleRelevanceSortMock,
      isRelevanceActive: false,
    }));

    render(<SortProductByRelevance className="test-class" />);

    const wrapper = screen.getByTestId("wrapper");

    fireEvent.click(wrapper);

    expect(handleRelevanceSortMock).toHaveBeenCalled();
  });

  it("should apply the correct class when isRelevanceActive is false", () => {
    useSortByRelevanceMock.mockImplementation(() => ({
      handleRelevanceSort: handleRelevanceSortMock,
      isRelevanceActive: false,
    }));

    render(<SortProductByRelevance className="test-class" />);

    const wrapper = screen.getByText("Relevance").closest("div");

    expect(wrapper).toHaveClass("bg-white");
    expect(wrapper).not.toHaveClass("bg-red-400", "text-white");
  });

  it("should apply the correct class when isRelevanceActive is true", () => {
    useSortByRelevanceMock.mockImplementation(() => ({
      handleRelevanceSort: handleRelevanceSortMock,
      isRelevanceActive: true,
    }));

    render(<SortProductByRelevance className="test-class" />);

    const wrapper = screen.getByText("Relevance").closest("div");

    expect(wrapper).toHaveClass("bg-red-400", "text-white");
    expect(wrapper).not.toHaveClass("bg-white");
  });
});

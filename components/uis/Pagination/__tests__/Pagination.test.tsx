import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "..";

const pushMock = jest.fn();
const searchParamsMock = new URLSearchParams("category=beauty");

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
  useSearchParams: () => searchParamsMock,
}));

describe("Pagination", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("should render pagination correctly", () => {
    render(<Pagination currentPage={1} totalPages={5} />);

    expect(screen.getByText("next")).toBeInTheDocument();
    expect(screen.getByText("previous")).toBeInTheDocument();
  });

  it("should call route .push with correct page param on page click", async () => {
    render(<Pagination currentPage={1} totalPages={5} />);

    const page2Button = screen.getByText("2");
    await fireEvent.click(page2Button);

    expect(pushMock).toHaveBeenCalledWith("?category=beauty&page=2");
  });

  it("should highlight the current page", () => {
    render(<Pagination currentPage={3} totalPages={5} />);

    const activePage = screen.getByText("3").closest("li");

    expect(activePage).toHaveClass("active-page");
  });

  it("should disable previous button when it's the first page", () => {
    render(<Pagination currentPage={1} totalPages={5} />);

    expect(screen.getByText("previous")).toHaveClass("disabled-page");
  });

  it("should disable next button when it's the last page", () => {
    render(<Pagination currentPage={5} totalPages={5} />);

    expect(screen.getByText("next")).toHaveClass("disabled-page");
  });
});

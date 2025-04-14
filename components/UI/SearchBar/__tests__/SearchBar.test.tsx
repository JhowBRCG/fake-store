import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "..";
import * as hookModule from "@/lib/hooks/useHandleSearch";

jest.mock("@/lib/hooks/useHandleSearch");

describe("SearchBar", () => {
  it("should render input with initial value", () => {
    jest.mocked(hookModule.useHandleSearch).mockReturnValue({
      searchQuery: "",
      setSearchQuery: jest.fn(),
      handleSubmitSearchQuery: jest.fn((e) => e.preventDefault()),
    });

    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("should update value when typing", () => {
    const setSearchQueryMock = jest.fn();

    jest.mocked(hookModule.useHandleSearch).mockReturnValue({
      searchQuery: "",
      setSearchQuery: jest.fn(setSearchQueryMock),
      handleSubmitSearchQuery: jest.fn((e) => e.preventDefault()),
    });

    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "phone" } });

    expect(setSearchQueryMock).toHaveBeenCalledWith("phone");
  });

  it("shoud call handleSubmitSearchQuery on form submit", () => {
    const handleSubmitQueryMock = jest.fn();

    jest.mocked(hookModule.useHandleSearch).mockReturnValue({
      searchQuery: "phone",
      setSearchQuery: jest.fn(),
      handleSubmitSearchQuery: jest.fn(handleSubmitQueryMock),
    });

    render(<SearchBar />);

    fireEvent.submit(screen.getByRole("textbox"));

    expect(handleSubmitQueryMock).toHaveBeenCalled();
  });

  it("should render search icon", () => {
    render(<SearchBar />);

    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });
});

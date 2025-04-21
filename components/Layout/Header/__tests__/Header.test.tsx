/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import Header from "..";

jest.mock("../../../ui/SearchBar", () => () => (
  <div data-testid="search-bar">SearchBar component</div>
));

jest.mock("../../../ui/Cart", () => () => (
  <div data-testid="cart">Cart component</div>
));

describe("Header", () => {
  it("should render all children", () => {
    render(<Header />);

    expect(screen.getByText("STORE")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});

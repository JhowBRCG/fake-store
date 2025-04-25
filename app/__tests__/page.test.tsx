/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import Home from "../page";

// Mocka os dois componentes importados

jest.mock("@/components/sections/HeaderBanner", () => () => (
  <div data-testid="header-banner">HeaderBanner Component</div>
));

jest.mock("@/components/products/FilterProducts", () => () => (
  <div data-testid="filter-products">FilterProducts Component</div>
));

jest.mock("@/components/sections/Products", () => () => (
  <div data-testid="products">Products Component</div>
));

describe("Home Page", () => {
  it("should render FilterProducts and Products component", () => {
    render(<Home />);

    expect(screen.getByTestId("filter-products")).toBeInTheDocument();
    expect(screen.getByTestId("products")).toBeInTheDocument();
    expect(screen.getByTestId("header-banner")).toBeInTheDocument();
  });
});

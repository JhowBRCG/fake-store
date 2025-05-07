/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import LoadingSkeleton from "..";

jest.mock("@/components/ui/Accordion", () => ({ title }: { title: string }) => (
  <div data-testid="accordion">{title}</div>
));

jest.mock("../../ProductInfo", () => () => (
  <div data-testid="product-info">ProductInfo component</div>
));

jest.mock("../../ProductPrice", () => () => (
  <div data-testid="product-price">ProductPrice component</div>
));

jest.mock("../../BuyButton", () => () => (
  <div data-testid="buy-button">BuyButton component</div>
));

describe("LoadingSkeleton", () => {
  it("should show 'loading...' text", () => {
    render(<LoadingSkeleton />);

    expect(screen.getByText("loading...")).toBeInTheDocument();
  });

  it("should render the correct numbers of accordions", () => {
    render(<LoadingSkeleton />);

    const accordions = screen.getAllByTestId("accordion");

    expect(accordions).toHaveLength(4);
  });

  it("should show the titles from accordions", () => {
    render(<LoadingSkeleton />);

    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByText("brand")).toBeInTheDocument();
    expect(screen.getByText("dimensions")).toBeInTheDocument();
    expect(screen.getByText("warranty")).toBeInTheDocument();
  });

  it("should render components", () => {
    render(<LoadingSkeleton />);

    expect(screen.getByTestId("product-info")).toBeInTheDocument();
    expect(screen.getByTestId("product-price")).toBeInTheDocument();
    expect(screen.getByTestId("buy-button")).toBeInTheDocument();
  });
});

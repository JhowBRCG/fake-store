/* eslint-disable react/display-name */

import { render, screen } from "@testing-library/react";
import ProductIdPage from "../page";

jest.mock(
  "@/components/sections/ProductDetails",
  () =>
    ({ productID }: { productID: string }) => (
      <div data-testid="product-details">ProductID: {productID}</div>
    ),
);

describe("ProductID page", () => {
  it("should render the ProductDetails with the correct productID", async () => {
    const mockParams = Promise.resolve({ productID: "1" });

    const Page = await ProductIdPage({ params: mockParams });

    render(Page);

    expect(screen.getByTestId("product-details")).toHaveTextContent("1");
  });
});

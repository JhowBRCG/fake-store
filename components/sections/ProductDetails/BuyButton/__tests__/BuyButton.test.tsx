import { render, screen } from "@testing-library/react";
import BuyButton from "..";

describe("BuyButton", () => {
  it("should render the button with the text 'BUY'", () => {
    render(<BuyButton />);

    expect(screen.getByText("BUY")).toBeInTheDocument();
  });
});

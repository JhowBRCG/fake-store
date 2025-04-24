import { formatPrice } from "../formatPrice";

describe("formatPrice", () => {
  it("should format price to USD currency model", () => {
    const priceWithoutFormat = 225;

    expect(formatPrice(priceWithoutFormat)).toBe("$225.00");
  });
});

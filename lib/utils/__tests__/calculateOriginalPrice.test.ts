import { calculateOriginalPrice } from "../calculateOriginalPrice";

describe("calculateOriginalPrice", () => {
  it("should return the price without discount", () => {
    const currentPrice = 50;
    const discount = 50;

    expect(calculateOriginalPrice(currentPrice, discount)).toBe(100);
  });
});

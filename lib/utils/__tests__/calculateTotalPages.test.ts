import { calculateTotalPages } from "../calculateTotalPages";

describe("calculateTotalPages", () => {
  it("should calculate the total number of pages based on the total number of products", () => {
    const totalProducts = 30;

    expect(calculateTotalPages(totalProducts)).toBe(2);
  });
});

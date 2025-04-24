import { formatRating } from "../formatRating";

describe("formatRating", () => {
  it("should format number to one decimal place", () => {
    const ratingWithoutFormat = 5.55;

    expect(formatRating(ratingWithoutFormat)).toBe(5.5);
  });
});

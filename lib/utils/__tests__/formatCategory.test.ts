import { formatCategory } from "../formatCategory";

describe("formatCategory", () => {
  it("should format category name by replacing hyphens with spaces", () => {
    const categoryNameWithoutFormat = "skin-care";

    expect(formatCategory(categoryNameWithoutFormat)).toBe("skin care");
  });
});

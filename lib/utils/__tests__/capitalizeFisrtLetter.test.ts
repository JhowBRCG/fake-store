import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
  it("should return a string with no value", () => {
    const string = "";

    expect(capitalizeFirstLetter(string)).toBe("");
  });

  it("should return a string with the first letter capitalized", () => {
    const string = "phone";

    expect(capitalizeFirstLetter(string)).toBe("Phone");
  });
});

import { randomInput } from "./randomInput";

describe("random input", () => {
  it("should return a 2D array of given size", () => {
    const size = 5;
    const result = randomInput(size);

    expect(result.length).toBe(5);
    expect(result[0].length).toBe(5);
    expect(result[1].length).toBe(5);
    expect(result[2].length).toBe(5);
    expect(result[3].length).toBe(5);
    expect(result[4].length).toBe(5);
  });

  it("all cells should be 1 or 0", () => {
    const size = 5;
    const result = randomInput(size);

    result
      .flatMap((values) => values)
      .forEach((value) => {
        expect(value === 1 || value === 0).toBe(true);
      });
  });
});

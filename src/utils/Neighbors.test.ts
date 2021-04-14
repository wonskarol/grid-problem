import { Neighbors } from "./Neighbors";

describe("Neighbors", () => {
  it("id() method should return an id for given (x, y) position", () => {
    expect(Neighbors.id(3, 2)).toBe("3.2");
    expect(Neighbors.id(0, 4)).toBe("0.4");
  });

  it("idSplit() method should return a [x, y] position for given id", () => {
    expect(Neighbors.idSplit("3.2")).toEqual([3, 2]);
    expect(Neighbors.idSplit("0.4")).toEqual([0, 4]);
  });

  describe("get() method", () => {
    it("should return all neighbors for given (x, y) position, including itself", () => {
      const inputMock: number[][] = [
        [1, 0, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
      ];

      const neighbors = new Neighbors(inputMock);

      expect(neighbors.get(Neighbors.id(0, 0))).toEqual(["0.0"]);
      expect(neighbors.get(Neighbors.id(0, 2))).toEqual(["0.2", "0.3", "1.3"]);
      expect(neighbors.get(Neighbors.id(2, 2))).toEqual([
        "2.2",
        "2.1",
        "3.1",
        "3.0",
        "3.2",
        "3.3",
      ]);
    });

    it("should return empty array for cell with value 0", () => {
      const inputMock: number[][] = [
        [1, 0, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
      ];

      const neighbors = new Neighbors(inputMock);

      expect(neighbors.get(Neighbors.id(1, 0))).toEqual([]);
    });

    it("should memoize results for neighbors from same group", () => {
      const inputMock: number[][] = [
        [1, 0, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
      ];

      const neighbors = new Neighbors(inputMock);

      //@ts-ignore
      const spy = jest.spyOn(neighbors, "depthFirstSearch");

      neighbors.get(Neighbors.id(0, 2));
      neighbors.get(Neighbors.id(0, 3));

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

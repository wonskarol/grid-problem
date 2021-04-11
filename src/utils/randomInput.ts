export function randomInput(size: number): number[][] {
  const input: number[][] = [];

  for (let y = 0; y < size; y++) {
    input[y] = [];
    for (let x = 0; x < size; x++) {
      // insert 0 or 1
      input[y][x] = Math.round(Math.random());
    }
  }

  return input;
}

interface INode {
  x: number;
  y: number;
  visited: boolean;
}

export class Neighbors {
  private input: number[][];
  private neighbors: Map<string, string[]>;

  constructor(input: number[][]) {
    this.input = input;
    this.neighbors = new Map<string, string[]>();
  }

  public static id(x: number, y: number): string {
    return `${x}.${y}`;
  }

  public static idSplit(id: string): [number, number] {
    const [x, y] = id.split(".").map((number) => parseInt(number));

    return [x, y];
  }

  private isValidCell(x: number, y: number): boolean {
    return this.input[y][x] === 1;
  }

  private getDirectNeighbors(
    nodes: Map<string, INode>,
    x: number,
    y: number
  ): INode[] {
    const neighbors: INode[] = [];

    if (nodes.has(`${x}.${y - 1}`)) {
      neighbors.push(nodes.get(`${x}.${y - 1}`) as INode);
    }

    if (nodes.has(`${x + 1}.${y}`)) {
      neighbors.push(nodes.get(`${x + 1}.${y}`) as INode);
    }

    if (nodes.has(`${x}.${y + 1}`)) {
      neighbors.push(nodes.get(`${x}.${y + 1}`) as INode);
    }

    if (nodes.has(`${x - 1}.${y}`)) {
      neighbors.push(nodes.get(`${x - 1}.${y}`) as INode);
    }

    return neighbors;
  }

  private createNodesMap(): Map<string, INode> {
    const nodes = new Map<string, INode>();

    for (let y = 0; y < this.input.length; y++) {
      for (let x = 0; x < this.input.length; x++) {
        // create nodes only for valid cells
        if (this.isValidCell(x, y)) {
          nodes.set(Neighbors.id(x, y), {
            x,
            y,
            visited: false,
          });
        }
      }
    }

    return nodes;
  }

  // implementation of https://en.wikipedia.org/wiki/Depth-first_search algorithm
  private depthFirstSearch(id: string): Map<string, INode> | undefined {
    const result = new Map<string, INode>();
    const nodes = this.createNodesMap();
    const startNode = nodes.get(id);

    if (startNode === undefined) {
      return;
    }

    const visitNodes = (node: INode) => {
      node.visited = true;
      const { x, y } = node;

      result.set(Neighbors.id(x, y), node);

      const directNeighbors = this.getDirectNeighbors(nodes, x, y);
      directNeighbors.forEach((neighborNode) => {
        if (!neighborNode.visited) {
          visitNodes(neighborNode);
        }
      });
    };

    visitNodes(startNode);

    return result;
  }

  /**
   *
   * @param x position X
   * @param y position Y
   * @returns array of neighbors as `x.y` string
   */
  public getNeighbors(id: string): string[] {
    if (this.neighbors.has(id)) {
      return this.neighbors.get(id) as string[];
    } else {
      console.log("=== run depthFirstSearch ===");
      const result = this.depthFirstSearch(id);

      if (result === undefined) {
        this.neighbors.set(id, []);
        return [];
      }

      // memoization
      result.forEach((_, key) => {
        this.neighbors.set(key, Array.from(result.keys()));
      });

      return this.neighbors.get(id) as string[];
    }
  }
}

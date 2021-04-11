import React, { useState, useRef, useEffect } from "react";

import { Neighbors } from "../utils/Neighbors";
import { Cell } from "./Cell";

interface IGridProps {
  input: number[][];
  size: number;
}

export function Grid({ input, size }: IGridProps) {
  const neighbors = useRef<Neighbors>();
  const [cellCount, setCellCount] = useState<{ id: string; count: number }>();

  useEffect(() => {
    neighbors.current = new Neighbors(input);
    setCellCount(undefined);
  }, [input]);

  const handleOnCellClick = (id: string) => {
    const length = neighbors.current?.getNeighbors(id).length;

    if (length) {
      setCellCount({ id, count: length });
    }
  };

  const handleOnCellMouseOver = (id: string) => {
    console.log(id);
  };

  const styles = {
    display: "inline-grid",
    boxShadow: "10px 10px 0 lightgray",
    gridTemplateColumns: `repeat(${size}, 50px)`,
    gridTemplateRows: `repeat(${size}, 50px)`,
  };

  return (
    <div style={styles}>
      {input.map((row, y) =>
        row.map((_, x) => (
          <Cell
            key={Neighbors.id(x, y)}
            id={Neighbors.id(x, y)}
            value={input[y][x]}
            onClick={handleOnCellClick}
            onMouseEnter={handleOnCellMouseOver}
          >
            {Neighbors.id(x, y) === cellCount?.id && cellCount?.count}
          </Cell>
        ))
      )}
    </div>
  );
}

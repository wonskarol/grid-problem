import React from "react";

interface ICellProps {
  value: number;
  id: string;
  hover: boolean;
  onClick: (id: string) => void;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  children: React.ReactNode;
}

function areEqual(prevProps: ICellProps, nextProps: ICellProps) {
  if (
    prevProps.value !== nextProps.value ||
    prevProps.id !== nextProps.id ||
    prevProps.hover !== nextProps.hover ||
    prevProps.children !== nextProps.children
  ) {
    return false;
  }

  return true;
}

export const Cell = React.memo(
  ({ value, id, hover, children, onClick, onMouseEnter, onMouseLeave }) => {
    const handleClick = (id: string) => {
      if (value === 1) {
        onClick(id);
      }
    };

    const handleMouseEnter = (id: string) => {
      if (value === 1) {
        onMouseEnter(id);
      }
    };

    const handleMouseLeave = (id: string) => {
      if (value === 1) {
        onMouseLeave(id);
      }
    };

    const style = {
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      background: hover ? "seagreen" : value === 1 ? "tomato" : "white",
    };

    return (
      <div
        style={style}
        onClick={() => handleClick(id)}
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={() => handleMouseLeave(id)}
      >
        {children}
      </div>
    );
  },
  areEqual
);

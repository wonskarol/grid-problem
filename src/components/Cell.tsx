import React from "react";

interface ICellProps {
  value: number;
  id: string;

  onClick: (id: string) => void;
  onMouseEnter: (id: string) => void;
}

export const Cell: React.FC<ICellProps> = (props) => {
  const handleClick = (id: string) => {
    if (props.value === 1) {
      props.onClick(id);
    }
  };

  const handleMouseEnter = (id: string) => {
    if (props.value === 1) {
      props.onMouseEnter(id);
    }
  };

  const style = {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 200,
    background: props.value === 1 ? "tomato" : "white",
  };

  return (
    <div
      style={style}
      onClick={() => handleClick(props.id)}
      onMouseEnter={() => handleMouseEnter(props.id)}
    >
      {props.children}
    </div>
  );
};

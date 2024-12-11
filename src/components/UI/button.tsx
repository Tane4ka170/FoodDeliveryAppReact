import React from "react";

const Button: React.FC<{
  children?: any;
  color: string;
  bgColor?: string;
  label?: string;
  onClick?: () => void;
}> = (props) => {
  const colorScheme = props.color;
  const backgroundColor = props.bgColor;
  return (
    <React.Fragment>
      <button
        style={{
          background: backgroundColor,
          padding: 12,
          border: `1px solid ${colorScheme}`,
          borderRadius: 10,
          color: `${colorScheme}`,
          margin: 5,
        }}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </React.Fragment>
  );
};

export default Button;

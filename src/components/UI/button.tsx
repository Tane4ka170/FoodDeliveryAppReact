import React from "react";

const Button: React.FC<{ children?: any; color: string }> = (props) => {
  const colorScheme = props.color;
  return (
    <React.Fragment>
      <button
        style={{
          backgroundColor: "rosybrown",
          padding: 12,
          border: `1px solid ${colorScheme}`,
          borderRadius: 10,
          color: `${colorScheme}`,
          margin: 5,
        }}
      >
        Look what you made me do
      </button>
    </React.Fragment>
  );
};

export default Button;

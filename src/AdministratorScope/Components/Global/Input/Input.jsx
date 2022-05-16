import React from "react";
// Style
import Style from "./Input.style";

export default function Input(props) {
  const { name, type, onChange } = props;
  const { placeholder, width } = props;

  return (
    <Style width={width}>
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </Style>
  );
}

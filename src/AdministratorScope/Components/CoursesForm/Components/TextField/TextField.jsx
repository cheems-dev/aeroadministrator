import React from "react";

// Styles
import Styles from "./TextField.styles";

const TextField = (props) => {
  const { register, rows, required } = props;
  const { label = "label", width, height } = props;
  const { type = "text", placeholder = "..." } = props;
  const { hideLabel = false, className } = props;

  return (
    <Styles
      className={`TextField ${className}`}
      width={width}
      height={height}
      hideLabel={hideLabel}
    >
      <label htmlFor={label} className="TextField__label">
        {label}
      </label>
      <textarea
        {...register(label, { required: required })}
        type={type}
        name={label}
        id={label}
        className="TextField__input"
        placeholder={placeholder}
        rows={rows}
      />
    </Styles>
  );
};

export default TextField;

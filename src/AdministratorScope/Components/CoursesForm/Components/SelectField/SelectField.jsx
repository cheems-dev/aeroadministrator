import React from "react";

// Helpers
import { options } from "./SelectField.helper";
// Styles
import Styles from "./SelectField.styles";

const SelectField = (props) => {
  const { register, required, widthContainer } = props;
  const { label = "label", width = "40%", height } = props;
  const { placeholder = "...", labels } = props;
  const { hideLabel = false, className } = props;

  return (
    <Styles
      className={`SelectField ${className}`}
      width={width}
      height={height}
      widthContainer={widthContainer}
      hideLabel={hideLabel}
    >
      {hideLabel ? null : (
        <label htmlFor={label} className="SelectField__label">
          {label}
        </label>
      )}

      <select
        name={label}
        {...register(label, { required: required })}
        className="SelectField__select SelectField__label"
        placeholder={placeholder}
      >
        {labels === undefined
          ? options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))
          : labels?.map(({ option, index }) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
      </select>
    </Styles>
  );
};

export default SelectField;

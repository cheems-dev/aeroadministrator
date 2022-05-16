import React from "react";

// Helpers
import { months, years } from "./DateSelect.helper";
// Styles
import Style from "./DateSelect.styles";

function DateSelect(props) {
  const { className, type } = props;

  const options = type === "Mes" ? months : years;

  return (
    <Style className={`DateSelect ${className}`}>
      <label htmlFor="dateSelect" className="DateSelect__label">
        {type ? type : "Mes"}
      </label>
      <select
        name="dateSelect"
        className="DateSelect__select DateSelect__label"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Style>
  );
}

export default DateSelect;

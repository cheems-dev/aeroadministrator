import React from "react";

// Styles
import Styles from "./IconText.styles";

export default function IconText(props) {
  const { icon, alt, title, amount } = props;

  return (
    <Styles>
      <div className="container__icon">
        <img src={icon} alt={alt} />
      </div>
      <p className="paragraph center">{title}</p>
      <p className="paragraph__number center">{amount}</p>
    </Styles>
  );
}

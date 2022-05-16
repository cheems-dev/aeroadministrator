import React from "react";
// Style
import Style from "./Button.style";

export default function Button(props) {
  const { image, children, type, disabled, className } = props;
  const { onClick, disabledStyle, bgImage, textStyle } = props;
  return (
    <Style bgImage={bgImage}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`button ${className} ${disabledStyle}`}
        type={type}
      >
        {image && <img src={image} alt="" width={24} height={24} />}
        <h2 className={`button__text ${textStyle}`}>{children}</h2>
      </button>
    </Style>
  );
}

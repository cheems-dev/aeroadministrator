import React from "react";
import ImageIcon from "@mui/icons-material/Image";

// Styles
import Styles from "./ImageField.styles";

const ImageField = (props) => {
  const { register, required, className } = props;
  const { label = "label", width, height } = props;
  const { title } = props;

  return (
    <Styles className={`ImageField ${className}`} width={width} height={height}>
      <input
        type="file"
        id={label}
        name={label}
        {...register(label, { required: required })}
        accept="image/png, image/jpeg, image/jpg"
        className="ImageField__input"
      />
      <ImageIcon />
      <h2 className="ImageField__text">{title ? title : "Logo del curso"}</h2>
    </Styles>
  );
};

export default ImageField;

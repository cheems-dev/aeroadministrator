import React, { useState } from "react";
import { Button } from "@mui/material";

//Styles
import Styles from "./GradientBanner.styles";

export default function GradientBanner(props) {
  const { src, handleOpen, title, paragraph } = props;

  const [tnc, setTnc] = useState(false);

  const handleChange = (event) => {
    setTnc(event.target.checked);
  };

  return (
    <Styles>
      <div className="container">
        <img src={src} alt="logo" className="image" />
        <div>
          <p className="title">{title}</p>
          <p className="paragraph">{paragraph}</p>
        </div>
      </div>
      <div className="container__two">
        <form>
          <div className="input">
            <input
              type="checkbox"
              name="status"
              value={true}
              onChange={handleChange}
            />{" "}
            Acepto los términos y condiciones
          </div>
        </form>
        <p className="paragraphTwo">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore rerum
          corrupti quos aliquid sapiente commodi sequi. Ipsam, consequuntur
          beatae impedit illum voluptates sunt, dicta veritatis repellat
          molestiae ullam. Laudantium.
        </p>
      </div>
      <div className="container__buttons">
        <Button
          className="button button--animated"
          disabled={!tnc}
          onClick={handleOpen}
        >
          Continuar
        </Button>
      </div>
    </Styles>
  );
}

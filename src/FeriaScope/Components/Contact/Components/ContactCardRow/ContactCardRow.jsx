import React from "react";
import { Button } from "@mui/material";

// Styles
import Styles from "./ContactCardRow.styles";

export default function ContactCardRow(props) {
  const { isTransparent, title, paragraph, image } = props;

  return (
    <Styles isTransparent={isTransparent} src={image}>
      <div className="container">
        <div className="image">
          <div className="image__container">
            <p className="image__title"> Eva Klobuznik</p>
            <p className="image__paragraph"> OMA Corporation</p>
          </div>
          <div className="image__img" />
        </div>

        <div className="content">
          <h1 className="titleCard">{title}</h1>
          <p className="paragraphCard ">{paragraph}</p>
          <Button className="button__language " variant="text">
            Idioma
          </Button>
          <div className="container__button">
            <Button className="button button__register">Contactar</Button>
            <Button className="button button__contact">Iniciar ahora</Button>
          </div>
        </div>
      </div>
    </Styles>
  );
}

import React from "react";
import { Button } from "@mui/material";

// Components
import Input from "../Input/Input";
// Styles
import Styles from "./Form.styles";

export default function Form() {
  return (
    <Styles>
      <div className="container__form">
        <h1 className="title">Necesitas ayuda ?</h1>
        <p className="paragraph">
          Uno de nuestro asesores se pondrá en contacto contigo
        </p>
      </div>
      <div className="form">
        <form className="container">
          <div>
            <div className="input">
              <Input type="text" name="country" placeholder="PAIS" />
            </div>
            <div className="input">
              <Input type="text" name="name" placeholder="Nombres" />
            </div>
            <div className="input">
              <Input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input">
              <Input type="text" name="phone" placeholder="Teléfono (WSP)" />
            </div>
          </div>
          <div className="container__mobile">
            <textarea
              type="text"
              name="message"
              className="textField"
              rows="6"
              cols="40"
              placeholder="Mensaje"
            />
            <div className="container__button">
              <Button className="button button__register">Contactenme</Button>
              <Button className="button button__contact">Iniciar ahora</Button>
            </div>
          </div>
        </form>
      </div>
    </Styles>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Global/Button/Button";

// Components
import TextField from "../../Components/TextField/TextField";

// Styles
import Styles from "./SectionFor.styles";

const FaqComponent = (register, onChange, index) => {
  if (index >= 6) return;
  return (
    <div className="SectionFor__container" key={index}>
      <TextField
        register={register}
        required={true}
        onChange={onChange}
        label={`Pregunta ${index}`}
        placeholder={`Pregunta ${index}`}
        className="SectionFor__textField"
      />
      <TextField
        register={register}
        required={true}
        onChange={onChange}
        label={`Respuesta ${index}`}
        placeholder={`Respuesta ${index}`}
        height="96px"
        rows="5"
        className="SectionFor__textField"
      />
    </div>
  );
};

const SectionFor = () => {
  const [faqs, setFaqs] = useState(1);
  const { register, handleSubmit } = useForm();
  const {
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  const handleChange = () => {};

  return (
    <Styles className="SectionFor">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="SectionFor__title">Preguntas frecuentes</h2>
        {[...Array(faqs)].map((e, index) =>
          FaqComponent(register, handleChange, index + 1)
        )}
        <div className="SectionFor__buttonContainer">
          <Button
            className="SectionFor__button"
            type="button"
            onClick={() => setFaqs(faqs + 1)}
          >
            Añadir atributo
          </Button>
          <Button className="SectionFor__button" type="submit">
            Guardar
          </Button>
        </div>
      </form>
    </Styles>
  );
};

export default SectionFor;

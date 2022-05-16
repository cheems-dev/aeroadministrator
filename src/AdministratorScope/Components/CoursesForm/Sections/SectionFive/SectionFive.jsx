import React from "react";
import { useForm } from "react-hook-form";

// Components
import ImageField from "../../Components/ImageField/ImageField";
import TextField from "../../Components/TextField/TextField";
import Button from "../../../Global/Button/Button";

// Styles
import Styles from "./SectionFive.styles";

const SectionFive = () => {
  const { register, handleSubmit } = useForm();
  const {
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Styles className="SectionFive">
      <h2 className="SectionFive__title">
        ¿En que se diferencia nuestro certificado?
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="SectionFive__form">
        <div className="SectionFive__content">
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Título"
            placeholder="Título"
          />
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Descripción"
            placeholder="Descripción"
            height="200px"
            rows="5"
          />
          <TextField
            register={register}
            required={false}
            onChange={() => {}}
            label="Url de video"
            placeholder="Url de video"
          />
          <Button className="SectionFive__button" type="submit">
            Guardar
          </Button>
        </div>
        <div>
          <ImageField
            register={register}
            required={false}
            label="Certificado"
            className="SectionFive__imageField"
          />
          <ImageField
            register={register}
            required={false}
            label="Imagen del card"
            className="SectionFive__imageField"
          />
        </div>
      </form>
    </Styles>
  );
};

export default SectionFive;

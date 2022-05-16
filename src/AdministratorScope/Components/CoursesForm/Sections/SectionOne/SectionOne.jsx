import React from "react";
import { useForm } from "react-hook-form";

// Components
import TextField from "../../Components/TextField/TextField";
import SelectField from "../../Components/SelectField/SelectField";
import ImageField from "../../Components/ImageField/ImageField";
import Button from "../../../Global/Button/Button";
// Styles
import Styles from "./SectionOne.styles";

const SectionOne = () => {
  const { register, handleSubmit } = useForm();
  const {
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Styles className="SectionOne">
      <h2 className="SectionOne__title">Qué vas a crear</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="SectionOne__form">
        <div className="SectionOne__content">
          <SelectField
            register={register}
            required={true}
            label="Categoría"
            placeholder="Categoría"
          />
          <SelectField
            register={register}
            required={true}
            label="Tipo"
            placeholder="Tipo"
          />
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Nombre del curso"
            placeholder="Nombre del curso"
          />
          <TextField
            register={register}
            required={true}
            onChange={() => {}}
            label="Descrip. corta TO CARD"
            placeholder="Descrip. corta TO CARD"
            height="100px"
            rows="5"
          />
          <SelectField
            register={register}
            required={true}
            label="A cargo de"
            placeholder="A cargo de"
          />
          <Button className="SectionOne__button" type="submit">
            Guardar
          </Button>
        </div>
        <ImageField
          register={register}
          required={false}
          label="Logo del curso"
          className="SectionOne__imageField"
        />
      </form>
    </Styles>
  );
};

export default SectionOne;

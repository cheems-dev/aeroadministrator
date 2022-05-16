import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

// Components
import ImageField from "../../../../CoursesForm/Components/ImageField/ImageField";
import SelectField from "../../../../CoursesForm/Components/SelectField/SelectField";
import TextField from "../../../../CoursesForm/Components/TextField/TextField";
// Styles
import Styles from "./ArticlesForm.styles";

export default function ArticlesForm() {
  const { register, handleSubmit } = useForm();

  const {
    formState: { errors },
  } = useForm();

  /* TODO: Use endpoint 'createLiveStream' in onSubmit*/
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    /* TODO: Pendiente hacer uso del endpoint POST y terminar la parte logica */
    <Styles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register}
          required={true}
          label="Título"
          placeholder="Título"
        />

        <TextField
          register={register}
          required={true}
          label="Descripción"
          placeholder="Descripción"
          height="100px"
          rows="5"
        />

        <SelectField
          register={register}
          required={true}
          label="Categoria"
          placeholder="Categoria"
        />

        <SelectField
          register={register}
          required={true}
          label="Autor"
          placeholder="Autor"
        />

        <ImageField
          register={register}
          required={false}
          label="Imagen de artículo"
          width="100%"
          height="320px"
          title="Subir imagen"
        />

        <div className="containerButtons">
          <Button>Borrar</Button>
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Styles>
  );
}

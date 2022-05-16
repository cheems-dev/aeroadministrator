import * as Yup from "yup";

export const initialValues = { email: "", password: "" };

export const handleFieldError = Yup.object().shape({
  password: Yup.string()
    .min(6, "Contraseña demasiado corta")
    .max(20, "Contraseña demasiado larga")
    .required("Contraseña requerida"),
  email: Yup.string().email("Email incorrecto").required("Email requerido"),
});

import React from "react";
import { withFormik } from "formik";

import * as Yup from "yup";

// import { Container } from './styles';

const Singup = ({ handlerSubmit, errors, handlerChange, values }) => (
  <form onSubmit={handlerSubmit}>
    <input
      type="email"
      name="email"
      onChange={handlerChange}
      values={values.name}
    />
    <input
      type="password"
      name="password"
      onChange={handlerChange}
      values={values.email}
    />
    <input
      type="password_confirm"
      name="password_confirm"
      onChange={handlerChange}
      values={values.password_confirm}
    />

    <button type="submit">Enviar</button>
  </form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    password: "",
    password_confirm: ""
  }),

  validateOnChange: false,
  validateOnBlur: false,

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Campo Obrigatório"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("Campo Obrigatório"),
    password: Yup.string().required("Campor obrigatório"),
    password_confirm: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .required("Campo obrigatório")
  }),

  handlerSubmit: values => {
    // Call Api
    console.log(values);
  }
})(Singup);

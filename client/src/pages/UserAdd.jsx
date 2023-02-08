import React, { useState } from "react";
import {
  Formulario,
  ContenedorBotonCentrado,
  MensajeExito,
  MensajeError,
} from "../styles/Formularios";
import Input from "../components/formularios/ComponenteInput";
import expresiones from "../utils/expresionesRegulares";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "@mui/material/Button";
import { serviceCreate } from "../services/taskApi";

export default function UserAdd() {
  const [firstName, setFirstName] = useState({ campo: "", valido: null });
  const [lastName, setlastName] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword1] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [formularioValido, setFormularioValido] = useState(null);
  const [creacionExitosa, setcreacionExitosa] = useState(null);

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (
      firstName.valido === "true" &&
      lastName.valido === "true" &&
      email.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true"
    ) {
      setFormularioValido(true);
      try {
        const response = await serviceCreate(
          firstName.campo,
          lastName.campo,
          email.campo,
          password.campo
        );
        setcreacionExitosa(response.data.status);
      } catch (error) {
        console.log(error);
      }


      setFirstName({ campo: "", valido: null });
      setlastName({ campo: "", valido: null });
      setEmail({ campo: "", valido: null });
      setPassword1({ campo: "", valido: null });
      setPassword2({ campo: "", valido: null });
    } else {
      setFormularioValido(false);
    }
  };

  return (
    <div className="userAddContainer">
      <Formulario onSubmit={handleOnSubmit}>
        <div className="userAddTitle">
          <h1>Register</h1>
          <p>Create your account. It's free and only takes a minute.</p>
        </div>
        <Input
          estado={firstName}
          cambiarEstado={setFirstName}
          label="First Name"
          tipo="text"
          name="firstName"
          placeholder="firstName"
          leyendaError="The name cannot contain numbers and special characters."
          expRegular={expresiones.nombre}
        />

        <Input
          estado={lastName}
          cambiarEstado={setlastName}
          label="Last Name"
          tipo="text"
          name="lastName"
          placeholder="lastName"
          leyendaError="The name cannot contain numbers and special characters."
          expRegular={expresiones.nombre}
        />

        <Input
          estado={email}
          cambiarEstado={setEmail}
          label="Email"
          tipo="email"
          name="email"
          placeholder="Email"
          leyendaError="Formato de correo invalido."
          expRegular={expresiones.correo}
        />

        <Input
          estado={password}
          cambiarEstado={setPassword1}
          label="Password"
          tipo="password"
          name="password"
          placeholder="Password"
          leyendaError="Formato de contraseña incorrecta."
          expRegular={expresiones.password}
        />

        <Input
          estado={password2}
          cambiarEstado={setPassword2}
          label="Confirmar Password"
          tipo="password"
          name="ConfirmarPassword"
          placeholder="Confirmar Password"
          leyendaError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
        />

        {formularioValido === false && (
          <MensajeError>
            <p>
              <ErrorOutlineIcon />
              <b>Error:</b> Rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}

        <ContenedorBotonCentrado>
          <Button type="Submit" variant="contained">
            Enviar
          </Button>

          {formularioValido === true && creacionExitosa === 200 && (
            <MensajeExito>El formulario se envio exitosamente</MensajeExito>
          )}

          {/*formularioValido === true && creacionExitosa === null && (
            <MensajeError>
              <p>
                <ErrorOutlineIcon />
                <b>Error:</b> Existe un registro con el email digitado.
              </p>
            </MensajeError>
          )*/}
        </ContenedorBotonCentrado>
      </Formulario>
    </div>
  );
}

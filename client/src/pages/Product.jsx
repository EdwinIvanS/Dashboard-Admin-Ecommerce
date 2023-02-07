import React, { useState } from "react";
import {
  Formulario,
  ContenedorBotonCentrado,
  MensajeExito,
  MensajeError,
} from "../styles/Formularios";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "@mui/material/Button";
import Input from "../components/formularios/ComponenteInput";

export default function Product() {
  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const [usuario, setUsuario] = useState({ campo: "", valido: null });
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [password1, setPassword1] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [formularioValido, setFormularioValido] = useState(null);

  const validarPassword2 = () => {
    if (password1.campo.length > 0) {
      if (password1.campo !== password2.campo) {
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      usuario.valido === "true" &&
      nombre.valido === "true" &&
      correo.valido === "true" &&
      password1.valido==="true" &&
      password2.valido === "true") {

        setFormularioValido(true);
        setUsuario({ campo: "", valido : null});
        setNombre({ campo: "", valido: null });
        setCorreo({ campo: "", valido: null });
        setPassword1({ campo: "", valido: null });
        setPassword2({ campo: "", valido: null });

    }else {
        setFormularioValido(false);
    }
  };

  return (
    <div className="addProductContainer">
      <Formulario onSubmit={handleOnSubmit}>
        <Input
          estado={usuario}
          cambiarEstado={setUsuario}
          label="Usuario"
          tipo="text"
          name="usuario"
          placeholder="Usuario"
          leyendaError="El Usuario tiene que ser de 4 a 16 digitos."
          expRegular={expresiones.usuario}
        />

        <Input
          estado={nombre}
          cambiarEstado={setNombre}
          label="Nombre"
          tipo="text"
          name="nombre"
          placeholder="nombre"
          leyendaError="El nombre no puede contener numeros y caracteres especiales."
          expRegular={expresiones.nombre}
        />

        <Input
          estado={correo}
          cambiarEstado={setCorreo}
          label="Correo"
          tipo="email"
          name="correo"
          placeholder="correo"
          leyendaError="Formato de correo invalido."
          expRegular={expresiones.correo}
        />

        <Input
          estado={password1}
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
          <Button variant="outlined">Cancelar</Button>
          <Button type="Submit" variant="contained">
            Enviar
          </Button>
          {formularioValido && (
            <MensajeExito>El formulario se envio exitosamente</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </div>
  );
}

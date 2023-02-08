import styled, { css } from "styled-components";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
  mensajeExitoso : "#ABEBC6",
  bordeInicial: "rgba(163, 163, 163, 0.4)",
};

const Formulario = styled.form`
  -webkit-box-shadow: 0px 0px 18px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -10px rgba(0, 0, 0, 0.75);
  padding: 15px 60px 30px;
`;

const Label = styled.label`
  display: block;
  min-height: 35px;
  text-align-last: left;
  color: rgb(85, 84, 84);
  font-weight: bold;
  padding-top: 10px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 40px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.2s ease all;
  border: 1px solid ${colores.bordeInicial};

  &:focus {
    border: 2px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) => props.valido === "true" && css`
      display: none;
    `}

  ${(props) => props.valido === "false" && css`
      display: block;
    `}
`;

const IconoValidacion = styled(DoneAllIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) => props.valido === "false" && css`
      opacity: 1;
      color: ${colores.error};
    `}

  ${(props) => props.valido === "true" && css`
      opacity: 1;
      color: ${colores.exito};
    `}
`;

const IconoValidacionError = styled(RemoveDoneIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}

  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const MensajeExito = styled.p`
  height: 45px;
  line-height: 45px;
  background: ${colores.mensajeExitoso};
  padding: 0px 15px;
  border-radius: 3px;
  margin-top: 5px;
  width: 100%;
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  margin-top: 5px;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorBotonCentrado,
  MensajeExito,
  MensajeError,
  IconoValidacionError,
};
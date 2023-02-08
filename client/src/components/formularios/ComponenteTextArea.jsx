import React from 'react'
import {
  Label,
  TextArea,
  LeyendaError,
  GrupoTextArea,
  IconoValidacion
} from "../../styles/Formularios.js";

export default function ComponenteTextArea({
  estado,
  cambiarEstado,
  label,
  tipo,
  name,
  placeholder,
  leyendaError,
  expRegular,
  rows,
  cols,
}) {
  const handleOnChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expRegular) {
      if (expRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };

  return (
    <GrupoTextArea>
      <Label valido={estado.valido}>{label}</Label>
      <TextArea
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        type={tipo}
        value={estado.campo}
        onChange={handleOnChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={estado.valido}
      />
      {estado.valido === "true" && (
        <IconoValidacion valido={estado.valido} />
      )}

      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </GrupoTextArea>
  );
}

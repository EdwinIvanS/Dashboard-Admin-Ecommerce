import React from "react";

import {
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  IconoValidacionError
} from "../../styles/Formularios";

export default function ComponenteInput({
  estado,
  cambiarEstado,
  label,
  tipo,
  name,
  placeholder,
  leyendaError,
  expRegular,
  funcion
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

    if(funcion){
      funcion()
    }
  };

  return (
    <div>
      <Label valido={estado.valido}>{label}</Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          name={name}
          value={estado.campo}
          onChange={handleOnChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />

        {estado.valido === "true" ? (
          <IconoValidacion valido={estado.valido} />
        ) : (
          <IconoValidacionError valido={estado.valido} />
        )}

      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
}

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
import TextArea from "../components/formularios/ComponenteTextArea"
import expresiones from "../utils/expresionesRegulares";
import SendIcon from "@mui/icons-material/Send";

export default function AddProduct() {
  
  const [articulo, setArticulo] = useState({ campo: "", valido: null });
  const [precio, setPrecio] = useState({ campo: "", valido: null });
  const [smallDescription, setSmallDescription] = useState({ campo: "", valido: null });
  const [detailedDescription, setDetailedDescription] = useState({ campo: "", valido: null });
  const [images, setImages] = useState({ campo: "", valido: null });
  const [video, setVideo] = useState({ campo: "", valido: null });
  const [cantidad, setCantidad] = useState({ campo: "", valido: null });
  const [colores, setColores] = useState({ campo: "", valido: null });
  const [tamaño, setTamaño] = useState({ campo: "", valido: null });
  const [clasificación, setClasificación] = useState({campo: "",valido: null,});
  const [formularioValido, setFormularioValido] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(articulo === 'true' && precio === 'true' && smallDescription === 'true' &&  detailedDescription === 'true' && 
    images === 'true' && video === 'true' && cantidad === 'true' && colores === 'true' && tamaño === 'true' && clasificación === 'true'
    ){
      setFormularioValido(true);

      try {
        console.log("error");
      } catch (error) {
        console.log(error);
      }

      setArticulo({ campo: "", valido: null });
      setPrecio({ campo: "", valido: null });
      setSmallDescription({ campo: "", valido: null });
      setDetailedDescription({ campo: "", valido: null });
      setImages({ campo: "", valido: null });
      setVideo({ campo: "", valido: null });
      setCantidad({ campo: "", valido: null });
      setColores({ campo: "", valido: null });
      setTamaño({ campo: "", valido: null });
      setClasificación({ campo: "", valido: null });

    }
    else{
      setFormularioValido(false);
    }
  }

  return (
    <div className="addProductContainer">
      <Formulario onSubmit={handleOnSubmit}>
        <Input
          estado={articulo}
          cambiarEstado={setArticulo}
          label="Articulo"
          tipo="text"
          name="articulo"
          placeholder="Ej. Carrete Okuma Alaris"
          leyendaError="El campo debe estar diligenciado de forma correcta."
          expRegular={expresiones.nombreArea}
        />

        <Input
          estado={precio}
          cambiarEstado={setPrecio}
          label="Precio"
          tipo="number"
          name="precio"
          placeholder="Ej. 100.000"
          leyendaError="El campo no puede estar vacio."
          expRegular={expresiones.precio}
        />

        <TextArea
          estado={smallDescription}
          cambiarEstado={setSmallDescription}
          label="Breve descripción del producto:"
          tipo="text"
          name="smallDescription"
          placeholder="Contenido..."
          leyendaError="El campo debe estar diligenciado de forma correcta."
          rows={2}
          cols={50}
          expRegular={expresiones.nombreArea}
        />

        <TextArea
          estado={detailedDescription}
          cambiarEstado={setDetailedDescription}
          label="Descripción detallada del producto:"
          tipo="text"
          name="detailedDescription"
          placeholder="Contenido..."
          leyendaError="El campo no puede estar vacio."
          rows={4}
          cols={50}
          expRegular={expresiones.nombreArea}
        />

        <Input
          estado={images}
          cambiarEstado={setImages}
          label="Imágenes del Producto:"
          tipo="file"
          name="images"
          //placeholder="Contenido..."
          leyendaError="Debes cargar las imagenes"
          //expRegular={expresiones.nombre}
        />

        <Input
          estado={video}
          cambiarEstado={setVideo}
          label="Link video descriptivo:"
          tipo="url"
          name="images"
          placeholder="Ej. https://www.youtube.com/embed/QeRVtNfF864"
          leyendaError="Debes ingresar un link "
          expRegular={expresiones.url}
        />

        <Input
          estado={cantidad}
          cambiarEstado={setCantidad}
          label="Cantidad disponible:"
          tipo="number"
          name="units"
          placeholder="Ej. 10"
          leyendaError="Debes seleccionar un registro"
          expRegular={expresiones.numero}
        />

        <Input
          estado={colores}
          cambiarEstado={setColores}
          label="Colores Disponibles:"
          tipo="text"
          name="units"
          placeholder="Ej. rojo, verde, azul"
          leyendaError="Debes seleccionar un registro"
          expRegular={expresiones.cadena}
        />
        <Input
          estado={tamaño}
          cambiarEstado={setTamaño}
          label="Tamaños Disponibles:"
          tipo="text"
          name="size"
          placeholder="Ej. 1000, 150cm, 15gr, único"
          leyendaError="Debes seleccionar un registro"
          expRegular={expresiones.cadena}
        />

        <Input
          estado={clasificación}
          cambiarEstado={setClasificación}
          label="Clasificación:"
          tipo="text"
          name="size"
          placeholder="Clasificacion"
          leyendaError="Debes seleccionar un registro"
          expRegular={expresiones.nombre}
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
          <Button type="Submit" variant="contained" startIcon={<SendIcon />}>
            Enviar
          </Button>
          {formularioValido === true && (
            <MensajeExito>El formulario se envio exitosamente</MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </div>
  );
}

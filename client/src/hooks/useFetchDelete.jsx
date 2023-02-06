import { useEffect, useState } from "react";
import { serviceDeleteUser } from "../services/taskApi";

export const useFetchDelete = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    serviceDeleteUser().then((resultado) => {
      let array = [];
      console.log(resultado);
      setValue(array);
    });
  }, []);

  return { value };
};

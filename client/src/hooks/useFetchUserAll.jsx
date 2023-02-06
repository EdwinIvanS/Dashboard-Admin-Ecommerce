import { useState } from "react";
import { serviceAllUsers } from "../services/taskApi";

export const useFetchUserAll = () => {

  const [rows, setRows] = useState([]);

  const methodGet = () => {
    try {
      serviceAllUsers().then((resultado) => {
        let array = [];
        console.log(resultado);
        resultado.users?.forEach((e) => {
          let consulta = {
            id: e._id,
            firstName: e.firstName,
            lastName: e.lastName,
            email: e.email,
          };
          array.push(consulta);
        });
        setRows(array);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { rows, setRows, methodGet};
};

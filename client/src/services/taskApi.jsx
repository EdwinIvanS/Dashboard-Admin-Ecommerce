import axios from "axios";

export const serviceCreate = async (firstName, lastName, email, password) => {
  return axios.post("http://localhost:3001/api/user", {
    method: "post",
    headers: {
      Accept: "application/JSON",
      "Content-Type": "application/json",
    },
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
};

export const serviceAllUsers = async () => {
  return await fetch(`http://localhost:3001/api/users`)
  .then((consulta) => consulta.json());
};

export const servicesUpdateUser = async (id, firstName, lastName, email, password) => {
  return axios.put(`http://localhost:3001/api/user/${id}`, {
    method: "put",
    headers: {
      Accept: "application/JSON",
      "Content-Type": "application/json",
    },
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });  
}

export const serviceDeleteUser = async (id) => {
  return await axios.delete(`http://localhost:3001/api/user/${id}`);
}
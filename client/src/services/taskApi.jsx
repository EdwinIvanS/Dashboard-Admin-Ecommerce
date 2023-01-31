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

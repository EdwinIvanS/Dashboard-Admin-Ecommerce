import {
  TextField,
  Box,
  Stack,
  Button,
  Card,
  Alert
} from "@mui/material";
import React, { useState } from "react";
import { serviceCreate } from "../services/taskApi";

export default function UserAdd() {
  const [firstName, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState(false);

  const [msnErrorName, setMsnErrorName] = useState('');
  const[msnErrorLastName, setMsnErrorLastName] = useState("");
  const [msnErrorEmail, setMsnErrorEmail] = useState("");
  const [msnErrorPassword, setMsnErrorPassword] = useState("");
  const [msnErrorPasswordC, setMsnErrorPasswordC] = useState("");

  const [alert, setAlert] = useState(false);

  const handleOnSubmit = async (e) => {      
    if (firstName === "") {
      setErrorName(true);
      setMsnErrorName("Campo obligatorio");
    } else {
      setErrorName(false);
      setMsnErrorName("");
    }

    if (lastName === "") {
      setErrorLastName(true);
      setMsnErrorLastName("Campo obligatorio");
    } else {
      setErrorLastName(false);
      setMsnErrorLastName("");
    }

    if (email === "") {
      setErrorEmail(true);
      setMsnErrorEmail("Campo obligatorio");
    } else {
      setErrorEmail(false);
      setMsnErrorEmail("");
    }

    if (password === "") {
      setErrorPassword(true);
      setMsnErrorPassword("Campo obligatorio");
    } else {
      setErrorPassword(false);
      setMsnErrorPassword("");
    }

    if (passwordConfirm === "") {
      setErrorPasswordConfirm(true);
      setMsnErrorPasswordC("Campo obligatorio");
    } else {
      if (passwordConfirm !== password) {
        setErrorPasswordConfirm(true);
        setMsnErrorPasswordC("No coincide el password");
      } else {
        setErrorPasswordConfirm(false);
        setMsnErrorPasswordC("");
      }
    }

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      passwordConfirm !== "" &&
      passwordConfirm === password
    ){
      try {
        setAlert(true);
        await serviceCreate(firstName, lastName, email, password);
        
      } catch (error) {
        console.log(error);
      } 
    }
    else{
      e.preventDefault();
    }
      
  };

  return (
    <div className="userAddContainer">
      <Card className="userAddCard">
        <div className="userAddTitle">
          <h1>Register</h1>
          <p>Create your account. It's free and only takes a minute.</p>
        </div>
        <form onSubmit={handleOnSubmit}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "26ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              error={errorName}
              id="outlined-required"
              label="First Name"
              onChange={(e) => setName(e.target.value)}
              helperText={msnErrorName}
            />
            <TextField
              required
              error={errorLastName}
              id="outlined-required"
              label="Last Name"
              onChange={(e) => setlastName(e.target.value)}
              helperText={msnErrorLastName}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "54ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              error={errorEmail}
              id="outlined-required"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              helperText={msnErrorEmail}
            />

            <TextField
              required
              error={errorPassword}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              helperText={msnErrorPassword}
            />

            <TextField
              required
              error={errorPasswordConfirm}
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              helperText={msnErrorPasswordC}
            />
          </Box>
          <Stack className="conteainedButton" direction="row" spacing={0}>
            <Button type="submit" variant="contained" size="large">
              Crear
            </Button>
          </Stack>
        </form>
      </Card>
      {alert && (
        <Alert onClose={() => {}}>
          Register success!
        </Alert>
      )}
    </div>
  );
}

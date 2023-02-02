import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import { serviceCreate } from "../services/taskApi";

export default function UserAdd() {
  const [validated, setValidated] = useState(false);
  const [firstName, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registro, setRegistro] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
    else{
      if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        password !== "" &&
        passwordConfirm !== "" &&
        passwordConfirm === password
      ) {
        try {
          setError(false);
          setRegistro(true);
          const response = await serviceCreate(
            firstName,
            lastName,
            email,
            password
          );
            
          console.log(await response.code);
          event.preventDefault();
        } catch (error) {
          event.preventDefault();
          console.log(error);
        }
      } else {
        event.preventDefault();
        setRegistro(false);
        setError(true);
      }
    }   
  };

  return (
    <div className="userAddContainer">
      <Form
        className="addUserForm"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div className="userAddTitle">
          <h1>Register</h1>
          <p>Create your account. It's free and only takes a minute.</p>
        </div>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="firstName"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lastName"
            onChange={(e) => setlastName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom05">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="passwordConfirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Second Password.
          </Form.Control.Feedback>
        </Form.Group>

        {registro && (
          <Alert key={"success"} variant={"success"}>
            Successful registration
          </Alert>
        )}

        {error && (
          <Alert key={"danger"} variant={"danger"}>
            Password does not match
          </Alert>
        )}

        <Button type="submit">Crear Registro</Button>
      </Form>
    </div>
  );
}

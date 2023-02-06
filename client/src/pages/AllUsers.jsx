import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Container } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import {
  serviceDeleteUser,
  serviceAllUsers,
  servicesUpdateUser
} from "../services/taskApi";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function AllUsers() {
  const [rows, setRows] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            password: e.password,
          };
          array.push(consulta);
        });
        setRows(array);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    methodGet();
  }, [modalDelete, modalUpdate]);

  const handleOnclickDelete = (id) => {
    setId(id);
    setModalDelete(true);
  };

  const handleClose = () => {
    setModalDelete(false);
    setModalUpdate(false);
  };

  const handleDelete = (e) => {
    try {
      serviceDeleteUser(id).then((resultado) => {
        console.log(resultado);
      });
      setModalDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (row) => {
    setId(row.id);
    setFistName(row.firstName);
    setLastName(row.lastName);
    setEmail(row.email);
    setPassword(row.password);
    setModalUpdate(true);
  };

  const handleSubmitUpdate = ( ) => {
    try {
      servicesUpdateUser(id, firstName, lastName, email, password).then(
        (response) => {
          console.log(response);
        }
      );
      setModalUpdate(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="allUsersContainer">
      <Container>
        <Table>
          <thead>
            <tr>
              <th>ID_Creation</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th className="d-none">Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td className="d-none">{row.password}</td>
                <td>
                  <Button
                    className="btn-delete"
                    variant="contained"
                    color="info"
                    startIcon={<DeleteIcon />}
                    type="submit"
                    onClick={() => handleOnclickDelete(row.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn-Update"
                    variant="contained"
                    color="success"
                    type="submit"
                    endIcon={<SystemUpdateAltIcon />}
                    onClick={() =>
                      handleUpdate({
                        id: row.id,
                        firstName: row.firstName,
                        lastName: row.lastName,
                        email: row.email,
                        password: row.password,
                      })
                    }
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {modalDelete && (
        <Modal show={modalDelete}>
          <Modal.Body>
            ¿Estas seguro que deseas eliminar el Registro?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="contained" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {modalUpdate && (
        <Modal show={modalUpdate}>
          <Modal.Body>
            <div>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  disabled
                  required
                  type="text"
                  name="id"
                  value={id}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFistName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="validationCustom05">
                <Form.Label>Change Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  name="passwordConfirm"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="contained" onClick={handleSubmitUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

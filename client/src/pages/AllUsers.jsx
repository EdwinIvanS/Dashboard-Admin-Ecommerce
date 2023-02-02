import React from "react";
import { useFetchUserAll } from "../hooks/useFetchUserAll";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Container } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Button from '@mui/material/Button'

export default function AllUsers() {
  const { rows } = useFetchUserAll();
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>
                  <Button
                    className="btn-delete"
                    variant="contained"
                    color="info"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn-Update"
                    variant="contained"
                    color="success"
                    endIcon={<SystemUpdateAltIcon />}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

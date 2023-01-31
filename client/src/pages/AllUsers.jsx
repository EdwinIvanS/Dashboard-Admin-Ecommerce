import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useFetchUserAll  } from "../hooks/useFetchUserAll";

export default function AllUsers() {

  const { rows } = useFetchUserAll();

  const columns = [
    { field: "id", headerName: "ID_Creation", width: 250 },
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "action", headerName: "Action", width: 160 },
  ];

  return (
    <div className="allUsersContainer">
      <div style={{ height: 423, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={16}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

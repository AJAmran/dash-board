import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import TableData from "../../components/tableData/TableData";
import "./user.scss";
import { userRows } from "../../utils/data/Data";
import { useState } from "react";
import AddModal from "../../components/addModal/AddModal";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="avatar" />;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="user">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <TableData slug="users" columns={columns} rows={userRows} />
      {open && <AddModal slug="user" columns ={columns} setOpen={setOpen}/>}
    </div>
  );
};

export default Users;

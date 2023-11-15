import { Link } from "react-router-dom";
import "./tableData.scss";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from "@mui/x-data-grid";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const TableData = (props: Props) => {
  const handleDelte = (id: number) => {
    //api call
    console.log(`${id} is deleted`);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    editable: false,
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="viewImage" />
          </Link>
          <div className="delete" onClick={() => handleDelte(params.row.id)}>
            <img src="/delete.svg" alt="deleteImage" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="tableData">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default TableData;

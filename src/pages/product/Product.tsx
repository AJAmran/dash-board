import { useState } from "react";
import "./product.scss";
import TableData from "../../components/tableData/TableData";
import AddModal from "../../components/addModal/AddModal";
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Product = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("https://admin-dash-board-server.vercel.app/api/products").then(
        (res) => res.json()
      ),
  });
  return (
    <div className="product">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <TableData slug="product" columns={columns} rows={data} />
      )}
      {open && <AddModal slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Product;

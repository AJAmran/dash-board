import { GridColDef } from "@mui/x-data-grid";
import "./addModal.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddModal = (props: Props) => {
  const handleColse = () => {
    props.setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //todo add new item
    //todo axios.post(`/api/${slug}s`)
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => handleColse()}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "image")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddModal;

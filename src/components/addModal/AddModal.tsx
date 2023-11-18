import { GridColDef } from "@mui/x-data-grid";
import "./addModal.scss";
import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddModal = (props: Props) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const handleColse = () => {
    props.setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(
        `https://admin-dash-board-server.vercel.app/api/${props.slug}`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 111,
            img: "",
            lastName: "hello",
            firstName: "Test",
            email: "amran@gamil.com",
            phone: "01888888",
            createdAt: "02-80-2026",
            verified: true,
          }),
        }
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [`all${props.slug}`],
        refetchType: "active",
      });
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
    props.setOpen(false);
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
                <input
                  type={column.type}
                  name={column.field}
                  placeholder={column.field}
                  value={formData[column.field] || ""}
                  onChange={handleChange}
                />
              </div>
            ))}
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddModal;

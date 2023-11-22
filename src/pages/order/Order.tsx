import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomModal from '../../components/orderModal/CustomModal';
import './order.scss';

interface Order {
  id: number;
  customerName: string;
  product: string;
  image: string;
  quantity: number;
  total: number;
  status: string;
}

const OrderPage: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const orders: Order[] = [
    { id: 1, customerName: 'John Doe', product: 'Product A', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6m9-djFU2JzngXU_EbECeZSPcEaRW9ciLHChwkpl6&s", quantity: 2,  total: 50, status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', product: 'Product B', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6m9-djFU2JzngXU_EbECeZSPcEaRW9ciLHChwkpl6&s", quantity: 1, total: 30, status: 'Delivered' },
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customerName', headerName: 'Customer Name', width: 200 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'image', headerName: 'Image', width: 120, renderCell: (params) => <img src={params.value} alt="Product" style={{ width: '50px', height: '50px' }} /> },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'total', headerName: 'Total', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <button onClick={() => handleOpenModal(params.row as Order)}>View Details</button>
      ),
    },
  ];

  return (
    <div className="order-container">
      <h2>Your Orders</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={orders}
          columns={columns}
          checkboxSelection
        />
      </div>

      <CustomModal open={isModalOpen} onClose={handleCloseModal} selectedOrder={selectedOrder} />
    </div>
  );
};

export default OrderPage;

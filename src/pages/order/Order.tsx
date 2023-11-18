// OrdersPage.tsx
import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Backdrop, Fade } from '@mui/material';
import './order.scss';

interface Order {
  id: number;
  customerName: string;
  product: string;
  productImage: string;
  quantity: number;
  total: number;
  status: string;
}

const demoOrders: Order[] = [
  { id: 1, customerName: 'John Doe', product: 'Widget A', productImage: 'https://via.placeholder.com/50', quantity: 2, total: 100, status: 'Shipped' },
  { id: 2, customerName: 'Jane Smith', product: 'Widget B', productImage: 'https://via.placeholder.com/50', quantity: 1, total: 50, status: 'Processing' },
  // Add more demo orders as needed
];

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(demoOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleSortBy = (field: keyof Order) => {
    const sortedOrders = [...orders].sort((a, b) => a[field] - b[field]);
    setOrders(sortedOrders);
  };

  const handleFilterByCustomer = (customerName: string) => {
    const filteredOrders = demoOrders.filter(
      (order) => order.customerName.toLowerCase().includes(customerName.toLowerCase())
    );
    setOrders(filteredOrders);
  };

  const resetOrders = () => {
    setOrders(demoOrders);
  };

  return (
    <div className="orders-page">
      <h2>Orders</h2>

      <div className="controls">
        <Button variant="outlined" onClick={() => handleSortBy('customerName')}>
          Sort by Customer
        </Button>
        <input
          type="text"
          placeholder="Filter by Customer"
          onChange={(e) => handleFilterByCustomer(e.target.value)}
        />
        <Button variant="outlined" onClick={resetOrders}>
          Reset Orders
        </Button>
      </div>

      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Product Image</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <img src={order.productImage} alt={`Product ${order.product}`} onClick={() => handleOrderClick(order)} />
                </TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOrderClick(order)}>View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={Boolean(selectedOrder)}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: '#02030476' }, // Modal background color
        }}
      >
        <Fade in={Boolean(selectedOrder)}>
          <div className="order-details-modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h3>Order Details</h3>
              <p>ID: {selectedOrder?.id}</p>
              <p>Customer Name: {selectedOrder?.customerName}</p>
              <p>Product: {selectedOrder?.product}</p>
              <p>
                Product Image:
                <img src={selectedOrder?.productImage} alt={`Product ${selectedOrder?.product}`} />
              </p>
              <p>Quantity: {selectedOrder?.quantity}</p>
              <p>Total: {selectedOrder?.total}</p>
              <p>Status: {selectedOrder?.status}</p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default OrdersPage;

import React from "react";
import "./customModal.scss";

interface Order {
  id: number;
  customerName: string;
  product: string;
  image: string;
  quantity: number;
  total: number;
  status: string;
}

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  selectedOrder: Order | null;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  selectedOrder,
}) => {
  if (!open || !selectedOrder) {
    return null;
  }

  return (
    <div className="custom-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Order Details</h3>
        <p>ID: {selectedOrder.id}</p>
        <p>Customer Name: {selectedOrder.customerName}</p>
        <p>Product: {selectedOrder.product}</p>

        <img
          src={selectedOrder.image}
          alt={`Product ${selectedOrder.product}`}
        />

        <p>Quantity: {selectedOrder.quantity}</p>
        <p>Total: {selectedOrder.total}</p>
        <p>Status: {selectedOrder.status}</p>
      </div>
    </div>
  );
};

export default CustomModal;

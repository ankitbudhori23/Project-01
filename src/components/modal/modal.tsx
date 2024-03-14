import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/ModalSlice";
import { addOrder, updateOrder } from "../../redux/slices/OrderSlice";
import { selectModalState } from "../../redux/slices/ModalSlice";
import Button from "../input/Button";
const ModalComponent = () => {
  const dispatch = useDispatch();
  const { mode, data } = useSelector(selectModalState);
  const [formData, setFormData] = useState({
    id: data ? data.id : generateRandomNumber(),
    customer_name: data ? data.customer_name : "",
    customer_email: data ? data.customer_email : "",
    product: data ? data.product : "",
    quantity: data ? data.quantity : 0,
    order_value: data ? data.order_value : 0,
  });
  function generateRandomNumber() {
    const min = Math.pow(10, 9);
    const max = Math.pow(10, 10) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    if (name === "quantity" || name === "product") {
      const productPrice = getProductPrice(updatedFormData.product);
      const quantity = parseInt(updatedFormData.quantity);
      updatedFormData.order_value = productPrice * quantity;
    }

    setFormData(updatedFormData);
  };

  const getProductPrice = (product) => {
    switch (product) {
      case "Product 1":
        return 29;
      case "Product 2":
        return 49;
      case "Product 3":
        return 149;
      default:
        return 0;
    }
  };

  const handleSubmit = () => {
    const { customer_name, customer_email, product, quantity } = formData;

    if (customer_name.length < 3) {
      alert("Customer name must have at least 3 characters.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(customer_email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (product === "") {
      alert("Please select a product.");
      return;
    }
    if (quantity <= 0 || isNaN(quantity)) {
      alert("Product quantity must be greater than 0.");
      return;
    }

    const newOrderData = {
      ...formData,
      order_value: getProductPrice(product) * quantity,
    };

    // Dispatch action based on mode
    if (mode === "add") {
      dispatch(addOrder(newOrderData));
    } else if (mode === "edit") {
      dispatch(updateOrder(newOrderData));
    }
    handleClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {mode === "add" ? "Add Order" : "Edit Order"}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Customer Name
          </label>
          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Customer Email
          </label>
          <input
            type="email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Order Value
          </label>
          <input
            type="number"
            name="order_value"
            value={formData.order_value}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            disabled
          />
        </div>
        <div className="flex justify-end">
          <Button
            label={mode === "add" ? "Add" : "Save"}
            onClick={handleSubmit}
            color="blue"
          />
          <Button label="Cancel" onClick={handleClose} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;

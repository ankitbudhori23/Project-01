import Button from "../input/Button";

function ProductCard({ item, handleEdit, handleDelete }) {
  return (
    <div key={item.id} className="bg-white shadow-md p-4 rounded-md">
      <div className="text-lg font-bold">Order ID: {item.id}</div>
      <div>Customer Name: {item.customer_name}</div>
      <div>Customer Email: {item.customer_email}</div>
      <div>Product: {item.product}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Order Value: {item.order_value}</div>
      <div className="mt-4 flex justify-end">
        <Button label="Edit" onClick={() => handleEdit(item)} color="blue" />

        <Button
          label="Delete"
          onClick={() => handleDelete(item.id)}
          color="red"
        />
      </div>
    </div>
  );
}

export default ProductCard;

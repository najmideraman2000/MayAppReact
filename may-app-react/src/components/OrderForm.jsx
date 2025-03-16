import { useState } from "react";
import { makeOrder } from "../services/api";

const OrderForm = () => {
  const [product, setProduct] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await makeOrder({ product, phoneNumber });
    alert("Order placed!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make Order</h2>
      <input type="number" placeholder="Product ID" value={product} onChange={(e) => setProduct(e.target.value)} required />
      <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;

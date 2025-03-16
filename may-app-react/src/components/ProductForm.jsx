import { useState } from "react";
import { addProduct } from "../services/api";
import styles from "./ProductForm.module.css"; // Corrected import

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct({ name, description, price: parseFloat(price) });
    alert("Product added!");
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form className={styles["product-form"]} onSubmit={handleSubmit}>
      <h2 className={styles["product-form-title"]}>Add Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles["product-form-input"]}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles["product-form-input"]}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={styles["product-form-input"]}
        required
      />
      <button type="submit" className={styles["product-form-button"]}>
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;

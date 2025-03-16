import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import styles from "./ProductList.module.css"; // Import CSS module

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts(page).then((data) => {
      setProducts(data.content);
      setTotalPages(data.totalPages);
    });
  }, [page]);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id} className={styles.listItem}>
            <span className={styles.productName}>{product.name}</span> - {product.description} - 
            <span className={styles.price}> ${product.price}</span>
          </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button onClick={handlePrevious} disabled={page === 0} className={styles.button}>
          Previous
        </button>
        <span> Page {page + 1} of {totalPages} </span>
        <button onClick={handleNext} disabled={page >= totalPages - 1} className={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;

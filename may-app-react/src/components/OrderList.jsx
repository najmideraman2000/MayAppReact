import { useEffect, useState } from "react";
import { fetchOrders } from "../services/api";
import styles from "./OrderList.module.css"; // Import CSS module

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchOrders(page).then((data) => {
      setOrders(data.content);
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
      <h2 className={styles.title}>Orders</h2>
      <ul className={styles.list}>
        {orders.map((order) => (
          <li key={order.id} className={styles.listItem}>
            <span className={styles.orderId}>Order #{order.id}</span> - 
            Product: <span className={styles.productName}>{order.product.name}</span>, 
            Phone: <span className={styles.phone}>{order.phoneNumber}</span>
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

export default OrderList;

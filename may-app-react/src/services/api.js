const API_URL = "http://localhost:8080";

export const fetchProducts = async (page = 0, size = 10) => {
    const response = await fetch(`${API_URL}/products?page=${page}&size=${size}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
};
  
export const fetchOrders = async (page = 0, size = 10) => {
    const response = await fetch(`${API_URL}/orders?page=${page}&size=${size}`);
    if (!response.ok) throw new Error("Failed to fetch orders");
    return response.json();
};

export const addProduct = async (product) => {
  const response = await fetch(`${API_URL}/add_product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const makeOrder = async (order) => {
  await fetch(`${API_URL}/make_order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
};

import OrderList from "./components/OrderList";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div>
      <h1>Order & Product Management</h1>
      <ProductForm />
      <OrderForm />
      <ProductList />
      <OrderList />
    </div>
  );
}

export default App;

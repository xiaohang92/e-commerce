import Products from "./pages/Products";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<Register to="/Register" />}
        />
        <Route
          path="/login"
          element={<Login to="/Login" />}
        />
        <Route
          path="/cart"
          element={<Cart to="/Cart" />}
        />
        <Route
          path="/productlist"
          element={<ProductList to="/ProductList" />}
        />
        <Route
          path="/products"
          element={<Products to="/Products" />}
        />
      </Routes>
    </BrowserRouter >
  );
};

export default App;
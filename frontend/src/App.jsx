import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import GenresPage from "./pages/GenresPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (book) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === book.id);
      if (exist) {
        // đã có → tăng số lượng
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // chưa có → thêm mới với quantity = 1
        return [...prev, { ...book, quantity: 1 }];
      }
    });
  };
  // Logic xóa sản phẩm
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />

          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
          <Route
            path="/genres/:genreId"
            element={<GenresPage addToCart={addToCart} />}
          />
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

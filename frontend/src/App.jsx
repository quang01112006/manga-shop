import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Detail from "./components/Detail";
import GenresPage from "./pages/GenresPage";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (book) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === book.id);
      if (exist) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <BrowserRouter>
      <Navbar />

      <div className="app-container">
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
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

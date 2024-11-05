// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import MenuItemPage from "./Components/CartItemPage"; // Import MenuItemPage component

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu setCartItems={setCartItems} />} />
          <Route path="/menu/:id" element={<MenuItemPage cartItems={cartItems} setCartItems={setCartItems} />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

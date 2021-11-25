import React from "react";
import { Route, Routes } from "react-router";

import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Slide from "./components/slider/Slide";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

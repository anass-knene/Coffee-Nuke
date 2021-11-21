import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { data } from "./components/data";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Slide from "./components/slider/Slide";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div style={{ paddingBottom: "20px", marginBottom: "90px" }}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

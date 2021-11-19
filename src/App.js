import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { data } from "./components/data";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Slide from "./components/slider/Slide";

import Footer from "./components/Footer/Footer";
function App() {
  console.log(data);
  return (
    <div className="App">
      <div style={{ paddingBottom: "120px" }}>
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

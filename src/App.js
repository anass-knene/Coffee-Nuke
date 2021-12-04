import React from "react";
import { Route, Routes } from "react-router";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Slide from "./components/slider/Slide";
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart";
import ContactUs from "./components/Contact/ContactUs";
import Sign from "./components/Sign/Sign";
import Join from "./components/Join/Join";
import Container from "./components/Context/Container.js";
import "./app.scss";
import About from "./components/about/About";
import Find from "./components/findStore/Find";
import Buy from "./components/buy/Buy";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <Container>
      <div className="App">
        <div className="Nav">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Slide />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/join" element={<Join />} />
          <Route path="/about" element={<About />} />
          <Route path="/find" element={<Find />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </Container>
  );
}

export default App;

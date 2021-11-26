import React, { useState } from "react";
import { data } from "../data";
import { MyContext } from "./context";

export default function Container(props) {
  const [cart, setCart] = useState([]);
  const [countItem, setCountItem] = useState(0);
  const [products, setProducts] = useState(data);
  const [classesNameIcon, setClassesNameIcon] = useState("");

  return (
    <MyContext.Provider
      value={{
        cart,
        setCart,
        countItem,
        setCountItem,
        products,
        setProducts,
        setClassesNameIcon,
        classesNameIcon,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

import React, { useState } from "react";
import { data } from "../../Data/data";
import { MyContext } from "./context";

export default function Container(props) {
  const [cart, setCart] = useState([]);
  const [countItem, setCountItem] = useState(0);
  const [products, setProducts] = useState(data);
  const [classesNameIcon, setClassesNameIcon] = useState("");
  const [totalPrice, setTotalPrice] = useState();
  const [myUser, setMyUser] = useState(null);

  return (
    <MyContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
        cart,
        setCart,
        countItem,
        setCountItem,
        products,
        setProducts,
        setClassesNameIcon,
        classesNameIcon,
        myUser,
        setMyUser,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

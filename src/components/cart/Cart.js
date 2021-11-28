import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/context";
import logo from "../image/Logo.png";
import "./cart.scss";
export default function Cart() {
  const { cart, setCart, totalPrice, setTotalPrice } = useContext(MyContext);

  const removeItem = (id) => {
    let updatedItem = cart.filter((item) => item.id !== id);
    setCart(updatedItem);
  };

  useEffect(() => {
    let total = 0;
    if (cart) {
      let result = cart.map((a) => (total = total + a.price * a.counter));
      console.log(result);
    }
    let fixNumber = total.toFixed(2);
    setTotalPrice(fixNumber);
  }, [cart]);
  return (
    <>
      <div className="userCart">
        {cart.map((userCart) => {
          return (
            <div className="cartDiv" key={userCart.id}>
              <div className="imgDiv">
                <img src={userCart.image} alt="img" />
              </div>
              <div className="cartBody">
                <h1>{userCart.title}</h1>
                <p> {userCart.description} </p>
                <p> {userCart.ingredients} </p>
              </div>
              <div className="footerDivCart">
                <button onClick={() => removeItem(userCart.id)}>Delete</button>
                <div className="quePrice">
                  <h4>Quantity : {userCart.counter}</h4>
                  <h4>{userCart.price} $</h4>
                </div>
              </div>
            </div>
          );
        })}
        <div className="buyDiv">
          <h4>Nuke Coffee</h4>
          <img src={logo} alt="img logo" width="100px" />
          <span>Total price :</span>
          <h3>{totalPrice} $</h3>

          <Link to="/buy" className="btn-grad ">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

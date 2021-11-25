import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../Context/context";

export default function Navbar() {
  const { cart, setCountItem, countItem, classesNameIcon } =
    useContext(MyContext);
  if (cart) {
    let sum = cart.map((a) => a.counter);

    let sumArray = sum.reduce((accumulator, currentValue) => {
      return currentValue + accumulator;
    }, 0);
    setCountItem(sumArray);
  } else {
    setCountItem(0);
  }

  return (
    <div className="Navbar">
      <ul>
        <Link to="/">
          <img src={Logo} alt="img" width="50" />
        </Link>

        <li>
          <Link to="/menu">MENU</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/find">
            <FontAwesomeIcon icon={faMapMarked} />
            <span> Find a Store</span>
          </Link>
        </li>

        <li className={`basketIcon ${classesNameIcon}`}>
          <span>{countItem}</span>
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "40px" }}
            />
          </Link>
        </li>
        <Link to="/sign">
          <button>Sign in</button>
        </Link>
        <Link to="/join">
          <button className="Join">Join now</button>
        </Link>
      </ul>
    </div>
  );
}

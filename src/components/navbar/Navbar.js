import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../Context/context";
import Profile from "../Profile/Profile";

export default function Navbar() {
  const { cart, setCountItem, countItem, classesNameIcon, myUser, setMyUser } =
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
      <ul className="nav">
        <NavLink to="/" className="logo" activeclassname="active">
          <h4>Nuke </h4>
          <img src={Logo} alt="img" width="50" />
          <h4>Coffee</h4>
        </NavLink>
        <li>
          <NavLink activeclassname="active" to="/menu">
            MENU
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/contact">
            CONTACT US
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink activeclassname="active" to="/find">
            <FontAwesomeIcon icon={faMapMarked} />
            <span> Find a Store</span>
          </NavLink>
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
        {myUser ? (
          <button
            onClick={() => {
              localStorage.clear();
              setMyUser(null);
            }}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/sign">
            <button>Sign in</button>
          </Link>
        )}
        {myUser ? (
          <Link to="/profile">
            <button className="Join">Profile</button>
          </Link>
        ) : (
          <Link to="/join">
            <button className="Join">Join now</button>
          </Link>
        )}
      </ul>
    </div>
  );
}

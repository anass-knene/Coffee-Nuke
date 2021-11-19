import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
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
        <li>
          <FontAwesomeIcon icon={faShoppingCart} />
          <Link to="/find"></Link>
        </li>
        <Link to="/sign">
          <button>Sign in</button>
        </Link>

        <Link to="/join">
          <button className="join">Join now</button>
        </Link>
      </ul>
    </div>
  );
}

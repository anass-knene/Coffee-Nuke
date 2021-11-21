import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer ">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">tel</Link>
        </li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>{<FontAwesomeIcon icon={faFacebook} />}</li>
        <li>{<FontAwesomeIcon icon={faTwitter} />}</li>
        <li>{<FontAwesomeIcon icon={faTiktok} />}</li>
      </ul>
    </div>
  );
}

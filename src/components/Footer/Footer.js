import React from "react";

import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer ">
      <ul>
        <li>
          <a
            href=" https://www.instagram.com/nukecoffee_id/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/NUKEIT.COFFEE/"
            target="_blank"
            rel="noreferrer"
          >
            {<FontAwesomeIcon icon={faFacebook} />}
          </a>
        </li>
        <li>
          <a href="/#">{<FontAwesomeIcon icon={faTwitter} />}</a>
        </li>
        <li>
          <a href="/#">{<FontAwesomeIcon icon={faTiktok} />}</a>
        </li>
      </ul>
    </div>
  );
}

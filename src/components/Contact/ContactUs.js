import React from "react";
import "./contactUs.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEnvelope,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
export default function ContactUs() {
  return (
    <div className="contactUsDiv">
      <div className="left-part">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="fas fa-envelope-contact"
        />
        <FontAwesomeIcon icon={faAt} className="fas fa-at" />
        <FontAwesomeIcon
          icon={faMailBulk}
          className="fas fa-mail-bulk-contact"
        />
      </div>
      <form>
        <h1>Contact Us</h1>
        <div className="info">
          <input
            className="fname"
            type="text"
            name="first_name"
            placeholder="First name"
          />
          <input
            className="sname"
            type="text"
            name="first_name"
            placeholder="Family name"
          />
          <input type="text" name="name" placeholder="Email" />
          <input type="text" name="name" placeholder="Phone number" />
        </div>
        <p>Message</p>
        <div>
          <textarea rows="4" />
        </div>
        <button className="BtnContact" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

import React from "react";
import "./sign.scss";
export default function Sign() {
  return (
    <div className="signDiv">
      <form className="signForm" /* onSubmit={JoinUser} */>
        <h1>Sign Us</h1>
        <div className="signInfo">
          <label>
            Email
            <input type="email" name="email" placeholder="John@hotmail.com" />
          </label>
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
        </div>

        <input
          className="BtnContact"
          name="submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

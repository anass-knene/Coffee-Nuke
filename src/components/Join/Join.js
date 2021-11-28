import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/context";
import "./join.scss";

export default function Join() {
  const { setMyUser } = useContext(MyContext);
  const JoinUser = (e) => {
    e.preventDefault();
    let user = {
      userName: e.target.user_Name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      rePassword: e.target.re_Password.value,
    };
    if (
      user.password === user.rePassword &&
      user.userName !== "" &&
      user.email !== ""
    ) {
      setMyUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      <Link to="/profile" />;
    } else {
      alert("check your Form something wrong ");
    }
    console.log(user);
  };

  useEffect(() => {
    let localUser = localStorage.getItem("user");
    if (localUser) {
      let originalUser = JSON.parse(localUser);
      setMyUser(originalUser);
    }
  }, []);
  return (
    <div className="joinContainer">
      <form onSubmit={JoinUser}>
        <h1>Join Us</h1>
        <div className="info">
          <label>Full Name</label>
          <input
            className="fname"
            type="text"
            name="user_Name"
            placeholder="Full name"
          />
          <label>
            Email
            <input type="email" name="email" placeholder="John@hotmail.com" />
          </label>
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
          <label>Re Password</label>
          <input type="password" name="re_Password" placeholder="" />
        </div>
        {/* <Link to="/profile"> */}
        <input
          className="BtnContact"
          name="submit"
          type="submit"
          value="Submit"
        />
        {/* </Link> */}
      </form>
    </div>
  );
}

import React, { useContext } from "react";
import { MyContext } from "../Context/context";
import "./profile.scss";
export default function Profile() {
  const { myUser } = useContext(MyContext);

  return (
    <div className="profile">
      {myUser && (
        <div>
          <h1>
            Hi <span>{myUser.userName}</span> Your are Welcome
          </h1>
          <img src="https://picsum.photos/200/200" alt="img" />
          <h2>{myUser.email}</h2>
        </div>
      )}
    </div>
  );
}

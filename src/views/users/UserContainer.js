import React, { useEffect, useState } from "react";
import "./UserContainer.css";
import burger from "../../assets/Image/burger_slide.png";
import { Link } from "react-router-dom";

const UserContainer = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
    setUserData(userData);
  }, [setUserData]);
  return (
    <div className="dashboard">
      <div className="left">
        <div className="about">
          <p className="welcome">
            Welcome To <br />
            Make Your Burger
            <br />
            <span className="text-info">{userData.username}</span>
            <br />
          </p>
          <p className="detail">You Can Make Your Own Burger</p>=
          <Link className="Order_button" to="/burgerbuilder">
            Make Your Order
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="slider_image full text_align_center">
          <img className="img-responsive" src={burger} />
        </div>
      </div>
    </div>
  );
};

export default UserContainer;

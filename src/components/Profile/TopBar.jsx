import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-bar-content-heading">Account Setting</div>
        <div className="top-bar-content-subheading">
          View and update your account details, profile and more.
        </div>
      </div>
      <div className="top-bar-close">
        <Link to="/">
          <img src="./images/close.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;

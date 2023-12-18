import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="top-nav">
      <div className="top-nav-upgrade">Upgrade</div>
      <div className="top-nav-notify">
        <img src="./images/notify.png" alt="" />
      </div>
      <div className={`${showList ? "show" : "hide"} top-nav-account`}>
        <img
          src="./images/profile.png"
          alt=""
          onClick={() => {
            setShowList(!showList);
          }}
        />
        <div className="top-nav-account-body">
          <ul>
            <li className="nav-link">
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "#2448fc" }}
              >
                <img src="./images/user.png" alt="" /> My Account
              </Link>
            </li>
            <hr />
            <li>Help & FAQ</li>
            <li>Install Dualite</li>
            <li>Suggest features</li>
            <li>Report a problem</li>
            <hr />
            <li>
              <img src="./images/logout.png" alt="" /> Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

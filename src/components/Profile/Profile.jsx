import React, { useState } from "react";
import TopBar from "./TopBar";
import "./profile.scss";
import SideBar from "./SideBar";
import Content from "./Content";
import { profile } from "./profileData";

const Profile = () => {
  const [data, setData] = useState(profile);
  const [activeTab, setActiveTab] = useState("User Profile");
  const tabs = ["User Profile", "Email notifications", "Subscription"];
  console.log(activeTab);

  return (
    <div className="profile">
      <TopBar />
      <div className="content">
        <SideBar {...{ activeTab, setActiveTab, tabs }} />
        <Content {...{ data, setData, activeTab }} />
      </div>
    </div>
  );
};

export default Profile;

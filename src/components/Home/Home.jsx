import React, { useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import "./home.scss";
import { teams } from "./homeData";
import TeamDetails from "./TeamDetails";

const Home = () => {
  const [data, setData] = useState(teams);
  const [tab, setTab] = useState(teams[0].name);
  return (
    <div className="home">
      <SideNav {...{ data, setData, tab, setTab }} />
      <div className="side-content">
        <TopNav />
        <TeamDetails {...{ data, tab }} />
      </div>
    </div>
  );
};

export default Home;

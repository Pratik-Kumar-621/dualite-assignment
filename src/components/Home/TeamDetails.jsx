import { Button } from "@mui/material";
import React, { useState } from "react";

const TeamDetails = (props) => {
  const { data, tab } = props;
  const teamData = data.filter((item) => item.name === tab)[0];
  const [order, setOrder] = useState(true);
  const subTabList = ["All Projects", "Settings"];
  const [subTab, setSubTab] = useState("All Projects");
  return (
    <div className="team-details">
      <div className="team-details-name">{teamData.name}</div>
      <div className="team-details-tab">
        <div className="team-details-tab-links">
          {subTabList.map((item) => (
            <div className="team-details-tab-links-item">
              <Button
                variant={subTab === item ? "outlined" : "text"}
                className={subTab === item ? "outlined" : "text"}
                onClick={() => setSubTab(item)}
              >
                {item}
              </Button>
            </div>
          ))}

          <div className="team-details-tab-links-item">
            <img src="./images/search.png" alt="" />
          </div>
        </div>
        <div className="team-details-tab-sort">
          <div className="team-details-tab-sort-value">Last Updated</div>
          <div className="team-details-tab-sort-order">
            <img
              src="./images/order.png"
              alt=""
              onClick={() => {
                setOrder(!order);
              }}
              className={`${order && "reverse"}`}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="team-details-page">
        {subTab === "Settings" && (
          <div className="team-details-page-settings">
            Setting Page of team: <strong>{tab}</strong>
          </div>
        )}
        {subTab === "All Projects" && (
          <div className="team-details-page-projects">
            <div className="team-details-page-projects-heading">
              Let’s get started!{" "}
            </div>
            <div className="team-details-page-projects-images">
              <img src="./images/react.png" alt="" />
              <img src="./images/html.png" alt="" />
            </div>
            <div className="team-details-page-projects-subheading">
              Get full flows code in <br /> HTML/React
            </div>
            <div className="team-details-page-projects-desc">
              Best for websites, landing pages, prototypes <br /> and full
              application.
            </div>
            <div className="team-details-page-projects-button">
              <Button variant="contained">New Project</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamDetails;

import React, { useState } from "react";

const SideNav = (props) => {
  const { data, setData, tab, setTab } = props;
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="side-nav">
      <div className="side-nav-logo">
        <img className="side-nav-logo-img" src="./images/logo.png" alt="" />{" "}
        <img src="./images/DUALITE.png" className="side-nav-logo-name" />
      </div>
      <div className="side-nav-teams">
        <div className="side-nav-teams-create">
          <input
            className="side-nav-teams-create-input"
            placeholder="teams"
            value={inputData}
            type="text"
            onChange={(e) => {
              setInputData(e.target.value);
              setError("");
            }}
          />
          <img
            src="./images/add.png"
            alt=""
            onClick={() => {
              inputData
                ? !data.find((item) => item.name === inputData)
                  ? setData([
                      ...data,
                      { id: data.length + 1, name: inputData, projects: [] },
                    ])
                  : setError("Can't use same team name")
                : setError("Input can't be empty");
              setInputData("");
            }}
          />
        </div>
        {error && (
          <div style={{ color: "white", marginTop: "10px" }}>{error}</div>
        )}
        <div className="side-nav-teams-list">
          {data.map((item) => (
            <div
              className={`${
                tab === item.name && "active-tab-side"
              } side-nav-teams-list-item`}
              onClick={() => setTab(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="side-nav-help">Help Center</div>
    </div>
  );
};

export default SideNav;

import React from "react";

const SideBar = (props) => {
  const { activeTab, setActiveTab, tabs } = props;
  return (
    <div className="side-bar">
      <div className="side-bar-links">
        {tabs.map((item) => {
          return (
            <div
              className={`${
                activeTab === item && "active"
              } side-bar-links-item`}
              onClick={() => setActiveTab(item)}
            >
              <img
                src={`./images/profile/${
                  activeTab === item ? `${item}-select` : item
                }.png`}
                alt=""
              />
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

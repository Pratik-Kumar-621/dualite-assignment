import React, { useState } from "react";
import { Button, Switch } from "@mui/material";

const Content = (props) => {
  const { data, setData, activeTab } = props;
  const [formData, setFormData] = useState({ email: data.email, password: "" });
  return (
    <div className="profile-content">
      <div className="profile-content-details">
        <div className="profile-content-details-image">
          <img src="./images/profile.png" alt="" />
        </div>
        <div className="profile-content-details-value">
          <div className="profile-content-details-value-name">{data.name}</div>
          <div className="profile-content-details-value-email">
            {data.email}
          </div>
        </div>
      </div>
      {activeTab === "User Profile" && (
        <div className="profile-content-user">
          <div className="profile-content-user-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setData({ ...data, email: formData.email });
                setFormData({ ...formData, password: "" });
              }}
            >
              <div>
                <div>Email address</div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <div>Password</div>
                <input
                  type="password"
                  placeholder="Enter the password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
              </div>

              <Button
                variant="contained"
                type="submit"
                disabled={!formData.email || !formData.password}
              >
                Update
              </Button>
            </form>
          </div>
          <div className="profile-content-user-delete">
            <Button color="error" variant="text">
              Delete Account
            </Button>
          </div>
        </div>
      )}
      {activeTab === "Email notifications" && (
        <div className="profile-content-email">
          <div className="profile-content-email-update">
            <div className="profile-content-email-update-heading">
              Activity updates
            </div>
            <div className="profile-content-email-update-sub-heading">
              New project syncs and updates.
            </div>
            <div className="switch">
              <Switch
                checked={data.getUpdates}
                onChange={(e) => {
                  setData({ ...data, getUpdates: e.target.checked });
                }}
              />
            </div>
          </div>
          <div className="profile-content-email-comm">
            <div className="profile-content-email-comm-heading">
              Required communication
            </div>
            <div className="profile-content-email-comm-subheading">
              Emails regarding your account like billing, security, and support.
            </div>
          </div>
        </div>
      )}
      {activeTab === "Subscription" && (
        <div className="profile-content-subscription">Subscription Page</div>
      )}
    </div>
  );
};

export default Content;

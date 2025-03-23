import React from "react";
import "./AccountSettings.css"; // Import CSS
import Group from "./Group 1585.svg";
import Ellipse from "./Ellipse 114.jpg";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="account-settings">
      {/* Header */}
      <h2 className="account-title">Account Settings</h2>

      {/* Profile Section */}
      <div className="profile-card">
        <div className="profile-image-container">
          <img src={Ellipse} alt="Profile" className="profile-image" />
          <div className="camera-icon">
            <img src={Group} alt="camera" />
          </div>
        </div>

        <div className="profile-info">
          <h3 className="profile-name">Marry Doe</h3>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Description */}
      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed
        Diam.
      </p>
      <hr className="break1" />
      <hr className="break2" />
    </div>
  );
};

export default AccountSettings;

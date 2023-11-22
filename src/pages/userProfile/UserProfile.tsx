// ProfilePage.tsx
import React, { useState } from "react";
import "./profile.scss";

interface ProfilePageProps {
  // Add any necessary props
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const [userInfo] = useState({
    username: "DemoUser",
    email: "demo@example.com",
    profilePicture:
      "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  });

  const [newPassword, setNewPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const handleProfilePictureChange = () => {
    // Add logic to handle profile picture change
    console.log("Profile picture changed!");
  };

  const handlePasswordChange = () => {
    // Add logic to handle password change
    console.log("Password changed!");
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <div className="user-info">
        <img
          src={userInfo.profilePicture}
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="user-details">
          <p>
            <strong>Username:</strong> {userInfo.username}
          </p>
          <p>
            <strong>Email:</strong> {userInfo.email}
          </p>
        </div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Change Profile Picture:
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />
        </label>
        <label>
          Username:
          <input type="text" value={userInfo.username} readOnly />
        </label>
        <label>
          Email:
          <input type="email" value={userInfo.email} readOnly />
        </label>

        <button type="submit">Update Profile</button>
      </form>
      <div className="new-password-container">
        <div className="change-password">
          <h3>Change Password</h3>
          <label>
            New Password:
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
            />
          </label>
          <button type="button" onClick={handlePasswordChange}>
            Change Password
          </button>
        </div>
      </div>

      <div className="user-activity">
        <h3>User Activity</h3>
      </div>
    </div>
  );
};

export default ProfilePage;

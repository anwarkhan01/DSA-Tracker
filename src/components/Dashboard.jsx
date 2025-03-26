import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

import Progress from "./Progress";
import "../styles/dashboard.css";
const Dashboard = ({ checkedCount, user }) => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("You are now logged in!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="dashboard">
      {user ? (
        <div className="user-info-section">
          <div className="user-profile">
            <img
              src={user.photoURL}
              alt={`${user.displayName}'s profile`}
              className="user-profile-image"
            />
            <div className="user-details">
              <h3>{user.displayName}</h3>
            </div>
          </div>

          <Progress checkedCount={checkedCount} />
        </div>
      ) : (
        <div className="login-prompt">
          <p className="login-message">Want to track your progress?</p>
          <button className="login-button" onClick={signInWithGoogle}>
            Login
          </button>
          <button className="signup-button" onClick={signInWithGoogle}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

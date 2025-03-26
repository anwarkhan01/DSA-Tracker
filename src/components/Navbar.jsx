import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import "../styles/navbar-css.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("You are now logged in!");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const logout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        await signOut(auth);
        alert("You are now logged out!");
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Logout canceled.");
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <h1>DSA Tracker</h1>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/custom-challenges"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Custom Challenges
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/structured-challenges"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Structured Challenges
          </NavLink>
        </li>
        <li
          onClick={user ? logout : signInWithGoogle}
          className={user ? "logout-button" : "signin-button"}
        >
          {user ? "Logout" : "Sign In"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

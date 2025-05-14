import React, {useEffect, useRef, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {auth, googleProvider} from "../config/firebase";
import {signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import "../styles/navbar.css";

const Navbar = ({setShowLeftMenu, setShowRightMenu, showRightMenu}) => {
  const [user, setUser] = useState(null);
  const rightMenuRef = useRef(null);
  const rightToggleRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        rightMenuRef.current &&
        !rightMenuRef.current.contains(event.target) &&
        rightToggleRef.current &&
        !rightToggleRef.current.contains(event.target)
      ) {
        setShowRightMenu(false);
      }
    };

    if (showRightMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRightMenu, setShowRightMenu]);

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
      <div className="navbar-logo">
        <h1>DSA Tracker</h1>
      </div>
      <button
        className="right-toggle-btn"
        onClick={() => {
          setShowRightMenu((p) => !p);
          setShowLeftMenu(false);
        }}
        ref={rightToggleRef}
      >
        ☰
      </button>
      <ul
        className={`navbar-links ${showRightMenu ? "show" : ""}`}
        ref={rightMenuRef}
      >
        <li>
          <NavLink
            to="/structured-challenges"
            className={({isActive}) => (isActive ? "active" : "")}
          >
            Structured Challenges
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/custom-challenges"
            className={({isActive}) => (isActive ? "active" : "")}
          >
            Custom Challenges
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

const Header = ({setShowLeftMenu, leftToggleRef}) => {
  const [showRightMenu, setShowRightMenu] = useState(false);

  const currentRoute = useLocation();
  const hideToggleBar = currentRoute.pathname === "/custom-challenges";
  return (
    <div className="header">
      <Navbar
        setShowLeftMenu={setShowLeftMenu}
        setShowRightMenu={setShowRightMenu}
        showRightMenu={showRightMenu}
      />
      {!hideToggleBar && (
        <section className="toggle-bar">
          <button
            className={`left-toggle-btn`}
            onClick={() => {
              setShowLeftMenu((p) => !p);
              setShowRightMenu(false);
            }}
            ref={leftToggleRef}
          >
            {" "}
            ☰
          </button>
        </section>
      )}
    </div>
  );
};

export default Header;
// export default Navbar;

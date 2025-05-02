import SideMenu from "../components/SideMenu.jsx";
import ProblemDetailPanel from "../components/ProblemDetailPanel.jsx";
import Dashboard from "../components/Dashboard.jsx";
import {dsaData} from "../../public/dsaData.js";
import {useState, useEffect, useRef} from "react";
import {signInWithPopup, onAuthStateChanged} from "firebase/auth";
import {auth, googleProvider} from "../config/firebase.js";
import "../styles/structured-challenges.css";
const StructuredChallenges = ({showLeftMenu, leftMenuRef}) => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [checkedCount, setCheckedCount] = useState(0);
  const [user, setUser] = useState(null);

  const handleProblemClick = (category, problemTitle) => {
    setSelectedProblem(`${category}-${problemTitle}`);
  };

  const handleCheckboxClick = async (category, problemTitle) => {
    if (user === null) {
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (err) {
        console.error(err);
      }
    } else {
      const key = `${category}-${problemTitle}`;
      const currentState = localStorage.getItem(key) === "true";

      if (currentState) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, "true");
      }
      updateProgress();
    }
  };

  const updateProgress = () => {
    let count = 0;
    if (localStorage.length > 0) {
      for (let i = 1; i < localStorage.length; i++) {
        count++;
      }
    }
    setCheckedCount(count);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    updateProgress();
    return () => unsubscribe();
  }, []);
  return (
    <div className="structured-challenges">
      <div
        className={`side-menu-wrapper ${showLeftMenu ? "show" : ""}`}
        ref={leftMenuRef}
      >
        <SideMenu
          handleProblemClick={handleProblemClick}
          selectedProblem={selectedProblem}
          expandedCategories={expandedCategories}
          setExpandedCategories={setExpandedCategories}
          onCheckboxClick={handleCheckboxClick}
        />
      </div>
      <ProblemDetailPanel
        selectedProblem={selectedProblem}
        dsaData={dsaData}
        keyy={selectedProblem}
      />
      <Dashboard checkedCount={checkedCount} user={user} />
    </div>
  );
};

export default StructuredChallenges;

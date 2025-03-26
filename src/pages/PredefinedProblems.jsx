import SideMenu from "../components/SideMenu";
import ProblemDetailPanel from "../components/ProblemDetailPanel";
import Dashboard from "../components/Dashboard";
import {dsaData} from "../../public/dsaData.js";
import {useState, useEffect} from "react";
import {signInWithPopup, onAuthStateChanged} from "firebase/auth";
import {auth, googleProvider} from "../config/firebase";
const StructuredChallenges = () => {
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
    for (let i = 0; i < localStorage.length; i++) {
      count++;
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
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    updateProgress();
  }, []);
  return (
    <div
      className="predefined-problems"
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <SideMenu
        handleProblemClick={handleProblemClick}
        selectedProblem={selectedProblem}
        expandedCategories={expandedCategories}
        setExpandedCategories={setExpandedCategories}
        onCheckboxClick={handleCheckboxClick}
      />
      <ProblemDetailPanel
        selectedProblem={selectedProblem}
        dsaData={dsaData}
        keyy={selectedProblem}
      />
      {/* <SideMenu dsaData={dsaData} onProblemSelect={handleProblemSelect} />
       <ProblemDetailPanel selectedProblem={selectedProblem} /> */}
      <Dashboard checkedCount={checkedCount} user={user} />
    </div>
  );
};

export default StructuredChallenges;

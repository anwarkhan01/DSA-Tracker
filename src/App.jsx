import React, {useState, useRef, useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CustomChallenges from "./pages/CustomChallenges";
import StructuredChallenges from "./pages/StructuredChallenges";
import Header from "./components/Navbar";
function App() {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const leftMenuRef = useRef(null);
  const leftToggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        leftMenuRef.current &&
        !leftMenuRef.current.contains(event.target) &&
        leftToggleRef.current &&
        !leftToggleRef.current.contains(event.target)
      ) {
        setShowLeftMenu(false);
      }
    };

    if (showLeftMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLeftMenu, setShowLeftMenu]);
  return (
    <Router>
      <Header setShowLeftMenu={setShowLeftMenu} leftToggleRef={leftToggleRef} />
      <Routes>
        <Route path="/" element={<Navigate to="/structured-challenges" />} />
        <Route path="/custom-challenges" element={<CustomChallenges />} />
        <Route
          path="/structured-challenges"
          element={
            <StructuredChallenges
              showLeftMenu={showLeftMenu}
              leftMenuRef={leftMenuRef}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

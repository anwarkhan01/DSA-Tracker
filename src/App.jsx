import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomChallenges from "./pages/UserProblems";
import StructuredChallenges from "./pages/PredefinedProblems";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/structured-challenges" />} />
        <Route path="/custom-challenges" element={<CustomChallenges />} />
        <Route
          path="/structured-challenges"
          element={<StructuredChallenges />}
        />
      </Routes>
    </Router>
  );
}

export default App;

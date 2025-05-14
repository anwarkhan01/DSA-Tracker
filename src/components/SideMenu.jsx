import React from "react";
import {dsaData} from "../../public/dsaData";
import "../styles/sidemenu.css";

function SideMenu({
  handleProblemClick,
  selectedProblem,
  expandedCategories,
  setExpandedCategories,
  onCheckboxClick,
}) {
  const handleCategoryClick = (categoryName) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [categoryName]: !prevExpanded[categoryName],
    }));
  };

  return (
    <div className="side-menu-container">
      <div className="side-menu">
        <ul className="category-list">
          {Object.keys(dsaData).map((category) => (
            <li key={category} className="category-item">
              <div
                className="category-header"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
                <span className="category-icon">
                  {expandedCategories[category] ? "v" : ">"}
                </span>
              </div>
              {expandedCategories[category] && (
                <ul className="problem-list">
                  {dsaData[category].problems.map((problem) => (
                    <li
                      key={problem.title}
                      className={`problem-item ${
                        selectedProblem === `${category}-${problem.title}`
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleProblemClick(category, problem.title)
                      }
                    >
                      {" "}
                      <input
                        type="checkbox"
                        checked={
                          !!localStorage.getItem(`${category}-${problem.title}`)
                        }
                        onChange={() =>
                          onCheckboxClick(category, problem.title)
                        }
                      />
                      {problem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;

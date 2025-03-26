import React from "react";
import "../styles/problem-detail-panel.css";
import CodeEditor from "./CodeEditor";
function ProblemDetailPanel({selectedProblem, dsaData, keyy}) {
  return (
    <div className="problem-detail-panel" key={keyy}>
      {selectedProblem ? (
        <div className="problem-container">
          {(() => {
            const category = selectedProblem.split("-")[0];
            const problemTitle = selectedProblem.split("-")[1];
            const problem = dsaData[category]?.problems?.find(
              (problem) => problem.title === problemTitle
            );

            if (!problem) {
              return <p className="loading-text">Loading...</p>;
            }

            return (
              <div className="problem-details">
                <h2 className="problem-title">{problem.title}</h2>

                <p className="problem-description">{problem.description}</p>

                <div className="examples-section">
                  <h3 className="section-heading">Examples</h3>
                  <ul className="examples-list">
                    <li className="example-item">
                      <strong>Input:</strong> {problem.example_1.input}
                      <br />
                      <strong>Output:</strong> {problem.example_1.output}
                      <br /> {problem.example_1.explanation}
                    </li>
                    <li className="example-item">
                      <strong>Input:</strong> {problem.example_2.input}
                      <br />
                      <strong>Output:</strong> {problem.example_2.output}
                      <br /> {problem.example_2.explanation}
                    </li>
                  </ul>
                </div>

                <div className="complexity-section">
                  <h3 className="section-heading">Complexity</h3>
                  <p className="complexity-details">
                    <strong>Time Complexity:</strong>{" "}
                    {problem.complexity.timeComplexity}
                    <br />
                    <strong>Space Complexity:</strong>{" "}
                    {problem.complexity.spaceComplexity}
                  </p>
                </div>

                {problem.link && (
                  <p className="problem-link">
                    <a
                      href={problem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Problem Details
                    </a>
                  </p>
                )}

                <div className="code-editor-container">
                  <CodeEditor selectedProblem={selectedProblem} />
                </div>
              </div>
            );
          })()}
        </div>
      ) : (
        <p
          className="select-problem-text"
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#2c3e50",
            background: "linear-gradient(90deg, #8e44ad, #3498db)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginTop: "50px",
            padding: "20px",
            border: "2px solid #2c3e50",
            borderRadius: "10px",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            animation: "fadeIn 1.5s ease-in-out",
          }}
        >
          Welcome to the world of problems... But first, pick one!
        </p>
      )}
    </div>
  );
}

export default ProblemDetailPanel;

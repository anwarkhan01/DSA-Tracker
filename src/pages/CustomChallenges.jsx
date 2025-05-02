import React, {useState, useEffect} from "react";
import "../styles/custom-challenges.css";

const CustomChallenges = () => {
  const [problems, setProblems] = useState([]);
  const [problemTitle, setProblemTitle] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [problemLink, setProblemLink] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedProblems =
      JSON.parse(localStorage.getItem("userProblems")) || [];
    setProblems(savedProblems);
  }, []);

  useEffect(() => {
    localStorage.setItem("userProblems", JSON.stringify(problems));
  }, [problems]);

  const handleAddOrUpdateProblem = () => {
    if (problemTitle && problemDescription) {
      if (editIndex !== null) {
        const updatedProblems = problems.map((problem, index) =>
          index === editIndex
            ? {
                title: problemTitle,
                description: problemDescription,
                link: problemLink,
              }
            : problem
        );
        setProblems(updatedProblems);
        setEditIndex(null);
      } else {
        const newProblem = {
          title: problemTitle,
          description: problemDescription,
          link: problemLink,
        };
        setProblems([...problems, newProblem]);
      }

      setProblemTitle("");
      setProblemDescription("");
      setProblemLink("");
    }
  };

  const handleEditProblem = (index) => {
    const problemToEdit = problems[index];
    setProblemTitle(problemToEdit.title);
    setProblemDescription(problemToEdit.description);
    setProblemLink(problemToEdit.link);
    setEditIndex(index);
  };

  const handleDeleteProblem = (index) => {
    const updatedProblems = problems.filter((_, i) => i !== index);
    setProblems(updatedProblems);
  };

  return (
    <div className="custom-container">
      <h2 className="custom-header">Custom Challenges</h2>
      <p className="custom-description">
        Add, edit, or delete problems that you found or created yourself.
        Include a link for more details.
      </p>

      <div className="custom-form">
        <input
          type="text"
          placeholder="Problem Title"
          value={problemTitle}
          onChange={(e) => setProblemTitle(e.target.value)}
          className="custom-input"
        />
        <textarea
          placeholder="Problem Description"
          value={problemDescription}
          onChange={(e) => setProblemDescription(e.target.value)}
          className="custom-textarea"
        ></textarea>
        <input
          type="url"
          placeholder="Problem URL (Optional)"
          value={problemLink}
          onChange={(e) => setProblemLink(e.target.value)}
          className="custom-input"
        />
        <button onClick={handleAddOrUpdateProblem} className="custom-add-btn">
          {editIndex !== null ? "Update Problem" : "Add Problem"}
        </button>
      </div>

      <div className="custom-list">
        {problems.map((problem, index) => (
          <div key={index} className="custom-item">
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
            {problem.link && (
              <a
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
              >
                View More Details
              </a>
            )}
            <button
              onClick={() => handleEditProblem(index)}
              className="custom-edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProblem(index)}
              className="custom-delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomChallenges;

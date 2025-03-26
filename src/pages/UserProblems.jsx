import React, { useState, useEffect } from "react";
import "../styles/user-problem.css";
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
    <div style={styles.container}>
      <h2 style={styles.header}>Custom Challenges</h2>
      <p style={styles.description}>
        Add, edit, or delete problems that you found or created yourself.
        Include a link for more details.
      </p>

      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Problem Title"
          value={problemTitle}
          onChange={(e) => setProblemTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Problem Description"
          value={problemDescription}
          onChange={(e) => setProblemDescription(e.target.value)}
          style={styles.textarea}
        ></textarea>
        <input
          type="url"
          placeholder="Problem URL (Optional)"
          value={problemLink}
          onChange={(e) => setProblemLink(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddOrUpdateProblem} style={styles.addButton}>
          {editIndex !== null ? "Update Problem" : "Add Problem"}
        </button>
      </div>

      <div style={styles.problemList}>
        {problems.map((problem, index) => (
          <div key={index} style={styles.problemItem}>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
            {problem.link && (
              <a
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                View More Details
              </a>
            )}
            <button
              onClick={() => handleEditProblem(index)}
              style={styles.editButton}
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProblem(index)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#2c3e50",
    padding: "20px",
    color: "#ecf0f1",
  },
  header: {
    textAlign: "center",
    fontSize: "24px",
  },
  description: {
    textAlign: "center",
    marginBottom: "20px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
  textarea: {
    width: "80%",
    height: "100px",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  problemList: {
    marginTop: "20px",
  },
  problemItem: {
    backgroundColor: "#34495e",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "5px",
  },
  editButton: {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    display: "inline-block",
    margin: "10px 10px 0 0",
    padding: "5px 10px",
    backgroundColor: "#8e44ad",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default CustomChallenges;

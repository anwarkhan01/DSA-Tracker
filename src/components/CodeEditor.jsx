import React, {useState, useEffect} from "react";
import AceEditor from "react-ace";
import ace from "ace-builds";

// Fix: Explicitly set base path for Ace
ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");

// Import correct mode, dark theme, and extensions
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai"; // Changed to dark theme
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor({selectedProblem}) {
  const [value, setValue] = useState("");

  const buttonStyle = {
    padding: "5px 8px",
    cursor: "pointer",
    backgroundColor: "#282c34", // Darker button background
    color: "white",
    border: "none",
    transition: "background-color 0.3s ease",
  };

  useEffect(() => {
    if (!selectedProblem) return;
    const savedCode = localStorage.getItem(selectedProblem);
    if (savedCode) {
      setValue(savedCode);
    }
  }, [selectedProblem]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSave = () => {
    if (!selectedProblem) return;
    localStorage.setItem(selectedProblem, value);
    alert("Code saved successfully!");
  };

  const handleReset = () => {
    setValue("");
    if (!selectedProblem) return;
    localStorage.removeItem(selectedProblem);
    alert("Code reset!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    alert("Code copied to clipboard!");
  };

  return (
    <div
      className="codeEdit"
      key={selectedProblem}
      style={{
        backgroundColor: "#1e1e1e",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <button
        className="code-save"
        style={{
          marginLeft: "540px",
          borderTopLeftRadius: "7px",
          ...buttonStyle,
        }}
        onClick={handleSave}
      >
        Save
      </button>
      <button className="code-copy" style={buttonStyle} onClick={handleCopy}>
        Copy
      </button>
      <button
        className="code-reset"
        style={{borderTopRightRadius: "7px", ...buttonStyle}}
        onClick={handleReset}
      >
        Reset
      </button>
      <AceEditor
        style={{
          width: "700px",
          margin: "0 auto",
          borderRadius: "10px",
          backgroundColor: "#1e1e1e", // Dark background
        }}
        placeholder="Enter Your Code Here"
        mode="javascript"
        theme="monokai" // Changed to a dark theme
        name="code-editor"
        onChange={handleChange}
        fontSize={14}
        lineHeight={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 4,
        }}
      />
    </div>
  );
}

export default CodeEditor;

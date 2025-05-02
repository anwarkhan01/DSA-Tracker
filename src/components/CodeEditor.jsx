import React, {useState, useEffect} from "react";
import AceEditor from "react-ace";
import ace from "ace-builds";
import "../styles/code-editor.css";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor({selectedProblem}) {
  const [value, setValue] = useState("");

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
    <div className="codeEdit" key={selectedProblem}>
      <div className="code-btns">
        <button className="code-save btn" onClick={handleSave}>
          Save
        </button>
        <button className="code-copy btn" onClick={handleCopy}>
          Copy
        </button>
        <button className="code-reset btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <AceEditor
        style={{
          width: "100%",
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

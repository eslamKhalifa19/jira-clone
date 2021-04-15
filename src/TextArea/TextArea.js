import React from "react";
import "./text-area.scss";

function TextArea() {
  return (
    <div>
      <label htmlFor="description" className="text-area__label">
        Description
      </label>
      <textarea type="text" className="text-area" id="description">
        Plan, track, and manage your agile and software development projects in
        Jira. Customize your workflow, collaborate, and release great software.
      </textarea>
    </div>
  );
}

export default TextArea;

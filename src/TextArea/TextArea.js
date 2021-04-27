import React from "react";
import "./text-area.scss";

function TextArea({ label, value, onChange, onBlur, id }) {
  return (
    <div>
      <label htmlFor="description" className="text-area__label">
        {label}
      </label>
      <textarea
        type="text"
        className="text-area"
        id={id}
        value={value}
        required
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default TextArea;

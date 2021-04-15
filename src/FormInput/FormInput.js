import React from "react";
import "./form-input.scss";

function FormInput({ label, value }) {
  return (
    <div>
      <label htmlFor="name" className="form-input__label">
        {label}
      </label>
      <input
        type="text"
        className="form-input"
        id="name"
        value={value}
        required
      />
    </div>
  );
}

export default FormInput;

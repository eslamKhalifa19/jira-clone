import React from "react";
import "./form-input.scss";

function FormInput({ label, value, onChange, onBlur, id }) {
  return (
    <div>
      <label htmlFor="name" className="form-input__label">
        {label}
      </label>
      <input
        type="text"
        className="form-input"
        id={id}
        value={value}
        required
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default FormInput;

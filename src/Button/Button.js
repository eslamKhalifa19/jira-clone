import React from "react";
import "./btn.scss";

function Button({ children, type }) {
  return (
    <button className="btn btn--filled-blue " type={type}>
      {children}
    </button>
  );
}
export default Button;

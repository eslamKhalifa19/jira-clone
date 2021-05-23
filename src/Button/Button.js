import React from "react";
import "./btn.scss";

function Button({ children, type, modifier, handleOnClick }) {
  return (
    <button
      className={`btn btn--${modifier}`}
      type={type}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
export default Button;

import React from "react";
import "./btn.scss";

function Button({ children, type, modifier }) {
  return (
    <button className={`btn btn--${modifier}`} type={type}>
      {children}
    </button>
  );
}
export default Button;

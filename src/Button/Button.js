import React from "react";
import "./btn.scss";

function Button({ children }) {
  return <button className="btn btn--filled-blue ">{children}</button>;
}

export default Button;

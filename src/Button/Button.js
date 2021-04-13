import React from "react";
import "./btn.scss";

function Button({ children }) {
  return <a className="btn btn--filled-blue ">{children}</a>;
}

export default Button;

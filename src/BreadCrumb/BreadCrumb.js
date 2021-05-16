import React from "react";
import "./bread-crumb.scss";

function BreadCrumb({ Tab }) {
  return (
    <div className="bread-crumb">
      Projects
      <span>/</span>
      singularity 1.0
      <span>/</span>
      {Tab}
    </div>
  );
}

export default BreadCrumb;

import React from "react";
import "./dropdown.scss";

const DropDownIcon = ({ color, icon }) => {
  return (
    <div>
      <svg className={`dropdown__icon dropdown__icon--${color}`}>
        <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
      </svg>
    </div>
  );
};

export default DropDownIcon;

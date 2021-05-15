import React from "react";
import "./dropdown.scss";

const DropDownIcon = ({ color, icon }) => {
  return (
    <div>
      {icon == "check" ? (
        <div className="dropdown__checkbox">
          <svg className="dropdown__checkbox-icon">
            <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
          </svg>
        </div>
      ) : (
        <svg className={`dropdown__icon dropdown__icon--${color}`}>
          <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
        </svg>
      )}
    </div>
  );
};

export default DropDownIcon;

import React from "react";
import "./dropdown.scss";

function ProjectSettings() {
  return (
    <div>
      <label htmlFor="category" className="dropdown__label">
        Project Category
      </label>
      <div className="dropdown">
        <div className="dropdown__bar">
          <span>Select</span>
          <svg className="dropdown__icon-bar">
            <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
          </svg>
        </div>
        {/* Remove inline style to show the menu */}
        <div style={{ display: "none" }} className="dropdown__menu">
          <input type="text" className="dropdown__input" placeholder="Search" />
          <svg className="dropdown__icon-close">
            <use xlinkHref="./img/sprite.svg#icon-clear"></use>
          </svg>
          <div className="dropdown__select">
            <div className="dropdown__option">Marketing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSettings;

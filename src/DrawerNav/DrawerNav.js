import React from "react";
import "./drawernav.scss";

function Drawer() {
  return (
    <ul className="drawer-nav">
      <li className="drawer-nav__item drawer-nav__item--logo">
        <img
          className="drawer-nav__logo"
          src="../img/jira-logo--2.png"
          alt="Jira Logo"
        />
      </li>
      <li className="drawer-nav__item">
        <a href="#" className="drawer-nav__link">
          <svg className="drawer-nav__icon">
            <use xlinkHref="./img/sprite.svg#icon-search"></use>
          </svg>
          <span>Search Issues</span>
        </a>
      </li>
      <li className="drawer-nav__item u-flex-grow-1">
        <a href="#" className="drawer-nav__link">
          <svg className="drawer-nav__icon">
            <use xlinkHref="./img/sprite.svg#icon-plus"></use>
          </svg>
          <span>Create Issue</span>
        </a>
      </li>
      <li className="drawer-nav__item">
        <a href="#" className="drawer-nav__link">
          <svg className="drawer-nav__icon">
            <use xlinkHref="./img/sprite.svg#icon-help-circle"></use>
          </svg>
          <span>About</span>
        </a>
      </li>
    </ul>
  );
}

export default Drawer;

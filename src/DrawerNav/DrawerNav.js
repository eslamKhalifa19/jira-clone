import React from "react";
import "./drawernav.scss";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/search-issue" className="drawer-nav__link">
          <svg className="drawer-nav__icon">
            <use xlinkHref="./img/sprite.svg#icon-search"></use>
          </svg>
          <span>Search Issues</span>
        </NavLink>
      </li>
      <li className="drawer-nav__item u-flex-grow-1">
        <NavLink to="/create-issue" className="drawer-nav__link">
          <svg className="drawer-nav__icon">
            <use xlinkHref="./img/sprite.svg#icon-plus"></use>
          </svg>
          <span>Create Issue</span>
        </NavLink>
      </li>
      <li className="drawer-nav__item">
        <NavLink to="/about" className="drawer-nav__link">
          <svg className="drawer-nav__icon">
            <use xlinkHref="./img/sprite.svg#icon-help-circle"></use>
          </svg>
          <span>About</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Drawer;

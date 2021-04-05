import React from "react";
import "../sass/main.scss";
import "./sidenav.scss";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <ul className="side-nav">
      <li className="side-nav__item--logo">
        <NavLink to="/" className="side-nav__link">
          <img
            className="side-nav__logo"
            src="../img/jira-logo.png"
            alt="Jira Logo"
          />
          <span>Jira</span>
        </NavLink>
      </li>
      <li className="side-nav__item">
        <NavLink to="/" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-credit-card"></use>
          </svg>
          <span>Kanban Board</span>
        </NavLink>
      </li>
      <li className="side-nav__item">
        <NavLink to="/project-settings" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-settings"></use>
          </svg>
          <span>Project Settings</span>
        </NavLink>
      </li>
      <li className="side-nav__item">
        <div className="side-nav__line">&nbsp;</div>
      </li>
      <li className="side-nav__item">
        <NavLink to="/releases" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-truck"></use>
          </svg>
          <span>Releases</span>
        </NavLink>
      </li>
      <li className="side-nav__item">
        <NavLink to="/issues" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-server"></use>
          </svg>
          <span>Issues and filters</span>
        </NavLink>
      </li>
      <li className="side-nav__item">
        <NavLink to="/pages" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-file-text"></use>
          </svg>
          <span>Pages</span>
        </NavLink>
      </li>
      <li className="side-nav__item">
        <NavLink to="/reports" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-trending-up"></use>
          </svg>
          <span>Reports</span>
        </NavLink>
      </li>
      <li className="side-nav__item">
        <NavLink to="/components" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-package"></use>
          </svg>
          <span>Components</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default SideNav;

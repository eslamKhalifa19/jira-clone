import React from "react";
import "../sass/main.scss";
import "./sidenav.scss";

function SideNav() {
  return (
    <ul className="side-nav">
      <li className="side-nav__item--logo">
        <a href="#" className="side-nav__link">
          <img
            className="side-nav__logo"
            src="../img/jira-logo.png"
            alt="Jira Logo"
          />
          <span>Jira</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-credit-card"></use>
          </svg>
          <span>Kanban Board</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-settings"></use>
          </svg>
          <span>Project Settings</span>
        </a>
      </li>
      <li className="side-nav__item">
        <div className="side-nav__line">&nbsp;</div>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-truck"></use>
          </svg>
          <span>Releases</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="img/sprite.svg#icon-server"></use>
          </svg>
          <span>Issues and filters</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-file-text"></use>
          </svg>
          <span>Pages</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-trending-up"></use>
          </svg>
          <span>Reports</span>
        </a>
      </li>
      <li className="side-nav__item">
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref="../img/sprite.svg#icon-package"></use>
          </svg>
          <span>Components</span>
        </a>
      </li>
    </ul>
  );
}

export default SideNav;

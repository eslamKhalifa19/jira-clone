import React from "react";
// import HeaderMenu from "../HeaderMenu/HeaderMenu";
import "./header-nav.scss";

function HeaderNav() {
  return (
    <div className="header-nav">
      <div className="header-nav__wrap">
        <div className="header-nav__logo-box">
          <img
            className="header-nav__logo"
            src="../img/jira-logo.png"
            alt="Jira Logo"
          />
          <h2 className="heading-secondry">Jira Software</h2>
        </div>
        <nav className="header-nav__nav">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <a href="#" className="header-nav__link header-nav__link--active">
                <span>Home</span>
                <svg className="header-nav__menu-icon header-nav__menu-icon--active">
                  <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
                </svg>
                <span className="header-nav__border header-nav__border--active">
                  &nbsp;
                </span>
              </a>
              {/* Uncomment this component to see the sub-menu */}
              {/* <HeaderMenu /> */}
            </li>
            <li className="header-nav__item">
              <a href="#" className="header-nav__link">
                <span>Projects</span>
                <svg className="header-nav__menu-icon">
                  <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
                </svg>
                <span className="header-nav__border">&nbsp;</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="header-nav__user-settings">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <a href="#" className="header-nav__link-icon">
                <svg>
                  <use xlinkHref="./img/sprite.svg#icon-bell"></use>
                </svg>
              </a>
            </li>
            <li className="header-nav__item">
              <a href="#" className="header-nav__link-icon">
                <svg>
                  <use xlinkHref="./img/sprite.svg#icon-settings"></use>
                </svg>
              </a>
            </li>
            <li className="header-nav__item">
              <a href="#" className="header-nav__link-pic">
                <figure className="header-nav__shape">
                  <img
                    src="../img/gaben.jpg"
                    alt="Profile Pic"
                    className="header-nav__profile-pic"
                  />
                </figure>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNav;

import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
const HeaderNavItem = ({ navHead, headerMenuTitle }) => {
  return (
    <li className="header-nav__item">
      <a href="#" className="header-nav__link header-nav__link--active">
        <span>{navHead}</span>
        <svg className="header-nav__menu-icon header-nav__menu-icon--active">
          <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
        </svg>
        <span className="header-nav__border header-nav__border--active">
          &nbsp;
        </span>
      </a>
      <HeaderMenu>{headerMenuTitle}</HeaderMenu>
    </li>
  );
};

export default HeaderNavItem;

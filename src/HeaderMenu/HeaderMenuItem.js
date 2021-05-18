import React from "react";

const HeaderMenuItem = ({ itemText, icon }) => {
  return (
    <li className="header-menu__item">
      <a href="#" className="header-menu__link">
        <svg className="header-menu__icon">
          <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
        </svg>
        <span>{itemText}</span>
      </a>
    </li>
  );
};

export default HeaderMenuItem;

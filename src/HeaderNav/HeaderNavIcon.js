import React from "react";

const HeaderNavIcon = ({ icon }) => {
  return (
    <li className="header-nav__item">
      <a href="#" className="header-nav__link-icon">
        <svg>
          <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
        </svg>
      </a>
    </li>
  );
};

export default HeaderNavIcon;

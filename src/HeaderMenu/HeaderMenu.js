import React from "react";
import "./header-menu.scss";

function HeaderMenu() {
  return (
    <div className="header-menu">
      <ul className="header-menu__nav">
        <div className="header-menu__heading">Your collaborators</div>
        <li className="header-menu__item">
          <a href="#" className="header-menu__link">
            <svg className="header-menu__icon">
              <use xlinkHref="./img/sprite.svg#icon-search"></use>
            </svg>
            <span>Invite a teammate</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;

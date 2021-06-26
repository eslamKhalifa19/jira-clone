/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import useHover from "../hooks/useHover";
const HeaderNavItem = ({ navHead, headerMenuTitle }) => {
  const [open, setOpen] = useState(false);
  const [hoverRef, isHovered] = useHover();

  return (
    <li
      ref={hoverRef}
      className="header-nav__item"
      onClick={() => setOpen(!open)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to="#"
        className={`header-nav__link ${
          open ? "header-nav__link--active" : null
        }`}
      >
        <span>{navHead}</span>
        <svg
          className={`header-nav__menu-icon ${
            open ? "header-nav__menu-icon--active" : null
          }`}
        >
          <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
        </svg>
        <span
          className={`header-nav__border ${
            isHovered ? "header-nav__border--active" : null
          }`}
        >
          &nbsp;
        </span>
      </NavLink>
      {open && <HeaderMenu setOpen={setOpen}>{headerMenuTitle}</HeaderMenu>}
    </li>
  );
};

export default HeaderNavItem;

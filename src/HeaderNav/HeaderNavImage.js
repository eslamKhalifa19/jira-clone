import React from "react";

const HeaderNavImage = () => {
  return (
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
  );
};

export default HeaderNavImage;

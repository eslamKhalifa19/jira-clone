import React from "react";
import "./dropdown.scss";

function ProjectSettings() {
  return (
    <div>
      <label htmlFor="category" className="dropdown__label">
        Project Category
      </label>
      <div className="dropdown">
        <div className="dropdown__bar">
          <figure className="dropdown__shape">
            <img
              src="../img/profile-pic--1.jpg"
              alt="Profile Picdropdown"
              className="dropdown__img"
            />
          </figure>
          <svg className="dropdown__icon dropdown__icon--orange">
            <use xlinkHref="./img/sprite.svg#icon-arrow-up"></use>
          </svg>
          <svg className="dropdown__icon dropdown__icon--red">
            <use xlinkHref="./img/sprite.svg#icon-error"></use>
          </svg>
          <svg className="dropdown__icon dropdown__icon--green">
            <use xlinkHref="./img/sprite.svg#icon-bookmark"></use>
          </svg>
          <div className="dropdown__checkbox">
            <svg className="dropdown__checkbox-icon">
              <use xlinkHref="./img/sprite.svg#icon-check"></use>
            </svg>
          </div>
          <span>Select</span>
          <svg className="dropdown__icon-bar">
            <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
          </svg>
        </div>
        {/* Remove inline style to show the menu */}
        <div style={{ display: "none" }} className="dropdown__menu">
          <input type="text" className="dropdown__input" placeholder="Search" />
          <svg className="dropdown__icon-close">
            <use xlinkHref="./img/sprite.svg#icon-clear"></use>
          </svg>
          <div className="dropdown__select">
            <div className="dropdown__option">
              <figure className="dropdown__shape">
                <img
                  src="../img/profile-pic--2.jpg"
                  alt="Profile Picdropdown"
                  className="dropdown__img"
                />
              </figure>
              <span>Marketing</span>
            </div>
            <div className="dropdown__option">
              <svg className="dropdown__icon dropdown__icon--red">
                <use xlinkHref="./img/sprite.svg#icon-arrow-up"></use>
              </svg>
              <span>Higest</span>
            </div>
            <div className="dropdown__option">
              <svg className="dropdown__icon dropdown__icon--red">
                <use xlinkHref="./img/sprite.svg#icon-arrow-up"></use>
              </svg>
              <span>High</span>
            </div>
            <div className="dropdown__option">
              <svg className="dropdown__icon dropdown__icon--orange">
                <use xlinkHref="./img/sprite.svg#icon-arrow-up"></use>
              </svg>
              <span>Medium</span>
            </div>
            <div className="dropdown__option">
              <svg className="dropdown__icon dropdown__icon--green">
                <use xlinkHref="./img/sprite.svg#icon-arrow-down"></use>
              </svg>
              <span>Low</span>
            </div>
            <div className="dropdown__option">
              <svg className="dropdown__icon dropdown__icon--green">
                <use xlinkHref="./img/sprite.svg#icon-arrow-down"></use>
              </svg>
              <span>Lowest</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSettings;

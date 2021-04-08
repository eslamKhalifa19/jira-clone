import React from "react";
import DrawerIssue from "../DrawerIssue/DrawerIssue";
import "./drawer-search.scss";

function DrawerSearch() {
  return (
    <div>
      <div className="drawer-search__background"></div>
      <div className="drawer-search">
        <form className="drawer-search__container">
          <svg className="drawer-search__input-icon">
            <use xlinkHref="./img/sprite.svg#icon-search"></use>
          </svg>
          <input
            className="drawer-search__input"
            type="text"
            placeholder="Search issues by summary, description ..."
          />
        </form>
        <div className="u-margin-bottom-small">
          <h3 className="heading-tertiary">Recent Issues</h3>
        </div>
        <DrawerIssue />
      </div>
    </div>
  );
}

export default DrawerSearch;

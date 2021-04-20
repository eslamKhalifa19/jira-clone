import React from "react";
import { NavLink } from "react-router-dom";

const IssueLink = ({ searchResult }) => {
  return (
    <>
      <li className="drawer-issue__item">
        <NavLink to="/issue/:id" className="drawer-issue__link">
          <div className="drawer-issue__checkbox">
            <svg className="drawer-issue__checkbox-icon">
              <use xlinkHref="./img/sprite.svg#icon-check"></use>
            </svg>
          </div>
          <div className="drawer-issue__text-block">
            <span>{searchResult.summary}</span>
            <span>{searchResult.id}</span>
          </div>
        </NavLink>
      </li>
    </>
  );
};

export default IssueLink;

import React from "react";
import "./drawer-issue.scss";
function DrawerIssue() {
  return (
    <ul className="drawer-issue">
      <li className="drawer-issue__item">
        <a href="#" className="drawer-issue__link">
          <div className="drawer-issue__checkbox">
            <svg className="drawer-issue__checkbox-icon">
              <use xlinkHref="./img/sprite.svg#icon-check"></use>
            </svg>
          </div>
          <div className="drawer-issue__text-block">
            <span>
              You can track how many hours were spent working on an issue, and
              how many hours remain.
            </span>
            <span>task-383272</span>
          </div>
        </a>
      </li>
      <li className="drawer-issue__item">
        <a href="#" className="drawer-issue__link">
          <div className="drawer-issue__bookmark">
            <svg className="drawer-issue__bookmark-icon">
              <use xlinkHref="./img/sprite.svg#icon-bookmark"></use>
            </svg>
          </div>
          <div className="drawer-issue__text-block">
            <span>
              You can track how many hours were spent working on an issue, and
              how many hours remain.
            </span>
            <span>task-383272</span>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default DrawerIssue;

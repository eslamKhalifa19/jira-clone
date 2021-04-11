import React from "react";

const IssueLink = ({ searchResult }) => {
  //console.log(searchResult);
  return (
    <>
      <li className="drawer-issue__item">
        <a href="#" className="drawer-issue__link">
          <div className="drawer-issue__checkbox">
            <svg className="drawer-issue__checkbox-icon">
              <use xlinkHref="./img/sprite.svg#icon-check"></use>
            </svg>
          </div>
          <div className="drawer-issue__text-block">
            <span>{searchResult.summary}</span>
            <span>{searchResult.id}</span>
          </div>
        </a>
      </li>
    </>
  );
};

export default IssueLink;

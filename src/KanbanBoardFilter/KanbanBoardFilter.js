import React from "react";
import KanbanBoardSearch from "../KanbanBoardSearch/KanbanBoardSearch";
import Button from "../Button/Button";
import "./board-filter.scss";

function KanbanBoardFilter({ handleChange, searchTerm }) {
  return (
    <div className="board-filter">
      <KanbanBoardSearch handleChange={handleChange} searchTerm={searchTerm} />
      <div className="board-filter__users">
        <figure className="board-filter__shape">
          <img
            src="./img/profile-pic--1.jpg"
            alt="Profile Pic"
            className="board-filter__img"
          />
        </figure>
        <figure className="board-filter__shape">
          <img
            src="./img/profile-pic--2.jpg"
            alt="Profile Pic"
            className="board-filter__img"
          />
        </figure>
      </div>
      <div className="u-margin-right-small">
        <Button modifier="ghost">Only My Issues</Button>
      </div>
      <Button modifier="ghost">Recently Updated</Button>
    </div>
  );
}

export default KanbanBoardFilter;

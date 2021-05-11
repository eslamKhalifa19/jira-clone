import React from "react";
import "./board-search.scss";

function KanbanBoardSearch() {
  return (
    <form className="board-search">
      <svg className="board-search__input-icon">
        <use xlinkHref="./img/sprite.svg#icon-search"></use>
      </svg>
      <input className="board-search__input" type="text" />
    </form>
  );
}

export default KanbanBoardSearch;

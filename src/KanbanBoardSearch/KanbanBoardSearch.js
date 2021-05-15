import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import "./board-search.scss";

function KanbanBoardSearch({ handleChange, searchTerm }) {
  return (
    <form className="board-search">
      <SearchInput
        handleChange={handleChange}
        searchTerm={searchTerm}
        searchClassName={"board-search__input"}
        svgClassName={"board-search__input-icon"}
        icon={"search"}
        placeholder={"Search issues"}
      />
    </form>
  );
}

export default KanbanBoardSearch;

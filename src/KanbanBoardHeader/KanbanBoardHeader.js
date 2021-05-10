import React from "react";
import { KanbanCardCategory } from "../DummyData";

const KanbanBoardHeader = () => {
  return (
    <div className="board-row-header">
      {KanbanCardCategory.map(({ category, id }) => (
        <div key={id} className="board-col-header">
          {category}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoardHeader;

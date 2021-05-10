import React from "react";
import { columns } from "../DummyData";

const KanbanBoardHeader = () => {
  return (
    <div className="board-row-header">
      {columns.map(({ id, name }) => (
        <div key={id} className="board-col-header">
          {name}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoardHeader;

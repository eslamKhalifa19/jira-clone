import React from "react";

const KanbanBoardHeader = ({ columns }) => {
  return (
    <div className="board-row-header">
      {columns.map(({ id, name, issues }) => (
        <div key={id} className="board-col-header">
          {name} - {issues.length}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoardHeader;

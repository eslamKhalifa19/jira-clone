import React from "react";

function KanbanBoard() {
  return (
    <div className="page-kanban-board">
      <div className="board-row">
        <div className="board-col">
          <div className="u-padding-xs u-margin-bottom-xxs">
            <p className="paragraph">BACKLOG 4</p>
          </div>
        </div>
        <div className="board-col">
          <div className="u-padding-xs">
            <p className="paragraph">SELECTED FOR DEVELOPMENT 2</p>
          </div>
        </div>
        <div className="board-col">
          <div className="u-padding-xs">
            <p className="paragraph">IN PROGRESS 1</p>
          </div>
        </div>
        <div className="board-col">
          <div className="u-padding-xs">
            <p className="paragraph">DONE 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;

import React from "react";
import KanbanCard from "../KanbanCard/KanbanCard";

function KanbanBoard() {
  return (
    <div className="page-kanban-board">
      <div className="board-row">
        <div className="board-col">
          <div className="u-padding-xs u-margin-bottom-xxs">
            <p className="paragraph">BACKLOG 4</p>
          </div>
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
          <KanbanCard />
        </div>
        <div className="board-col">
          <div className="u-padding-xs u-margin-bottom-xxs">
            <p className="paragraph">SELECTED FOR DEVELOPMENT 2</p>
          </div>
          <KanbanCard />
        </div>
        <div className="board-col">
          <div className="u-padding-xs u-margin-bottom-xxs">
            <p className="paragraph">IN PROGRESS 1</p>
          </div>
          <KanbanCard />
        </div>
        <div className="board-col">
          <div className="u-padding-xs u-margin-bottom-xxs">
            <p className="paragraph">DONE 1</p>
          </div>
          <KanbanCard />
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;

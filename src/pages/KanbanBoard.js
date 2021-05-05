import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import BoardFilter from "../BoardFilter/BoardFilter";
import KanbanCard from "../KanbanCard/KanbanCard";

function KanbanBoard() {
  return (
    <div className="page-kanban-board">
      <div className="u-margin-bottom-small">
        <BreadCrumb />
      </div>
      <div className="u-margin-bottom-large">
        <h1 className="heading-primary">Kanban board</h1>
      </div>
      <BoardFilter />
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

import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import BoardFilter from "../BoardFilter/BoardFilter";
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import { kanbanCards } from "../DummyData";

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
        {kanbanCards
          .filter(({ category }) => category)
          .map(({ id, category }) => (
            <KanbanColumn key={id} cardCategory={category} />
          ))}
      </div>
    </div>
  );
}

export default KanbanBoard;

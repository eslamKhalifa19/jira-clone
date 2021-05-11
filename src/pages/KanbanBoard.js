import React, { useState, useEffect } from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import BoardFilter from "../BoardFilter/BoardFilter";
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import { cardColumns } from "../DummyData";
import KanbanBoardHeader from "../KanbanBoardHeader/KanbanBoardHeader";
import { DragDropContext } from "react-beautiful-dnd";

function KanbanBoard() {
  const [columns, setColumns] = useState(cardColumns);

  useEffect(() => {
    const data = localStorage.getItem("Cards");
    if (data) {
      setColumns(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Cards", JSON.stringify(columns));
  });

  function handleOnDragEnd(result) {
    if (!result) return;
    const items = Array.from(columns);

    const destinationColumn = items.find(
      (column) => column.id === result.destination.droppableId
    );
    const sourceColumn = items.find(
      (column) => column.id === result.source.droppableId
    );

    const [reorderedItem] = sourceColumn.issues.splice(result.source.index, 1);
    destinationColumn.issues.splice(result.destination.index, 0, reorderedItem);

    setColumns(items);
  }

  return (
    <div className="page-kanban-board">
      <div className="u-margin-bottom-small">
        <BreadCrumb />
      </div>
      <div className="u-margin-bottom-large">
        <h1 className="heading-primary">Kanban board</h1>
      </div>
      <BoardFilter />
      <div className="board-row-wrap">
        <KanbanBoardHeader columns={columns} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="board-row">
            {columns.map((column) => (
              <KanbanColumn key={column.id} column={column} />
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default KanbanBoard;

import React from "react";
import KanbanCard from "../KanbanCard/KanbanCard";
import { Droppable } from "react-beautiful-dnd";
// import { cardColumns } from "../DummyData";

const KanbanColumn = ({ column }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          className="board-col"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {column.issues.map(
            (
              {
                id,
                text,
                issueIcon,
                issueIconColor,
                issueIconDirection,
                AssigneeImage,
                category,
              },
              index
            ) => (
              <KanbanCard
                key={id}
                text={text}
                icon={issueIcon}
                color={issueIconColor}
                iconDirection={issueIconDirection}
                AssigneeImage={AssigneeImage}
                id={id}
                category={category}
                index={index}
              />
            )
          )}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default KanbanColumn;

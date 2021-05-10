import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./kanban-card.scss";
import KanbanCardIcon from "./KanbanCardIcon";
import KanbanCardImage from "./KanbanCardImage";

function KanbanCard({
  index,
  text,
  AssigneeImage,
  icon,
  color,
  iconDirection,
  id,
}) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="kanban-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="kanban-card__title">{text}</p>
          <div className="kanban-card__issue-info">
            <div className="kanban-card__issue-type">
              <KanbanCardIcon
                icon={icon}
                color={color}
                iconDirection={iconDirection}
              />
            </div>
            <div className="kanban-card__assignees">
              <KanbanCardImage src={AssigneeImage} />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default KanbanCard;

import React from "react";
import "./kanban-card.scss";
import KanbanCardIcon from "./KanbanCardIcon";
import KanbanCardImage from "./KanbanCardImage";

function KanbanCard({ text, AssigneeImage, icon, color, iconDirection }) {
  return (
    <div className="kanban-card">
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
  );
}

export default KanbanCard;

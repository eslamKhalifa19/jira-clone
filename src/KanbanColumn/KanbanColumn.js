import React from "react";
import { kanbanCards } from "../DummyData";
import KanbanCard from "../KanbanCard/KanbanCard";

const KanbanColumn = () => {
  return (
    <div className="board-col">
      {kanbanCards.map(
        ({
          id,
          text,
          issueIconColor,
          issueIcon,
          AssigneeImage,
          category,
          issueIconDirection,
        }) => (
          <KanbanCard
            key={id}
            text={text}
            icon={issueIcon}
            color={issueIconColor}
            iconDirection={issueIconDirection}
            AssigneeImage={AssigneeImage}
            category={category}
          />
        )
      )}
    </div>
  );
};

export default KanbanColumn;

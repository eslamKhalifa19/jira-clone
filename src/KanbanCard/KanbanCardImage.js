import React from "react";

const KanbanCardImage = ({ src }) => {
  return (
    <figure className="kanban-card__shape">
      <img src={src} alt="Profile Pic" className="kanban-card__img" />
    </figure>
  );
};

export default KanbanCardImage;

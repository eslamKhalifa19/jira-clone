import React from "react";

const KanbanCardIcon = ({ icon, color, iconDirection }) => {
  return (
    <>
      {icon == "check" ? (
        <div className="kanban-card__checkbox">
          <svg className="kanban-card__checkbox-icon">
            <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
          </svg>
        </div>
      ) : icon == "arrow" ? (
        <svg className={`kanban-card__icon-${icon} ${color}`}>
          <use
            xlinkHref={`./img/sprite.svg#icon-${icon}-${iconDirection} `}
          ></use>
        </svg>
      ) : (
        <svg className={`kanban-card__icon-${icon}`}>
          <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
        </svg>
      )}
    </>
  );
};

export default KanbanCardIcon;

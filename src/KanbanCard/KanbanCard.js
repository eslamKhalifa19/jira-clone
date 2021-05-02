import React from "react";
import "./kanban-card.scss";

function KanbanCard() {
  return (
    <div className="kanban-card">
      <p className="kanban-card__title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="kanban-card__issue-info">
        <div className="kanban-card__issue-type">
          <div className="kanban-card__checkbox">
            <svg className="kanban-card__checkbox-icon">
              <use xlinkHref="./img/sprite.svg#icon-check"></use>
            </svg>
          </div>
          <svg className="kanban-card__icon-bookmark">
            <use xlinkHref="./img/sprite.svg#icon-bookmark"></use>
          </svg>
          <svg className="kanban-card__icon-arrow kanban-card__icon-arrow--orange">
            <use xlinkHref="./img/sprite.svg#icon-arrow-up"></use>
          </svg>
          <svg className="kanban-card__icon-arrow kanban-card__icon-arrow--red">
            <use xlinkHref="./img/sprite.svg#icon-arrow-up"></use>
          </svg>
          <svg className="kanban-card__icon-arrow kanban-card__icon-arrow--green">
            <use xlinkHref="./img/sprite.svg#icon-arrow-down"></use>
          </svg>
        </div>
        <div className="kanban-card__assignees">
          <figure className="kanban-card__shape">
            <img
              src="./img/profile-pic--1.jpg"
              alt="Profile Pic"
              className="kanban-card__img"
            />
          </figure>
          <figure className="kanban-card__shape">
            <img
              src="./img/profile-pic--2.jpg"
              alt="Profile Pic"
              className="kanban-card__img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default KanbanCard;

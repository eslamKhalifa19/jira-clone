/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./dropdown.scss";

function DropDown({ options, label, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <label htmlFor="category" className="dropdown__label">
        {label}
      </label>
      <div className="dropdown" onClick={() => setOpen(!open)}>
        <div className="dropdown__bar ">
          <span>{selected.label}</span>
          <svg className="dropdown__icon-bar">
            <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
          </svg>
        </div>
        {open && (
          <div className="dropdown__menu ">
            <input
              type="text"
              className="dropdown__input"
              placeholder="Search"
            />
            <svg className="dropdown__icon-close">
              <use xlinkHref="./img/sprite.svg#icon-clear"></use>
            </svg>
            <div className="dropdown__select" onClick={() => setOpen(!open)}>
              {options.map((category) => {
                if (category.value === selected.value) {
                  return null;
                }

                return (
                  <div
                    className="dropdown__option"
                    key={category.value}
                    onClick={() => {
                      onSelectedChange(category);
                      setOpen(!open);
                    }}
                  >
                    {category.label}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;

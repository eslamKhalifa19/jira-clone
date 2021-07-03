/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from "react";
import "./dropdown.scss";
import DropDownIcon from "./DropDownIcon";
import DropDownImage from "./DropDownImage";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import DropDownItem from "./DropDownItem";
import SearchInput from "../SearchInput/SearchInput";
import { useSearch } from "../hooks/useSearch";
function DropDown({ options, label, selected, onSelectedChange }) {
  const ref = useRef();
  const { searchResults, handleChange, searchTerm, setSearchTerm } = useSearch(
    options,
    "label"
  );
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const handleClose = () => {
    setSearchTerm("");
  };

  if (!searchResults) return options;

  return (
    <div>
      <label htmlFor="label" className="dropdown__label">
        {label}
      </label>
      <div className="dropdown" ref={ref}>
        <div
          role="button"
          tabIndex={0}
          className="dropdown__bar"
          onClick={() => setOpen(!open)}
        >
          {selected.icon ? (
            <DropDownIcon icon={selected.icon} color={selected.color} />
          ) : selected.src ? (
            <DropDownImage src={selected.src} />
          ) : null}
          <span>{selected.label}</span>
          <svg className="dropdown__icon-bar">
            <use xlinkHref="./img/sprite.svg#icon-chevron-down"></use>
          </svg>
        </div>

        {open && (
          <div className="dropdown__menu ">
            <SearchInput
              handleChange={handleChange}
              searchTerm={searchTerm}
              icon={"clear"}
              handleOnClick={handleClose}
              searchClassName={"dropdown__input"}
              svgClassName={"dropdown__icon-close"}
              placeholder={"Search"}
            />
            <div
              role="button"
              tabIndex={0}
              className="dropdown__select"
              onClick={() => setOpen(!open)}
            >
              {searchResults.map((option) => {
                if (option.value === selected.value) {
                  return null;
                }
                return (
                  <DropDownItem
                    key={option.value}
                    option={option}
                    setOpen={setOpen}
                    open={open}
                    onSelectedChange={onSelectedChange}
                  />
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

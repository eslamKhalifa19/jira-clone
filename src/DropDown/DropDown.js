/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from "react";
import "./dropdown.scss";
import DropDownIcon from "./DropDownIcon";
import DropDownImage from "./DropDownImage";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import DropDownItem from "./DropDownItem";
function DropDown({ options, label, selected, onSelectedChange }) {
  const ref = useRef();

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    const results = options.filter((result) => {
      return result.label
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
    });

    setSearchResults(results);
  }, [options, searchTerm]);

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
          onKeyPress={() => setOpen(!open)}
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
            <input
              type="text"
              className="dropdown__input"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <svg className="dropdown__icon-close" onClick={handleClose}>
              <use xlinkHref="./img/sprite.svg#icon-clear"></use>
            </svg>
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

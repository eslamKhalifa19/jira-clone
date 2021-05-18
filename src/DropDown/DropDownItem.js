/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import DropDownIcon from "./DropDownIcon";
import DropDownImage from "./DropDownImage";
import "./dropdown.scss";

const DropDownItem = ({ option, setOpen, open, onSelectedChange }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="dropdown__option"
      key={option.value}
      onClick={() => {
        onSelectedChange(option);
        setOpen(!open);
      }}
    >
      {option.icon ? (
        <DropDownIcon icon={option.icon} color={option.color} />
      ) : option.src ? (
        <DropDownImage src={option.src} />
      ) : null}
      {option.label}
    </div>
  );
};

export default DropDownItem;

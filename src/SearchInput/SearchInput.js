import React from "react";

const SearchInput = ({
  searchTerm,
  handleChange,
  searchClassName,
  svgClassName,
  handleOnClick,
  icon,
  placeholder,
}) => {
  return (
    <>
      <svg className={svgClassName} onClick={handleOnClick}>
        <use xlinkHref={`./img/sprite.svg#icon-${icon}`}></use>
      </svg>
      <input
        onChange={handleChange}
        value={searchTerm}
        className={searchClassName}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default SearchInput;

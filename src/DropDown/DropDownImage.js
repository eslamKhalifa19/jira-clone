import React from "react";
import "./dropdown.scss";

const DropDownImage = ({ src }) => {
  return (
    <figure className="dropdown__shape">
      <img src={src} alt="Profile Picdropdown" className="dropdown__img" />
    </figure>
  );
};

export default DropDownImage;

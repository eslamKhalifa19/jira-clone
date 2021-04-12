import React from "react";
import "./search-error.scss";

function Drawer() {
  return (
    <div className="search-error">
      <img
        src="../img/search.png"
        alt="Search Error"
        className="search-error__image"
      />
      <div className="u-margin-bottom-small">
        <h2 className="heading-secondry">
          We couldnt find anything matching your search
        </h2>
      </div>
      <p className="paragraph">Try again with a different term.</p>
    </div>
  );
}

export default Drawer;

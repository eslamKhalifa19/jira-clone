import React from "react";
import "./loading-spinner.scss";

function LoadingSpinner() {
  return (
    <div className="loader">
      <svg className="loader__circular" viewBox="25 25 50 50">
        <circle
          className="loader__path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
}

export default LoadingSpinner;

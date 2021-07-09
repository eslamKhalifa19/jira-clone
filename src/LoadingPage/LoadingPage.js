import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./loading-page.scss";

function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="loading-page__loader">
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default LoadingPage;

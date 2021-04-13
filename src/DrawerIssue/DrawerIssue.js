import React from "react";
import "./drawer-issue.scss";
import IssueLink from "./IssueLink";
import DrawerSearchError from "../DrawerSearchError/DrawerSearchError";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
function DrawerIssue({ searchResults, loading }) {
  //console.log(searchResults);

  return (
    <ul className="drawer-issue">
      {!searchResults.length ? (
        <DrawerSearchError />
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        searchResults.map((searchResult) => (
          <IssueLink
            searchResult={searchResult}
            key={searchResult.id}
            loading={loading}
          />
        ))
      )}
    </ul>
  );
}

export default DrawerIssue;

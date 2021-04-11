import React from "react";
import "./drawer-issue.scss";
import IssueLink from "./IssueLink";
function DrawerIssue({ searchResults }) {
  //console.log(searchResults);
  return (
    <ul className="drawer-issue">
      {!searchResults.length ? (
        <h1>No Issue Found</h1>
      ) : (
        searchResults.map((searchResult) => (
          <IssueLink searchResult={searchResult} key={searchResult.id} />
        ))
      )}
    </ul>
  );
}

export default DrawerIssue;

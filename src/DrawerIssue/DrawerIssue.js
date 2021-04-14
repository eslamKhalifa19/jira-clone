import React from "react";
import "./drawer-issue.scss";
import IssueLink from "./IssueLink";
import DrawerSearchError from "../DrawerSearchError/DrawerSearchError";
function DrawerIssue({ searchResults }) {
  //console.log(searchResults);

  return (
    <ul className="drawer-issue">
      {!searchResults.length ? (
        <DrawerSearchError />
      ) : (
        searchResults.map((searchResult) => (
          <IssueLink searchResult={searchResult} key={searchResult.id} />
        ))
      )}
    </ul>
  );
}

export default DrawerIssue;

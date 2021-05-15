import React, { useState, useEffect } from "react";
import DrawerIssue from "../DrawerIssue/DrawerIssue";
import { createServer } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import BackDrop from "../BackDrop/BackDrop";

import "./drawer-search.scss";
import SearchInput from "../SearchInput/SearchInput";
import { useSearch } from "../hooks/useSearch";
const issues = [
  { id: uuidv4(), summary: "Walk the dog" },
  { id: uuidv4(), summary: "Take out the trash" },
  { id: uuidv4(), summary: "Work out" },
];

createServer({
  routes() {
    this.get("/api/issues", () => ({
      issues,
    }));
  },
});

function DrawerSearch() {
  const {
    searchResults,
    handleChange,
    searchTerm,
    setSearchResults,
  } = useSearch(issues, "summary");
  const [loading, setLoading] = useState(true);

  let history = useHistory();

  const handleClose = () => {
    history.push("/");
  };

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        const response = await fetch("/api/issues");
        const json = await response.json();
        setSearchResults(json.issues);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchResults();
  }, [setSearchResults]);

  if (!searchResults) return <h1>Data not available</h1>;

  return (
    <div>
      <BackDrop />
      <div className="drawer-search">
        <form className="drawer-search__container">
          <SearchInput
            handleChange={handleChange}
            searchTerm={searchTerm}
            icon={"search"}
            searchClassName={"drawer-search__input"}
            svgClassName={"drawer-search__input-icon"}
            placeholder={"Search issues by summary"}
          />
          <div className="drawer-search__loading">
            {loading ? <LoadingSpinner /> : null}
          </div>
        </form>
        <div className="u-margin-bottom-small">
          {searchResults.length ? (
            <h3 className="heading-tertiary">Recent Issues</h3>
          ) : null}
        </div>
        <DrawerIssue searchResults={searchResults} loading={loading} />
        <button onClick={handleClose} className="drawer-search__btn-close">
          <svg className="drawer-search__close-icon">
            <use xlinkHref="./img/sprite.svg#icon-clear"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DrawerSearch;

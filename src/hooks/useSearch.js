import { useState, useEffect } from "react";

export const useSearch = (data, summary) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const str = summary.replace(/['"]+/g, "");

    const results = data.filter((result) => {
      return result[str]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
    });

    setSearchResults(results);
  }, [data, searchTerm, summary]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return {
    searchResults,
    handleChange,
    searchTerm,
    setSearchResults,
    setSearchTerm,
  };
};

// import React, { useState } from "react";

import { useEffect, useRef } from "react";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    // console.log(inputEl.current)
    const callBack = (e) => {
      if (document.activeElement === inputEl) return;
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };
    document.addEventListener("keydown", callBack);
    return () => document.addEventListener("keydown", callBack);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;

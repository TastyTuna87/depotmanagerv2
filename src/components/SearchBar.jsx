import React from "react";

const SearchBar = ({ searchChange }) => {
  return (
    <>
      <input
        className="searchbar"
        type="search"
        placeholder="Search..."
        onChange={searchChange}
      />
    </>
  );
};

export default SearchBar;

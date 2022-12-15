import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ onTermSubmit, searchedValue, setSearchedValue }) => {
  const handleInput = (e) => {
    setSearchedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(searchedValue);
    setSearchedValue("");
  };
  return (
    <section className="search-wrapp">
      <h1>Search for movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchedValue}
          onChange={handleInput}
        />
      </form>
    </section>
  );
};

Search.propTypes = {
  onTermSubmit: PropTypes.func,
  searchedValue: PropTypes.string,
  setSearchedValue: PropTypes.func,
};

export default Search;

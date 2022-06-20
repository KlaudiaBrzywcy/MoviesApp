import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';


const Search = ({inputHandler, searchMovie}) => {
    return (
        <section className='search-wrapp'>
            <h1>Search for movies</h1>
            <input
              type="text"
              placeholder='Search for a movie...'
              className='search-input'
              onChange={inputHandler}
              onKeyPress={searchMovie}
            />
        </section>
    )
}

Search.propTypes = {
    inputHandler: PropTypes.func,
    searchMovie: PropTypes.func,
}

export default Search;

import React from 'react';
import './Search.css'


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

export default Search;

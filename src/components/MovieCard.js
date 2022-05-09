import React, {useState} from "react";
import './MovieCard.css';




const MovieCard = ({result, closeMovieCard}) => {

    
    return (
        <section className="movie-card">
            <div className="content">
                <h2>{result.Title}</h2>
                <h3>{result.imdbID}</h3> 
                <button className="close-card" onClick={() => closeMovieCard(result.imdbID)} >Close</button>
            </div>
        </section>
    )
} 

export default MovieCard;


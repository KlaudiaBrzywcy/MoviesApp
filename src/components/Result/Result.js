import React, {useState} from "react";
import './Result.css';

import MovieCard from "../MovieCard/MovieCard";



// TODO proptypes
const Result = ({result}) => {

    const [state, setState] = useState ({
       isOpen: false,

    });


    const openMovieCard = (id) => {

        console.log(id)
        setState(
        {isOpen: true}
        )

    }

    const closeMovieCard = (id) => {
        console.log(id)
        setState(
            {isOpen: false}
        )
   }



    return (
        <React.Fragment>
        <div className="result" onClick={ () => openMovieCard(result.imdbID)}>
            <div className="img-container">
            <img src={result.Poster} alt='Poster of selected movie' />
            </div>

            <h3>{result.Title}</h3>
            <div>
            <h4>{result.Year}</h4>
            </div>
        </div>
        {state.isOpen ? < MovieCard result={result} closeMovieCard ={closeMovieCard}/> : null}
        </React.Fragment>
    )
}

export default Result;

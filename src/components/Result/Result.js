import React, {useState} from "react";
import './Result.css';
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard/MovieCard";

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
            <div className="result-txt-container">
                <h3>{result.Title} ({result.Year})</h3>
            </div>
        </div>
        {state.isOpen ? < MovieCard result={result} closeMovieCard ={closeMovieCard}/> : null}
        </React.Fragment>
    )
}

Result.propTypes = {
    result: PropTypes.object,
}

export default Result;

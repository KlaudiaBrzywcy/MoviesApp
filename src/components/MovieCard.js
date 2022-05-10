import React, {useEffect, useState} from "react";
import './MovieCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {faImdb} from "@fortawesome/free-brands-svg-icons"
import axios from "axios";

const key = 'a82d2d62';
const URL = `http://www.omdbapi.com/?apikey=${key}`




const MovieCard = ({result, closeMovieCard}) => {

    const [state, setState] = useState ({
       isFetched: false,
       fetchData : [] 
    })
    
    useEffect(() => {
        axios.get(URL + '&i='+ `${result.imdbID}` + '&plot=full')
            .then(({data}) => {
                
                setState(prevState => {
                
                    return (
                      { fetchData : data, isFetched : true})
                  })

                  
            })
    }, []);

    console.log(state.fetchData, state.isFetched) 
    const {
        Title,
        Released,
        Genre,
        Plot,
        Poster,
        imdbRating
    } = state.fetchData;
    return (
        <section className="movie-card" >
            <div className="content">
                <div className="movie-card-text-container">
                <h2>{Title}</h2>
               
                <div className="rating-container">
                <span className="imdb-icon-span"><FontAwesomeIcon icon={faImdb} /></span>
                 <span className="number-rate">  rating:  {imdbRating}</span>

                </div> 
                
                <h4>Released: {Released}</h4>
                <p>{Plot}</p>
                <div className="genre-div">{Genre &&
                            Genre.split(', ').map(g => (
                                <span className="genre-span" key={g}>{g}</span>
                         ))
                    }
                </div>

                <button className="close-card" onClick={() => closeMovieCard(result.imdbID)} >Close</button>

                </div>
               
                <div className="movie-card-poster-container">
                    
                    <img src={Poster} alt="Poster of selected movie" />
                
                </div>
                
               
            </div>
        </section>
    )
} 

export default MovieCard;


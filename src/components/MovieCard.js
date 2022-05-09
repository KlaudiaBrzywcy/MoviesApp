import React, {useEffect, useState} from "react";
import './MovieCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
                <h2>{Title}</h2>
                {/* <h3>{result.imdbID}</h3> */}
                <div>
                <h3>Rating on IMDb:{imdbRating}</h3>
                <FontAwesomeIcon icon={faStar} />
                </div>
                
                <h3>Released: {Released}</h3>
                <div className="movie-card-poster-container">
                <img src={Poster} alt="Poster of selected movie" />
                </div>
                <p>{Plot}</p>
                <div>{Genre &&
                            Genre.split(', ').map(g => (
                                <span className="genre-span" key={g}>{g}</span>
                            ))}</div>

                
                
                
                <button className="close-card" onClick={() => closeMovieCard(result.imdbID)} >Close</button>
            </div>
        </section>
    )
} 

export default MovieCard;

// axios.get(URL + '&i='+ `${result.imdbID}`)
//         .then(({data}) => {
//             //  console.log(data.Title) 
             
//              console.log(data)
            
//             setState(prevState => {
                
//                 return (
//                   {...prevState, movieResults : data, isOpen: true})
//               })

              
//         })
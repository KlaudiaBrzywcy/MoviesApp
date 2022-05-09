import React, {useEffect, useState} from "react";
import './MovieCard.css';
import axios from "axios";

const key = 'a82d2d62';
const URL = `http://www.omdbapi.com/?apikey=${key}`




const MovieCard = ({result, closeMovieCard}) => {

    const [state, setState] = useState ({
       isFetched: false,
       fetchData : [] 
    })
    
    useEffect(() => {
        axios.get(URL + '&i='+ `${result.imdbID}`)
            .then(({data}) => {
                //  console.log(data.Title) 
                 
                // console.log(data)
                setState(prevState => {
                
                    return (
                      { fetchData : data, isFetched : true})
                  })

                  
            })
    }, []);

    console.log(state.fetchData, state.isFetched) 
    
    return (
        <section className="movie-card" >
            <div className="content">
                <h2>{state.fetchData.Title}</h2>
                <h3>{result.imdbID}</h3>
                <h4>{state.fetchData.Title}</h4>
                
                
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
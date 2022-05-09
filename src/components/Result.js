import React, {useState} from "react";
import './Result.css';
import axios from "axios";
import MovieCard from "./MovieCard";

// const openMovieCard = (id) => {
//     axios(URL + '&i=' + id).then(({data}) => {
//       let result = data;

//       this.setState(prevState => {
//         return {...prevState, selected : result}
//       })
//     })
      
//   }

// const closeMovieCard = () => {
//   this.setState(prevState => {
//     return {selected : {}}
//   })
// } 


const Result = ({result}) => {
    
    const [state, setState] = useState ({
       isOpen: false
    });

    
    const open = (id) => {
        console.log(id)
        setState(
        {isOpen: true}
        )
        console.log(state)

    }
    
    return (
        <React.Fragment>
        <div className="result" onClick={ () => open(result.imdbID)}>
            <div className="img-container">
            <img src={result.Poster} alt='Poster of selected movie' />
            </div>
           
            <h3>{result.Title}</h3>
            <div>
            <h4>{result.Year}</h4> 
            </div>    
        </div>
        {state.isOpen ? < MovieCard/> : null} 
        </React.Fragment>
    )
} 

export default Result;
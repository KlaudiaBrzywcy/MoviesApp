import React from "react";
import './MovieCard.css';

const MovieCard = () => {
    return (
        <section className="movie-card">
            <div className="content">
                <h2>COŚ</h2>
                <button className="close-card" >Close</button>
            </div>
        </section>
    )
} 

export default MovieCard;

// const MovieCard = ({selected, closeMovieCard}) => {
//     return (
//         <section>
//             <div className="content">
//                 <h2>{selected.Title}</h2>
//                 <button className="close-card" onClick = {closeMovieCard}>Close</button>
//             </div>
//         </section>
//     )
// } 
import React, {useState} from "react";
import './Top.css';
import MovieCard from "../MovieCard/MovieCard";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";



const ResultsTopComponent = ({resultsTop}) => {

    const [state, setState] = useState ({
        isOpen: false,
    });

    const openTopMovieCard = (id) => {
        console.log(id);
        setState(
            {isOpen: true}
        )

    }

   
    return (
        <section className="results-top">
            <table cellspacing="0" cellpadding="0">
            <tbody>
            {resultsTop.map(item => (
                <tr>
            <div className="result-top " key={item.id}>
                <div className="img-container-top">
                    <img src={item.image} alt='Poster of selected movie' />
                </div>
                <div className="txt-container-top">
                <h3>{item.title} ({item.year})  <span><FontAwesomeIcon icon={faStar} /></span> {item.imDbRating}</h3 >
                <h5> Crew: {item.crew}</h5>
                <button className="btn" onClick={()=> openTopMovieCard(item.id)}>Find out more</button>
                </div>
            </div>
            </tr> 
            ))}
            </tbody>
            </table>   
        </section>
    )
} 

export default ResultsTopComponent;
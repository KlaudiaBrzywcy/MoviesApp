import React from "react";
import './Top.css'



const ResultsTopComponent = ({resultsTop}) => {

    return (
        <section className="results-top">
            {resultsTop.map(item => ( 
            <div className="result-top" key={item.id}>
                <div className="img-container-top">
                    <img src={item.image} alt='Poster of selected movie' />
                </div>
                <h3>{item.title}</h3>
                <span>{item.imDbRating}</span>
                <div>
                    <h4>{item.year}</h4>
                    <h5>{item.crew}</h5>
                </div>
            </div>
            ))}
        </section>
    )
} 

export default ResultsTopComponent;
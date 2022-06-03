import React from "react";
import Result from "./Result/Result";
import { faGhost} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Results.css'

// TODO Move all components under proper folders

// const NoResults
// const ResultsList

// TODO add proptypes to all components
const Results = ({results}) => {

    return results === undefined ?  (
        <section className="results-undefined">
            <p> Couldn't find any movie. Please search again using another search criteria.</p>
            <p className="p-icon"><FontAwesomeIcon icon={faGhost} /></p>
        </section>
    ) : (
        <section className="results">
        {results.map(result => (
            <Result key = {result.imdbID} result={result} />
        ))}
    </section>
    )
}

export default Results;


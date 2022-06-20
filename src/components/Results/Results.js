import React from "react";
import PropTypes from 'prop-types';
import Result from '../Result/Result';
import { faGhost} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Results.css'

// TODO Move all components under proper folders

// const NoResults
// const ResultsList


const Results = ({results}) => {

    const NoResults = () => {
        return (
            <section className="results-undefined">
            <p> Couldn't find any movie. Please search again using another search criteria.</p>
            <p className="p-icon"><FontAwesomeIcon icon={faGhost} /></p>
        </section>
        )
    };

    const ResultsList = () => {
        return (
            <section className="results">
        {results.map(result => (
            <Result key = {result.imdbID} result={result} />
        ))}
        </section>
        )
    }

    return results === undefined ?  (
        <NoResults/>
    ) : (
       <ResultsList/>
    )
}

Results.propTypes = {
    results: PropTypes.object,
}

export default Results;


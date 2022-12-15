import React from "react";
import Result from "../Result/Result";
import PropTypes from "prop-types";
import NoResults from "./NoResults";

const ResultsList = ({ results }) => {
  return results === undefined ? (
    <NoResults />
  ) : (
    <section className="results">
      {results.map((result) => (
        <Result key={result.imdbID} result={result} />
      ))}
    </section>
  );
};

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
};

export default ResultsList;

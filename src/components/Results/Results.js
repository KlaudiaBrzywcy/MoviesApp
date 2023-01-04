import React from "react";
import PropTypes from "prop-types";
import ResultsList from "./ResultsList";
import "./Results.css";

const Results = ({ results }) => {
  return <ResultsList results={results} />;
};

Results.propTypes = {
  results: PropTypes.array,
};

export default Results;

import React, { useState } from "react";
import "./Result.css";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";

const Result = ({ result }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMovieCard = () => {
    setIsOpen(true);
  };

  const closeMovieCard = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="result" onClick={openMovieCard}>
        <div className="img-container">
          <img src={result.Poster} alt="Poster of selected movie" />
        </div>
        <div className="result-txt-container">
          <h3>
            {result.Title} ({result.Year})
          </h3>
        </div>
      </div>
      {isOpen ? (
        <MovieCard result={result} closeMovieCard={closeMovieCard} />
      ) : null}
    </>
  );
};

Result.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Result;

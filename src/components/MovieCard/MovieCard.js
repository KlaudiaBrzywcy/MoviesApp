import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import Loader from "../Loader";

const key = process.env.REACT_APP_IMDB_API_KEY;
const URL = `http://www.omdbapi.com/?apikey=${key}`;

const MovieCard = ({ result, closeMovieCard }) => {
  const [apiData, setApiData] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    axios
      .get(URL + "&i=" + `${result.imdbID}` + "&plot=full")
      .then(({ data }) => {
        setApiData(data);
        setIsFetched(true);
      });
  }, []);

  const { Title, Released, Genre, Plot, Poster, imdbRating } = apiData;

  return (
    <section className="movie-card">
      {isFetched ? (
        <div className="content">
          <div className="movie-card-text-container">
            <h2>{Title}</h2>
            <div className="rating-container">
              <span className="imdb-icon-span">
                <FontAwesomeIcon icon={faImdb} />
              </span>
              <span className="number-rate"> rating: {imdbRating}</span>
            </div>

            <h4>Released: {Released}</h4>
            <p>{Plot}</p>
            <div className="genre-div">
              {Genre &&
                Genre.split(", ").map((g) => (
                  <span className="genre-span" key={g}>
                    {g}
                  </span>
                ))}
            </div>
            <button className="close-card" onClick={closeMovieCard}>
              Close
            </button>
          </div>

          <div className="movie-card-poster-container">
            <img src={Poster} alt="Poster of selected movie" />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

MovieCard.propTypes = {
  result: PropTypes.object.isRequired,
  closeMovieCard: PropTypes.func.isRequired,
};

export default MovieCard;

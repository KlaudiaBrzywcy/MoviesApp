import React, { useState, useEffect } from "react";
import Search from "./Search";
import Results from "../Results/Results";
import Loader from "../Loader";
import ShowErr from "./ShowErr";
import StarterDiv from "./StarterDiv";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";

const key = process.env.REACT_APP_IMDB_API_KEY;
const URL = `http://www.omdbapi.com/?apikey=${key}`;

const ContainerSearch = () => {
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const [results, setResults] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");

  const onTermSubmit = (term) => {
    axios.get(`${URL}&s=${term}`).then(({ data }) => {
      let apiResults = data.Search;
      console.log(apiResults);
      console.log(typeof apiResults);
      setResults(apiResults);
      console.log(typeof results);
      console.log(results.length);
      setFetchSuccess(true);
    });
  };

  return (
    <main className="main">
      <Search
        onTermSubmit={onTermSubmit}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />

      {fetchSuccess ? <Results results={results} /> : <StarterDiv />}
    </main>
  );
};

export default ContainerSearch;

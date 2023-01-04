import React, { useState } from "react";
import Search from "./Search";
import Results from "../Results/Results";
import StarterDiv from "./StarterDiv";
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
      setResults(apiResults);
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

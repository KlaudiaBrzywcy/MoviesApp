import React from "react";
import axios from "axios";
import ResultsTopComponent from "./ResultsTopComponent";
import Loader from "../Loader";
import { useState, useEffect } from "react";

// Another api data for top 250 movies
const TOPURL = process.env.REACT_APP_TOP_URL;

const Top100 = () => {
  const [resultsTop, setResultsTop] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(TOPURL);
      setResultsTop(res.data.items);
    })();
  }, []);

  return (
    <main className="main">
      <h1>TOP Movies!</h1>
      {resultsTop.length === 0 ? (
        <Loader info={"Loading Top 250 movies..."} />
      ) : (
        <ResultsTopComponent resultsTop={resultsTop} />
      )}
    </main>
  );
};

export default Top100;

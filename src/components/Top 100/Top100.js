import axios from "axios";
import ResultsTopComponent from "./ResultsTopComponent";
import ShowErr from "../Error/ShowError";
import Loader from "../Loader";
import { useState, useEffect } from "react";

// Another api data for top 250 movies
const TOPURL = process.env.REACT_APP_TOP_URL;

const Top100 = () => {
  const [resultsTop, setResultsTop] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(TOPURL);
      setResultsTop(res.data.items);
    } catch (err) {
      console.log(err.message);
      setErrMsg(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main">
      <h1>TOP Movies!</h1>
      {resultsTop.length === 0 && errMsg === "" ? (
        <Loader info={"Loading Top 250 movies..."} />
      ) : (
        <ResultsTopComponent resultsTop={resultsTop} />
      )}
      {resultsTop.length === 0 && errMsg !== "" && <ShowErr errMsg={errMsg} />}
    </main>
  );
};

export default Top100;

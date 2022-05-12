import React from "react";

// Another api data for top 250 movies
const URL = `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_IMDB_API_KEY}`

const Top100 = () => {
    return (
        <div>
            <h1>TOP 100!</h1>
        </div>
    )
}

export default Top100;

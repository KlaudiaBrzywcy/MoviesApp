import React from "react";
import axios from "axios";
import './Top.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";



const ResultsTopComponent = ({resultsTop}) => {

    // const [link, setLink] = useState("");
    // const findOutMore = (id) => {
      
    //    axios.get(URL + `${id}`)
    //    .then( ({data}) => {
    //     console.log(data.imDb.url);    
    //  })
       
    // }

   
    return (
        <section className="results-top">
            <table cellspacing="0" cellpadding="0">
            <tbody>
            {resultsTop.map(item => (
            <tr key={item.id}>
                <div className="result-top " >
                    <div className="img-container-top">
                        <img src={item.image} alt='Poster of selected movie' />
                    </div>
                    <div className="txt-container-top">
                    <h3>{item.title} ({item.year})  <span><FontAwesomeIcon icon={faStar} /></span> {item.imDbRating}</h3 >
                    <h5> Crew: {item.crew}</h5>
                    <a href={`https://www.imdb.com/title/${item.id}/`} target="_blank">
                        <button className="btn">Find out more</button>
                    </a>
                    </div>
                </div>
            </tr> 
            ))}
            </tbody>
            </table>   
        </section>
    )
} 

export default ResultsTopComponent;

// import React, {useState} from "react";
// import './Top.css';
// import MovieCard from "../MovieCard/MovieCard";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faStar } from "@fortawesome/free-solid-svg-icons";



// const ResultsTopComponent = ({resultsTop}) => {

//     const [state, setState] = useState ({
//         isOpen: false,
//     });

//     const openTopMovieCard = (id) => {
//         console.log(id);
//         setState(
//             {isOpen: true}
//         )

//     }

   
//     return (
//         <section className="results-top">
//             <table cellspacing="0" cellpadding="0">
//             <tbody>
//             {resultsTop.map(item => (
//                 <tr>
//             <div className="result-top " key={item.id}>
//                 <div className="img-container-top">
//                     <img src={item.image} alt='Poster of selected movie' />
//                 </div>
//                 <div className="txt-container-top">
//                 <h3>{item.title} ({item.year})  <span><FontAwesomeIcon icon={faStar} /></span> {item.imDbRating}</h3 >
//                 <h5> Crew: {item.crew}</h5>
//                 <button className="btn" onClick={()=> openTopMovieCard(item.id)}>Find out more</button>
//                 </div>
//             </div>
//             </tr> 
//             ))}
//             </tbody>
//             </table>   
//         </section>
//     )
// } 

// export default ResultsTopComponent;
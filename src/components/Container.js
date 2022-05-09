import React, {useState} from "react";
import Search from './Search';
import Results from './Results';
import axios from "axios";


const key = 'a82d2d62';
const URL = `http://www.omdbapi.com/?apikey=${key}`

const Container = () => {

    const [state, setState] = useState ({
        searchedValue: '',
        results: [],
        
    });

    const searchMovie = (e) => {
        if(e.key === 'Enter') {
          axios.get(URL + '&s=' + state.searchedValue)
          .then(({data})=> {
            console.log(data)
            let results = data.Search;
    
            setState(prevState => {
              return {...prevState, results: results}
            })
          });
        } 
    } 
    
      const inputHandler = (e) => {
        let searchedValue = e.target.value;
    
        setState(prevState => {
          return{...prevState, searchedValue: searchedValue}
        });
    
        console.log(state.searchedValue)
    }
    

    return (
        <main className='main'>
        <Search inputHandler= {inputHandler} searchMovie={searchMovie}/>
        <Results results={state.results}/> 
      </main>
    )
}

export default Container;
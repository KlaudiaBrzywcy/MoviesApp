import React from "react";
import Search from './Search';
import Results from './Results';
import axios from "axios";
import Loader from "./Loader";
import ShowErr from "./ShowErr";
import StarterDiv from "./StarterDiv";
import MovieCard from "./MovieCard";


const key = 'a82d2d62';

const URL = `http://www.omdbapi.com/?apikey=${key}`

class ContainerClass extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            searchedValue: '',
            results: [],
            selected: {},
            fetchSuccess: false,
            searchIsDone: false,
            isPending : false  
        }
    }

    searchMovie = (e) => {
        if(e.key === 'Enter') {
          axios.get(URL + '&s=' + this.state.searchedValue)
          .then(({data})=> {
            console.log(data)
            let apiResults = data.Search;
            // let apiResponse =  data.Response
            // console.log(apiResults);
            // console.log(apiResponse)
            // True lub False
            
            this.setState(prevState => {
                
                return (
                  { results: apiResults, fetchSuccess : true, searchIsDone : true})
              })
            
          })
          .catch(err => {
            console.log(err)
          this.setState(prevState => {
            return (
              {fetchSuccess: false, searchIsDone : false} 
            )
          })
          console.log(this.state.fetchSuccess)
        })
        } 
    }

    inputHandler = (e) => {
        let searchedValue = e.target.value;
    
        this.setState(prevState => {
          return{ searchedValue: searchedValue}
        });
        // console.log(this.state.searchedValue)
    }


    render() {
      
        return(
          <main className='main'>
          <Search inputHandler= {this.inputHandler} searchMovie={this.searchMovie}/>  
          
          {(this.state.fetchSuccess && this.state.searchIsDone) ? <Results results={this.state.results} /> : <StarterDiv/> }
          {/* {(typeof this.state.selected.Title != 'undefined') ? <MovieCard selected={this.state.selected} closeMovieCard={this.closeMovieCard}/> : false} */}
          
          
        </main>
      )    
    }
}

export default ContainerClass;
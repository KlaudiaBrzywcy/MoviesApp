import React from "react";
import Search from './Search';
import Results from './Results';
import Loader from "./Loader";
import ShowErr from "./ShowErr";
import StarterDiv from "./StarterDiv";
import MovieCard from "./MovieCard/MovieCard";
import { fetchMovies } from '../api/fetchMovies';


// TODO rename this name
class ContainerClassSearch extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            searchedValue: '',
            results: [],

            // TODO do you need both fetchSuccess and fetchSuccess?
            fetchSuccess: false,
            searchIsDone: false,

            // TODO this is unused
            isPending : false
        }
    }

    searchMovie = (e) => {
        if(e.key === 'Enter') {
          fetchMovies(this.state.searchedValue)
          .then(({data})=> {
            // console.log(data)
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
            // TODO add error handling (e.g. show that something is broken)
            console.log(err)
          this.setState(prevState => {
            return (
              {fetchSuccess: false, searchIsDone : false}
            )
          })

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

          {(this.state.fetchSuccess && this.state.searchIsDone)
            ? <Results results={this.state.results} />
            : <StarterDiv/>
          }
        </main>
      )
    }
}

export default ContainerClassSearch;

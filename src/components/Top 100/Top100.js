import React from "react";
import axios from "axios";
import ResultsTopComponent from "./ResultsTopComponent";
import Loader from "../Loader";
import { LoadingManager } from "three";
// Another api data for top 250 movies

const URL = 'https://imdb-api.com/en/API/Top250Movies/k_jo69k1i5/'

class Top100 extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            resultsTop: [],
            fetchedTop: false
        } 

    } 

    componentDidMount(){
        axios.get(URL)
        .then(({data}) => {
            console.log(data)
            let apiResults = data.items;
            this.setState(
                
                { resultsTop : apiResults, fetchedTop:true }
                
            )
        })
    } 
   
    render() {
        return (
            <main className="main">
                <h1>TOP Movies!</h1>
                {this.state.resultsTop.length === 0 ?
                <Loader info={'Loading Top 250 movies...'}/> :
                <ResultsTopComponent resultsTop={this.state.resultsTop}/>
                }     
            </main>
        )
    }   
}

export default Top100;

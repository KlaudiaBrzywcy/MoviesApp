import axios from "axios";
import React from "react";
import ContainerClass from "./ContainerClass";

const key = 'a82d2d62';
 
class MovieCard extends React.Component {
    constructor (props) {

        super (props);

        this.state = {

            movieData : {}
        };

    }

    componentDidMount(){
        axios.get(
            `https://www.omdbapi.com/?apikey=${key}&i=${
                this.props.movieID
            }&plot=full`
        )
        .then(res => res.data)
        .then(res => {
            this.setState({movieData : res});
            console.log(res)
            
        })
    }

    render() {

        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbrating
        } = this.state.movieData

        return (
            <div className="movie-container">
                <img src={Poster} alt="" />
            </div>

        )
    }
}

export default MovieCard;
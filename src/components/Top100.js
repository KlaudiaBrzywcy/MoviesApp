import React from "react";
import axios from "axios";

// Another api data for top 250 movies
const URL = `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_IMDB_API_KEY}`

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
            // console.log(data)
            let apiResults = data.items;

            this.setState(prevState => {
                return(
                    { resultsTop : apiResults, fetchedTop:true }
                )
            })
        })
    } 
    // useEffect(() => {
    //      axios.get(URL)
    //          .then(({data}) => {
    //             //  console.log(data.items[0]) 
    //              let apiResults = data.items
    //              setState(prevState => {
    //                  return (
    //                    { resultsTop : apiResults, fetchedTop:true })
    //                }
    //              )
    //          }
    //     )          
    // }, []);
    render() {
        
        console.log(this.state.resultsTop) 
       

        return (
            <h1>TOP 100!</h1>
        )
    }
        // const {
        //     fullTitle,
        //     crew,
        //     id,
        //     imDbRating,
        //     imDbRatingCount,
        //     image,
        //     year
        // } = this.state.resultsTop
        
        // return (
        //     // <section className="top-100-section">
        //     //     <h1>TOP 100!</h1>
        //     //     {state.resultsTop.map(item => {
              
        //     //         console.log(item);    
        //     //     })}
        //     // </section>]
        //     console.log(coś)
        // )
    
   
}

export default Top100;

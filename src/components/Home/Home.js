import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import axios from 'axios';
import "./Home.css";
import NewVHS from "./NewVHS";


const arrivalURL = 'https://imdb-api.com/en/API/Trailer/k_jo69k1i5/tt2543164'

class Home extends React.Component {

    constructor(props){
        super(props);
        this.backgroundRef= React.createRef();
        this.canvasRef= React.createRef();
        this.state ={open:false, arrivalData: {}}
    }

    componentDidMount() {
      
        axios.get(arrivalURL).then((res)=>{
            console.log(res.data);
            this.setState({arrivalData: res.data});
            
        })
        
    }
   

    handleClick = () => {
        
        this.setState({open:true});
        const background = this.backgroundRef.current;
        const canvasRef = this.canvasRef.current;
        canvasRef.remove();
        background.style.height ='90vh';
        background.style.zIndex= '999';
        background.style.backgroundImage = 'url(https://s.studiobinder.com/wp-content/uploads/2010/03/Arrival-Video-Essay-How-to-Balance-Fear-and-Intrigue-WP.jpg)';
    }

    handleClose = () => {
        const background = this.backgroundRef.current;
        this.setState({open:false});
        background.style.backgroundImage = 'url(https://fandomwire.com/wp-content/uploads/2018/08/Movies-background.png)';
    }

    render() {
        return (
            <div ref={this.backgroundRef} className="home-container">
                {this.state.open ? 
                    <div className="txt-home-container">
                        <h1 className="arrival-header">Arrival</h1>
                        <p className="arrival-p">Linguistics professor Louise Banks leads an elite team of investigators when gigantic spaceships touchdown in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind. </p> 
                        <button className="arrival-btn close" onClick={this.handleClose}>Close</button> 
                        
                        <div className="trailer-container">
                            <iframe className="trailer" src={this.state.arrivalData.linkEmbed} title="video-player"></iframe>
                        </div>
                    </div> :
                    <React.Fragment>
                        <div className="txt-home-container">
                            <h1 className="home-header">Hi there!</h1>
                            <p>My favourite movie is </p> 
                            <button className="arrival-btn" onClick={this.handleClick}>"Arrival"</button> 
                            <p>Let's search for yours!</p>
                        </div>
                        <Canvas ref={this.canvasRef} className="canvas">
                            <OrbitControls enableZoom={false}/>
                            <ambientLight intensity= {0.5}/>
                            <directionalLight position= {[-2,5,2]} intensity={1}/>
                            <Suspense fallback={null}>
                                <NewVHS/>
                            </Suspense>
                        </Canvas>
                    </React.Fragment>
                }   
            </div>
        )
    }

    
} 

export default Home;

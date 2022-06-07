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
        console.log('click');
        this.setState({open:true});
        const background = this.backgroundRef.current;
        const canvasRef = this.canvasRef.current;
        canvasRef.remove();
        background.style.height ='90vh';
        background.style.zIndex= '999';
        background.style.backgroundImage = 'url(https://s.studiobinder.com/wp-content/uploads/2010/03/Arrival-Video-Essay-How-to-Balance-Fear-and-Intrigue-WP.jpg)';

    }

    render() {
        return (
            <div ref={this.backgroundRef} className="home-container">
                <div className="txt-home-container">
                    <h1 className="home-header">Hi there!</h1>
                    <p>My favourite movie is </p> 
                    <button className="arrival-btn" onClick={this.handleClick}>"Arrival"</button> 
                    <p>Let's search for yours!</p>
                    {this.state.open && 
                        <div className="trailer-container">
                            <iframe className="trailer" src={this.state.arrivalData.linkEmbed} title="video-player"></iframe>
                        </div>
                    }
                </div>
               
                <Canvas ref={this.canvasRef} className="canvas">
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity= {0.5}/>
                    <directionalLight position= {[-2,5,2]} intensity={1}/>
                    <Suspense fallback={null}>
                        <NewVHS/>
                    </Suspense>
                </Canvas>
               
            </div>
        )
    }

    
} 

export default Home;
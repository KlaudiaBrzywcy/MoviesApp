import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import { OrbitControls, DragControls } from "@react-three/drei";
import "./Home.css"
import Sphere  from "./AnimatedSphere";
import NewVHS from "./NewVHS";



const Home = () => {

    const handleClick = () => {
        console.log('click')
    }

    return (
        <div className="home-container">
            <div className="txt-home-container">
            <h1 className="home-header">Hi there!</h1>
            <p>My name is Klaudia and my favourite movie is <button onClick={handleClick}>Arrival</button> Let's search for yours!</p>
            </div>
            
            <Canvas className="canvas">
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

export default Home;
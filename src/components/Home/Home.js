import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import axios from "axios";
import "./Home.css";
import NewVHS from "./NewVHS";

const arrivalURL = process.env.REACT_APP_ARRIVAL_URL;

const Home = () => {
  const backgroundRef = useRef();
  const canvasRef = useRef();
  const [open, setOpen] = useState(false);
  const [arrivalData, setArrivalData] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(arrivalURL);
      setArrivalData(res.data);
    })();
  }, []);

  const handleClick = () => {
    setOpen(true);
    const background = backgroundRef.current;
    const canvas = canvasRef.current;
    canvas.remove();
    background.style.height = "90vh";
    background.style.zIndex = "999";
    background.style.backgroundImage =
      "url(https://s.studiobinder.com/wp-content/uploads/2010/03/Arrival-Video-Essay-How-to-Balance-Fear-and-Intrigue-WP.jpg)";
  };
  const handleClose = () => {
    const background = backgroundRef.current;
    setOpen(false);
    background.style.backgroundImage =
      "url(https://fandomwire.com/wp-content/uploads/2018/08/Movies-background.png)";
  };

  return (
    <div ref={backgroundRef} className="home-container">
      {open ? (
        <div className="txt-home-container">
          <h1 className="arrival-header">Arrival</h1>
          <p className="arrival-p">
            Linguistics professor Louise Banks leads an elite team of
            investigators when gigantic spaceships touchdown in 12 locations
            around the world. As nations teeter on the verge of global war,
            Banks and her crew must race against time to find a way to
            communicate with the extraterrestrial visitors. Hoping to unravel
            the mystery, she takes a chance that could threaten her life and
            quite possibly all of mankind.
          </p>
          <button className="arrival-btn close" onClick={handleClose}>
            Close
          </button>

          <div className="trailer-container">
            <iframe
              className="trailer"
              src={arrivalData.linkEmbed}
              title="video-player"
            ></iframe>
          </div>
          <div className="mobile-poster-container">
            <div className="poster-img-wrapper">
              <img
                className="poster"
                src="https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg"
                alt="movie poster"
              />
            </div>
            <a
              href={arrivalData.linkEmbed}
              target="_blank"
              className="trailer-btn arrival-btn"
              rel="noopener noreferrer"
            >
              Watch trailer
            </a>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="txt-home-container">
            <h1 className="home-header">Hi there!</h1>
            <p>My favourite movie is </p>
            <button className="arrival-btn" onClick={handleClick}>
              "Arrival"
            </button>
            <p>Let's search for yours!</p>
          </div>
          <div className="canvas-container">
            <Canvas ref={canvasRef} className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Suspense fallback={null}>
                <NewVHS size={4} />
              </Suspense>
            </Canvas>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;

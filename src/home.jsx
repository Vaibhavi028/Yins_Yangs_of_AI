import React from "react";
import video from './img/video.mp4';
import './style.css';
function Home() {
  return (
    <div className="bgContainer">
      <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="container">
          <h1 className="title">YIN AND YANG</h1>
          <h2 className="txt2">Of Social Media and AI</h2>
        </div>
    </div>
  );
}

export default Home;

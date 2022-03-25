import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

import spaceVideo from "../assets/space.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video" className="cover-video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h2>Погода во всех городах мира</h2>

        <div>
          <Link to="/weather" className="btn btn-main">
            Узнать погоду
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;

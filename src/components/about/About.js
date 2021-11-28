import React from "react";
import "./about.scss";
import Video from "../../video/nuke video.mp4";
export default function About() {
  return (
    <div className="aboutDiv">
      <h1>About Us</h1>
      <video
        controls
        autoPlay
        autostart="true"
        src={Video}
        type="video/mp4"
        width="500px"
        muted
      />
    </div>
  );
}

import React from "react";
import aero from "../../Assets/aero.mp4";

export const Home = () => {
  return (
    <div className="home flex container">
      <div className="Text">Travel for enough ,you meet yourself.</div>
      <div className="videoDiv flex">
        <video src={aero} autoPlay muted loop className="video" />
      </div>
    </div>
  );
};

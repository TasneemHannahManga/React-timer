import React, { useState } from "react";
import sounds from "../sounds";
import Sounds from "./Sounds";

function Soundtracks() {
  const [isZoomed, setZoom] = useState(false);
  const [forestRain, setForestRain] = useState(new Audio(sounds[0].source));
  const [thunderstorm, setThunderstorm] = useState(new Audio(sounds[1].source));
  const [fire, setFire] = useState(new Audio(sounds[2].source));

  function handleZoom() {
    setZoom(!isZoomed);
  }

  function playForestRain() {
    forestRain.play();
  }

  function pauseForestRain() {
    forestRain.pause();
  }

  return (
    <div
      style={{
        border: isZoomed ? "none" : "1px solid rgba(255, 255, 255, 0.18)",
      }}
      className="soundtrack-container"
    >
      {isZoomed ? (
        <div className="zoomed-sounds">
          <Sounds
            pause={() => {
              forestRain.pause();
            }}
            play={() => {
              forestRain.play();
            }}
            name={sounds[0].sound}
          />
          <hr />
          <Sounds
            pause={() => {
              thunderstorm.pause();
            }}
            play={() => {
              thunderstorm.play();
            }}
            name={sounds[1].sound}
          />
          <hr />
          <Sounds
            pause={() => {
              fire.pause();
            }}
            play={() => {
              fire.play();
            }}
            name={sounds[2].sound}
          />
          <button
            style={{
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              marginTop: "-15px",
              marginLeft: "80px",
            }}
            onClick={handleZoom}
            className="expand-sounds"
          >
            ▵
          </button>
        </div>
      ) : (
        <div className="choose-sound">
          <p className="sound-name">Choose Sound</p>
          <button onClick={handleZoom} className="expand-sounds">
            ▿
          </button>
        </div>
      )}
    </div>
  );
}

export default Soundtracks;

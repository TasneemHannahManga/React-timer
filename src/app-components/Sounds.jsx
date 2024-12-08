import React from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Sounds(props) {
  return (
    <div className="sound-name-container">
      <p className="sound-name"> {props.name}</p>
      <div className="sound-controls">
        <button onClick={props.pause} className="pause-play-sound">
          <PauseIcon fontSize="small" />
        </button>
        <button onClick={props.play} className="pause-play-sound">
          <PlayArrowIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default Sounds;

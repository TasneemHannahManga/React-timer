import React from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import Timer from "./Timer";

function Header(props) {
  return (
    <div className="header">
      <Timer />
      <div className="header-toggles">
        <button onClick={props.toggleFullscreen} className="fullscreen-button">
          {props.fullscreen ? (
            <FullscreenExitIcon htmlColor="white" fontSize="small" />
          ) : (
            <FullscreenIcon htmlColor="white" fontSize="small" />
          )}
        </button>
        <button onClick={props.toggleBackground} className="background-button">
          <WallpaperIcon htmlColor="white" fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default Header;

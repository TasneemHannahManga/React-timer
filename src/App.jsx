import React, { useState } from "react";
import Header from "./app-components/Header";
import backgrounds from "./backgrounds";
import Footer from "./app-components/Footer";

function App() {
  const [isFullscreen, setFullScreen] = useState(false);
  const [backgroundOrder, setBackgroundOrder] = useState(0);
  var elem = document.documentElement;

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url("${backgrounds[backgroundOrder].source}")`,
      }}
    >
      <Header
        fullscreen={isFullscreen}
        toggleFullscreen={() => {
          setFullScreen(!isFullscreen);
          isFullscreen ? closeFullscreen() : openFullscreen();
        }}
        toggleBackground={() => {
          backgroundOrder < 4
            ? setBackgroundOrder(backgroundOrder + 1)
            : setBackgroundOrder(0);
        }}
      />
      <Footer attr={backgrounds[backgroundOrder].attribution} />
    </div>
  );
}

export default App;

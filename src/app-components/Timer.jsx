import React, { useEffect, useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import Soundtracks from "./Soundtracks";

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const beeper = new Audio("audios/beep-beep-beep-beep-80262.mp3");

  function decreaseTime() {
    setTimeRemaining(timeRemaining > 2 * 60 ? timeRemaining - 60 : 60);
  }

  function increaseTime() {
    setTimeRemaining(timeRemaining < 30 * 60 ? timeRemaining + 60 : 30 * 60);
  }

  function startTimer() {
    setTimerIsRunning(true);
  }

  function stopTimer() {
    setTimerIsRunning(false);
  }

  function resetTimer() {
    setTimerIsRunning(false);
    setTimeRemaining(60);
  }

  useEffect(() => {
    let intervalId;
    if (timerIsRunning) {
      intervalId = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timerIsRunning, timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimerIsRunning(false);
      beeper.play();
    }
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <div className="timer-container">
      <div className="timer-start">
        <div className="timer">
          {!timerIsRunning ? (
            <button
              onClick={decreaseTime}
              className="time-button time-decrease"
            >
              -
            </button>
          ) : null}
          <p className="time">{`${minutes == 0 ? "00" : minutes} : ${
            seconds == 0 ? "00" : seconds
          }`}</p>
          {!timerIsRunning ? (
            <button
              onClick={increaseTime}
              className="time-button time-increase"
            >
              +
            </button>
          ) : null}
        </div>
        <div className="start-stop-reset-container">
          {!timerIsRunning ? (
            <button onClick={startTimer} className="start-stop-reset-button">
              <PlayArrowIcon fontSize="small" />
            </button>
          ) : (
            <button onClick={stopTimer} className="start-stop-reset-button">
              <PauseIcon fontSize="small" />
            </button>
          )}
          <button onClick={resetTimer} className="start-stop-reset-button">
            <ReplayIcon fontSize="small" />
          </button>
        </div>
      </div>
      <Soundtracks />
    </div>
  );
}

export default Timer;

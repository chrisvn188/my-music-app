import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { formatTime, checkIndex, randomNumberInRange } from "../utils";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  songs,
}) => {
  const audioRef = useRef(null);
  const [timeData, setTimeData] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    const playAudio = () => {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => audioRef.current.play())
          .catch((error) => console.log(error));
      }
    };
    if (isPlaying) {
      playAudio();
    }
  }, [isPlaying, currentSong]);

  const playSongHandler = async () => {
    if (isPlaying) {
      await audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      await audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime || 0;
    const duration = e.target.duration || 0;
    setTimeData((prevTimeData) => ({
      ...prevTimeData,
      currentTime,
      duration,
    }));
  };

  const changeInputHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTimeData((prevTimeData) => ({
      ...prevTimeData,
      currentTime: e.target.value,
    }));
  };

  const skipSongHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "step-forward") {
      setCurrentSong(songs[checkIndex(songs, currentIndex + 1)]);
      setIsPlaying(true);
    }
    if (direction === "step-backward") {
      setCurrentSong(songs[checkIndex(songs, currentIndex - 1)]);
      setIsPlaying(true);
    }
  };

  const playRandomSongHandler = () => {
    let randomIndex = randomNumberInRange(songs.length);
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    // play random song when current song ended
    if (randomIndex === currentIndex) {
      randomIndex = randomNumberInRange(songs.length);
    }
    setCurrentSong(songs[randomIndex]);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p className="start-time">{formatTime(timeData.currentTime)}</p>
        <input
          type="range"
          max={timeData.duration || 0}
          min={0}
          step={0.00001}
          value={timeData.currentTime || 0}
          onChange={changeInputHandler}
        />
        <p className="duration">{formatTime(timeData.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="step-backward"
          icon={faBackwardStep}
          size="1x"
          onClick={() => skipSongHandler("step-backward")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="pause"
          icon={isPlaying ? faPause : faPlay}
          size="1x"
        />
        <FontAwesomeIcon
          className="step-forward"
          icon={faForwardStep}
          size="1x"
          onClick={() => skipSongHandler("step-forward")}
        />
      </div>
      <audio
        onTimeUpdate={updateTimeHandler}
        onLoadedMetadata={updateTimeHandler}
        onEnded={playRandomSongHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
};

export default Player;

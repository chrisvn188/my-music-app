import { useState } from "react";
import "./styles/app.scss";
import { Song, Player, Library, Nav } from "./components";
import { getSongs } from "./utils";

function App() {
  const [songs] = useState(getSongs);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [replayStatus, setReplayStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus && "active"}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        songs={songs}
        replayStatus={replayStatus}
        setReplayStatus={setReplayStatus}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;

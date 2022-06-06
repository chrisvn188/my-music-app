import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  isPlaying,
  currentSong,
  setIsPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus && "active"}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              key={song.id}
              isPlaying={isPlaying}
              currentSong={currentSong}
              setIsPlaying={setIsPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;

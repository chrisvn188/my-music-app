const LibrarySong = ({ song, setCurrentSong, setIsPlaying, currentSong }) => {
  const selectLibrarySongHandler = () => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  return (
    <div
      className={`library-song ${song.id === currentSong.id && "active"}`}
      onClick={selectLibrarySongHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

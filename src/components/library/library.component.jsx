import React from "react";
import LibrarySong from "../library-song/library-song.component";
import "./library.styles.scss";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active" : ""}`}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          key={song.id}
          songs={songs}
          song={song}
          audioRef={audioRef}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setSongs={setSongs}
        />
      ))}
    </div>
  );
};
export default Library;

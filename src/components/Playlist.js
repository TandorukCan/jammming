import React from "react";
import Track from "./Track";

function Playlist({ playlists, changeTitle }) {
  const entries = Object.entries(playlists);
  const handleChange = (e) => {
    changeTitle(e);
    //here the values will change once the api is setup
  };

  return (
    <>
      <h1>Playlists</h1>
      <div>
        {entries.map((song) => {
          return (
            <>
              <input name={song[0]} onChange={handleChange} value={song[0]} />
              {song[1].map((x) => {
                return <Track track={x} />;
              })}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Playlist;

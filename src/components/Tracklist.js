import React, { useState } from "react";
import Track from "./Track";

function Tracklist({ tracks, onClick, onClickSave }) {
  const [playlist, setPlaylist] = useState("");
  const results = tracks.map((track) => {
    return <Track button={"-"} onClick={onClick} track={track} />;
  });
  return (
    <>
      <form
        onSubmit={(e) => {
          onClickSave(e);
          e.target.playlist.value = "";
        }}
      >
        <h1>Tracks:</h1>
        <input
          name="playlist"
          type="text"
          id="playlist"
          onChange={(e) => setPlaylist(e.target.value)}
        />
        <br />
        <button value={playlist}>Save To Spotify</button>
      </form>
      <section>{results}</section>
    </>
  );
}

export default Tracklist;

import React from "react";

function Track({ track, onClick, button }) {
  return (
    <div key={track.id}>
      <h3>{track.name}</h3>
      <span>{track.artist} || </span>
      <span>{track.album}</span>
      {button ? (
        <button
          value={[track.name, track.artist, track.album, track.id]}
          onClick={onClick}
        >
          {button}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Track;

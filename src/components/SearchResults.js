import React from "react";
import Track from "./Track";

function SearchResults({ searchResult, tracks, onClick, show }) {
  const results = tracks.filter((track) => {
    return track.name.toLowerCase().includes(searchResult);
  });
  const tracklist = results.map((track) => {
    return show && <Track button={"+"} onClick={onClick} track={track} />;
  });

  return <section>{searchResult && tracklist}</section>;
}

export default SearchResults;

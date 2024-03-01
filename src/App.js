import React, { useState, useEffect } from "react";
import Playlist from "./components/Playlist.js";
// import SearchBar from "./components/SearchBar.js";
import SearchResults from "./components/SearchResults.js";
import Tracklist from "./components/Tracklist.js";

//from Spotify

// var client_id = "6ed58107928c4959ba4c17b458193334";
// var redirect_uri = "http://localhost:3000/";

// var url = "https://accounts.spotify.com/authorize";
// url += "?response_type=token";
// url += "&client_id=" + client_id;
// url += "&redirect_uri=" + redirect_uri;

//

function App() {
  const [tracklist, setTracklist] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(true);
  const [playlists, setPlaylists] = useState({});
  const [searchResult, setSearchResult] = useState("");
  // const songUris = [
  //   "spotify:track:5n6RDaGFSN88oRWuGtYAIN",
  //   "spotify:track:3YuaBvuZqcwN3CEAyyoaei",
  //   "spotify:track:0hhcvWm3GgbCS7pVIs66WN",
  //   "spotify:track:3DjAzhKrzyEKxsSYSoKolW",
  //   "spotify:track:3dxiWIBVJRlqh9xk144rf4",
  // ];
  const tracks = [
    {
      name: "The Show Must Go On",
      artist: "Queen",
      album: "Innuendo",
      id: 1,
    },
    {
      name: "Like A Stone",
      artist: "Audioslave",
      album: "Audioslave",
      id: 2,
    },
    {
      name: "Reconciliation",
      artist: "Pain Of Salvation",
      album: "The Perfect Element Pt2",
      id: 3,
    },
    {
      name: "The Ties That Bind",
      artist: "Alter Bridge",
      album: "Blackbird",
      id: 4,
    },
    {
      name: "Breaking The Habit",
      artist: "Linkin Park",
      album: "Meteora",
      id: 5,
    },
  ];

  const addTrack = (e) => {
    e.preventDefault();
    const separatedArray = e.target.value.split(","); //isolating the name of the item
    let exists = false; //created a variable for checking whether an item is already in the tracklist

    //checks if the item is already in the tracklist
    for (let track of tracklist) {
      if (track.name === separatedArray[0]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      setTracklist((tracklist) => [
        {
          name: separatedArray[0],
          artist: separatedArray[1],
          album: separatedArray[2],
          id: separatedArray[3],
        },
        ...tracklist,
      ]);
    }
  };

  const removeTrack = (e) => {
    e.preventDefault();
    const trackName = e.target.value.split(",")[0];
    const newList = [];
    for (let track of tracklist) {
      if (track.name !== trackName) {
        newList.push(track);
      }
    }
    setTracklist(newList);
  };

  const savePlaylist = (e) => {
    setDisplaySearch(false);
    e.preventDefault();
    setPlaylists({
      ...playlists,
      [e.target.playlist.value]: tracklist,
    });
    //this is where the interaction with the spotify api will take place
    setTracklist([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(e.target.track.value);
    e.target.track.value = "";
    setDisplaySearch(true);
  };

  const changeTitle = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };
  useEffect(() => {
    // console.log(playlists);
  });

  return (
    <div className="App">
      <h1>Jammming</h1>
      {/* <SearchBar /> */}

      <form onSubmit={handleSearch}>
        <input id="track" type="text" name="track" />
        <br />
        <button>Search</button>
      </form>

      <SearchResults
        show={displaySearch}
        onClick={addTrack}
        tracks={tracks}
        searchResult={searchResult}
      />
      <Tracklist
        onClick={removeTrack}
        onClickSave={savePlaylist}
        tracks={tracklist}
      />
      <Playlist changeTitle={changeTitle} playlists={playlists} />
    </div>
  );
}

export default App;

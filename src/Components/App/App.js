import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Player from '../Player/Player';
import Search from "../Search/Search"
import Playlist from '../Playlist/Playlist';


function App() {

  const [searchResultsTracks, setSearchResultsTracks] = useState([
    {name: "Even Flow", artist: "Pearl Jam", album: "Ten", id:1},
    {name: "Oceans", artist: "Pearl Jam", album: "Live MTV Unplugged", id:2},
    {name: "Hunger Strike", artist: "Temple Of The Dog", album: "Temple Of The Dog", id:3}
])

  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrackToPlaylist (track) {
    if(playlistTracks.find(currentTracks => currentTracks.id === track.id)){
      return;
    }

    setPlaylistTracks([...playlistTracks, track]);
  }

  function removeTrack (track) {
    let trackList = playlistTracks;
    if(playlistTracks.find(currentTracks => currentTracks.id === track.id)){
      setPlaylistTracks(trackList.filter(song => song !== track))
    }
  }

  return (
    <div>
      <Player />
      <Search tracks={searchResultsTracks} onAdd={addTrackToPlaylist} onRemove={removeTrack}/>
      <Playlist playlistTracks={playlistTracks} onAdd={addTrackToPlaylist} onRemove={removeTrack}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

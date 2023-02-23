import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../Player/Player';
import Search from "../Search/Search"
import Playlist from '../Playlist/Playlist';


function App() {
  return (
    <div>
      <Player />
      <Search />
      <Playlist />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../Player/Player';
import Search from "../Search/Search"


function App() {
  return (
    <div>
      <Player />
      <Search />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

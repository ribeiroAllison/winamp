import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../Player/Player';


function App() {
  return (
    <div>
      <Player />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ReadingList from './readingList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ReadingList></ReadingList>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'typeface-roboto';
import NavBar from './components/NavBar'
import DinosaurListContainer from './components/DinosaurListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <h2>Welcome to this Dinosaur Database</h2>
      </header>
      <main className="Main">
        <DinosaurListContainer />
      </main>
    </div>
  );
}

export default App;

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
      </header>
      <main>
        <DinosaurListContainer/>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'typeface-roboto';
import NavBar from './components/NavBar'
import DinosaurListContainer from './components/DinosaurListContainer';
import { Route, Link } from "react-router-dom";
import DinosaurDetailsContainer from './components/DinosaurDetailsContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <br/>
        <h2>Welcome to this Dinosaur Database</h2>
        <Link to='/dinosaur'>Click Here To Acces Our Database</Link>
      </header>
      <main className="Main">
        <Route path='/dinosaur' exact component={DinosaurListContainer}/>
        <Route path='/dinosaur/:id' component={DinosaurDetailsContainer}/>
      </main>
    </div>
  );
}

export default App;

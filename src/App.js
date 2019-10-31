import React from 'react';
import './App.css';
import 'typeface-roboto';
import NavBar from './components/NavBar'
import DinosaurListContainer from './components/DinosaurListContainer';
import { Route } from "react-router-dom";
import DinosaurDetailsContainer from './components/DinosaurDetailsContainer';
import Home from './components/Home';
import CreateDinoContainer from './components/CreateDinoContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="Main">
        <Route path='/dinosaur' exact component={DinosaurListContainer}/>
        <Route path='/dinosaur/:id' component={DinosaurDetailsContainer}/>
        <Route path='/' exact component={Home}/>
        <Route path='/createdino' component={CreateDinoContainer}/>
      </main>
    </div>
  );
}

export default App;

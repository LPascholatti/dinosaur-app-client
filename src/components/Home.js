import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import CreateDinoContainer from './CreateDinoContainer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <main className="home">
        <h1>Welcome to this Dinosaur Database</h1>
        <Link to='/dinosaur'>Click Here To Acces Our Database</Link>
        <Route path='/createdino' component={CreateDinoContainer}/>
        <br/>
        <br/>
        <Link to='/createdino'>Add a New Dinosaur to the Database</Link>
        </main>
      </div>
    )
  }
}

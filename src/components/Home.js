import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Game from './Game'

export default class Home extends Component {
  render() {
    return (
      <div>
        <main className="home">
        <h1>Welcome to this Dinosaur Database</h1>
        <Link to='/dinosaur'>Click Here To Acces Our Database</Link>
        <Route path='/game' exact component={Game}/>
        <br/>
        <Link to='/game'>Game</Link>
        </main>
      </div>
    )
  }
}

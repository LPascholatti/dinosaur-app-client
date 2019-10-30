import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class DinosaurList extends Component {

  renderDinosaurs(dinosaur) {
    const { id, name, image, geological_era } = dinosaur
    return (
      <li key={id}>
        <img className="DinosaurListImages" alt={name} src={image} />
        <Link to={`dinosaur/${id}`}>
          <h3>{`${name}, from geological era: ${geological_era}.`}</h3>
        </Link>
      </li>
    )
  }

  render() {

    const { dinosaurs } = this.props

    const filterCretaceous = dinosaurs.filter(dinosaur => dinosaur.geological_era === 'CRETACEOUS')
    console.log("Filter1", filterCretaceous)

    return (
      <div className="dinosaurList">
        <main>
          {!dinosaurs && 'Loading...'}
          {dinosaurs &&
            <ul>{dinosaurs.map(this.renderDinosaurs)}</ul>
          }
          <Link to="/">Return</Link>
        </main>
        <footer className="dinosaurListFooter">
          <p>Choose a geological era:</p>
          <br />
          <br />
          <Button variant="contained" color="primary">
            Triassic
          </Button>
          <br />
          <Button variant="contained" color="primary">
            Jurassic
          </Button>
          <br />
          <Button variant="contained" color="primary">
            Cretaceous
          </Button>
        </footer>
      </div>
    )
  }
}

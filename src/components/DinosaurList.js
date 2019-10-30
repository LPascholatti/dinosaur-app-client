import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';

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

    return (
      <div className="dinosaurList">
        <Container maxWidth="sm">
        {!dinosaurs && 'Loading...'}
        {dinosaurs &&
          <ul>{dinosaurs.map(this.renderDinosaurs)}</ul>
        }
        <h2>Welcome to this Dinosaur Database</h2>
        </Container>
      </div>
    )
  }
}

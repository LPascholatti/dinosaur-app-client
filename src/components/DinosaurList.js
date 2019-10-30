import React, { Component } from 'react'

export default class DinosaurList extends Component {

  renderDinosaurs(dinosaur) {
    const { id, name, image, geological_era } = dinosaur
    return (
      <li key={id}>
        <p>{`${name} from geological era: ${geological_era}`}</p>
        <img className="DinosaurListImages" alt={name} src={image}/>
      </li>
    )
  }

  render() {

    const { dinosaurs } = this.props

    return (
      <div className="dinosaurList">
        <h2>List of Dinosaurs by Geological Era</h2>
        {!dinosaurs && 'Loading...'}
        {dinosaurs &&
          <ul>{dinosaurs.map(this.renderDinosaurs)}</ul>
        }
      </div>
    )
  }
}

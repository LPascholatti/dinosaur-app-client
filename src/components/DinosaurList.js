import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class DinosaurList extends Component {

  state = {
    era: ''
  }

  renderDinosaurs(dinosaur) {
    const { id, name, image, geological_era } = dinosaur;
    return (
      <li key={id}>
        <img className="DinosaurListImages" alt={name} src={image} />
        <Link to={`dinosaur/${id}`}>
          <Button variant="contained" color="primary">
            {`${name}, from geological era: ${geological_era}.`}
          </Button>
        </Link>
      </li>
    );
  }

  render() {
    const { dinosaurs } = this.props;

    const filterMax = dinosaur => {
      
      const filterCretaceous = dinosaurs.filter(
        dinosaur => dinosaur.geological_era === "CRETACEOUS"
      );
      console.log("Filter1", filterCretaceous);
      const filterJurassic = dinosaurs.filter(
        dinosaur => dinosaur.geological_era === "JURASSIC"
      );
      console.log("Filter2", filterJurassic);
      const filterTriassic = dinosaurs.filter(
        dinosaur => dinosaur.geological_era === "TRIASSIC"
      );
      console.log("Filter3", filterTriassic);

      const mapDinos = dinosaurs.map(this.renderDinosaurs);
      console.log("", mapDinos);

      switch (dinosaur) {
        case "CRETACEOUS":
          return filterCretaceous.map(this.renderDinosaurs);
        case "JURASSIC":
          return filterJurassic.map(this.renderDinosaurs);
        case "TRIASSIC":
          return filterTriassic.map(this.renderDinosaurs);
        default:
          return mapDinos;
      }
    };

    const attributeEra = (name) => {
      this.setState({era: name}) 
    }

    console.log("test", filterMax("CRETACEOUS"));

    return (
      <div className="dinosaurList">
        <main>
          {!dinosaurs && "Loading..."}
          {dinosaurs && <ul>{filterMax(this.state.era)}</ul>}
        </main>
        <footer className="dinosaurListFooter">
          <p>Choose a geological era:</p>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => attributeEra('TRIASSIC')}
          >
            Triassic
          </Button>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => attributeEra('JURASSIC')}
          >
            Jurassic
          </Button>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => attributeEra('CRETACEOUS')}
          >
            Cretaceous
          </Button>
          <Link to="/">
            <Button variant="contained" color="primary">
              Return
            </Button>
          </Link>
        </footer>
      </div>
    );
  }
}

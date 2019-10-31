import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import CreateDinoContainer from "./CreateDinoContainer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <main className="home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Pangea_animation_03.gif" alt="pangea"/>
          <h1>Welcome to this Dinosaur Database</h1>
          <Link to="/dinosaur">Click Here To Acces Our Database</Link>
          <Route path="/createdino" component={CreateDinoContainer} />
          <br />
          <br />
          <Link to="/createdino">Add a New Dinosaur to the Database</Link>
          <br />
          <br />
          <h2>Geological Eras</h2>
          <img
            src="https://www.radford.edu/jtso/GeologyofVirginia/Photos/Fossils/ErasNew.png"
            alt="geological_eras"
          />
          <p>
            A geologic era is a subdivision of geologic time that divides an eon
            into smaller units of time. The Phanerozoic Eon is divided into
            three such time frames: the Paleozoic, Mesozoic, and Cenozoic
            (meaning "old life", "middle life" and "recent life") that represent
            the major stages in the macroscopic fossil record. These eras are
            separated by catastrophic extinction boundaries, the P-T boundary
            between the Paleozoic and the Mesozoic and the K-Pg boundary between
            the Mesozoic and the Cenozoic. There is evidence that catastrophic
            meteorite impacts played a role in demarcating the differences
            between the eras.
          </p>
          <h3>Dinossaurs existed in the Mesozoic era</h3>
          <img
            src="https://www.radford.edu/jtso/GeologyofVirginia/Photos/Fossils/PeriodsNew.png"
            alt="erasDetails"
          />
          <h4>The Mesozoic era is divided in three:</h4>
          <div className="erasList">
            <ul>
              <li>Triassic</li>
              <li>Jurassic</li>
              <li>Cretaceous</li>
            </ul>
            <i>
              The Mesozoic Era is an interval of geological time from about 252
              to 66 million years ago. It is also called the Age of Reptiles and
              the Age of Conifers. The Mesozoic ("middle life") is one of three
              geologic eras of the Phanerozoic Eon, preceded by the Paleozoic
              ("ancient life") and succeeded by the Cenozoic ("new life"). The
              era is subdivided into three major periods: the Triassic,
              Jurassic, and Cretaceous, which are further subdivided into a
              number of epochs and stages.
            </i>
            <br />
            <br />
            <img
              id="mesozoic"
              src="https://steemitimages.com/p/C3TZR1g81UNaPs7vzNXHueW5ZM76DSHWEY7onmfLxcK2iQCvQKfMqdRoT8MtbGebR67Ziez1TCbBdLKEJBksGuoTPCkP8JQZ7bh5rcqTNKQwpT4DKWSCRmg?format=match&mode=fit"
              alt="mesozoicArt"
            />
          </div>
        </main>
      </div>
    );
  }
}

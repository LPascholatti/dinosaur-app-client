import React from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function DinosaurDetails(props) {

  const {name, description, image, region, weight, height, geological_era} = props.dinosaur

  return (
    <div className="dinosaurDetails">
      <h1>{`${name}`}</h1>
      <img className="imageDetail" alt={name} src={image}></img>
      <p>
        {!description && "Loading..."}
        {`Description: ${description}`}
      </p>
      <i>{`Found in ${region} with a weight of ${weight} and height of ${height}. 
      This dinosaur populated the planet in the ${geological_era} era.`}</i>
      <br/>
      <br/>
      <Link to="/dinosaur"><Button variant="contained" color="primary"> Return </Button></Link>
    </div>
  )
}

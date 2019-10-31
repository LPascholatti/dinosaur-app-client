import React from "react";
import { Link } from "react-router-dom";

export default function CreateDinoForm(props) {
  const { onSubmit, onChange, values } = props;

  return (
    <div className="createDinoForm">
      <form onSubmit={onSubmit}>
        <h3>Add Dinos to the Database</h3>

        <img
          src="https://media.giphy.com/media/cjaLRtuG1RKSc/giphy.gif"
          alt="gifCreate"
        />
        <br/>
        <br/>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="name"
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={onChange}
            value={values.eventDescription}
            placeholder="description"
          />
        </label>
        <br />
        <label>
          Image(url):
          <input
            type="text"
            name="image"
            onChange={onChange}
            value={values.image}
            placeholder="image url"
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            onChange={onChange}
            value={values.weight}
            placeholder="Weight"
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="number"
            name="height"
            onChange={onChange}
            value={values.weight}
            placeholder="Height"
          />
        </label>
        <br />
        <label>
          Region:
          <input
            type="text"
            name="region"
            onChange={onChange}
            value={values.region}
            placeholder="region"
          />
        </label>
        <br />
        <label>
          Geological Era:
          <select>
            <option value="JURASSIC">JURASSIC</option>
            <option value="TRIASSIC">TRIASSIC</option>
            <option value="CRETACEOUS">CRETACEOUS</option>
          </select>
        </label>
        <input type="submit" />
      </form>
      <Link to="/">Return</Link>
    </div>
  );
}

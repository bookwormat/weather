import React from 'react';

const Locations = (props) =>
  <ul>
    {props.locations.map(location =>
      <li key={location.name}>
        <button type="button" onClick={() => props.activateLocation(location)}>{location.name}</button>
      </li>
    )}
    <hr />
    <li>
      <button type="button" onClick={() => props.clearLocation()}>Clear</button>
    </li>
  </ul>;

export default Locations;
import React from 'react';

const AvailableLocations = (props) =>
  <ul>
    {props.availableLocations.map(location =>
      <li key={location.name}>
        <button type="button" onClick={() => props.activateLocation(location)}>{location.name}</button>
      </li>
    )}
    <hr/>
    <li>
      <button type="button" onClick={() => props.clearLocation()}>Clear</button>
    </li>
  </ul>;

export default AvailableLocations;
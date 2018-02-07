import React from 'react';

const ActiveLocation = (props) =>
  <div>
    {props.activeLocation && <h1>Weather in {props.activeLocation.name}</h1>}
  </div>;

  export default ActiveLocation;
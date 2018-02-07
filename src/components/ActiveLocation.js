import React from 'react';

const ActiveLocation = ({activeLocation}) =>
  <div>
    {activeLocation && <h1>Weather in {activeLocation.name}</h1>}
  </div>;

export default ActiveLocation;
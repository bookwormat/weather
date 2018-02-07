import React from 'react';

const WeatherDetails = (props) =>
  <div>
    {props.loading && <p>loading...</p>}
    {props.error && <p>ERROR!{props.error.message}</p>}
    {props.current && <p>Last update: {props.current.current_observation.observation_time_rfc822}</p>}
    {props.current && <p>Wind: {props.current.current_observation.wind_degrees}</p>}
  </div>;

  export default WeatherDetails;

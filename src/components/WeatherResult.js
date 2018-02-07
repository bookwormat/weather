import React from 'react';
import {connect} from "react-redux";

const WeatherResult = (props) =>
  <div>
    {props.activeLocation && <h1>Weather in {props.activeLocation.name}</h1>}
    {props.loading && <p>loading...</p>}
    {props.error && <p>ERROR!{props.error.message}</p>}
    {props.current && <p>Last update: {props.current.current_observation.observation_time_rfc822}</p>}
    {props.current && <p>Wind: {props.current.current_observation.wind_degrees}</p>}
  </div>;


const mapStateToProps = (state) =>
  state;

export default connect(mapStateToProps)(WeatherResult);

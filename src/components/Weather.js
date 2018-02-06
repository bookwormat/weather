import React from 'react';
import {connect} from 'react-redux';
import {fetchWeatherAction} from "../actions";

const Weather = (props) =>
  <div>
    <Locations {...props} />
    <WeatherDetails {...props} />
  </div>;

const Locations = (props) =>
  <ul>
    {props.locations.map(location =>
      <li key={location.city}>
        {location.city}
        <button type="button" onClick={() => props.loadWeather(location)}>Load</button>
      </li>
    )}
  </ul>;

const WeatherDetails = (props) =>
  <div>
    {props.loading && <p>loading...</p>}
    {props.error && <p>ERROR!</p>}
    {props.current && <p>Last update: {props.current.current_observation.observation_time_rfc822}</p>}
    {props.current && <p>Wind: {props.current.current_observation.wind_degrees}</p>}
  </div>;

const mapStateToProps = (state) =>
  state;


const mapDispatch = (dispatch) => ({
  loadWeather: (location) => dispatch(fetchWeatherAction(location)),
});

export default connect(mapStateToProps, mapDispatch)(Weather);

import React from 'react';
import {connect} from 'react-redux';
import {activateLocationAction, clearLocationAction} from "../actions";

const Weather = (props) =>
  <div>
    <Locations {...props} />
    <ActiveLocation {...props} />
    <WeatherDetails {...props} />
  </div>;

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

const ActiveLocation = (props) =>
  <div>
    {props.activeLocation && <h1>Weather in {props.activeLocation.name}</h1>}
  </div>;

const WeatherDetails = (props) =>
  <div>
    {props.loading && <p>loading...</p>}
    {props.error && <p>ERROR!{props.error.message}</p>}
    {props.current && <p>Last update: {props.current.current_observation.observation_time_rfc822}</p>}
    {props.current && <p>Wind: {props.current.current_observation.wind_degrees}</p>}
  </div>;

const mapStateToProps = (state) =>
  state;

const mapDispatch = (dispatch) => ({
  activateLocation: (location) => dispatch(activateLocationAction(location)),
  clearLocation: () => dispatch(clearLocationAction()),
});

export default connect(mapStateToProps, mapDispatch)(Weather);

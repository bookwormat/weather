import React from 'react';
import {connect} from 'react-redux';
import {fetchWeatherAction} from "../actions";

const Weather = (props) => {
  return (
    <div>
      <Locations {...props} />
      <WeatherDetails {...props} />
    </div>
  );
};

const Locations = (props) => {
  return (
    <ul>
      {props.locations.map(location =>
        <li key={location.city}>
          {location.city}
          <button type="button" onClick={() => props.loadWeather(location)}>Load</button>
        </li>
      )}
    </ul>
  );
};

const WeatherDetails = (props) => {
  return (
    <div>
      {props.loading && <p>loading...</p>}
      {props.error && <p>ERROR!</p>}
      {props.current && <p>Last update: {props.current.current_observation.observation_time_rfc822}</p>}
      {props.current && <p>Wind: {props.current.current_observation.wind_degrees}</p>}

    </div>
  )
};

const mapStateToProps = (state) => {
  return state;
};


const mapDispatch = (dispatch) => ({
  loadWeather: (location) => dispatch(fetchWeatherAction(location)),
});

export default connect(mapStateToProps, mapDispatch)(Weather);

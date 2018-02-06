import React from 'react';
import {connect} from 'react-redux';
import {clear, loadWeather} from "../actions";


const Weather = (props) => {
  return (
    <div>
      <Locations {...props} />
      <WeatherDetails />
    </div>
  );
};

const Locations = (props) => {
  return (
    <ul>
      {props.locations.map(location =>
        <li key={location.city}>
          {location.city}
          <button type="button" onClick={() => props.loadWeather()}>Load</button>
        </li>
      )}
      <li key={clear}>
        <button type="button" onClick={() => props.clear()}>Clear</button>
      </li>
    </ul>
  );
};

const WeatherDetails = (props) => {
  return <pre><code>{JSON.stringify(props, null, 2)}</code></pre>;
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
  return {
    loadWeather: () => dispatch(loadWeather()),
    clear: () => dispatch(clear()),
  }
};

export default connect(mapStateToProps, mapDispatch)(Weather);

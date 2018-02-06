import React from 'react';
import {connect} from 'react-redux';
import {clear, loadWeather} from "../actions";


const Weather = (props) => {
  return (
    <div>
      <button type="button" onClick={props.loadWeather}>Load Weather</button>
      <button type="button" onClick={props.clear}>Clear</button>
      <WeatherDetails {...props} />
    </div>
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

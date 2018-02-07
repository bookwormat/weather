import React from 'react';
import {connect} from 'react-redux';
import {activateLocationAction, clearLocationAction} from "../actions";
import Locations from "./Locations";
import ActiveLocation from "./ActiveLocation";
import WeatherDetails from "./WeatherDetails";

const Weather = (props) =>
  <div>
    <Locations {...props} />
    <ActiveLocation {...props} />
    <WeatherDetails {...props} />
  </div>;

const mapStateToProps = (state) =>
  state;

const mapDispatch = (dispatch) => ({
  activateLocation: (location) => dispatch(activateLocationAction(location)),
  clearLocation: () => dispatch(clearLocationAction()),
});

export default connect(mapStateToProps, mapDispatch)(Weather);

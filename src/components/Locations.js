import React from 'react';
import {connect} from "react-redux";
import ActiveLocation from "./ActiveLocation";
import {activateLocationAction, clearLocationAction} from "../actions";
import AvailableLocations from "./AvailableLocations";

const Locations = (props) =>
  <div>
    <AvailableLocations {...props} />
    <ActiveLocation {...props} />
  </div>

const mapStateToProps = (state) => ({
  availableLocations: state.locations.availableLocations,
  activeLocation: state.locations.activeLocation,
});

const mapDispatch = (dispatch) => ({
  activateLocation: (location) => dispatch(activateLocationAction(location)),
  clearLocation: () => dispatch(clearLocationAction()),
});

export default connect(mapStateToProps, mapDispatch)(Locations);

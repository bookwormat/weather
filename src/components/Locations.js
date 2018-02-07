import React from 'react';
import {connect} from "react-redux";
import {activateLocationAction, clearLocationAction} from "../actions";


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


const mapStateToProps = (state) => ({
  locations: state.locations
});

const mapDispatch = (dispatch) => ({
  activateLocation: (location) => dispatch(activateLocationAction(location)),
  clearLocation: () => dispatch(clearLocationAction()),
});

export default connect(mapStateToProps, mapDispatch)(Locations);

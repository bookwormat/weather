import React from 'react';
import {connect} from "react-redux";

const ActiveLocation = (props) =>
  <div>
    {props.activeLocation && <h1>Weather in {props.activeLocation.name}</h1>}
  </div>;

const mapStateToProps = (state) => ({
  activeLocation: state.activeLocation,
});

export default connect(mapStateToProps)(ActiveLocation);

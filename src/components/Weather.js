import React from 'react';
import {connect} from 'react-redux';


const Weather = (props) => {
  return <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Weather);
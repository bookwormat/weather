import React from 'react';
import Locations from "./Locations";
import WeatherResult from "./WeatherResult";

const WeatherPage = (props) =>
  <div>
    <Locations />
    <WeatherResult />
  </div>;

export default WeatherPage;

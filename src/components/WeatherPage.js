import React from 'react';
import Locations from "./Locations";
import WeatherResult from "./WeatherResult";
import ActiveLocation from "./ActiveLocation";

const WeatherPage = () =>
  <div>
    <Locations />
    <ActiveLocation />
    <WeatherResult />
  </div>;

export default WeatherPage;

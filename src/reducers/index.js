import {CLEAR_WEATHER, LOAD_WEATHER} from "../actions";

const sampleWeather = {
  "current_observation": {
    "image": {
      "url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
      "title":"Weather Underground",
      "link":"http://www.wunderground.com"
    },
    "display_location": {
      "full":"San Francisco, CA",
      "city":"San Francisco",
      "state":"CA",
      "state_name":"California",
      "country":"US",
      "country_iso3166":"US",
      "zip":"94102",
      "magic":"1",
      "wmo":"99999",
      "latitude":"37.77999878",
      "longitude":"-122.41999817",
      "elevation":"60.0"
    },
    "observation_location": {
      "full":"SOMA, San Francisco, California",
      "city":"SOMA, San Francisco",
      "state":"California",
      "country":"US",
      "country_iso3166":"US",
      "latitude":"37.778488",
      "longitude":"-122.408005",
      "elevation":"23 ft"
    },
    "estimated": {
    },
    "station_id":"KCASANFR131",
    "observation_time":"Last Updated on February 6, 4:35 AM PST",
    "observation_time_rfc822":"Tue, 06 Feb 2018 04:35:43 -0800",
    "observation_epoch":"1517920543",
    "local_time_rfc822":"Tue, 06 Feb 2018 04:35:52 -0800",
    "local_epoch":"1517920552",
    "local_tz_short":"PST",
    "local_tz_long":"America/Los_Angeles",
    "local_tz_offset":"-0800",
    "weather":"Clear",
    "temperature_string":"53.7 F (12.1 C)",
    "temp_f":53.7,
    "temp_c":12.1,
    "relative_humidity":"79%",
    "wind_string":"Calm",
    "wind_dir":"North",
    "wind_degrees":-9999,
    "wind_mph":0.0,
    "wind_gust_mph":0,
    "wind_kph":0,
    "wind_gust_kph":0,
    "pressure_mb":"1016",
    "pressure_in":"30.02",
    "pressure_trend":"0",
    "dewpoint_string":"47 F (8 C)",
    "dewpoint_f":47,
    "dewpoint_c":8,
    "heat_index_string":"NA",
    "heat_index_f":"NA",
    "heat_index_c":"NA",
    "windchill_string":"NA",
    "windchill_f":"NA",
    "windchill_c":"NA",
    "feelslike_string":"53.7 F (12.1 C)",
    "feelslike_f":"53.7",
    "feelslike_c":"12.1",
    "visibility_mi":"10.0",
    "visibility_km":"16.1",
    "solarradiation":"0",
    "UV":"0.0","precip_1hr_string":"0.00 in ( 0 mm)",
    "precip_1hr_in":"0.00",
    "precip_1hr_metric":" 0",
    "precip_today_string":"0.00 in (0 mm)",
    "precip_today_in":"0.00",
    "precip_today_metric":"0",
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "forecast_url":"http://www.wunderground.com/US/CA/San_Francisco.html",
    "history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANFR131",
    "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.778488,-122.408005",
    "nowcast":""
  }
};

const initialState = {
  weather: {},
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return {
        weather: {...sampleWeather},
      };
    case CLEAR_WEATHER:
      return {
        weather: {},
      };
    default:
      return state;
  }
};

export default weather;

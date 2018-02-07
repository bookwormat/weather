export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';
export const ACTIVATE_LOCATION = 'ACTIVATE_LOCATION';
export const CLEAR_LOCATION = 'CLEAR_LOCATION';

export const fetchWeatherAction = (location) => ({
  type: FETCH_WEATHER,
  location,
});

export const fetchWeatherSuccessAction = (result) => ({
  type: FETCH_WEATHER_SUCCESS,
  result,
});

export const fetchWeatherErrorAction = (error) => ({
  type: FETCH_WEATHER_ERROR,
  error,
});

export const activateLocationAction = (location) => ({
  type: ACTIVATE_LOCATION,
  location,
});

export const clearLocationAction = () => ({
  type: CLEAR_LOCATION
});


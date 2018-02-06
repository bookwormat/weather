export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

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

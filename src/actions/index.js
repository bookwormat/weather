export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'

export const fetchWeatherAction = (location) => ({
  type: FETCH_WEATHER,
  payload: location,
});

export const fetchWeatherSuccessAction = (weather) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weather,
});

export const fetchWeatherErrorAction = (error) => ({
  type: FETCH_WEATHER_ERROR,
  error: error,
});

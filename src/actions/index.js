export const LOAD_WEATHER = 'LOAD_WEATHER';
export const CLEAR_WEATHER = 'CLEAR_WEATHER';

export const loadWeather = () => ({
  type: LOAD_WEATHER
});

export const clear = () => ({
  type: CLEAR_WEATHER
});

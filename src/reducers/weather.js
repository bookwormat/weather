import {FETCH_WEATHER, FETCH_WEATHER_CANCEL, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS} from "../actions";

const initialWeatherState = {
  result: null,
  loading: false,
  error: null,
};

const weather = (state = initialWeatherState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        result: null,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        result: null,
        loading: false,
        error: action.error,
      };
    case FETCH_WEATHER_CANCEL:
      return {
        ...state,
        result: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default weather;

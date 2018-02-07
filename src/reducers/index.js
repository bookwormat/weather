import {ACTIVATE_LOCATION, CLEAR_LOCATION, FETCH_WEATHER, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS} from "../actions";

const initialState = {
  locations: [
    {
      region: 'CA',
      city: 'San Francisco',
      id: 1
    },
    {
      region: 'Austria',
      city: 'Vienna',
      id: 2
    },
  ],
  current: null,
  activeLocation: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        current: null,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        current: action.result,
        loading: false,
        error: null,
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        current: null,
        loading: false,
        error: action.error,
      };
    case ACTIVATE_LOCATION:
      return {
        ...state,
        activeLocation: action.location,
      };
    case CLEAR_LOCATION:
      return {
        ...state,
        activeLocation: null,
        current: null
      };
    default:
      return state;
  }
};

export default weatherReducer;

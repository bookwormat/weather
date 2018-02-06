import {FETCH_WEATHER, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS} from "../actions";

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
        current: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        current: null,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default weatherReducer;

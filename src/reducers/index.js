import {
  ACTIVATE_LOCATION, CLEAR_LOCATION, FETCH_WEATHER, FETCH_WEATHER_CANCEL, FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS
} from "../actions";

const initialState = {
  locations: [
    {
      name: 'Waldviertel',
      pws: 'INIEDERS714',
    },
    {
      name: 'Wien',
      pws: 'IWIEN159',
    },
    {
      name: 'Venice, LA',
      pws: 'KCALOSAN697',
    }
  ],
  result: null,
  activeLocation: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
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
    case ACTIVATE_LOCATION:
      return {
        ...state,
        activeLocation: action.location,
      };
    case CLEAR_LOCATION:
      return {
        ...state,
        activeLocation: null,
      };
    default:
      return state;
  }
};

export default weatherReducer;

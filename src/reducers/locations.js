import {ACTIVATE_LOCATION, CLEAR_LOCATION} from "../actions";

const initialState = {
  availableLocations: [
    {
      name: 'Waldviertel',
      pws: 'INIEDERS714',
    },
    {
      name: 'Wien',
      pws: 'IWIEN159',
    },
    {
      name: 'Witsand',
      pws: 'IWESTERN688',
    },
  ],
  activeLocation: null,
};

const locations = (state = initialState, action) => {
  switch (action.type) {
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

export default locations;

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
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default weather;

import { createAsyncThunk } from '@reduxjs/toolkit';

const ALL_ROCKETS = 'space travelers/redux/rockets/ALL_ROCKETS';
const RESERVE_ROCKET = 'space travelers/redux/rockets/RESERVE_ROCKET';

export const rocketsReducer = (state = { status: 'default', rockets: [] }, action) => {
  switch (action.type) {
    case `${ALL_ROCKETS}/fulfilled`:
      return { status: 'succeeded', rockets: action.payload };

    case RESERVE_ROCKET: {
      const newState = state.rockets.map((rocket) => (
        rocket.id === action.id ? { ...rocket, reserved: !rocket.reserved } : rocket));
      return { ...state, rockets: newState };
    }

    default:
      return state;
  }
};

export const fetchRockets = createAsyncThunk(
  ALL_ROCKETS, async () => {
    const data = [];
    await fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((json) => {
        json.forEach((i) => {
          data.push({
            id: i.id,
            name: i.rocket_name,
            type: i.rocket_type,
            flickr_images: i.flickr_images,
            description: i.description,
            reserved: false,
          });
        });
      });
    return data;
  },
);

export const reservation = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

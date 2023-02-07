import { createAsyncThunk } from '@reduxjs/toolkit';

const ALL_ROCKETS = 'space travelers/redux/rockets/ALL_ROCKETS';

export const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${ALL_ROCKETS}/fulfilled`:
      return action.payload;
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
          });
        });
      });
    return data;
  },
);

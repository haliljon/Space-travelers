import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_MISSIONS = 'space_travelers/missions/DISPLAY_MISSIONS';
const JOIN_MISSION = 'space_travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space_travelers/missions/LEAVE_MISSION';
const URL = 'https://api.spacexdata.com/v3/missions';

export const displayMissions = createAsyncThunk(
  DISPLAY_MISSIONS,
  async () => {
    const result = [];
    const response = await fetch(URL);
    const data = await response.json();
    data.forEach((element) => {
      result.push({
        id: element.mission_id,
        name: element.mission_name,
        description: element.description,
      });
    });
    return result;
  },
);

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});
const initialMissionsState = [];

const missionsReducer = (state = initialMissionsState, action) => {
  switch (action.type) {
    case `${DISPLAY_MISSIONS}/fulfilled`:
      return action.payload;
    // case JOIN_MISSION: {
    //   const newState = state.map((mission) => {
    //     if (mission.id !== action.payload.id) {
    //       return mission;
    //     }
    //     return { ...mission, reserved: true };
    //   });
    //   return newState;
    // }
    default:
      return state;
  }
};

export default missionsReducer;

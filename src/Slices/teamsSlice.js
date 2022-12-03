import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myTeam: {},
  otherTeams: [],
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setMyTeam: (state, action) => {
      state.myTeam = action.payload;
      return state;
    },

    setOtherTeams: (state, action) => {
      state.otherTeams = action.payload;
      return state;
    },
  },
});

export const { setMyTeam, setOtherTeams } = teamsSlice.actions;
export default teamsSlice.reducer;

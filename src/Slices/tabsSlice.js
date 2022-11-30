import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'dashboard',
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    // getPlayer: () => {},
    setTab: (state, action) => {
      state.activeTab = action.payload;
      return state;
    },
    // resetUserState: (state) => {
    //   state.user = {};

    //   return state;
    // },
    // changePlayerLocation: () => {},
    // getPlayerNewLocation: () => {},
    // setPlayerNewLocation: (state, action) => {
    //   state.playerDetails.c_location = action.payload;
    //   return state;
    // },
  },
});

export const { setTab } = tabsSlice.actions;

export default tabsSlice.reducer;

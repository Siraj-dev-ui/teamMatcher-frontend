import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getPlayer: () => {},
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    resetUserState: (state) => {
      state.user = {};

      return state;
    },
    // changePlayerLocation: () => {},
    // getPlayerNewLocation: () => {},
    // setPlayerNewLocation: (state, action) => {
    //   state.playerDetails.c_location = action.payload;
    //   return state;
    // },
  },
});

export const { setUser, resetUserState } = userSlice.actions;

export default userSlice.reducer;

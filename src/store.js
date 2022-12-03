import { configureStore } from '@reduxjs/toolkit';

import userSlice from './Slices/userSlice';
import tabsSlice from './Slices/tabsSlice';
import teamsSlice from './Slices/teamsSlice';

const store = configureStore({
  reducer: {
    loginUser: userSlice,
    tabs: tabsSlice,
    teams: teamsSlice,
  },
});

export default store;

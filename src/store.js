import { configureStore } from '@reduxjs/toolkit';

import userSlice from './Slices/userSlice';
import tabsSlice from './Slices/tabsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    tabs: tabsSlice,
  },
});

export default store;

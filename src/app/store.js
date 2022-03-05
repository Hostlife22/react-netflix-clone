import { configureStore } from '@reduxjs/toolkit';
import subscribeReducer from '../features/subscribeSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    subscribe: subscribeReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authSlice from './slices/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

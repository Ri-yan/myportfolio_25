import { configureStore } from '@reduxjs/toolkit';
import staticDataReducer from './slices/staticDataSlice';

export const store = configureStore({
  reducer: {
    staticData: staticDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
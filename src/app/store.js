import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import infoCardReducer from '../features/infoCard/infoCardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    infoCard: infoCardReducer,
  },
});

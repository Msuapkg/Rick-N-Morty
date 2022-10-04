import { configureStore } from '@reduxjs/toolkit';
import infoCardReducer from '../features/infoCardSlice';
import modalReducer from '../features/modalSlice';
import dataModalReducer from '../features/dataModalSlice';

export const store = configureStore({
  reducer: {
    infoCard: infoCardReducer,
    modal: modalReducer,
    dataModal: dataModalReducer,
  },
});

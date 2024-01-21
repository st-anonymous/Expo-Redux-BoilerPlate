import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;

export default store;

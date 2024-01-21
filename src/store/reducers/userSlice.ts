import { createSlice } from '@reduxjs/toolkit';

export type UserType = { userId?: string; isLoggedIn?: boolean };

const initialState: UserType = {};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeUser: () => {
      return {};
    },
  },
});

export const { updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

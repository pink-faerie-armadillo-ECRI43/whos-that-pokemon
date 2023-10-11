import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  verified: false,
  highScore: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.highScore = action.payload.highScore;
      state.verified = true;
    },
    setHighScore: (state, action) => {
      state.highScore = action.payload.highScore;
    },
  },
});

export const { setUser, setHighScore } = userSlice.actions;
export default userSlice.reducer;

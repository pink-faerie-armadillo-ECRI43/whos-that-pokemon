import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: { _id: '', username: '', userHighScore: '' },
  authenticated: true,
  highScores: [
    {
      userName: '',
      userHighScore: '',
    },
  ],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },
    resetUser: (state, action) => {
      const resetUser = { _id: '', username: '', userHighScore: '' };
      state.userInfo = resetUser;
    },
    updateLeaderBoard: (state, action) => {
      state.highScores = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, updateLeaderBoard, resetUser } = pokemonSlice.actions;

export default pokemonSlice.reducer;

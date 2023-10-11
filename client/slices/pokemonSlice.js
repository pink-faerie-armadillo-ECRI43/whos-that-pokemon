import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: { _id: '', username: '', userHighScore: '' },
  highScores: [
    {
      userName: '',
      score: '',
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
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = pokemonSlice.actions;

export default pokemonSlice.reducer;

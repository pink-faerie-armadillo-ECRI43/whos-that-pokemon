import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
  hardmode: false,
  pokemon: {},
};


export const gameSlice = createSlice({

  name: 'game',
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setHardmode: (state, action) => {
      state.hardmode = action.payload;
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

export const { setScore, setHardmode, setPokemon } = gameSlice.actions;
export default gameSlice.reducer;

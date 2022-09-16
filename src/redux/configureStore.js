import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './pokemon/pokemon';
import { pokemonAmountReducer } from './pokemonAmount/pokemonAmount';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonAmount: pokemonAmountReducer,
  },
});

export default store;

import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions

const GET_POKEMON_AMOUNT = 'PokemonGenerations/pokemon/GET_POKEMON_AMOUNT';

export const pokemonAmountReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case 'PokemonGenerations/pokemon/GET_POKEMON_AMOUNT/fulfilled':
      return payload.value;
    default:
      return state;
  }
};

// Action Creators

export const getPokemonAmount = createAsyncThunk(GET_POKEMON_AMOUNT, async () => fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905')
  .then((res) => res.json())
  .then((json) => {
    const pokemonAmount = json.results.length;
    return { value: pokemonAmount };
  }));

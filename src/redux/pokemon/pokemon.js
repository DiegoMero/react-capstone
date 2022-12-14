import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions

const LOAD_POKEMON = 'PokemonGenerations/pokemon/LOAD_POKEMON';

// Reducer

export const pokemonReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case 'PokemonGenerations/pokemon/LOAD_POKEMON/fulfilled':
      return [...payload.value];
    default:
      return state;
  }
};

// Action Creators

export const loadPokemon = createAsyncThunk(LOAD_POKEMON, async (id) => fetch(`https://pokeapi.co/api/v2/generation/${id}/`)
  .then((res) => res.json())
  .then((json) => {
    const pokemons = [];
    json.pokemon_species.forEach((element, index) => {
      const pokemonName = json.pokemon_species[index].name;
      const pokemon = { pokemonName };
      pokemons.push(pokemon);
    });
    return { value: pokemons };
  }));

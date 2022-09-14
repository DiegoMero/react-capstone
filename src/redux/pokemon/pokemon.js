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
    switch (id) {
      case '1':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      case '2':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      case '3':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      case '4':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      case '5':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      case '6':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      case '7':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      case '8':
        json.pokemon_species.forEach((element, index) => {
          const pokemonName = json.pokemon_species[index].name;
          const pokemon = { pokemonName };
          pokemons.push(pokemon);
        });
        return { value: pokemons };
      default:
        return [];
    }
  }));

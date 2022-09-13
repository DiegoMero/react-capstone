import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions

const LOAD_POKEMON_1G = 'PokemonGenerations/pokemon/LOAD_POKEMON_1G';
const LOAD_POKEMON_2G = 'PokemonGenerations/pokemon/LOAD_POKEMON_2G';
const LOAD_POKEMON_3G = 'PokemonGenerations/pokemon/LOAD_POKEMON_3G';
const LOAD_POKEMON_4G = 'PokemonGenerations/pokemon/LOAD_POKEMON_4G';
const LOAD_POKEMON_5G = 'PokemonGenerations/pokemon/LOAD_POKEMON_5G';
const LOAD_POKEMON_6G = 'PokemonGenerations/pokemon/LOAD_POKEMON_6G';
const LOAD_POKEMON_7G = 'PokemonGenerations/pokemon/LOAD_POKEMON_7G';
const LOAD_POKEMON_8G = 'PokemonGenerations/pokemon/LOAD_POKEMON_8G';

// Reducer

export const pokemonReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_1G/fulfilled':
      return [...payload.value];
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_2G/fulfilled':
      return [...payload.value];
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_3G/fulfilled':
      return [...payload.value];
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_4G/fulfilled':
      return [...payload.value];
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_5G/fulfilled':
      return [...payload.value];
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_6G/fulfilled':
      return [...payload.value];
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_7G/fulfilled':
      return [...payload.value];
    case 'PokemonGenerations/pokemon/LOAD_POKEMON_8G/fulfilled':
      return [...payload.value];
    default:
      return state;
  }
};

// Action Creators

export const loadPokemon1G = createAsyncThunk(LOAD_POKEMON_1G, async () => fetch('https://pokeapi.co/api/v2/generation/1/')
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

export const loadPokemon2G = createAsyncThunk(LOAD_POKEMON_2G, async () => fetch('https://pokeapi.co/api/v2/generation/2/')
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

export const loadPokemon3G = createAsyncThunk(LOAD_POKEMON_3G, async () => fetch('https://pokeapi.co/api/v2/generation/3/')
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

export const loadPokemon4G = createAsyncThunk(LOAD_POKEMON_4G, async () => fetch('https://pokeapi.co/api/v2/generation/4/')
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

export const loadPokemon5G = createAsyncThunk(LOAD_POKEMON_5G, async () => fetch('https://pokeapi.co/api/v2/generation/5/')
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

export const loadPokemon6G = createAsyncThunk(LOAD_POKEMON_6G, async () => fetch('https://pokeapi.co/api/v2/generation/6/')
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

export const loadPokemon7G = createAsyncThunk(LOAD_POKEMON_7G, async () => fetch('https://pokeapi.co/api/v2/generation/7/')
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

export const loadPokemon8G = createAsyncThunk(LOAD_POKEMON_8G, async () => fetch('https://pokeapi.co/api/v2/generation/8/')
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

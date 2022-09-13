import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { loadPokemon8G } from '../../redux/pokemon/pokemon';

const Generation8 = () => {
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemon8G());
  }, []);

  return (
    <div>
      <h2>8th Generation</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={uuidv4()}>{pokemon.pokemonName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Generation8;

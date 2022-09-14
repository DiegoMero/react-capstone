import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { loadPokemon } from '../../redux/pokemon/pokemon';

const Generation5 = (props) => {
  const { id } = props;
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemon(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>5th Generation</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={uuidv4()}>{pokemon.pokemonName}</li>
        ))}
      </ul>
    </div>
  );
};

Generation5.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Generation5;

import { useEffect } from 'react';
import '../style/GenerationItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { loadPokemon } from '../../redux/pokemon/pokemon';

const Generation6 = (props) => {
  const { id } = props;
  const pokemonList = useSelector((state) => state.pokemon);
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const kalosAmount = pokemonAmount - 833;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemon(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2 className="region-title">KALOS</h2>
      <h3 className="species-amount">{`${kalosAmount} species`}</h3>
      <h5 className="species-subtitle">SPECIES NAMES:</h5>
      <ul>
        {pokemonList.map((pokemon) => (
          <li className="specie-item" key={uuidv4()}>{pokemon.pokemonName}</li>
        ))}
      </ul>
    </div>
  );
};

Generation6.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Generation6;

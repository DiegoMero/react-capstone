import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import alola from '../assets/alola.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Alola = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const alolaAmount = pokemonAmount - 817;

  return (
    <Link className="alola-link" to="/Generation7">
      <img src={alola} alt="Alola" className="region" />
      <h3 className="region-name">ALOLA</h3>
      <h3 className="region-name">{`${alolaAmount} species`}</h3>
    </Link>
  );
};

export default Alola;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import johto from '../assets/johto.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Johto = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const johtoAmount = pokemonAmount - 805;

  return (
    <Link className="johto-link" to="/Generation2">
      <img src={johto} alt="Johto" className="region" />
      <h3 className="region-name">JOHTO</h3>
      <h3 className="region-name">{`${johtoAmount} species`}</h3>
    </Link>
  );
};

export default Johto;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import hoenn from '../assets/hoenn.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Hoenn = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const hoennAmount = pokemonAmount - 770;

  return (
    <Link className="hoenn-link" to="/Generation3">
      <img src={hoenn} alt="Hoenn" className="region" />
      <h3 className="region-name">HOENN</h3>
      <h3 className="region-name">{`${hoennAmount} species`}</h3>
    </Link>
  );
};

export default Hoenn;

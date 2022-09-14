import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import sinnoh from '../assets/sinnoh.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Sinnoh = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const sinnohAmount = pokemonAmount - 798;

  return (
    <Link className="sinnoh-link" to="/Generation4">
      <img src={sinnoh} alt="Sinnoh" className="region" />
      <h3 className="region-name">SINNOH</h3>
      <h3 className="region-name">{`${sinnohAmount} species`}</h3>
    </Link>
  );
};

export default Sinnoh;

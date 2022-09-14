import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import kanto from '../assets/kanto.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Kanto = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const kantoAmount = pokemonAmount - 754;

  return (
    <Link className="kanto-link" to="/Generation1">
      <img src={kanto} alt="Kanto" className="region" />
      <h3 className="region-name">KANTO</h3>
      <h3 className="region-name">{`${kantoAmount} species`}</h3>
    </Link>
  );
};

export default Kanto;

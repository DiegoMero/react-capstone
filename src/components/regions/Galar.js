import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import galar from '../assets/galar.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Galar = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const galarAmount = pokemonAmount - 809;

  return (
    <Link className="galar-link" to="/Generation8">
      <img src={galar} alt="Galar" className="region" />
      <h3 className="region-name">GALAR</h3>
      <h3 className="region-name">{`${galarAmount} species`}</h3>
    </Link>
  );
};

export default Galar;

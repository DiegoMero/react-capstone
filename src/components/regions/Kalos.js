import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import kalos from '../assets/kalos.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Kalos = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const kalosAmount = pokemonAmount - 833;

  return (
    <Link className="kalos-link" to="/Generation6">
      <img src={kalos} alt="Kalos" className="region" />
      <h3 className="region-name">KALOS</h3>
      <h3 className="region-name">{`${kalosAmount} species`}</h3>
    </Link>
  );
};

export default Kalos;

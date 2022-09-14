import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import teselia from '../assets/teselia.png';
import { getPokemonAmount } from '../../redux/pokemonAmount/pokemonAmount';

const Teselia = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const teseliaAmount = pokemonAmount - 749;

  return (
    <Link className="teselia-link" to="/Generation5">
      <img src={teselia} alt="Teselia" className="region" />
      <h3 className="region-name">TESELIA</h3>
      <h3 className="region-name">{`${teseliaAmount} species`}</h3>
    </Link>
  );
};

export default Teselia;

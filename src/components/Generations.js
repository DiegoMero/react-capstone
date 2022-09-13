import './style/Generations.css';
import { Link } from 'react-router-dom';
import kanto from './assets/kanto.png';
import johto from './assets/johto.png';
import hoenn from './assets/hoenn.png';
import sinnoh from './assets/sinnoh.png';
import teselia from './assets/teselia.png';
import kalos from './assets/kalos.png';
import alola from './assets/alola.png';
import galar from './assets/galar.png';

const Generations = () => (
  <div className="generations-section">
    <h2>Pokemon Generations</h2>
    <div className="generations">
      <Link to="/Generation1">
        <img src={kanto} alt="Kanto" className="region" />
        <h3>1st Generation</h3>
        <h4>Kanto</h4>
      </Link>
      <Link to="/Generation2">
        <img src={johto} alt="Johto" className="region" />
        <h3>2st Generation</h3>
        <h4>Johto</h4>
      </Link>
      <Link to="/Generation3">
        <img src={hoenn} alt="Kanto" className="region" />
        <h3>3rd Generation</h3>
        <h4>Hoenn</h4>
      </Link>
      <Link to="/Generation4">
        <img src={sinnoh} alt="Kanto" className="region" />
        <h3>4th Generation</h3>
        <h4>Sinnoh</h4>
      </Link>
      <Link to="/Generation5">
        <img src={teselia} alt="Kanto" className="region" />
        <h3>5th Generation</h3>
        <h4>Teselia</h4>
      </Link>
      <Link to="/Generations6">
        <img src={kalos} alt="Kanto" className="region" />
        <h3>6th Generation</h3>
        <h4>Kalos</h4>
      </Link>
      <Link to="/Generations7">
        <img src={alola} alt="Kanto" className="region" />
        <h3>7th Generation</h3>
        <h4>Alola</h4>
      </Link>
      <Link to="/Generations8">
        <img src={galar} alt="Kanto" className="region" />
        <h3>8th Generation</h3>
        <h4>Galar</h4>
      </Link>
    </div>
  </div>
);

export default Generations;

/* const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!pokemonList.length) dispatch(loadPokemon1G());
  }, []);

  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <li key={uuidv4()}>{pokemon.pokemonName}</li>
      ))}
    </ul>
  ); */

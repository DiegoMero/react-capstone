import './style/Generations.css';
import Kanto from './regions/Kanto';
import Johto from './regions/Johto';
import Hoenn from './regions/Hoenn';
import Sinnoh from './regions/Sinnoh';
import Teselia from './regions/Teselia';
import Kalos from './regions/Kalos';
import Alola from './regions/Alola';
import Galar from './regions/Galar';

const Generations = () => (
  <div className="generations-section">
    <h1 className="title">Pokemon World</h1>
    <h2 className="pokemon-species">905 Pokemon Species</h2>
    <h4 className="region-stats">SPECIES BY REGION</h4>
    <div className="generations">
      <Kanto />
      <Johto />
      <Hoenn />
      <Sinnoh />
      <Teselia />
      <Kalos />
      <Alola />
      <Galar />
    </div>
  </div>
);

export default Generations;

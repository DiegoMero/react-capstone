/* eslint-disable prefer-destructuring */
import './style/Generations.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonAmount } from '../redux/pokemonAmount/pokemonAmount';
import img1 from './assets/kanto.png';
import img2 from './assets/johto.png';
import img3 from './assets/hoenn.png';
import img4 from './assets/sinnoh.png';
import img5 from './assets/teselia.png';
import img6 from './assets/kalos.png';
import img7 from './assets/alola.png';
import img8 from './assets/galar.png';

const Generations = () => {
  const pokemonAmount = useSelector((state) => state.pokemonAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonAmount());
  }, [dispatch]);

  const regionData = [
    {
      id: '1',
      name: 'KANTO',
      speciesAmount: pokemonAmount - 754,
      image: img1,
    },
    {
      id: '2',
      name: 'JOHTO',
      speciesAmount: pokemonAmount - 805,
      image: img2,
    },
    {
      id: '3',
      name: 'HOENN',
      speciesAmount: pokemonAmount - 770,
      image: img3,
    },
    {
      id: '4',
      name: 'SINNOH',
      speciesAmount: pokemonAmount - 798,
      image: img4,
    },
    {
      id: '5',
      name: 'TESELIA',
      speciesAmount: pokemonAmount - 749,
      image: img5,
    },
    {
      id: '6',
      name: 'KALOS',
      speciesAmount: pokemonAmount - 833,
      image: img6,
    },
    {
      id: '7',
      name: 'ALOLA',
      speciesAmount: pokemonAmount - 817,
      image: img7,
    },
    {
      id: '8',
      name: 'GALAR',
      speciesAmount: pokemonAmount - 809,
      image: img8,
    },
  ];

  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = regionData.filter((element) => {
    if (inputText === '') {
      return (
        <div className="ar-text">There is no item</div>
      );
    }
    return element.name.toLowerCase().includes(inputText);
  });

  return (
    <div className="generations-section">
      <h1 className="title">Pokemon World</h1>
      <h2 className="pokemon-species">905 Pokemon Species</h2>
      <h4 className="region-stats">SPECIES BY REGION</h4>
      <input type="text" id="myInput" placeholder="Search for regions.." onChange={inputHandler} />
      <ul className="generations">
        {filteredData.map((element) => (
          <li key={element.id} className={`region-link${element.id}`}>
            <Link className={`region-link${element.id}`} to={`/Generation${element.id}`}>
              <img src={element.image} alt="Kanto" className="region" />
              <h3 className="region-name">{element.name}</h3>
              <h4 className="region-name">{element.speciesAmount}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Generations;

import './style/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/" className="home">HOME</Link>
    </header>
  );
}

export default Header;

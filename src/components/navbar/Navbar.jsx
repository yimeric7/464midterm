import { NavLink } from 'react-router-dom';
import './Navbar.css';
import YeezusIcon from '../../../public/icons8-yeezus.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active">
        <img src={YeezusIcon} />
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/quotes" activeClassName="active">
        Quotes
      </NavLink>
      <NavLink to="/songs" activeClassName="active">
        Songs
      </NavLink>
    </nav>
  );
};

export default Navbar;

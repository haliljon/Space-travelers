import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
  ];
  return (
    <header>
      <nav className="p-3" style={{ boxShadow: '1px 1px whitesmoke' }}>
        <h1>
          <img src={planet} alt="Logo" />
          {' '}
          Space Travelers&apos; hub
        </h1>
        <ul className="conatiner align-items-center m-0">
          {links.map((link) => (
            <li key={link.id} className="nav-link">
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
          <li>|</li>
          <li className="nav-link"><NavLink to="/myProfile">My Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

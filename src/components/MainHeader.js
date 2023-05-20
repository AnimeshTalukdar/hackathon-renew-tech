import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons';
const MainHeader = () => {
  return (
    <header className="bg-green-800 w-full p-3  h-12">
      <nav className="flex flex-row justify-between text-white px-36">
        <div className="logo">RENEW TECH</div>
        <ul className="flex flex-row w-1/4 justify-between">
          <li>
            <NavLink className={(navData) => {
              if (navData.isActive) return classes.active;
              return "";
            }} to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => {
              if (navData.isActive) return classes.active;
              return "";
            }} to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => {
              if (navData.isActive) return classes.active;
              return "";
            }} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => {
              if (navData.isActive) return classes.active;
              return "";
            }} to="/user"><FontAwesomeIcon icon={faUser} /></NavLink>
          </li>
          <li>
            <NavLink className={(navData) => {
              if (navData.isActive) return classes.active;
              return "";
            }} to="/cart"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

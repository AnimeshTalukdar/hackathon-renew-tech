import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const MainHeader = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeIcon = theme === "dark" ? faSun : faMoon;

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        const isTop = window.scrollY < 100;
        if (isTop) {
          header.classList.remove('fixed');
        } else {
          header.classList.add('fixed');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-green-800 w-full p-3 h-12 ${classes.header}`}>
      <nav className="flex flex-row justify-between text-white px-36">
        <div className="logo">RENEW TECH</div>
        <ul className="flex flex-row w-1/3 justify-between">
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
          <li>
            <button onClick={handleThemeSwitch}>
              <FontAwesomeIcon icon={themeIcon} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;


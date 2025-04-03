import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dropdown, setDropdown] = useState({
    races: false,
    drivers: false,
    countries: false,
  });

  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">F1 Historie</div>
        <div className="nav-links">
          <a href="/">Domů</a>

          <div className="dropdown">
            <button onClick={() => toggleDropdown('races')} className="dropbtn">
              Závody
            </button>
            {dropdown.races && (
              <div className="dropdown-content">
                <a href="/races/2023">Sezóna 2023</a>
                <a href="/races/history">Historické závody</a>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown('drivers')} className="dropbtn">
              Jezdci
            </button>
            {dropdown.drivers && (
              <div className="dropdown-content">
                <a href="/drivers/goat">Nejlepší jezdci</a>
                <a href="/drivers/history">Historie jezdců</a>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown('countries')} className="dropbtn">
              Státy
            </button>
            {dropdown.countries && (
              <div className="dropdown-content">
                <a href="/countries/circuits">Okruhy</a>
                <a href="/countries/history">Závody podle států</a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/digimon-search.css';
import logo from '../images/digimon-logo.png';
import searchIcon from '../images/search.svg';

export default function DigimonHome() {
  const [nameDigimon, setNameDigimon] = useState('');
  const [levelDigimon, setLevelDigimon] = useState('Fresh');
  const [isDisabled, setIsDisabled] = useState(true);

  const history = useHistory();

  useEffect(
    () => (nameDigimon.length > 2 ? setIsDisabled(false) : setIsDisabled(true)),
    [nameDigimon],
  );

  const handleSearchName = () => {
    setNameDigimon('');
    history.push((`/detail/${nameDigimon}`).toLocaleLowerCase());
  };

  const handleSearchLevel = () => {
    history.push((`/level/${levelDigimon}`).toLocaleLowerCase());
  };

  return (
    <div id="input-container">
      <div>
        <button onClick={ () => history.push('/home') } id="btn-header-search">
          <img src={ logo } alt="digivice" id="logo-header-search" />
        </button>
      </div>
      <div id="search-container-name">
        <label htmlFor="search" id="by-name-label">
          <div id="icon-search">
            <img src={ searchIcon } alt="" />
          </div>
          <input
            type="search"
            value={ nameDigimon }
            onChange={ (e) => setNameDigimon(e.target.value) }
            placeholder="Search By Name"
            id="input-name"
          />
          <button
            onClick={ handleSearchName }
            disabled={ isDisabled }
            className="btn-search"
          >
            Search
          </button>
        </label>
      </div>
      <div id="search-container-level">
        <label id="by-level-label">
          <div>By level</div>
          <select onChange={ (e) => setLevelDigimon(e.target.value) } id="select-input">
            <option value="Fresh">Fresh</option>
            <option value="In Training">In Training</option>
            <option value="Rookie">Rookie</option>
            <option value="Champion">Champion</option>
            <option value="Ultimate">Ultimate</option>
            <option value="Mega">Mega</option>
          </select>
          <button
            onClick={ handleSearchLevel }
            className="btn-search"
          >
            Search
          </button>
        </label>
      </div>
    </div>
  );
}

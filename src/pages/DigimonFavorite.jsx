import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardDigimon from '../components/CardDigimon';
import Header from '../components/Header';
import { changeTraining } from '../services/changeTraining';
import '../styles/digimon-favorite.css';

export default function DigimonFavorite() {
  const [dataFavorite, setDataFavorite] = useState([]);
  const [levelDigimon, setLevelDigimon] = useState('All');

  const storageFavorite = JSON.parse(localStorage.getItem('favorites'));

  useEffect(() => {
    setDataFavorite(storageFavorite);
  }, []);

  useEffect(() => {
    if (dataFavorite !== null && storageFavorite !== null) {
      const objectAdjust = changeTraining(storageFavorite);
      setDataFavorite(objectAdjust);
    }
  }, []);

  useEffect(() => {
    if (dataFavorite !== null) {
      if (levelDigimon !== 'All') {
        const filterStorage = storageFavorite
          .filter((storage) => storage.level === levelDigimon);
        setDataFavorite(filterStorage);
      }
      if (levelDigimon === 'All') {
        setDataFavorite(storageFavorite);
      }
    }
  }, [levelDigimon]);

  return (
    <div>
      <Header title="Favorites" redirect={ false } />
      <div>
        <div id="btns-filter">
          <button
            value="All"
            onClick={ (e) => setLevelDigimon(e.target.value) }
          >
            All
          </button>
          <button
            value="Fresh"
            onClick={ (e) => setLevelDigimon(e.target.value) }
          >
            Fresh
          </button>
          <button
            value="In Training"
            onClick={ (e) => setLevelDigimon(e.target.value) }
          >
            In Training
          </button>
          <button
            value="Rookie"
            onClick={ (e) => setLevelDigimon(e.target.value) }
          >
            Rookie
          </button>
          <button
            value="Champion"
            onClick={ (e) => setLevelDigimon(e.target.value) }
          >
            Champion
          </button>
          <button
            value="Ultimate"
            onClick={ (e) => setLevelDigimon(e.target.value) }
          >
            Ultimate
          </button>
          <button
            value="Mega"
            onClick={ (e) => setLevelDigimon(e.target.value) }
          >
            Mega
          </button>
        </div>
        { dataFavorite !== null && storageFavorite !== null ? (
          <div>
            { dataFavorite.length < 1
              ? (
                <p id="sorry-msg">
                  Sorry, you dont have Digimon
                  {' '}
                  <span>{ levelDigimon }</span>
                  {' '}
                  favorited.
                </p>)
              : (
                <div className="digimon-content">
                  { dataFavorite.map((digimon) => (
                    <div key={ digimon.name }>
                      <Link to={ `/detail/${digimon.name}` }>
                        <CardDigimon
                          name={ digimon.name }
                          img={ digimon.img }
                          level={ digimon.level }
                        />
                      </Link>
                    </div>
                  ))}
                </div>)}
          </div>) : ' '}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DigimonSearch from '../components/DigimonSearch';
import { fetchAllDigimon } from '../services/digimonApi';
import Loading from '../components/Loading';
import '../styles/digimon-card.css';
import { changeTraining } from '../services/changeTraining';

export default function DigimonHome() {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDigimonHome = async () => {
      setIsLoading(true);
      const apiAll = await fetchAllDigimon();
      const objectAdjust = changeTraining(apiAll);
      setDataApi(objectAdjust);
      setIsLoading(false);
    };
    fetchDigimonHome();
  }, []);

  useEffect(() => {
    const storageFavorite = JSON.parse(localStorage.getItem('favorites'));
    if (storageFavorite === null) {
      localStorage.setItem('favorites', '[]');
    }
  }, []);

  return (
    <div>
      <DigimonSearch />
      { isLoading ? <Loading /> : (
        <div className="digimon-content">
          { dataApi.map((digimon) => (
            <div key={ digimon.name }>
              <Link to={ `/detail/${digimon.name}` }>
                <div className="digimon-card">
                  <div className="digimon-name">
                    { digimon.name }
                  </div>
                  <img src={ digimon.img } alt={ digimon.name } className="digimon-img" />
                  <div className="digimon-level">
                    {digimon.level}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>)}
    </div>
  );
}

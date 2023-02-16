import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DigimonSearch from '../components/DigimonSearch';
import { fetchDigimonByLevel } from '../services/digimonApi';
import Loading from '../components/Loading';

export default function DigimonLevel() {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const digimonLevelcall = async () => {
      setIsLoading(true);
      const saveApiLevel = await fetchDigimonByLevel(id);

      if (id === 'In Training') {
        const saveTraining = await fetchDigimonByLevel('Training');
        setDataApi(saveTraining);
        const saveInTraining = await fetchDigimonByLevel(id);
        setDataApi([...saveInTraining, ...saveTraining]);
      } else {
        setDataApi(saveApiLevel);
      }

      setIsLoading(false);
    };
    digimonLevelcall();
  }, [id]);

  useEffect(() => {
    if (dataApi !== null) {
      const findTraining = dataApi.some((digimon) => digimon.level === 'Training');
      if (findTraining) {
        const changeValueTraning = dataApi.map((element) => {
          if (element.level === 'Training') {
            return { ...element, level: 'In Training' };
          }
          return element;
        });
        setDataApi(changeValueTraning);
      }
    }
  }, [dataApi]);

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

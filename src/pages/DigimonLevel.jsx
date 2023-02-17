import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DigimonSearch from '../components/DigimonSearch';
import { fetchDigimonByLevel } from '../services/digimonApi';
import { changeTraining } from '../services/changeTraining';
import Loading from '../components/Loading';
import CardDigimon from '../components/CardDigimon';

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
        const objectAdjust = changeTraining(dataApi);
        setDataApi(objectAdjust);
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
              <Link to={ (`/detail/${digimon.name}`).toLocaleLowerCase() }>
                <CardDigimon
                  name={ digimon.name }
                  img={ digimon.img }
                  level={ digimon.level }
                />
              </Link>
            </div>
          ))}
        </div>)}
    </div>
  );
}

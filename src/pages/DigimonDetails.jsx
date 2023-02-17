import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchDigimonByName } from '../services/digimonApi';
import { changeTraining } from '../services/changeTraining';
import { favoriteSome } from '../services/checkFavorite';
import Header from '../components/Header';
import Loading from '../components/Loading';
import emptyHearth from '../images/empty-hearth.svg';
import blueHearth from '../images/blue-hearth.svg';
import '../styles/digimon-detail.css';

const FOURHOUND = 400;
const TWOHOUND = 200;

export default function DigimonDetails() {
  const [dataApi, setDataApi] = useState([]);
  const [imgFavorite, setImgFavorite] = useState(emptyHearth);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const digimonNamecall = async () => {
      const saveApiName = await fetchDigimonByName(id);
      if (saveApiName.status === FOURHOUND) {
        global.alert('This Digimon dosent exist');
        history.push('/home');
      }
      if (saveApiName.status === TWOHOUND) {
        const responseName = await saveApiName.json();
        const objectAdjust = changeTraining(responseName);
        setDataApi(objectAdjust);
      }
    };
    digimonNamecall();
  }, [id, history]);

  const dataObject = dataApi[0];
  const storageFavorite = JSON.parse(localStorage.getItem('favorites'));

  useEffect(() => {
    if (dataObject !== undefined && storageFavorite !== null) {
      const checkFavorite = favoriteSome(storageFavorite, dataObject);
      if (checkFavorite) {
        setImgFavorite(blueHearth);
      }
    }
    if (storageFavorite === null) {
      localStorage.setItem('favorites', '[]');
    }
  }, [dataObject, storageFavorite]);

  const handleFavorite = () => {
    if (storageFavorite !== null) {
      const checkFavorite = favoriteSome(storageFavorite, dataObject);
      if (!checkFavorite) {
        storageFavorite.push(dataObject);
        localStorage.setItem('favorites', JSON.stringify(storageFavorite));
        setImgFavorite(blueHearth);
      }
      if (checkFavorite) {
        const haveDigimon = storageFavorite
          .filter((digimon) => digimon.name !== dataObject.name);
        localStorage.setItem('favorites', JSON.stringify(haveDigimon));
        setImgFavorite(emptyHearth);
      }
    }
  };

  return (
    <div>
      <Header title="Detail" redirect />
      { dataObject === undefined ? <Loading /> : (
        <div id="digimon-content-detail">
          <div id="digimon-card-detail">
            <button onClick={ handleFavorite } id="favorite-detail-btn">
              <img src={ imgFavorite } alt="digimon" />
            </button>
            <div id="digimon-name-detail">
              { dataObject.name }
            </div>
            <img
              src={ dataObject.img }
              alt={ dataObject.name }
              id="digimon-img-detail"
            />
            <div id="digimon-level-detail">
              {dataObject.level}
            </div>
          </div>
        </div>)}
    </div>
  );
}

import React from 'react';
import { useHistory } from 'react-router-dom';
import digivce from '../images/digivice.png';
import '../styles/digimon-initial.css';

export default function DigimonHome() {
  const history = useHistory();

  const handleImgClick = () => {
    history.push('/home');
  };

  return (
    <div>
      <div id="initial-container">
        <div id="initial-title">
          <h1>Welcome to Digimon Search!</h1>
          <p>This application was developed using React.js and consuming the API https://digimon-api.vercel.app/api/digimon</p>
          <h2>Click on Digivice</h2>
        </div>
        <div id="digivice-container">
          <button onClick={ handleImgClick } id="btn-initial">
            <img src={ digivce } alt="digivice" id="img-initial" />
          </button>
        </div>
      </div>
    </div>
  );
}

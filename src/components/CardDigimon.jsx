import PropTypes from 'prop-types';
import React from 'react';
import '../styles/digimon-card.css';

export default function CardDigimon({ name, img, level }) {
  return (
    <div>
      <div className="digimon-card">
        <div className="digimon-name">{ name }</div>
        <img src={ img } alt={ name } className="digimon-img" />
        <div className="digimon-level">{ level }</div>
      </div>
    </div>
  );
}

CardDigimon.propTypes = {
  img: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

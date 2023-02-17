import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/header.css';

export default function Haeder({ title, redirect }) {
  const history = useHistory();

  return (
    <div className="header-container">
      <div className="btn-container">
        <input
          type="button"
          onClick={ () => history.push('/home') }
          id="btn-header"
        />
        <div>Back to Home</div>
      </div>
      <div id="title-header">
        { title }
      </div>
      { redirect ? (
        <div className="btn-container">
          <input
            type="button"
            id="redirect-header"
            onClick={ () => history.push('/favorites') }
          />
          <div id="redirect-text">Favorites</div>
        </div>) : (<div> </div>)}
    </div>
  );
}

Haeder.propTypes = {
  redirect: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

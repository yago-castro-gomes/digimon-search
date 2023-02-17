import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/not-found.css';

export default function NotFound() {
  const history = useHistory();

  return (
    <div id="not-found-container">
      <button onClick={ () => history.push('/home') }>
        Back To Home
      </button>
    </div>
  );
}

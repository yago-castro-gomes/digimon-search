import './App.css';
import { Switch, Route } from 'react-router-dom';
import DigimonLevel from './pages/DigimonLevel';
import DigimonInitial from './pages/DigimonInitial';
import NotFound from './pages/NotFound';
import DigimonHome from './pages/DigimonHome';
import DigimonDetails from './pages/DigimonDetails';
import DigimonFavorite from './pages/DigimonFavorite';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ DigimonInitial } />
      <Route exact path="/home" component={ DigimonHome } />
      <Route exact path="/favorites" component={ DigimonFavorite } />
      <Route exact path="/level/:id" component={ DigimonLevel } />
      <Route exact path="/detail/:id" component={ DigimonDetails } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;

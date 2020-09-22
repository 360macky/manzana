import React, { useState } from 'react';
import '../../styles/home/Banner.css';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Search from '../search/Search';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExploreIcon from '@material-ui/icons/Explore';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__search-dates"
          variant="outlined"
        >
          <EventIcon />
          &nbsp;
          <LocationCityIcon />
          &nbsp;
          {showSearch ? 'Ocultar fechas' : 'Buscar fechas'}&nbsp;
          <ExploreIcon />
          &nbsp;
          <SearchIcon />
        </button>
      </div>
      {showSearch && <Search />}
      <div className="banner__info">
        <h1 className="banner__info--large-slogan">
          Planea nuevas experiencias
        </h1>
        <h3 className="banner__info--small-slogan">
          Busca en distintas ciudades y encuentra un lugar para descubrir más
          sobre el mundo cerca de ti.
        </h3>
        <button
          className="banner__mobile-search-button"
          onClick={() => history.push('/search')}
        >
          Ver habitaciones disponibles
        </button>
      </div>
    </div>
  );
}

export default Banner;

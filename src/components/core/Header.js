import React from 'react';
import '../../styles/core/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__logo-box">
        <Link to="/">
          <h1>Manzana</h1>
        </Link>
      </div>
      <div className="header__options">
        <Link to="/publish">
          <button className="header__option--publish">Publicar oferta</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import '../../styles/core/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h2 className="footer__section-title">Acerca de</h2>
        <ul className="footer__section-links">
          <li>¿Cómo funciona Manzana?</li>
          <li>Prensa</li>
        </ul>
      </div>
      <div className="footer__section">
        <h2 className="footer__section-title">Comunidad</h2>
        <ul className="footer__section-links">
          <li>Tarjetas de regalo</li>
          <li>Invita a tus amigos</li>
        </ul>
      </div>
      <div className="footer__section">
        <h2 className="footer__section-title">Ofertas</h2>
        <ul className="footer__section-links">
          <li>Hospeda tu alojamiento</li>
          <li>Centro de recursos</li>
          <li>Centro de la comunidad</li>
        </ul>
      </div>
      <div className="footer__section">
        <h2 className="footer__section-title">Desarrollo</h2>
        <ul className="footer__section-links">
          <li>
            <a
              href="https://github.com/360macky/manzana/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Licencia
            </a>
          </li>
          <li>
            <a
              href="https://github.com/360macky/manzana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/360macky/manzana/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribuidores
            </a>
          </li>
          <li>
            <a
              href="https://marceloarias.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Marcelo Arias portfolio"
            >
              Autor original
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import '../../styles/home/Card.css';

function Card({ title, image, description, price }) {
  return (
    <div className="card">
      <img
        src={image}
        alt={'Imagen referencial de ' + title}
        title={'Imagen referencial de ' + title}
        className="card__image"
      />
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <h3 className="card__description">{description}</h3>
        { price ? <h4><b>S/{price}</b>/noche</h4> : null }
      </div>
    </div>
  );
}

export default Card;

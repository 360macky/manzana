import React from 'react';
import '../../styles/home/Home.css';
import Card from './Card';
import Banner from './Banner';

function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="home__section">
        <Card
          image="https://i.imgur.com/1Z8pQDZ.jpg"
          title="Experiencias online"
          description="Actividades únicas que podemos hacer juntos, liderados por un mundo de anfitriones."
        />
        <Card
          image="https://i.imgur.com/2fvZ5kI.jpg"
          title="Estancias únicas"
          description="Espacios que son más que un lugar para dormir."
        />
        <Card
          image="https://i.imgur.com/5yFgIij.jpg"
          title="Casas enteras"
          description="Cómodos lugares privados, con espacio para amigos o familiares."
        />
      </section>
      <section className="home__section">
        <Card
          image="https://i.imgur.com/T86q3n1.jpg"
          title="Piso de 3 habitaciones en Santa Rosa"
          description="Super espacio con una vista impresionante de la playa en el distrito de Santa Rosa."
          price={130}
        />
        <Card
          image="https://i.imgur.com/oEZKHPs.jpg"
          title="Ático en Ventanilla"
          description="Disfruta de las increíbles vistas de Ventanilla con este impresionante ático."
          price={350}
        />
        <Card
          image="https://i.imgur.com/DFyjYMe.jpg"
          title="Apartamento 1 dormitorio"
          description="Superhost con excelentes comodidades y un fabuloso complejo comercial cercano."
          price={70}
        />
      </section>
    </div>
  );
}

export default Home;

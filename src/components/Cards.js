import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Dá uma olhada nesses destinos incríveis!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explorar a cascata escondida no interior da selva amazónica'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Viajar pelas ilhas de Bali num cruzeiro privado'
              label='Luxúria'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Navegar no Oceano Atlântico visitando águas inexploradas'
              label='Mistério'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Experimente o futebol no topo das montanhas Himilayan'
              label='Aventura'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Passeio pelo deserto do Saara numa visita guiada de camelo'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
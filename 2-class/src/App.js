import React from 'react';
import './App.css';
import Titulo from './componentes/Titulo/Titulo';
//si nombramos a nuestro componente 'index.js' (adentro de la carpeta exclusiva a ese componente), react asume que ese el componente y no tenemos que nombrarlo en el import:
//import CardsColors from './componentes/CardsColors'
import CardsColors from './componentes/CardsColors/CardsColors'
import CardsVertical from './componentes/CardsVertical/CardsVertical'
import favorites from './favorites.png' //importar una imagen, no pasar la ubicación

//si es un elemento que tiene cierta lógica o que vamos a repetir 
//en varios sitios, se separan en un componente.

function App() {
  return (
    <div className="App">
      <section className={'displayVerticalCentered'}>
          <Titulo text={'Nuestros Cursos y carreras'}></Titulo>
          <div className={'displayHorizontal'}>
            <CardsColors 
              cardTitle={'Frontend Avanzado'}
              contentTitle={'Inscripciones abiertas'}
              content={'Aumentá tu nivel en Frontend aprendiendo React, Redux y NextJS'}
            ></CardsColors>
            <CardsColors 
              cardTitle={'Desarrollo Frontend'}
              contentTitle={'Inscripciones abiertas'}
              content={'Aprendé a crear sitios web desde cero con HTML, CSS, JS, React y Node'}
            ></CardsColors>
          </div>
      </section>

      <section className={'displayVerticalCentered'}>
        <Titulo text={'Nuestra propuesta de valor'}></Titulo>
        <div className={'displayHorizontal'}>
          <CardsVertical 
              icon={favorites}
              contentTitle={'Reviví cada clase'}
              content={'Aumentá tu nivel en Frontend aprendiendo React, Redux y NextJS'}
            ></CardsVertical>
            <CardsVertical 
              icon={favorites}
              contentTitle={'Nunca perdés una clase'}
              content={'Aprendé a crear sitios web desde cero con HTML, CSS, JS, React y Node'}
            ></CardsVertical>
            <CardsVertical 
              icon={favorites}
              contentTitle={'Estás acompañado'}
              content={'Aprendé a crear sitios web desde cero con HTML, CSS, JS, React y Node'}
            ></CardsVertical>
        </div>
      </section>
    </div>
  );
}

export default App;

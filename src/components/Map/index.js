import React from 'react';

import { Mapa } from './styles';

const App = () => (
  <Mapa>
    <iframe
      title="Localização"
      src="<"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.4116334521386!2d-46.804887685681585!3d-22.4511606274142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9025cccca9a97%3A0x58c01d70cd3a21cc!2sR.%20Ant%C3%B4nio%20Cavalaro%2C%20137%20-%20Jardim%20Paraiso%2C%20Itapira%20-%20SP%2C%2013973-474!5e0!3m2!1spt-BR!2sbr!4v1606928173090!5m2!1spt-BR!2sbr">
      width="100%"
      height="345"
      frameBorder="0"
      styles="border:0;"
      allowFullScreen=""
    />
  </Mapa>
);

export default App;

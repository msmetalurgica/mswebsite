import React from 'react';

import { Mapa } from './styles';

const App = () => (
  <Mapa>
    <iframe
      title="Localização"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.253454118339!2d-46.788955785411574!3d-22.45710792762438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c90376f87272e1%3A0x2e6ec872427956af!2sMS%20Metal%C3%BArgica!5e0!3m2!1spt-BR!2sbr!4v1570013998955!5m2!1spt-BR!2sbr"
      width="100%"
      height="345"
      frameBorder="0"
      styles="border:0;"
      allowFullScreen=""
    />
  </Mapa>
);

export default App;

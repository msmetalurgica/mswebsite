import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

const Titulo = (props) => {
  const { title } = props;

  return (
    <Container>
      <Content>
        <h1>{title}</h1>
      </Content>
    </Container>
  );
};

Titulo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Titulo;

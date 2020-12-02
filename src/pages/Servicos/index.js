import React from 'react';

import { Wrapper, Container, Content, DivUL } from './styles';

import Nav from '../../components/Nav';
import Titulo from '../../components/Titulo';
import Galeria from '../../components/Galeria';
import Footer from '../../components/Footer';

// Imagens
import MAQ1 from '../../assets/maq/1.jpeg';
import MAQ2 from '../../assets/maq/2.jpeg';
import MAQ3 from '../../assets/maq/3.jpeg';
import MAQ4 from '../../assets/maq/4.jpeg';
import MAQ5 from '../../assets/maq/5.jpeg';
import MAQ6 from '../../assets/maq/6.jpeg';
import MAQ7 from '../../assets/maq/7.jpeg';
import MAQ8 from '../../assets/maq/8.jpeg';
import MAQ9 from '../../assets/maq/9.jpeg';


const imgs = {
  images: [
    {
      src: MAQ1,
      thumbnail: MAQ1,
      thumbnailWidth: 220,
      thumbnailHeight: 174,
      caption: '-',
    },
    {
      src: MAQ2,
      thumbnail: MAQ2,
      thumbnailWidth: 320,
      thumbnailHeight: 183,
      caption: '-',
    },
   
    {
      src: MAQ4,
      thumbnail: MAQ4,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: '-',
    },
    {
      src: MAQ5,
      thumbnail: MAQ5,
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      caption: '-',
    },
    {
      src: MAQ6,
      thumbnail: MAQ6,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: '-',
    },
    {
      src: MAQ7,
      thumbnail: MAQ7,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: '-',
    },
    {
      src: MAQ8,
      thumbnail: MAQ8,
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      caption: '-',
    },
    {
      src: MAQ9,
      thumbnail: MAQ9,
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      caption: '-',
    },
    {
      src: MAQ3,
      thumbnail: MAQ3,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      caption: '-',
    },
  ], 
};
const Servicos = () => (
  <>
    <Wrapper>
      <Nav />
      <Titulo title="APRESENTAÇÃO DE MÁQUINAS" />
      <Container>
        <Content>
          <h2>NOSSAS MÁQUINAS</h2>
          <DivUL>
            <div>
              <ul>
                <li>
                  ✓ Torno Convencional Romi I30
                  <br />
                  <span>1500 mm de barramento</span>
                  <br />
                  <span>350 mm de diâmetro</span>
                </li>
                <li>
                  ✓ Torno Convencional IMOR
                  <br />
                  <span>1500 mm de barramento</span>
                  <br />
                  <span>750 mm de diâmetro</span>
                </li>
                <li>
                  ✓ Torno CNC Romi Centur 30D
                  <br />
                  <span>1000 mm de barramento</span>
                  <br />
                  <span>250 mm de diâmetro</span>
                </li>
                <li>
                  ✓ Torno CNC Romi ECN 40
                  <br />
                  
                  <span>1500 mm de barramento</span>
                  <br />
                  <span>550 mm de diâmetro</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>✓ Centro Usinagem ROMI Polares(500mm x 400mm de Mesa)</li>
                <li>✓ Plaina chaveteira FAIR (700mm de curso)</li>
                <li>✓ Furadeira Convencional KM21</li>
                <li>✓ Solda MIG</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>✓ Policorte</li>
                <li>✓ Serra de Fita Mecânica</li>
                <li>✓ Serra de Fita Automática”</li>
              </ul>
            </div>
          </DivUL>
          <div
            style={{
              minHeight: '1px',
              width: '100%',
              overflow: 'auto',
            }}
          >
            <h2>FOTOS</h2>
            <Galeria images={imgs.images} />
          </div>
        </Content>
      </Container>
    </Wrapper>
    <Footer />
  </>
);

export default Servicos;

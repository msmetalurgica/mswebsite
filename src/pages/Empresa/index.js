import React from "react";

import { Wrapper, Container, Content } from "./styles";

import Nav from "../../components/Nav";
import Titulo from "../../components/Titulo";
import Galeria from '../../components/Galeria';
import Footer from "../../components/Footer";

//Imagens
import EMP1 from '../../assets/emp/1.jpeg';

const imgs = {
  images: ([
    {
      src: EMP1,
      thumbnail: EMP1,
      thumbnailWidth: 1200,
      thumbnailHeight: 800,
      caption: "Empresa"
    },
  ])
};

const Empresa = () => (
  <>
    <Wrapper>
      <Nav />
      <Titulo title="SOBRE A MS METALÚRGICA" />
      <Container>
        <Content>
          <div>
            <h2>APRESENTAÇÃO</h2>
            <p>
              MS Metalúrgica é uma empresa de usinagem e peças agrícolas
              localizada na cidade de Itapira, Estado de São Paulo.
          </p>
            <p>
              Empresa que foi criada no ano de 2018. Iniciou suas atividades na
              área na fabricação de peças agrícolas e serviços de usinagem para
              terceiros.
          </p>
            <p>
              Somos uma nova empresa de usinagem no mercado nacional, porém temos
              funcionários qualificados e máquinas apropriadas para diversos tipos
              de usinagem.
          </p>
            <p>
              Nos comprometemos totalmente ao prazo de entrega combinado, preço
              acessível, qualidade do serviço e também ao atendimento/assistência.
          </p>
            <p>
              Confie em nosso trabalho e você terá o serviço/produto de excelente
              qualidade.
          </p>
          </div>
          <div>
            <h2>EMPRESA</h2>
            <Galeria images={imgs.images} />
          </div>
        </Content>
      </Container>
    </Wrapper>
    <Footer />
  </>
);

export default Empresa;

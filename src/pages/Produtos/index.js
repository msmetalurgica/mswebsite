import React from "react";

import { Wrapper, Container, Content } from "./styles";

import Nav from "../../components/Nav";
import Titulo from "../../components/Titulo";
import Produto from "../../components/Produto";
import Footer from "../../components/Footer";

// IMAGES
import PROD1 from "../../assets/prod/porca-da-carroca.png";
import PROD2 from "../../assets/prod/cubo-roda.png";
import PROD3 from "../../assets/prod/macaco.png";
import PROD4 from "../../assets/prod/parafuso-quadrado.png";
import PROD5 from "../../assets/prod/pino-carreta.png";
import PROD6 from "../../assets/prod/pino-engate.png";
import PROD7 from "../../assets/prod/polia.png";
import PROD8 from "../../assets/prod/porca.png";
import PROD9 from "../../assets/prod/prisioneiro.png";
import PROD10 from "../../assets/prod/aneis.png";
import PROD11 from "../../assets/prod/chumbador-m16.png";
import PROD12 from "../../assets/prod/solda.png";

import SPROD1 from "../../assets/prod/porca-da-carroca-small.png";
import SPROD2 from "../../assets/prod/cubo-roda-small.png";
import SPROD3 from "../../assets/prod/macaco-small.png";
import SPROD4 from "../../assets/prod/parafuso-quadrado-small.png";
import SPROD5 from "../../assets/prod/pino-carreta-small.png";
import SPROD6 from "../../assets/prod/pino-engate-small.png";
import SPROD7 from "../../assets/prod/polia-small.png";
import SPROD8 from "../../assets/prod/porca-small.png";
import SPROD9 from "../../assets/prod/prisioneiro-small.png";
import SPROD10 from "../../assets/prod/aneis-small.png";
import SPROD11 from "../../assets/prod/chumbador-m16-small.png";
import SPROD12 from "../../assets/prod/solda-small.png";

const Produtos = () => {
  const produtos = {
    produto: [
      {
        id: 0,
        title: 'PORCA DA CARROCERIA 3/4" 5/8"',
        small: SPROD1,
        large: PROD1,
        desc:
          'Porca da carroceria produzida na medida 3/4" ou 5/8" galvanizada.'
      },
      {
        id: 1,
        title: "CUBO DE RODA AGRÍCOLA",
        small: SPROD2,
        large: PROD2,
        desc:
          "Cubo de roda agrícola produzida para carretas de 4 ou 6 toneladas, com a opção de 5 ou 6 furos."
      },
      {
        id: 2,
        title: "MACACO AGRÍCOLA",
        small: SPROD3,
        large: PROD3,
        desc:
          "Macaco para carretas agrícolas que suporta até 4 toneladas, montado com rolamento axial."
      },
      {
        id: 3,
        title: "PARAFUSO CABEÇA QUADRADA",
        small: SPROD4,
        large: PROD4,
        desc: "Parafuso cabeça quadrada com medidas a desejo do cliente."
      },
      {
        id: 4,
        title: "PINO CARRETA",
        small: SPROD5,
        large: PROD5,
        desc: "Pinos produzidos com medidas de acordo a necessidade do cliente."
      },
      {
        id: 5,
        title: "PINO ENGATE",
        small: SPROD6,
        large: PROD6,
        desc: "Pinos produzidos com medidas de acordo a necessidade do cliente."
      },
      {
        id: 6,
        title: "POLIA",
        small: SPROD7,
        large: PROD7,
        desc:
          "Polias produzidas com medidas de acordo a necessidade do cliente."
      },
      {
        id: 7,
        title: "PORCA SEXTAVADA",
        small: SPROD8,
        large: PROD8,
        desc: "Porca sextavada (M16, M20, M24, M27, M33, M39) 1020 ou 304."
      },
      {
        id: 8,
        title: "PRISIONEIRO",
        small: SPROD9,
        large: PROD9,
        desc:
          "Prisioneiros produzidos com medidas de acordo a necessidade do cliente."
      },
      {
        id: 9,
        title: "ANÉIS",
        small: SPROD10,
        large: PROD10,
        desc: "Anéis produzidos com medidas de acordo a necessidade do cliente."
      },
      {
        id: 10,
        title: "CHUMBADOR M12/M16",
        small: SPROD11,
        large: PROD11,
        desc: "Chumbador produzido com as roscas M12 ou M16."
      },
      {
        id: 11,
        title: "SERVIÇOS DE SOLDA",
        small: SPROD12,
        large: PROD12,
        desc: "Serviços de solda com qualidade."
      }
    ]
  };

  return (
    <>
      <Wrapper>
        <Nav />
        <Titulo title="NOSSOS PRODUTOS" />
        <Container>
          <Content>
            {produtos.produto.map(p => (
              <Produto
                key={p.id}
                title={p.title}
                simg={p.small}
                limg={p.large}
                desc={p.desc}
              />
            ))}
          </Content>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Produtos;

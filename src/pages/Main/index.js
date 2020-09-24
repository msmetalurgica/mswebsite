import React from "react";

// CSS
import { Wrapper, Container, Item } from "./styles";

// Images
import FOCO from "../../assets/foco.png";
import OBJETIVO from "../../assets/objetivo.png";
import SATISFACAO from "../../assets/satisfacao.png";

// Components
import Nav from "../../components/Nav";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";

const Main = () => (
  <Wrapper>
    <Nav />
    <Slider />
    <Container>
      <Item>
        <img src={FOCO} alt="Foco" />
      </Item>
      <Item>
        <img src={OBJETIVO} alt="Objetivo" />
      </Item>
      <Item>
        <img src={SATISFACAO} alt="Satisfação" />
      </Item>
    </Container>
    <Footer />
  </Wrapper>
);

export default Main;

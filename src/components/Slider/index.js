import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Assets
import img1 from "../../assets/carousel/1.png";
import img3 from "../../assets/carousel/3.png";
import { DivSlider } from "./styles";

const Slider = () => (
  <DivSlider>
    <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
    </Carousel>
  </DivSlider>
);

export default Slider;

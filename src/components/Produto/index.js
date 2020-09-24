import React from "react";
import ModalImage from "react-modal-image";

// CSS
import { DivProduto, Div2 } from "./styles";

const Produto = props => {
  const { title, simg, limg, desc } = props;

  return (
    <DivProduto>
      <Div2>
        <h2>{title}</h2>
        <ModalImage
          hideDownload
          showRotate
          small={simg}
          large={limg}
          alt={title}
        />
        <p>{desc}</p>
      </Div2>
    </DivProduto>
  );
};

export default Produto;

import styled from "styled-components";

export const DivProduto = styled.div`
  flex-grow: 1;
  width: 33%;
  padding: 5px;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    color: #b71c1c;
    padding: 0 0 15px 0;

    @media only screen and (max-width: 600px) {
      padding-top: 10px;
    }
  }

  p {
    font-size: 15px;
    text-align: justify;
    font-weight: normal;
    padding: 5px 0 15px 0;
  }
`;

export const Div2 = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #ccc;
`;

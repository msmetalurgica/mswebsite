import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  padding: 5px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    width: auto;
    max-width: 600px;
    min-width: 300px;
    min-height: 300px;

    img {
      min-width: 300px;
      min-height: 300px;
    }
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
    font-weight: bold;
    text-align: justify;
    padding: 0 0 10px 0;
  }
`;

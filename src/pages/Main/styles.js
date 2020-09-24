import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Item = styled.div`
  border-radius: 10px;
  width: auto;
  max-height: 270px;
  max-width: 360px;
  margin: 0 20px;
  text-align: center;
  font-size: 1.5em;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 10px 0;
  }

  img {
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 8px grey;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

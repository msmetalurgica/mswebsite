import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  padding: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  p {
    font-size: 15px;
    font-weight: bold;
    padding: 0 0 10px 0;
  }
`;
